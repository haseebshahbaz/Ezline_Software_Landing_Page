// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'




// const recentPosts = [
//   {
//     title: '16th Anniversary',
//     date: 'February 4, 2024',
//     image: img8
//   },
//   {
//     title: 'Presidential Awards Won by Eziline Software House in IT Sector',
//     date: 'February 20, 2023',
//     image: img6
//   },
//   {
//     title: 'Eziline Exhibited at LEAP 2023 Saudi Arabia',
//     date: 'February 7, 2023',
//     image: img7
//   }
// ]

// export default function Footer() {
//   return (
//     <footer className="bg-[#1a1b29] text-white">
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* About Section */}
//           <div>
//             <h3 className="text-xl font-bold mb-6 flex items-center">
//               ABOUT
//               <svg className="w-4 h-4 ml-2 text-red-500" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"/>
//               </svg>
//             </h3>
//             <p className="text-gray-400 mb-6 text-sm sm:text-base">
//               Tech House Having 100+ Quality Products and Innovations at national and international markets.
//               Rated as Best Software House in Region
//             </p>
//             <div className="flex space-x-4 flex-wrap">
//               <Image src={img1} alt="PSEB" width={80} height={40} className="w-20 sm:w-auto" />
//               <Image src={img2} alt="P@SHA" width={80} height={40} className="w-20 sm:w-auto" />
//             </div>
//             <div className="mt-4 flex space-x-4 flex-wrap">
//               <Image src={img4} alt="Google Reviews" width={100} height={40} className="w-24 sm:w-auto" />
//               <Image src={img5} alt="ISO Certified" width={80} height={40} className="w-20 sm:w-auto" />
//             </div>
//           </div>

//           {/* Recent Posts */}
//           <div>
//             <h3 className="text-xl font-bold mb-6 flex items-center">
//               RECENT POSTS
//               <svg className="w-4 h-4 ml-2 text-red-500" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"/>
//               </svg>
//             </h3>
//             <div className="space-y-6">
//               {recentPosts.map((post) => (
//                 <div key={post.title} className="flex gap-4">
//                   <Image
//                     src={post.image}
//                     alt={post.title}
//                     width={80}
//                     height={80}
//                     className="rounded w-20 sm:w-auto"
//                   />
//                   <div>
//                     <h4 className="text-sm font-medium hover:text-[#00BCD4] transition-colors">
//                       <Link href="#">{post.title}</Link>
//                     </h4>
//                     <p className="text-[#00BCD4] text-sm mt-2">{post.date}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-xl font-bold mb-6 flex items-center">
//               CONTACT
//               <svg className="w-4 h-4 ml-2 text-red-500" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"/>
//               </svg>
//             </h3>
//             <div className="space-y-4 text-gray-400 text-sm sm:text-base">
//               <p><strong className="text-white">PK Office:</strong> 304-G, Amna Plaza Pesh Rd Rawalpindi</p>
//               <p><strong className="text-white">US Office:</strong> 16192 Coastal Highway Lewes, DE</p>
//               <p><strong className="text-white">UK Office:</strong> Intl. House, 776-778 Barking Rd London</p>
//               <p><strong className="text-white">FR Office:</strong> 5 avenue Pierre Salvi 95500 Gonesse Paris</p>
//               <p><strong className="text-white">Ph:</strong> +92 51 5491184 / +92 51 8772888</p>
//               <p><strong className="text-white">Email:</strong> info@eziline.com</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex flex-wrap justify-between items-center">
//             <p className="text-gray-400 text-sm">
//               2022 © Copyrights Eziline Software House
//             </p>
//             <div className="flex items-center flex-wrap space-x-4 sm:space-x-6">
//               <Link href="#" className="text-gray-400 hover:text-white transition-colors">Career</Link>
//               <Link href="#" className="text-gray-400 hover:text-white transition-colors">Internships</Link>
//               <Link href="#" className="text-gray-400 hover:text-white transition-colors">Ezi Products</Link>
//               <Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
//               <Link href="#" className="text-gray-400 hover:text-white transition-colors">Bank</Link>
//             </div>
//             <div className="flex items-center space-x-4 mt-4 sm:mt-0">
//               <Link href="#" className="text-gray-400 hover:text-[#1877f2] transition-colors">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
//                 </svg>
//               </Link>
//               <Link href="#" className="text-gray-400 hover:text-[#0077b5] transition-colors">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
//                 </svg>
//               </Link>
//               <Link href="#" className="text-gray-400 hover:text-[#1da1f2] transition-colors">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//                 </svg>
//               </Link>
//               <Link href="#" className="text-gray-400 hover:text-[#ff0000] transition-colors">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }
'use client'

import Image from 'next/image'
import Link from 'next/link'
import PashaImg from '../assets/PASHA.png'
import PSEBImg from '../assets/PSEB.png'
import ISO from '../assets/ISO.png'
import Google from '../assets/GoogleReviews.png'
import img6 from '../assets/footer presedential.jpg'
import img7 from '../assets/footer post2.jpg'
import img8 from '../assets/footer post3.jpg'

const recentPosts = [
  {
    title: '16th Anniversary',
    date: 'February 4, 2024',
    image: img8
  },
  {
    title: 'Presidential Awards Won by Eziline Software House in IT Sector',
    date: 'February 20, 2023',
    image: img6
  },
  {
    title: 'Eziline Exhibited at LEAP 2023 Saudi Arabia',
    date: 'February 7, 2023',
    image: img7
  }
]

export default function Footer() {
  return (
    <footer className="bg-[#1a1b29] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              ABOUT
              <svg className="w-4 h-4 ml-2 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"/>
              </svg>
            </h3>
            <p className="text-gray-400 mb-4">
              Tech House Having 100+ Quality Products and Innovations at national and international markets.
              Rated as Best Software House in Region
            </p>
            <div className="flex flex-wrap gap-4">
              <Image src={PSEBImg} alt="PSEB" width={80} height={40} />
              <Image src={ISO} alt="ISO Certified" width={80} height={40} />
              <Image src={PashaImg} alt="P@SHA" width={80} height={40} />
              <Image src={Google} alt="Google Reviews" width={260} height={40} />
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              RECENT POSTS
              <svg className="w-4 h-4 ml-2 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"/>
              </svg>
            </h3>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.title} className="flex gap-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={80}
                    height={80}
                    className="rounded"
                  />
                  <div>
                    <h4 className="text-sm font-medium hover:text-[#00BCD4] transition-colors">
                      <Link href="#">{post.title}</Link>
                    </h4>
                    <p className="text-[#00BCD4] text-sm mt-2">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              CONTACT
              <svg className="w-4 h-4 ml-2 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"/>
              </svg>
            </h3>
            <div className="space-y-2 text-gray-400">
              <p><strong className="text-white">PK Office:</strong> 304-G, Amna Plaza Pesh Rd Rawalpindi</p>
              <p><strong className="text-white">US Office:</strong> 16192 Coastal Highway Lewes, DE</p>
              <p><strong className="text-white">UK Office:</strong> Intl. House, 776-778 Barking Rd London</p>
              <p><strong className="text-white">FR Office:</strong> 5 avenue Pierre Salvi 95500 Gonesse Paris</p>
              <p><strong className="text-white">Ph:</strong> +92 51 5491184 / +92 51 8772888</p>
              <p><strong className="text-white">Email:</strong> info@eziline.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              2022 © Copyrights Eziline Software House
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 mb-4 md:mb-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Career</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Internships</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Ezi Products</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Bank</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#1877f2] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#0077b5] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#1da1f2] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#ff0000] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

