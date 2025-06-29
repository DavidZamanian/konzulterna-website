import emailjs from '@emailjs/browser'

// EmailJS Configuration
// To use this, you need to:
// 1. Sign up at https://emailjs.com
// 2. Create a service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your public key, service ID, and template ID
// 5. Replace the placeholders below with your actual IDs

const EMAILJS_CONFIG = {
  // Replace with your actual EmailJS public key
  PUBLIC_KEY: 'YOUR_EMAILJS_PUBLIC_KEY',
  // Replace with your actual service ID
  SERVICE_ID: 'YOUR_SERVICE_ID',
  // Replace with your actual template ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
}

/**
 * Initialize EmailJS (call this once in your app)
 */
export const initEmailJS = (): void => {
  if (EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY') {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
  }
}

/**
 * Send email via EmailJS
 * @param formData Contact form data
 * @returns Promise<boolean> indicating success
 */
export const sendEmailViaEmailJS = async (formData: {
  organizationName: string
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}): Promise<boolean> => {
  // Check if EmailJS is properly configured
  if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY') {
    console.warn('EmailJS not configured. Please set up your EmailJS credentials.')
    return false
  }

  try {
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`.trim(),
      from_email: formData.email,
      organization_number: formData.organizationName,
      phone: formData.phone,
      message: formData.message,
      to_email: 'igritoeer@gmail.com', // This will be hidden in the template
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    )

    console.log('Email sent successfully:', response)
    return response.status === 200
  } catch (error) {
    console.error('EmailJS error:', error)
    return false
  }
}

/**
 * Check if EmailJS is properly configured
 * @returns boolean indicating if EmailJS is ready to use
 */
export const isEmailJSConfigured = (): boolean => {
  return (
    EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY' &&
    EMAILJS_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID' &&
    EMAILJS_CONFIG.TEMPLATE_ID !== 'YOUR_TEMPLATE_ID'
  )
}
