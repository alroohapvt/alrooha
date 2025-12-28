import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Lead from '@/models/Lead'
import { auth } from '@/auth'

export async function GET(req) {
    const session = await auth()

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        await dbConnect()
        const leads = await Lead.find({}).sort({ createdAt: -1 })
        return NextResponse.json({ leads }, { status: 200 })
    } catch (error) {
        console.error('Fetch Leads Error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
