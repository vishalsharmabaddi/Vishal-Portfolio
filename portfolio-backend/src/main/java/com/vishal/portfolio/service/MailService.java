package com.vishal.portfolio.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vishal.portfolio.dto.ContactRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;
import java.util.Map;

@Service
public class MailService {

    private static final URI RESEND_ENDPOINT = URI.create("https://api.resend.com/emails");

    private final HttpClient httpClient = HttpClient.newHttpClient();
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Value("${resend.api-key}")
    private String apiKey;

    @Value("${resend.recipient-email}")
    private String recipientEmail;

    public void sendContactMail(ContactRequest request) {
        String body =
                "Name: " + request.getName() + "\n" +
                "Email: " + request.getEmail() + "\n" +
                "Phone: " + (request.getPhone() == null || request.getPhone().isBlank() ? "Not provided" : request.getPhone()) + "\n\n" +
                "Message:\n" + request.getMessage();

        Map<String, Object> payload = Map.of(
                "from", "Portfolio Contact <onboarding@resend.dev>",
                "to", List.of(recipientEmail),
                "reply_to", request.getEmail(),
                "subject", "Portfolio Contact: " + request.getSubject(),
                "text", body
        );

        try {
            HttpRequest httpRequest = HttpRequest.newBuilder()
                    .uri(RESEND_ENDPOINT)
                    .header("Authorization", "Bearer " + apiKey)
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(objectMapper.writeValueAsString(payload)))
                    .build();

            HttpResponse<String> response = httpClient.send(httpRequest, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() >= 400) {
                throw new RuntimeException("Resend API error " + response.statusCode() + ": " + response.body());
            }
        } catch (RuntimeException e) {
            throw e;
        } catch (Exception e) {
            throw new RuntimeException("Failed to send email via Resend", e);
        }
    }
}
