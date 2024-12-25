'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import award from '../assets/award.png'

const features = [
  "Eziline is an independent Pakistan Based company",
  "Operating Since 2007 – Eziline has been in profit since the beginning",
  "We are website specialists (web design / dynamic web solution / graphics design / Multimedia development)",
  "A close-knit team of 350+ designers",
  "Programmers",
  "System analysts and marketing executives"
]

export default function About() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-pink-400 via-purple-500 to-purple-800">
      {/* Particle Effect Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/stars-pattern.png')] opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="text-white">ABOUT</span>{' '}
              <span className="text-[#00ffff]">EZILINE</span>
            </h1>
            
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-red-500 text-lg mt-1">★</span>
                  <span className="text-base lg:text-lg font-light leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Content - Video */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-video bg-white rounded-lg shadow-2xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/PTqcbyRa9mU"
                title="Eziline Software House Profile"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>

            {/* Award Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-16 -left-8 w-32 h-32 lg:w-40 lg:h-40"
            >
              <Image
                src={award}
                alt="Award"
                width={160}
                height={160}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-auto fill-white"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}

