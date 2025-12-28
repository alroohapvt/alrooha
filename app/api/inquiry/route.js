import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Lead from '@/models/Lead'

export async function POST(req) {
    try {
        await dbConnect()
        const body = await req.json()
        const { name, company, email, phone, category, message } = body

        if (!name || !company || !email || !phone || !category || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            )
        }

        const lead = await Lead.create({
            name,
            company,
            email,
            phone,
            category,
            message,
        })

        return NextResponse.json(
            { message: 'Inquiry submitted successfully', success: true, lead },
            { status: 201 }
        )
    } catch (error) {
        console.error('Inquiry Submission Error:', error)
        if (error.name === 'ValidationError') {
            return NextResponse.json(
                { error: error.message },
                { status: 400 }
            )
        }
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
