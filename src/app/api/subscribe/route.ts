import { NextRequest, NextResponse } from 'next/server';
import { addSubscriber, initDatabase } from '@/lib/db';
import { notifyNewSubscriber, sendWelcomeEmail } from '@/lib/email';

// Simple email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, source } = body;

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Get client info for records
    const ipAddress = request.headers.get('x-forwarded-for')?.split(',')[0] || 
                      request.headers.get('x-real-ip') || 
                      'unknown';
    const userAgent = request.headers.get('user-agent') || undefined;

    // Ensure database table exists
    await initDatabase();

    // Add subscriber to database
    const subscriber = await addSubscriber({
      email: email.toLowerCase().trim(),
      name: name?.trim(),
      source: source || 'website',
      ipAddress,
      userAgent,
    });

    // Send notifications (don't await - do in background)
    Promise.all([
      notifyNewSubscriber({ 
        email: subscriber.email, 
        name: subscriber.name,
        source 
      }),
      sendWelcomeEmail({ 
        email: subscriber.email, 
        name: subscriber.name 
      }),
    ]).catch(console.error);

    return NextResponse.json({
      success: true,
      message: 'Thanks for subscribing! Check your inbox for a welcome email.',
      subscriber: {
        email: subscriber.email,
        name: subscriber.name,
      },
    });

  } catch (error: unknown) {
    console.error('Subscription error:', error);
    
    // Check for duplicate email (shouldn't happen with ON CONFLICT, but just in case)
    if (error instanceof Error && error.message?.includes('duplicate')) {
      return NextResponse.json(
        { error: 'This email is already subscribed!' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
