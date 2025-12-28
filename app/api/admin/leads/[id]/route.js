import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Lead from '@/models/Lead'
import { auth } from '@/auth'

// DELETE: Remove a lead
export async function DELETE(req, { params }) {
    const session = await auth()
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        await dbConnect()
        const { id } = params
        const deletedLead = await Lead.findByIdAndDelete(id)

        if (!deletedLead) {
            return NextResponse.json({ error: 'Lead not found' }, { status: 404 })
        }

        return NextResponse.json({ message: 'Lead deleted successfully' }, { status: 200 })
    } catch (error) {
        console.error('Delete Lead Error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

// PATCH: Update lead status
export async function PATCH(req, { params }) {
    const session = await auth()
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        await dbConnect()
        const { id } = params
        const body = await req.json()
        const { status } = body

        if (!status) {
            return NextResponse.json({ error: 'Status is required' }, { status: 400 })
        }

        const updatedLead = await Lead.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        )

        if (!updatedLead) {
            return NextResponse.json({ error: 'Lead not found' }, { status: 404 })
        }

        return NextResponse.json({ message: 'Lead updated successfully', lead: updatedLead }, { status: 200 })
    } catch (error) {
        console.error('Update Lead Error:', error)
        return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 })
    }
}
