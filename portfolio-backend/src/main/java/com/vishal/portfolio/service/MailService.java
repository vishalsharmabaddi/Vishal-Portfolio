package com.vishal.portfolio.service;

import com.vishal.portfolio.dto.ContactRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String recipientEmail;

    public MailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactMail(ContactRequest request) {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(recipientEmail);
        mail.setFrom(recipientEmail);
        mail.setReplyTo(request.getEmail());
        mail.setSubject("Portfolio Contact: " + request.getSubject());
        mail.setText(
                "Name: " + request.getName() + "\n" +
                "Email: " + request.getEmail() + "\n" +
                "Phone: " + (request.getPhone() == null || request.getPhone().isBlank() ? "Not provided" : request.getPhone()) + "\n\n" +
                "Message:\n" + request.getMessage()
        );
        mailSender.send(mail);
    }
}
