'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'FLEXIBLE PRICE',
    description: 'Our pricing plan is created by our clients. Market Competitive.',
    icon: (
      <svg className="w-12 h-12 md:w-16 md:h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bgColor: 'bg-[#7C4DFF]'
  },
  {
    title: 'QUALITY WORK',
    description: 'Quality assurance & testing before every project delivery.',
    icon: (
      <svg className="w-12 h-12 md:w-16 md:h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    bgColor: 'bg-[#00BCD4]'
  },
  {
    title: 'QUICK DELIVERY',
    description: '40 days initial delivery on custom mega projects.',
    icon: (
      <svg className="w-12 h-12 md:w-16 md:h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    bgColor: 'bg-[#4CAF50]'
  }
]

export default function Features() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`${feature.bgColor} px-6 md:px-8 py-12 md:py-16 text-center`}
          >
            <div className="flex flex-col items-center">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-white/10 transform rotate-45 rounded-xl" />
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/90 text-base md:text-lg max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

