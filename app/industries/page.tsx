"use client"

import { motion, Variants } from "framer-motion"
import { fadeIn } from "@/src/utils/motion"
import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import Image from "next/image"
import industries from "@/src/data/industries"
import Link from "next/link"

export default function IndustriesPage() {
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
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Industries We Serve
                        </h1>
                        <p className="text-xl text-blue-100">
                            Delivering excellence across diverse sectors worldwide
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={industry.id}
                                variants={fadeIn("up", 0.2) as unknown as Variants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                            >
                                {/* Image */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src={industry.image}
                                            alt={industry.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute bottom-6 left-6 text-6xl">
                                            {industry.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full lg:w-1/2">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                                        {industry.name}
                                    </h2>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                        {industry.description}
                                    </p>

                                    {/* Relevant Products */}
                                    <div className="mb-6">
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                            Relevant Products:
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {industry.relevantProducts.map((product, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold"
                                                >
                                                    {product}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Benefits */}
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                            Key Benefits:
                                        </h3>
                                        <ul className="space-y-2">
                                            {industry.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                                    <span className="text-blue-600 dark:text-blue-400">✓</span>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={fadeIn("up", 0.2) as unknown as Variants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Partner With Us?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Let's discuss how we can support your industry with our quality products and services
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all hover:shadow-xl transform hover:scale-105 active:scale-95"
                        >
                            Contact Us Today
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
