"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeIn } from "../utils/motion"
import { Award, Package, Globe, Shield } from "lucide-react"

const WhyChooseUs = () => {
    const features = [
        {
            icon: Award,
            title: "Certified Exporter",
            description: "Fully licensed and certified for international trade with all necessary export documentation and compliance"
        },
        {
            icon: Package,
            title: "Diverse Product Portfolio",
            description: "Wide range of products across food, textiles, chemicals, and specialty goods to meet all your sourcing needs"
        },
        {
            icon: Globe,
            title: "Global Logistics Network",
            description: "Efficient worldwide shipping and logistics partnerships ensuring timely delivery to any destination"
        },
        {
            icon: Shield,
            title: "Quality Assurance & Compliance",
            description: "Rigorous quality control processes and adherence to international standards for every product"
        }
    ]

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-4 text-gray-900 dark:text-white">
                        Your Success is <span className="text-blue-600 dark:text-blue-400">Our Priority</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        We combine expertise, quality, and reliability to deliver exceptional value to our global partners
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", index * 0.1)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800 h-full">
                                    {/* Icon */}
                                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white group-hover:scale-110 transition-transform">
                                        <Icon className="w-8 h-8" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Checkmark */}
                                    <div className="mt-4 text-blue-600 dark:text-blue-400 font-bold text-2xl">
                                        ✓
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Ready to experience the AL ROOHA difference?
                    </p>
                    <a
                        href="#inquiry"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg transform hover:scale-105 active:scale-95"
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default WhyChooseUs
