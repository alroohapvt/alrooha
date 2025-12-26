"use client"

import { motion, Variants } from "framer-motion"
import { fadeIn } from "@/src/utils/motion"
import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, Package } from "lucide-react"

interface Product {
    id: string
    name: string
    slug: string
    category: string
    image: string
    fullDescription: string
    shortDescription: string
    specifications: Record<string, string | undefined>
    packaging: string[]
    certifications: string[]
    moq: string
}

interface ProductDetailClientProps {
    product: Product | null
    relatedProducts: Product[]
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
    if (!product) {
        return (
            <main className="relative min-h-screen bg-white dark:bg-gray-950">
                <Navbar />
                <div className="container mx-auto px-4 py-32 text-center">
                    <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                    <Link href="/products" className="text-blue-600 hover:underline">
                        Back to Products
                    </Link>
                </div>
                <Footer />
            </main>
        )
    }

    return (
        <main className="relative min-h-screen bg-white dark:bg-gray-950">
            <Navbar />

            {/* Breadcrumb */}
            <section className="pt-32 pb-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Products
                    </Link>
                </div>
            </section>

            {/* Product Detail */}
            <section className="pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        {/* Product Image */}
                        <motion.div
                            variants={fadeIn("right", 0.2) as unknown as Variants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Product Info */}
                        <motion.div
                            variants={fadeIn("left", 0.2) as unknown as Variants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                                {product.name}
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                {product.fullDescription}
                            </p>

                            {/* Specifications */}
                            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 mb-6">
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                                    Specifications
                                </h3>
                                <dl className="space-y-3">
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <div key={key} className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-2">
                                            <dt className="font-semibold text-gray-700 dark:text-gray-300">{key}:</dt>
                                            <dd className="text-gray-600 dark:text-gray-400">{value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>

                            {/* Packaging */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                                    <Package className="w-5 h-5" />
                                    Packaging Options
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.packaging.map((pack: string, idx: number) => (
                                        <span
                                            key={idx}
                                            className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold"
                                        >
                                            {pack}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Certifications */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                                    Certifications
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.certifications.map((cert: string, idx: number) => (
                                        <span
                                            key={idx}
                                            className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm font-semibold"
                                        >
                                            ✓ {cert}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* MOQ */}
                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    Minimum Order Quantity (MOQ)
                                </h3>
                                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                    {product.moq}
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-center transition-all hover:shadow-lg transform hover:scale-105 active:scale-95"
                                >
                                    Request Quote
                                </Link>
                                <button className="flex-1 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                                    <Download className="w-5 h-5" />
                                    Download Brochure
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Related Products */}
                    {relatedProducts.length > 0 && (
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                                Related Products
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedProducts.map((relProduct: Product, index: number) => (
                                    <motion.div
                                        key={relProduct.id}
                                        variants={fadeIn("up", index * 0.1) as unknown as Variants}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                    >
                                        <Link href={`/products/${relProduct.slug}`}>
                                            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                                                <div className="relative h-48 bg-gray-100 dark:bg-gray-800">
                                                    <Image
                                                        src={relProduct.image}
                                                        alt={relProduct.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="p-4">
                                                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                                                        {relProduct.name}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                                                        {relProduct.shortDescription}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    )
}
