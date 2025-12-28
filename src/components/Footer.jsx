"use client"

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"
import Link from "next/link"
import companyInfo from "../data/company"
import { MapPin, Phone, Mail } from "lucide-react"

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ]

  const productCategories = [
    { name: "Food & Agricultural", href: "/products?category=food" },
    { name: "Textiles & Apparel", href: "/products?category=textiles" },
    { name: "Chemicals & Fertilizers", href: "/products?category=chemicals" },
    { name: "Specialty Goods", href: "/products?category=specialty" },
  ]

  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-900 to-gray-950 dark:from-gray-950 dark:to-black text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info Column */}
          <motion.div variants={fadeIn("right", 0.3)} className="lg:col-span-1">
            <div className="mb-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                {companyInfo.name}
              </div>
              <p className="text-sm text-gray-400">{companyInfo.tagline}</p>
            </div>

            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              {companyInfo.about.short.substring(0, 150)}...
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={companyInfo.social.facebook}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={companyInfo.social.twitter}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-all"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={companyInfo.social.linkedin}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={companyInfo.social.instagram}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={fadeIn("up", 0.4)}>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Product Categories Column */}
          <motion.div variants={fadeIn("up", 0.5)}>
            <h3 className="text-lg font-semibold mb-6 text-white">Product Categories</h3>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={category.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info Column */}
          <motion.div variants={fadeIn("left", 0.6)}>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  {companyInfo.address.building}, {companyInfo.address.street}<br />
                  {companyInfo.address.city}, {companyInfo.address.state}<br />
                  {companyInfo.address.pincode}, {companyInfo.address.country}
                </span>
              </li>
              <li className="flex flex-col gap-1 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href={`tel:${companyInfo.contact.phone}`} className="text-gray-300 hover:text-blue-400 transition-colors">
                    {companyInfo.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 ml-8">
                  <a href={`tel:${companyInfo.contact.phone2}`} className="text-gray-300 hover:text-blue-400 transition-colors">
                    {companyInfo.contact.phone2}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${companyInfo.contact.email}`} className="text-gray-300 hover:text-blue-400 transition-colors">
                  {companyInfo.contact.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeIn("up", 0.7)}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Copyright © {new Date().getFullYear()} {companyInfo.legalName}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer

