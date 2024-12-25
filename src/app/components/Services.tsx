// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'


// const services = [
//   {
//     title: 'WEBSITE DEVELOPMENT',
//     description: 'Developing a website is fun and anyone can do this but very few understand how to build websites.',
//     icon: websiteicon,
//     position: 'left'
//   },
//   {
//     title: 'WEB APP DEVELOPMENT',
//     description: 'Web applications have been changing the ways of business operates across the globe.',
//     icon: webappicon,
//     position: 'left'
//   },
//   {
//     title: 'MOBILE APP DEVELOPMENT',
//     description: 'In this modern era, businesses should not ignore to have a business mobile app.',
//     icon: mobappicon,
//     position: 'left'
//   },
//   {
//     title: 'CLOUD SERVICES',
//     description: 'Modernize your workflow and improve your applications performance by migrating to the Cloud.',
//     icon: cloudicon,
//     position: 'right'
//   },
//   {
//     title: 'DIGITAL MARKETING',
//     description: 'Are you looking for ways to make your pitch inspirational to social media audience?',
//     icon: digitalicon,
//     position: 'right'
//   },
//   {
//     title: 'STARTUP SOLUTIONS',
//     description: 'We help entrepreneurs turn their vision into reality.And guide them throughout their business life cycle.',
//     icon: startupicon,
//     position: 'right'
//   }
// ]

// export default function Services() {
//   return (
//     <section className="py-16 md:py-24 bg-gradient-to-b from-gray-700 to-gray-900">
//       <div className="container mx-auto px-4">
//         <div className="relative">
//           {/* Center Phone - Hidden on mobile, shown on larger screens */}
//           <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             <div className="relative w-[300px] h-[600px]">
//               <Image
//                 src={phoneImg}
//                 alt="iPhone Frame"
//                 fill
//                 className="object-contain"
//               />
//               <div className="absolute inset-[12px] rounded-[32px] overflow-hidden">
//                 <Image
//                   src="/app-screen.jpg"
//                   alt="App Screen"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Services Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-[300px]">
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.title}
//                 initial={{ opacity: 0, x: service.position === 'left' ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className={`
//                   flex items-center gap-4
//                   ${service.position === 'left' ? 'lg:flex-row-reverse lg:text-right' : 'lg:flex-row'}
//                   ${index >= 3 ? 'lg:mt-8' : ''}
//                 `}
//               >
//                 <div className={`flex-1 ${service.position === 'left' ? 'lg:text-right' : 'lg:text-left'}`}>
//                   <h3 className="text-lg md:text-xl font-bold text-white mb-2">{service.title}</h3>
//                   <p className="text-gray-300 text-sm md:text-base">{service.description}</p>
//                 </div>
//                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#00BCD4] flex items-center justify-center flex-shrink-0">
//                   <Image
//                     src={service.icon}
//                     alt={service.title}
//                     width={24}
//                     height={24}
//                     className="md:w-8 md:h-8"
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Mobile Phone - Shown only on mobile */}
//           <div className="lg:hidden mt-8">
//             <div className="relative w-[200px] h-[400px] mx-auto">
//               <Image
//                 src="/iphone-frame.png"
//                 alt="iPhone Frame"
//                 fill
//                 className="object-contain"
//               />
//               <div className="absolute inset-[8px] rounded-[24px] overflow-hidden">
//                 <Image
//                   src="/app-screen.jpg"
//                   alt="App Screen"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import phoneImg from '../assets/services (2).png'
import websiteicon from '../assets/web-dev-icon.png'
import webappicon from '../assets/web-app-dev-icon.png'
import mobappicon from '../assets/mob-app-dev-icon.png'
import cloudicon from '../assets/cloud-services-icon.png'
import digitalicon from '../assets/digital-mark-icon.png'
import startupicon from '../assets/startup-icon.png'

const services = [
  {
    title: 'WEBSITE DEVELOPMENT',
    description: 'Developing a website is fun and anyone can do this but very few understand how to build websites.',
    icon: websiteicon,
    align: 'left'
  },
  {
    title: 'WEB APP DEVELOPMENT',
    description: 'Web applications have been changing the ways of business operates across the globe.',
    icon: webappicon,
    align: 'right'
  },
  {
    title: 'MOBILE APP DEVELOPMENT',
    description: 'In this modern era, businesses should not ignore to have a business mobile app.',
    icon: mobappicon,
    align: 'left'
  },
  {
    title: 'CLOUD SERVICES',
    description: 'Modernize your workflow and improve your applications performance by migrating to the Cloud.',
    icon: cloudicon,
    align: 'right'
  },
  {
    title: 'DIGITAL MARKETING',
    description: 'Are you looking for ways to make your pitch inspirational to social media audience?',
    icon: digitalicon,
    align: 'left'
  },
  {
    title: 'STARTUP SOLUTIONS',
    description: 'We help entrepreneurs turn their vision into reality.And guide them throughout their business life cycle.',
    icon: startupicon,
    align: 'right'
  }
]

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-700 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Center Phone - Hidden on mobile, shown on larger screens */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative w-[300px] h-[600px]">
              <Image
                src={phoneImg}
                alt="Services Showcase"
                width={300}
                height={600}
                className="object-contain"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-[300px]">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`
                  flex items-center gap-4
                  ${service.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}
                  ${index >= 3 ? 'md:mt-8' : ''}
                `}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#00BCD4] flex items-center justify-center flex-shrink-0">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={24}
                    height={24}
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                </div>
                <div className={`flex-1 ${service.align === 'left' ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


