'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import img1 from '../assets/client.png';
import img2 from '../assets/client2.png';
import img3 from '../assets/client3.png';
import img4 from '../assets/client4.png';
import img5 from '../assets/client5.png';
import img6 from '../assets/client6.png';
import img7 from '../assets/client7.png';

const clients = [
  { name: 'Client1', logo: img1 },
  { name: 'Client2', logo: img2 },
  { name: 'Client3', logo: img3 },
  { name: 'Client4', logo: img4 },
  { name: 'Client5', logo: img5 },
  { name: 'Client6', logo: img6 },
  { name: 'Client7', logo: img7 },
];

export default function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % clients.length);
  };

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + clients.length) % clients.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000); // Automatically move every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-[#FF6B00] mb-8 text-left">
          OUR CLIENTS
        </h2>

        {/* Slider */}
        <div className="relative flex items-center">
          {/* Previous Button */}
          <button
            onClick={prev}
            className="absolute left-4 z-10 p-3 bg-gray-100 rounded-full shadow-lg hover:bg-gray-200 transition-colors hidden md:block"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="overflow-hidden w-full">
            <div className="flex items-center justify-between gap-2">
              <AnimatePresence mode="wait">
                {[...Array(5)].map((_, i) => {
                  const index = (currentIndex + i) % clients.length;
                  return (
                    <motion.div
                      key={clients[index].name}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0"
                    >
                      <Image
                        src={clients[index].logo}
                        alt={clients[index].name}
                        width={200}
                        height={100}
                        className="w-[200px] h-[100px] object-contain"
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            className="absolute right-4 z-10 p-3 bg-gray-100 rounded-full shadow-lg hover:bg-gray-200 transition-colors hidden md:block"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
