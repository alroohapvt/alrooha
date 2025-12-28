"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { fadeIn } from "../utils/motion"
import categories from "../data/categories"
import { ArrowRight } from "lucide-react"

const ProductCategoriesGrid = () => {
    const colorClasses = {
        amber: "from-amber-500 to-orange-600",
        blue: "from-blue-500 to-indigo-600",
        emerald: "from-emerald-500 to-teal-600",
        purple: "from-purple-500 to-pink-600"
    }

    return (
        <section className="py-20 bg-white dark:bg-gray-950">
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
                        Our Products
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-4 text-gray-900 dark:text-white">
                        Explore Our <span className="text-blue-600 dark:text-blue-400">Product Categories</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        From premium agricultural products to industrial chemicals, we offer diverse solutions for global markets
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            variants={fadeIn("up", index * 0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative h-full flex flex-col bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden shrink-0">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${colorClasses[category.color]} opacity-60`} />

                                    {/* Icon */}
                                    <div className="absolute top-4 right-4 text-5xl">
                                        {category.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                        {category.description}
                                    </p>

                                    {/* Products List */}
                                    <ul className="space-y-2 mb-6">
                                        {category.products.map((product, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                                                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                                                {product}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <Link
                                        href={category.cta.link}
                                        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all group-hover:shadow-lg mt-auto"
                                    >
                                        {category.cta.text}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductCategoriesGrid
