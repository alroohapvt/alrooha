'use client'

import { useState, useEffect } from 'react'
import { signOut } from 'next-auth/react'
import { LogOut, RefreshCw, Search, Filter, Trash2, X, Eye, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface Lead {
    _id: string
    name: string
    company: string
    email: string
    phone: string
    category: string
    message: string
    status: string
    createdAt: string
}

const statusOptions = ['New', 'Contacted', 'In Progress', 'Proposal Sent', 'Negotiation', 'Closed Won', 'Closed Lost', 'Spam']

const statusColors: any = {
    New: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    Contacted: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    'In Progress': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    'Proposal Sent': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
    Negotiation: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    'Closed Won': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    'Closed Lost': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    Spam: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
}

export default function DashboardPage() {
    const [leads, setLeads] = useState<Lead[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [updatingStatus, setUpdatingStatus] = useState(false)

    const fetchLeads = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/admin/leads')
            if (res.ok) {
                const data = await res.json()
                setLeads(data.leads)
            }
        } catch (error) {
            console.error('Failed to fetch leads', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchLeads()
    }, [])

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this lead?')) return

        try {
            const res = await fetch(`/api/admin/leads/${id}`, { method: 'DELETE' })
            if (res.ok) {
                setLeads(leads.filter(lead => lead._id !== id))
                if (selectedLead?._id === id) closeDrawer()
            } else {
                alert('Failed to delete lead')
            }
        } catch (error) {
            console.error('Delete error', error)
            alert('Error deleting lead')
        }
    }

    const handleStatusUpdate = async (status: string) => {
        if (!selectedLead) return
        setUpdatingStatus(true)

        try {
            const res = await fetch(`/api/admin/leads/${selectedLead._id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status }),
            })

            if (res.ok) {
                const data = await res.json()
                const updatedLead = data.lead

                // Update local state
                setLeads(leads.map(l => l._id === updatedLead._id ? updatedLead : l))
                setSelectedLead(updatedLead)
            } else {
                alert('Failed to update status')
            }
        } catch (error) {
            console.error('Update status error', error)
            alert('Error updating status')
        } finally {
            setUpdatingStatus(false)
        }
    }

    const openDrawer = (lead: Lead) => {
        setSelectedLead(lead)
        setIsDrawerOpen(true)
    }

    const closeDrawer = () => {
        setIsDrawerOpen(false)
        setTimeout(() => setSelectedLead(null), 300) // Clear after animation
    }

    const filteredLeads = leads.filter(lead =>
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleLogout = () => {
        signOut({ callbackUrl: '/admin/login' })
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
            {/* Navbar */}
            <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
                                AL ROOHA Admin
                            </Link>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                            >
                                <LogOut className="w-4 h-4" />
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-64px)] overflow-auto">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Leads & Inquiries</h1>
                        <p className="text-gray-500 dark:text-gray-400">Manage incoming messages from the website</p>
                    </div>
                    <button
                        onClick={fetchLeads}
                        className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all font-medium text-sm"
                    >
                        <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                        Refresh Data
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Leads</h3>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{leads.length}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">New Today</h3>
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">
                            {leads.filter(l => new Date(l.createdAt).toDateString() === new Date().toDateString()).length}
                        </p>
                    </div>
                </div>

                {/* Filters and Search */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 flex flex-col sm:flex-row gap-4 justify-between items-center">
                        <div className="relative w-full sm:w-96">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                placeholder="Search by name, company, or email..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-900/50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Company</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Phone</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                {loading ? (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                                            Loading leads...
                                        </td>
                                    </tr>
                                ) : filteredLeads.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                                            No leads found.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredLeads.map((lead) => (
                                        <tr key={lead._id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                {new Date(lead.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900 dark:text-white">{lead.name}</div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">{lead.email}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                {lead.company}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                {lead.phone}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 capitalize">
                                                    {lead.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full capitalize ${statusColors[lead.status] || statusColors.New}`}>
                                                    {lead.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={() => openDrawer(lead)}
                                                        className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 p-1 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                                        title="View Details"
                                                    >
                                                        <Eye className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(lead._id)}
                                                        className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 p-1 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20"
                                                        title="Delete Lead"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {/* Right Side Drawer */}
            <div
                className={`fixed inset-0 z-50 transform transition-all duration-300 ease-in-out ${isDrawerOpen ? 'visible' : 'invisible'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ease-in-out ${isDrawerOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                    onClick={closeDrawer}
                />

                {/* Drawer Panel */}
                <div
                    className={`absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    {selectedLead && (
                        <div className="h-full flex flex-col">
                            {/* Header */}
                            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between bg-gray-50 dark:bg-gray-900/50">
                                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Lead Details</h2>
                                <button
                                    onClick={closeDrawer}
                                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 p-1"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                {/* Status Section */}
                                <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-100 dark:border-blue-800/30">
                                    <label className="block text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
                                        Current Status
                                    </label>
                                    <div className="flex gap-2 items-center">
                                        <select
                                            value={selectedLead.status}
                                            onChange={(e) => handleStatusUpdate(e.target.value)}
                                            disabled={updatingStatus}
                                            className="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3"
                                        >
                                            {statusOptions.map((status) => (
                                                <option key={status} value={status}>
                                                    {status}
                                                </option>
                                            ))}
                                        </select>
                                        {updatingStatus && <RefreshCw className="w-4 h-4 animate-spin text-blue-600" />}
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="space-y-4 text-sm">
                                    <div>
                                        <h3 className="text-gray-500 dark:text-gray-400 font-medium mb-1">Contact Information</h3>
                                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg space-y-3">
                                            <div className="grid grid-cols-3 gap-2">
                                                <span className="text-gray-500 dark:text-gray-400">Name:</span>
                                                <span className="col-span-2 font-medium text-gray-900 dark:text-white">{selectedLead.name}</span>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2">
                                                <span className="text-gray-500 dark:text-gray-400">Email:</span>
                                                <span className="col-span-2 font-medium text-gray-900 dark:text-white break-all">{selectedLead.email}</span>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2">
                                                <span className="text-gray-500 dark:text-gray-400">Phone:</span>
                                                <span className="col-span-2 font-medium text-gray-900 dark:text-white">{selectedLead.phone}</span>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2">
                                                <span className="text-gray-500 dark:text-gray-400">Company:</span>
                                                <span className="col-span-2 font-medium text-gray-900 dark:text-white">{selectedLead.company}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-gray-500 dark:text-gray-400 font-medium mb-1">Inquiry Details</h3>
                                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg space-y-3">
                                            <div className="grid grid-cols-3 gap-2">
                                                <span className="text-gray-500 dark:text-gray-400">Category:</span>
                                                <span className="col-span-2">
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                                                        {selectedLead.category}
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2">
                                                <span className="text-gray-500 dark:text-gray-400">Date:</span>
                                                <span className="col-span-2 text-gray-900 dark:text-white">
                                                    {new Date(selectedLead.createdAt).toLocaleString()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-gray-500 dark:text-gray-400 font-medium mb-1">Message Body</h3>
                                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                                            <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed">
                                                {selectedLead.message}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 flex justify-end gap-3">
                                <button
                                    onClick={() => handleDelete(selectedLead._id)}
                                    className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 hover:bg-red-100 rounded-lg text-sm font-medium transition-colors"
                                >
                                    <Trash2 className="w-4 h-4" />
                                    Delete Lead
                                </button>
                                <button
                                    onClick={closeDrawer}
                                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
