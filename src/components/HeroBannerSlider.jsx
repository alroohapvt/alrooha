"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import bannerSlides from "../data/bannerSlides"

const HeroBannerSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
    }

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    // Auto-play
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(nextSlide, 5000)
            return () => clearInterval(interval)
        }
    }, [isPaused, currentSlide])

    return (
        <div
            className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src={bannerSlides[currentSlide].image}
                            alt={bannerSlides[currentSlide].title}
                            fill
                            className="object-cover"
                            priority={currentSlide === 0}
                        />
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 ${bannerSlides[currentSlide].gradient}`} />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex items-center">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="max-w-3xl"
                            >
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                                >
                                    {bannerSlides[currentSlide].title}
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed"
                                >
                                    {bannerSlides[currentSlide].description}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                >
                                    <Link href={bannerSlides[currentSlide].cta.link}>
                                        <motion.button
                                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg shadow-2xl hover:bg-blue-50 transition-all"
                                        >
                                            {bannerSlides[currentSlide].cta.text}
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 md:p-4 rounded-full transition-all hover:scale-110 active:scale-95 group"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 md:p-4 rounded-full transition-all hover:scale-110 active:scale-95 group"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {bannerSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all rounded-full ${index === currentSlide
                                ? "w-12 h-3 bg-white"
                                : "w-3 h-3 bg-white/50 hover:bg-white/75"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute top-8 right-4 md:right-8 z-20 bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold">
                {currentSlide + 1} / {bannerSlides.length}
            </div>
        </div>
    )
}

export default HeroBannerSlider
