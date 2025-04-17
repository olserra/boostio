import { NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please provide a valid email address' },
                { status: 400 }
            );
        }

        // Check if email already exists
        const existingSubscriber = await prisma.formSubmission.findFirst({
            where: { email }
        });

        if (existingSubscriber) {
            return NextResponse.json(
                { error: 'This email is already subscribed' },
                { status: 400 }
            );
        }

        // Create new subscription
        await prisma.formSubmission.create({
            data: {
                email,
                name: 'Newsletter Subscriber',
                company: 'N/A',
                employees: 'N/A'
            }
        });

        return NextResponse.json(
            { message: 'Successfully subscribed to newsletter' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error subscribing to newsletter:', error);
        return NextResponse.json(
            { error: 'Failed to subscribe to newsletter' },
            { status: 500 }
        );
    }
} 