import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, interest, message, type } = body

    // Send the contact form submission directly to FormSubmit AJAX API
    const formSubmitUrl = 'https://formsubmit.co/ajax/sale@digitacurve.com'

    const response = await fetch(formSubmitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        'Name': `${firstName} ${lastName}`,
        'Email': email,
        'Phone': phone || 'N/A',
        'Company': company || 'N/A',
        'Interest': interest || 'N/A',
        'Inquiry Type': type || 'General Inquiry',
        'Message': message,
        '_cc': 'digitacurve@gmail.com',
        '_subject': `New Contact Lead: ${interest || type || 'General'} - ${firstName} ${lastName}`,
      }),
    })

    const data = await response.json()

    if (response.ok && data.success === 'true') {
      return NextResponse.json({ success: true, message: 'Message sent successfully!' })
    } else {
      console.error('FormSubmit Error Response:', data)
      return NextResponse.json(
        { success: false, error: data.message || 'Failed to submit form' },
        { status: response.status }
      )
    }
  } catch (error: any) {
    console.error('FormSubmit Integration Error:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Server error sending message' },
      { status: 500 }
    )
  }
}
