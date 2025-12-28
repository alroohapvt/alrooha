import React from 'react'
import Navbar from '@/src/components/Navbar'
import Footer from '@/src/components/Footer'

export const metadata = {
    title: 'Privacy Policy - AL ROOHA',
    description: 'Privacy Policy for AL ROOHA - Global Export-Import Trading Company',
}

export default function PrivacyPolicyPage() {
    return (
        <main className="relative min-h-screen bg-white dark:bg-gray-950">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>
                            At AL ROOHA, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or engage with our services.
                        </p>

                        <h3>1. Information We Collect</h3>
                        <p>
                            We collect information that you provide directly to us, such as when you fill out a contact form, request a quote, or subscribe to our newsletter. This may include your name, email address, phone number, company name, and any other details you choose to provide.
                        </p>

                        <h3>2. How We Use Your Information</h3>
                        <p>
                            We use the information we collect to:
                        </p>
                        <ul>
                            <li>Provide, maintain, and improve our services.</li>
                            <li>Process and fulfill your requests and orders.</li>
                            <li>Communicate with you about our products, services, and updates.</li>
                            <li>Respond to your comments, questions, and inquiries.</li>
                            <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
                        </ul>

                        <h3>3. Information Sharing</h3>
                        <p>
                            We do not share your personal information with third parties except as described in this policy. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
                        </p>

                        <h3>4. Data Security</h3>
                        <p>
                            We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is completely secure.
                        </p>

                        <h3>5. Cookies</h3>
                        <p>
                            Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but please note that some features of our website may not function properly without them.
                        </p>

                        <h3>6. Changes to This Policy</h3>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                        </p>

                        <h3>7. Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <p>
                            <strong>AL ROOHA PRIVATE LIMITED</strong><br />
                            Email: info@alroohapvt.com<br />
                            Phone: +91 123 456 7890
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
