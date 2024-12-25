'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import img from '../assets/Hero.webp'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="relative bg-black text-white overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 filter blur-3xl transform rotate-12 scale-150" 
             style={{
               transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) rotate(12deg) scale(1.5)`,
             }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Innovate. Create. Elevate.
            </h1>
            <p className="text-base md:text-xl text-gray-300">
              Eziline Software House: Crafting digital experiences that transcend expectations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-full shadow-2xl">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 group-hover:opacity-100"></span>
                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                <span className="relative transition duration-300 ease-out text-white group-hover:text-white">
                  Our Services
                </span>
              </Link>
              <Link href="/contact" className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-full shadow-2xl">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 group-hover:opacity-100"></span>
                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                <span className="relative transition duration-300 ease-out text-white group-hover:text-white">
                  Get in Touch
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right side image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative w-full aspect-square max-w-[300px] mx-auto">
              <Image
                src={img}
                alt="Digital Innovation"
                fill
                className="object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 opacity-30 rounded-full"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </motion.div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-1/4 left-4 w-8 h-8 border-2 border-blue-500 rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 right-4 w-8 h-8 border-2 border-purple-500 rounded-full animate-float animation-delay-2000"></div>
      <div className="absolute top-3/4 left-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-ping"></div>
    </section>
  )
}

