import mongoose from 'mongoose'

const LeadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    company: {
        type: String,
        required: [true, 'Please provide a company name'],
        maxlength: [100, 'Company name cannot be more than 100 characters'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        maxlength: [100, 'Email cannot be more than 100 characters'],
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please provide a valid email address',
        ],
    },
    phone: {
        type: String,
        required: [true, 'Please provide a phone number'],
        maxlength: [20, 'Phone number cannot be more than 20 characters'],
    },
    category: {
        type: String,
        required: [true, 'Please select a category'],
        enum: ['food', 'textiles', 'chemicals', 'specialty', 'other'],
    },
    message: {
        type: String,
        required: [true, 'Please provide a message'],
        maxlength: [1000, 'Message cannot be more than 1000 characters'],
    },
    status: {
        type: String,
        enum: ['New', 'Contacted', 'In Progress', 'Proposal Sent', 'Negotiation', 'Closed Won', 'Closed Lost', 'Spam'],
        default: 'New',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema)
