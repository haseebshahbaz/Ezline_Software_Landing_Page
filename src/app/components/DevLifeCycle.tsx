'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Planning from '../assets/planningicon.png'
import Design from '../assets/designing.png'
import Development from '../assets/development.png'
import Testing from '../assets/test.png'
import Deployment from '../assets/deployment.png'
import Maintainance from '../assets/maintainance.png'

const lifecycleSteps = [
  { id: 1, title: 'Planning', icon: Planning },
  { id: 2, title: 'Design', icon: Design },
  { id: 3, title: 'Development', icon: Development },
  { id: 4, title: 'Testing', icon: Testing },
  { id: 5, title: 'Deployment', icon: Deployment },
  { id: 6, title: 'Maintenance', icon: Maintainance },
]

export default function DevLifecycle() {
  const [activeStep, setActiveStep] = useState(1)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Software Development Lifecycle
        </motion.h2>

        <div className="relative">
          {/* Central connecting line - hidden on small screens */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-500 transform -translate-y-1/2 hidden md:block"></div>

          {/* Lifecycle steps */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 relative z-10">
            {lifecycleSteps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: step.id * 0.1 }}
                className={`flex flex-col items-center ${isSmallScreen ? '' : (step.id % 2 === 0 ? 'md:mt-16' : '')}`}
                onClick={() => setActiveStep(step.id)}
              >
                <div 
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center ${
                    activeStep === step.id ? 'bg-blue-500' : 'bg-gray-700'
                  } transition-all duration-300 transform hover:scale-110 cursor-pointer`}
                >
                  <Image src={step.icon} alt={step.title} width={32} height={32} className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div className="w-1 h-8 bg-blue-500 hidden md:block"></div>
                <h3 className="text-sm md:text-lg font-semibold mt-2 text-center">{step.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* Description box */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-16 bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h4 className="text-xl font-semibold mb-4">
                {lifecycleSteps[activeStep - 1].title}
              </h4>
              <p className="text-gray-300">
                {getStepDescription(activeStep)}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
    </section>
  )
}

function getStepDescription(stepId: number): string {
  switch (stepId) {
    case 1:
      return "In the planning phase, we define project goals, scope, and requirements. This crucial stage sets the foundation for the entire development process."
    case 2:
      return "The design phase involves creating user interfaces, system architecture, and database schemas. We focus on user experience and technical feasibility."
    case 3:
      return "During development, our skilled programmers bring the design to life, writing clean, efficient, and maintainable code."
    case 4:
      return "Rigorous testing ensures the software meets all requirements and functions flawlessly. We perform unit tests, integration tests, and user acceptance testing."
    case 5:
      return "Deployment involves releasing the software to production environments. We ensure smooth transitions and minimal downtime."
    case 6:
      return "Post-deployment, we provide ongoing support, bug fixes, and updates to keep the software running optimally and adapt to new requirements."
    default:
      return "Select a step to learn more about our development process."
  }
}

