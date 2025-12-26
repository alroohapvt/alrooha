"use client"

import { motion, Variants } from "framer-motion"
import { fadeIn } from "@/src/utils/motion"
import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import InquiryForm from "@/src/components/InquiryForm"
import companyInfo from "@/src/data/company"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
    return (
        <main className="relative min-h-screen bg-white dark:bg-gray-950">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={fadeIn("up", 0.2) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-blue-100">
                            We're here to answer your questions and discuss how we can help your business grow
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <motion.div
                            variants={fadeIn("up", 0.2) as unknown as Variants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg text-center"
                        >
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Address</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                {companyInfo.address.building}, {companyInfo.address.street}<br />
                                {companyInfo.address.city}, {companyInfo.address.state}<br />
                                {companyInfo.address.pincode}, {companyInfo.address.country}
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeIn("up", 0.3) as unknown as Variants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg text-center"
                        >
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                <a href={`tel:${companyInfo.contact.phone}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {companyInfo.contact.phone}
                                </a>
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeIn("up", 0.4) as unknown as Variants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg text-center"
                        >
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {companyInfo.contact.email}
                                </a>
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeIn("up", 0.5) as unknown as Variants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg text-center"
                        >
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Business Hours</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Mon - Sat: 9:00 AM - 6:00 PM<br />
                                Sunday: Closed
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <InquiryForm />

            {/* Map Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={fadeIn("up", 0.2) as unknown as Variants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Visit Our Office
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Find us in Kanpur, Uttar Pradesh
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", 0.3) as unknown as Variants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973753556!2d80.06892!3d26.449923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                        />
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
