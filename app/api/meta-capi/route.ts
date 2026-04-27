import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

const PIXEL_ID = '664352714303705'
const META_API_VERSION = 'v18.0'

interface UserData {
  client_ip_address?: string
  client_user_agent?: string
  em?: string // hashed email
  ph?: string // hashed phone
  fn?: string // hashed first name
  ln?: string // hashed last name
}

interface EventData {
  event_name: string
  event_time?: number
  event_source_url?: string
  action_source?: string
  user_data?: UserData
  custom_data?: Record<string, unknown>
}

function hashData(data: string): string {
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex')
}

export async function POST(request: NextRequest) {
  try {
    const accessToken = process.env.META_CAPI_TOKEN

    if (!accessToken) {
      console.error('[Meta CAPI] META_CAPI_TOKEN not configured')
      return NextResponse.json(
        { error: 'Meta CAPI token not configured' },
        { status: 500 }
      )
    }

    const body: EventData = await request.json()

    const { 
      event_name, 
      event_time = Math.floor(Date.now() / 1000), 
      event_source_url,
      action_source = 'website',
      user_data = {},
      custom_data = {}
    } = body

    if (!event_name) {
      return NextResponse.json(
        { error: 'event_name is required' },
        { status: 400 }
      )
    }

    // Get IP from request headers
    const forwardedFor = request.headers.get('x-forwarded-for')
    const clientIp = forwardedFor?.split(',')[0]?.trim() || 
                     request.headers.get('x-real-ip') || 
                     user_data.client_ip_address

    // Get User Agent from request headers
    const clientUserAgent = request.headers.get('user-agent') || 
                            user_data.client_user_agent

    // Build user_data with hashed values if provided
    const processedUserData: UserData = {
      client_ip_address: clientIp,
      client_user_agent: clientUserAgent,
    }

    if (user_data.em) {
      processedUserData.em = hashData(user_data.em)
    }
    if (user_data.ph) {
      processedUserData.ph = hashData(user_data.ph)
    }
    if (user_data.fn) {
      processedUserData.fn = hashData(user_data.fn)
    }
    if (user_data.ln) {
      processedUserData.ln = hashData(user_data.ln)
    }

    // Build the event payload
    const eventPayload = {
      data: [
        {
          event_name,
          event_time,
          event_source_url,
          action_source,
          user_data: processedUserData,
          custom_data,
        },
      ],
      access_token: accessToken,
    }

    // Send to Meta Conversions API
    const metaResponse = await fetch(
      `https://graph.facebook.com/${META_API_VERSION}/${PIXEL_ID}/events`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventPayload),
      }
    )

    const metaResult = await metaResponse.json()

    if (!metaResponse.ok) {
      console.error('[Meta CAPI] Error from Meta API:', metaResult)
      return NextResponse.json(
        { error: 'Failed to send event to Meta', details: metaResult },
        { status: metaResponse.status }
      )
    }

    return NextResponse.json({
      success: true,
      events_received: metaResult.events_received,
      fbtrace_id: metaResult.fbtrace_id,
    })

  } catch (error) {
    console.error('[Meta CAPI] Error processing request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
