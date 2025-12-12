import { NextRequest, NextResponse } from 'next/server';
import { unsubscribe, initDatabase } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Please provide an email address' },
        { status: 400 }
      );
    }

    // Ensure database table exists
    await initDatabase();

    // Unsubscribe the email
    const result = await unsubscribe(email.toLowerCase().trim());

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'This email was not found in our list' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "You've been successfully unsubscribed. We're sorry to see you go!",
    });

  } catch (error) {
    console.error('Unsubscribe error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
