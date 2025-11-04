import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend only if API key is available
let resend: Resend | null = null;
try {
  if (process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
} catch (error) {
  console.error("Failed to initialize Resend:", error);
}

export async function GET() {
  return NextResponse.json(
    { 
      error: "Method not allowed",
      message: "This endpoint only accepts POST requests. Please submit your quote request data via POST."
    },
    { status: 405 }
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, address, details } = body

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Phone validation (basic)
    const phoneRegex = /^[\d\s\-\(\)]+$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    // Log the quote request
    console.log('Quote Request Submission:', {
      name,
      email,
      phone,
      service,
      address: address || 'Not provided',
      details: details || 'None',
      timestamp: new Date().toISOString()
    })

    // Send email via Resend (if configured)
    if (resend) {
      try {
        await resend.emails.send({
          from: 'Washly Washing Services <onboarding@resend.dev>',
          to: [process.env.CONTACT_EMAIL || 'vsbharaniram5@gmail.com'],
          subject: `New Quote Request from ${name} - ${service}`,
          html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #004C97 0%, #0066CC 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #004C97; }
                .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
                .service-badge { display: inline-block; background: #FFD700; color: #004C97; padding: 8px 16px; border-radius: 20px; font-weight: bold; margin: 10px 0; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2 style="margin: 0;">New Quote Request</h2>
                  <p style="margin: 5px 0 0 0; opacity: 0.9;">Washly Washing Services</p>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Service Requested:</div>
                    <div class="service-badge">${service}</div>
                  </div>
                  <div class="field">
                    <div class="label">Name:</div>
                    <div class="value">${name}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email:</div>
                    <div class="value">${email}</div>
                  </div>
                  <div class="field">
                    <div class="label">Phone:</div>
                    <div class="value">${phone}</div>
                  </div>
                  ${address ? `
                  <div class="field">
                    <div class="label">Service Address:</div>
                    <div class="value">${address}</div>
                  </div>
                  ` : ''}
                  ${details ? `
                  <div class="field">
                    <div class="label">Additional Details:</div>
                    <div class="value">${details}</div>
                  </div>
                  ` : ''}
                  <div class="field">
                    <div class="label">Submitted:</div>
                    <div class="value">${new Date().toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </body>
          </html>
          `
        })
      } catch (emailError) {
        console.error('Failed to send email:', emailError)
        // Continue even if email fails - still return success to user
      }
    } else {
      console.warn("Resend not configured - email not sent");
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your quote request! We will contact you shortly with pricing.'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Quote request error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
