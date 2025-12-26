"use client"

import Navbar from "@/src/components/Navbar"
import HeroBannerSlider from "@/src/components/HeroBannerSlider"
import AboutBlock from "@/src/components/AboutBlock"
import ProductCategoriesGrid from "@/src/components/ProductCategoriesGrid"
import WhyChooseUs from "@/src/components/WhyChooseUs"
import InquiryForm from "@/src/components/InquiryForm"
import Footer from "@/src/components/Footer"

export default function Page() {
  return (
    <main className="relative h-full bg-white dark:bg-gray-950">
      <Navbar />
      <HeroBannerSlider />
      <AboutBlock />
      <ProductCategoriesGrid />
      <WhyChooseUs />
      <InquiryForm />
      <Footer />
    </main>
  )
}


