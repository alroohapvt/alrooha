"use client"

import { useState, useEffect, Suspense } from "react"
import { motion, Variants } from "framer-motion"
import { fadeIn } from "@/src/utils/motion"
import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import Link from "next/link"
import Image from "next/image"
import products from "@/src/data/products"
import categories from "@/src/data/categories"
import { useSearchParams } from "next/navigation"
import { ArrowRight } from "lucide-react"

function ProductsContent() {
    const searchParams = useSearchParams()
    const categoryParam = searchParams.get("category")
    const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all")
    const [filteredProducts, setFilteredProducts] = useState(products)

    useEffect(() => {
        if (selectedCategory === "all") {
            setFilteredProducts(products)
        } else {
            setFilteredProducts(products.filter(p => p.category === selectedCategory))
        }
    }, [selectedCategory])

    useEffect(() => {
        if (categoryParam) {
            setSelectedCategory(categoryParam)
        }
    }, [categoryParam])

    return (
        <main className="relative min-h-screen bg-white dark:bg-gray-950">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={fadeIn("up", 0.2) as unknown as Variants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Our Products
                        </h1>
                        <p className="text-xl text-blue-100">
                            Explore our diverse range of export-quality products across multiple categories
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg sticky top-20 z-40 border-b border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        <button
                            onClick={() => setSelectedCategory("all")}
                            className={`px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 ${selectedCategory === "all"
                                ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                        >
                            All Products
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 ${selectedCategory === category.id
                                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                    }`}
                            >
                                {category.icon} {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                variants={fadeIn("up", index * 0.05) as unknown as Variants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="group"
                            >
                                <Link href={`/products/${product.slug}`}>
                                    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                                        {/* Product Image */}
                                        <div className="relative h-64 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            {product.featured && (
                                                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                    Featured
                                                </div>
                                            )}
                                        </div>

                                        {/* Product Info */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {product.name}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                                                {product.shortDescription}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                                    MOQ: {product.moq}
                                                </span>
                                                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                                                    Learn More
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-600 dark:text-gray-400">
                                No products found in this category.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <ProductsContent />
        </Suspense>
    )
}
