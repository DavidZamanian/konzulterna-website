# Email Setup Documentation

This project includes both basic mailto functionality and advanced EmailJS integration for sending emails from the contact form.

## Current Implementation

The contact form currently uses the `mailto:` protocol, which opens the user's default email client with a pre-filled email to `igritoeer@gmail.com`.

### Email Protection

The email address is protected against scraping using several techniques:

1. **String Obfuscation**: The email is constructed from separate character arrays
2. **Runtime Construction**: The email is built at runtime, not stored as a plain string
3. **Function Encapsulation**: The email construction is wrapped in utility functions

## Setting Up EmailJS (Optional Advanced Feature)

For a more seamless user experience, you can set up EmailJS to send emails directly without opening the user's email client.

### Step 1: Create EmailJS Account

1. Go to [https://emailjs.com](https://emailjs.com)
2. Sign up for a free account
3. Note down your **Public Key** from the dashboard

### Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

### Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: Förfrågan från Konzulterna webbplats

Hej!

En ny förfrågan har skickats från webbplatsen:

Organisationsnummer/Personnummer: {{organization_number}}
Förnamn: {{from_name}}
E-post: {{from_email}}
Telefonnummer: {{phone}}

Meddelande:
{{message}}

Med vänliga hälsningar,
{{from_name}}

---
Skickat från Konzulterna webbplats
```

4. Note down your **Template ID**

### Step 4: Configure the Application

1. Open `src/utils/emailjsConfig.ts`
2. Replace the placeholder values:
   ```typescript
   const EMAILJS_CONFIG = {
     PUBLIC_KEY: 'your_actual_public_key',
     SERVICE_ID: 'your_actual_service_id',
     TEMPLATE_ID: 'your_actual_template_id',
   }
   ```

### Step 5: Initialize EmailJS

The EmailJS initialization is already included in the app. Once you configure the values above, the form will automatically use EmailJS as the primary method and fall back to mailto if needed.

## Current Email Flow

1. **User submits form** → Form validation
2. **Try EmailJS** → If configured and working
3. **Fallback to mailto** → If EmailJS fails or not configured
4. **Show appropriate message** → Success or error feedback

## Benefits of EmailJS

- **Seamless UX**: No need to open external email client
- **Better conversion**: Users more likely to complete the process
- **Analytics**: Track email sends and deliveries
- **Templates**: Consistent email formatting
- **Spam protection**: Reduces risk of emails being marked as spam

## Security Considerations

- The email address `igritoeer@gmail.com` is obfuscated in the source code
- EmailJS keeps your actual email credentials secure
- No sensitive information is stored in the frontend code
- All email sending happens through secure HTTPS connections

## Testing

To test the email functionality:

1. Fill out the contact form
2. If EmailJS is configured: Email should be sent directly
3. If not configured: Default email client opens with pre-filled email
4. Check the browser console for any error messages

## Troubleshooting

**EmailJS not working?**

- Check your Public Key, Service ID, and Template ID
- Verify your email service is properly connected
- Check the browser console for error messages
- Make sure your EmailJS account is active

**Mailto not working?**

- Check if the user has a default email client configured
- The email address construction might have issues
- Check browser console for JavaScript errors
