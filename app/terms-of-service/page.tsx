import React from 'react'
import Navbar from '@/src/components/Navbar'
import Footer from '@/src/components/Footer'

export const metadata = {
    title: 'Terms of Service - AL ROOHA',
    description: 'Terms of Service for AL ROOHA - Global Export-Import Trading Company',
}

export default function TermsOfServicePage() {
    return (
        <main className="relative min-h-screen bg-white dark:bg-gray-950">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">Terms of Service</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>
                            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the AL ROOHA website operated by AL ROOHA PRIVATE LIMITED.
                        </p>
                        <p>
                            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
                        </p>

                        <h3>1. Acceptance of Terms</h3>
                        <p>
                            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                        </p>

                        <h3>2. Use of Services</h3>
                        <p>
                            You agree to use our services only for lawful purposes and in accordance with these Terms. You are prohibited from using our site or services to:
                        </p>
                        <ul>
                            <li>Violate any applicable national or international law or regulation.</li>
                            <li>Exploit, harm, or attempt to exploit or harm minors in any way.</li>
                            <li>Transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
                        </ul>

                        <h3>3. Intellectual Property</h3>
                        <p>
                            The Service and its original content, features, and functionality are and will remain the exclusive property of AL ROOHA and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.
                        </p>

                        <h3>4. Product Information</h3>
                        <p>
                            We strive to be as accurate as possible with product descriptions and pricing. However, we do not warrant that product descriptions or other content of this site is accurate, complete, reliable, current, or error-free.
                        </p>

                        <h3>5. Limitation of Liability</h3>
                        <p>
                            In no event shall AL ROOHA, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                        </p>

                        <h3>6. Governing Law</h3>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                        </p>

                        <h3>7. Changes</h3>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                        </p>

                        <h3>8. Contact Us</h3>
                        <p>
                            If you have any questions about these Terms, please contact us at info@alrooha.com.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
