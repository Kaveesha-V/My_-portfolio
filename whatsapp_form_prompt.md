# 📩 WhatsApp Direct Contact Form Integration Prompt & Implementation Guide

This guide contains the prompt and architectural blueprints to forward contact form submissions from your website directly to your personal WhatsApp inbox without opening the WhatsApp web/app on the visitor's device.

---

## 🎯 The AI Prompt

Copy and paste the prompt below into your coding assistant (e.g. ChatGPT, Claude, or Antigravity AI):

```text
I want to update my website's contact form submission handling so that when a visitor fills out the form (Name, Email, Subject, Message) and clicks "Send Message", the message is delivered directly to my WhatsApp number in the background without opening the WhatsApp application or redirecting the user's browser.

Requirements:

1. Client-Side (Frontend React / JS):
   - Intercept the form submission event (`e.preventDefault()`).
   - Extract input fields: Name, Email, Subject, and Message.
   - Send the data via an HTTP POST request (`fetch` or `axios`) to my backend API endpoint (`/api/contact`).
   - Show a clean "Message sent successfully!" toast / popup notification upon completion.
   - Clear/reset the form input fields.
   - Do NOT redirect or open `https://wa.me/` URLs on the client browser.

2. Server-Side / Backend Service (Node.js / Express or Next.js API Route / Supabase Edge Function):
   - Create an API endpoint (`POST /api/contact`) that accepts JSON `{ name, email, subject, message }`.
   - Format the incoming payload into a structured WhatsApp message string:
     --------------------------------------------------
     📩 *New Portfolio Contact Form Message*
     👤 *Name:* <Name>
     📧 *Email:* <Email>
     📌 *Subject:* <Subject>
     📝 *Message:*
     <Message>
     --------------------------------------------------
   - Dispatch an HTTP POST request to a WhatsApp gateway service (e.g., Meta WhatsApp Cloud API, Twilio for WhatsApp, or CallMeBot API) using server-side environment variables (`WA_API_KEY`, `WA_PHONE_NUMBER`).
   - Return `{ success: true, message: "Message sent successfully!" }` back to the frontend client.

Please provide:
1. The backend server API route code (Node.js / Express or Next.js API route).
2. The environment variables template (`.env`).
3. The React frontend form submission handler function.
```

---

## 🏗️ Architectural Overview

| Component | Role & Function |
| :--- | :--- |
| **Frontend Contact Form** | Captures input fields (`Name`, `Email`, `Subject`, `Message`), triggers AJAX `fetch`, displays a success toast/popup, and resets form. |
| **Backend Server / API Endpoint** | Holds secure API credentials, formats the WhatsApp text message, and calls the WhatsApp API service. |
| **WhatsApp Service Gateway** | Meta WhatsApp Business API / Twilio / CallMeBot — delivers message instantly to your phone inbox. |

---

## 🛠️ Code Reference & Blueprint

### 1. Server-Side Endpoint (Node.js / Express Example)

```javascript
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields.' });
  }

  // Format message text with bold WhatsApp markdown
  const formattedText = `📩 *New Contact Message*\n\n` +
                        `👤 *Name:* ${name}\n` +
                        `📧 *Email:* ${email}\n` +
                        `📌 *Subject:* ${subject || 'General Inquiry'}\n\n` +
                        `📝 *Message:*\n${message}`;

  try {
    // CallMeBot Free API or Meta WhatsApp Business API
    // CallMeBot Example:
    const phone = process.env.YOUR_PERSONAL_WA_NUMBER;
    const apiKey = process.env.CALLMEBOT_API_KEY;
    const encodedMessage = encodeURIComponent(formattedText);

    await axios.get(`https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodedMessage}&apikey=${apiKey}`);

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('WhatsApp API Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to dispatch WhatsApp message.' });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
```

### 2. `.env` Environment Variables Template

```env
YOUR_PERSONAL_WA_NUMBER=+94765502806
CALLMEBOT_API_KEY=your_callmebot_apikey_here
# Or Meta WhatsApp Business Credentials
# WA_PHONE_NUMBER_ID=123456789
# WA_ACCESS_TOKEN=eaab...
```

### 3. Frontend Submit Handler (React)

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const payload = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (result.success) {
      // Show user success toast / alert
      alert('Message sent successfully!');
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert(result.message || 'Failed to send message.');
    }
  } catch (err) {
    alert('Network error. Please try again later.');
  }
};
```
