import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, interest, message, type } = body

    // 1. Create Nodemailer transporter using SMTP configs
    const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com'
    const smtpPort = parseInt(process.env.SMTP_PORT || '465')
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (!smtpUser || !smtpPass) {
      console.warn('SMTP credentials not configured in environment variables. Logging submission to console.')
      console.log('Received contact submission data:', body)
      return NextResponse.json({
        success: true,
        warning: 'SMTP credentials missing on server. Submission logged in server console.',
        data: body,
      })
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    // 2. Setup email options to be delivered to both target addresses
    const mailOptions = {
      from: `"Digitacurve Website" <${smtpUser}>`,
      to: 'sale@digitacurve.com, digitacurve@gmail.com',
      replyTo: email,
      subject: `New Lead: ${interest || type || 'General Inquiry'} - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px; background-color: #ffffff; color: #333333;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px; margin-top: 0;">New Digitacurve Lead Received</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666666; width: 150px;">Name:</td>
              <td style="padding: 8px 0; color: #111111;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666666;">Email:</td>
              <td style="padding: 8px 0; color: #111111;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666666;">Phone:</td>
              <td style="padding: 8px 0; color: #111111;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666666;">Company:</td>
              <td style="padding: 8px 0; color: #111111;">${company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666666;">Interest:</td>
              <td style="padding: 8px 0; color: #111111; font-weight: bold;">${interest || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666666;">Section/Type:</td>
              <td style="padding: 8px 0; color: #111111; text-transform: capitalize;">${type || 'General'}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; font-weight: bold; color: #666666; font-size: 13px; margin-bottom: 8px;">Client Message:</p>
            <p style="margin: 0; color: #111111; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 11px; color: #999999; margin-top: 25px; text-align: center; border-top: 1px solid #f3f4f6; padding-top: 15px;">
            This email was automatically generated from the contact form on digitacurve.com.
          </p>
        </div>
      `,
    }

    // 3. Send email via SMTP
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Message sent successfully!' })
  } catch (error: any) {
    console.error('Nodemailer Error:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Server error sending message' },
      { status: 500 }
    )
  }
}
