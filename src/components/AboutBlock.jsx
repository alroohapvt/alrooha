"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { fadeIn } from "../utils/motion"
import companyInfo from "../data/company"

const AboutBlock = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Section Badge */}
                    <div className="inline-block mb-6">
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                            About AL ROOHA
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        Your Trusted Partner in{" "}
                        <span className="text-blue-600 dark:text-blue-400">Global Trade</span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        {companyInfo.about.short}
                    </p>

                    {/* CTA Button */}
                    <Link
                        href="/about"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg transform hover:scale-105 active:scale-95"
                    >
                        Learn More About Us
                    </Link>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                4+
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                Product Categories
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                50+
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                Countries Served
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                100%
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                Quality Assured
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                24/7
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                Customer Support
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutBlock
