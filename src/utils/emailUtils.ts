// Utility functions for email handling with anti-scraping protection
import { sendEmailViaEmailJS, isEmailJSConfigured } from './emailjsConfig'

/**
 * Constructs the protected email address using obfuscation techniques
 * @returns The email address for contact
 */
export const getProtectedEmail = (): string => {
  // Split the email into parts to avoid easy scraping
  const user = ['i', 'g', 'r', 'i', 't', 'o', 'e', 'e', 'r'].join('')
  const domain = ['g', 'm', 'a', 'i', 'l'].join('')
  const tld = ['c', 'o', 'm'].join('')

  return `${user}@${domain}.${tld}`
}

/**
 * Creates a mailto link with subject and body
 * @param email The email address
 * @param subject The email subject
 * @param body The email body
 * @returns A mailto URL
 */
export const createMailtoLink = (email: string, subject: string, body: string): string => {
  const encodedSubject = encodeURIComponent(subject)
  const encodedBody = encodeURIComponent(body)
  return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`
}

/**
 * Formats contact form data into an email body
 * @param formData The form data object
 * @returns Formatted email body string
 */
export const formatEmailBody = (formData: {
  organizationName: string
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}): string => {
  return `Hej!

En ny förfrågan har skickats från Konzulterna webbplats:

Organisationsnummer/Personnummer: ${formData.organizationName}
Förnamn: ${formData.firstName}
Efternamn: ${formData.lastName}
E-post: ${formData.email}
Telefonnummer: ${formData.phone}

Meddelande:
${formData.message}

Med vänliga hälsningar,
Konzulterna webbplats

---
Skickat från: ${window.location.origin}
Tidpunkt: ${new Date().toLocaleString('sv-SE')}
`
}

/**
 * Handles email sending with fallback options
 * First tries EmailJS (if configured), then falls back to mailto
 * @param formData The contact form data
 * @returns Promise<boolean> indicating success
 */
export const sendEmailViaMailto = async (formData: {
  organizationName: string
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}): Promise<boolean> => {
  try {
    // Try EmailJS first if configured
    if (isEmailJSConfigured()) {
      const emailJSSuccess = await sendEmailViaEmailJS(formData)
      if (emailJSSuccess) {
        return true
      }
      console.log('EmailJS failed, falling back to mailto')
    }

    // Fallback to mailto
    const email = getProtectedEmail()
    const subject = 'Förfrågan från Konzulterna webbplats'
    const body = formatEmailBody(formData)

    const mailtoLink = createMailtoLink(email, subject, body)
    window.location.href = mailtoLink

    return true
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}
