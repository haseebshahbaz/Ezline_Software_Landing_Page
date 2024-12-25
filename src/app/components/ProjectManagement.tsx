// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'

// const features = [
//   "Project and milestone tracking",
//   "Task management with task board and alerts",
//   "24/7 online service & Support",
//   "Effective tracking/transparent management",
//   "Discussion board for project management",
//   "Have it & provide 100% satisfaction"
// ]

// export default function ProjectManagement() {
//   return (
//     <section className="py-16 md:py-24 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
//           OUR PROJECT MANAGEMENT
//         </h2>
        
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="order-2 lg:order-1"
//           >
//             <Image
//               src={image}
//               alt="Project Management Dashboard"
//               width={600}
//               height={400}
//               className="w-full h-auto rounded-lg shadow-xl"
//             />
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="order-1 lg:order-2"
//           >
//             <ul className="space-y-4">
//               {features.map((feature, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, x: 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="flex items-start gap-3 text-gray-700"
//                 >
//                   <svg className="w-5 h-5 mt-1 text-[#00ffff] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                   <span className="text-base md:text-lg">{feature}</span>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import image from '../assets/project-management.png'

const features = [
  "Project and milestone tracking",
  "Task management with task board and alerts",
  "24/7 online service & Support",
  "Effective tracking/transparent management",
  "Discussion board for project management",
  "Have it & provide 100% satisfaction"
]

const categories = [
  { name: 'STAFF', color: 'border-red-500 text-red-500 hover:bg-red-500' },
  { name: 'INTERN', color: 'border-blue-500 text-blue-500 hover:bg-blue-500' },
  { name: 'CLIENT', color: 'border-green-500 text-green-500 hover:bg-green-500' }
]

export default function ProjectManagement() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-cyan-200 transform rotate-45" />
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-cyan-200 transform rotate-12" />
        <div className="absolute bottom-10 left-1/4 w-24 h-24 border-2 border-cyan-200 transform -rotate-12" />
        <div className="absolute top-1/3 right-10 w-32 h-32 border-2 border-cyan-200 transform rotate-45" />
      </div>

      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          OUR PROJECT MANAGEMENT
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* iMac Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-3xl mx-auto">
              <Image
                src={image}
                alt="Project Management Dashboard"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
          
          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="text-red-500 text-xl mt-1">★</span>
                  <span className="text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Category Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-8"
            >
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`px-6 py-2 border-2 font-medium transition-colors hover:text-white ${category.color}`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

