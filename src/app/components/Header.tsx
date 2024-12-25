'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null);

  const handleDropdown = (key: string) => {
    setDropdown(dropdown === key ? null : key);
  };
  

  return (
    <header className="bg-[#1a1b29] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo */}
          <Link href="/" className="flex items-end">
            <Image 
              src={Logo} 
              alt="Eziline Software House" 
              width={180} 
              height={45}
              className="h-[45px] w-auto"
            />
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6">
            {[
              { label: 'HOME', link: '#' },
              { 
                label: 'SERVICES', 
                link: '#', 
                dropdown: ['Web Development', 'Mobile Apps', 'SEO Services']
              },
              { 
                label: 'PORTFOLIO', 
                link: '#', 
                dropdown: ['Projects', 'Case Studies']
              },
              { label: 'EZI UPDATES', link: '#' },
              { 
                label: 'SOFTWARES', 
                link: '#', 
                dropdown: ['ERP Systems', 'CRM Solutions']
              },
              { label: 'LOGIN', link: '#' },
              { label: 'CONTACT', link: '#' },
            ].map((item) => (
              <div key={item.label} className="relative group">
                <Link 
                  href={item.link} 
                  className="text-white hover:text-[#ffc107] transition-colors text-[15px] font-medium"
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="absolute left-0 bg-white shadow-xl py-4 mt-2 rounded-xl w-60 border-t-4 border-[#ffc107] opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem}
                        href="#"
                        className="block text-black hover:bg-[#ffc107] hover:text-white px-4 py-2 text-[15px] rounded-lg transition-all"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              href="#" 
              className="bg-gradient-to-r from-[#c49b3f] to-[#dab45e] text-white px-4 py-2 rounded text-[15px] font-medium hover:opacity-90 transition-opacity"
            >
              16TH ANNIVERSARY
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden text-white p-2"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden bg-[#1a1b29] text-white mt-4 space-y-4">
            {[
              { label: 'HOME', link: '#' },
              { 
                label: 'SERVICES', 
                dropdown: ['Web Development', 'Mobile Apps', 'SEO Services']
              },
              { 
                label: 'PORTFOLIO', 
                dropdown: ['Projects', 'Case Studies']
              },
              { label: 'EZI UPDATES', link: '#' },
              { 
                label: 'SOFTWARES', 
                dropdown: ['ERP Systems', 'CRM Solutions']
              },
              { label: 'LOGIN', link: '#' },
              { label: 'CONTACT', link: '#' },
            ].map((item) => (
              <div key={item.label}>
                <div 
                  className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-[#ffc107] transition-all"
                  onClick={() => handleDropdown(item.label)}
                >
                  <span>{item.label}</span>
                  {item.dropdown && (
                    <svg 
                      className={`w-5 h-5 transition-transform ${
                        dropdown === item.label ? 'rotate-180' : 'rotate-0'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  )}
                </div>
                {item.dropdown && dropdown === item.label && (
                  <div className="bg-white text-black px-4 py-2 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem}
                        href="#"
                        className="block hover:text-[#ffc107] px-2 py-1"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
