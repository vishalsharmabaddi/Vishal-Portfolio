const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081'

export async function sendContactMessage(formData) {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })

  const data = await response.json()

  if (!response.ok) {
    const message = Object.values(data)[0] || 'Something went wrong. Please try again.'
    throw new Error(message)
  }

  return data
}
