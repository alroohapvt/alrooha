"use client"

import { motion, Variants } from "framer-motion"
import { fadeIn } from "@/src/utils/motion"
import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import companyInfo from "@/src/data/company"
import { Award, Target, Users, Globe } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
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
                            About {companyInfo.name}
                        </h1>
                        <p className="text-xl text-blue-100">
                            {companyInfo.tagline}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            variants={fadeIn("up", 0.2) as unknown as Variants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Who We Are
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                {companyInfo.about.short}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            variants={fadeIn("right", 0.3) as unknown as Variants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                        >
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {companyInfo.about.mission}
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeIn("left", 0.3) as unknown as Variants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                        >
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {companyInfo.about.vision}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={fadeIn("up", 0.2) as unknown as Variants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Our Core Values
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {companyInfo.about.values.map((value, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", index * 0.1) as unknown as Variants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="text-4xl mb-3">✓</div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">{value}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
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
                            Our Leadership
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {companyInfo.partners.map((partner, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", index * 0.2) as unknown as Variants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center"
                            >
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <Users className="w-12 h-12 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{partner.name}</h3>
                                <p className="text-blue-600 dark:text-blue-400">{partner.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Export Markets */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={fadeIn("up", 0.2) as unknown as Variants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Global Reach
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            We serve customers across multiple continents
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {companyInfo.exportMarkets.map((market, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", index * 0.1) as unknown as Variants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-6 py-3 rounded-full font-semibold"
                            >
                                {market}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
