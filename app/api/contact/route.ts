import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    // Dynamic import to avoid build-time initialization
    const { getDbClient } = await import('@/lib/db');
    const prisma = getDbClient();

    const body = await request?.json();

    const {
      fullName,
      companyName,
      jobTitle,
      email,
      phone,
      primaryInterest,
      currentChallenge,
      preferredContactMethod,
      howDidYouHear,
    } = body ?? {};

    if (!fullName || !companyName || !jobTitle || !email || !primaryInterest || !preferredContactMethod) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const submission = await prisma?.contactSubmission?.create?.({
      data: {
        fullName,
        companyName,
        jobTitle,
        email,
        phone: phone ?? null,
        primaryInterest,
        currentChallenge: currentChallenge ?? null,
        preferredContactMethod,
        howDidYouHear: howDidYouHear ?? null,
      },
    });

    return NextResponse.json(
      { message: 'Form submitted successfully', submission },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}