// const TopBar = () => {
//   return (
//     <div className="bg-white py-2 border-b text-[13px]">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row flex-wrap items-center justify-between gap-4">
//         {/* Left Section */}
//         <div className="flex flex-col md:flex-row flex-wrap items-center gap-6 text-[#666] text-center md:text-left">
//           <div className="flex items-center gap-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               className="w-4 h-4 fill-current"
//             >
//               <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
//               <circle cx="12" cy="9" r="2.5" />
//             </svg>
//             <span>Office 304-B Amna Plaza Near Radio Pakistan Peshawar Road Rawalpindi</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               className="w-4 h-4 fill-current"
//             >
//               <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
//             </svg>
//             <a
//               href="mailto:info@eziline.com"
//               className="hover:text-[#0d6efd] transition-colors"
//             >
//               info@eziline.com
//             </a>
//           </div>
//           <div className="flex items-center gap-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               className="w-4 h-4 fill-current"
//             >
//               <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
//             </svg>
//             <a
//               href="tel:+923212225212"
//               className="hover:text-[#0d6efd] transition-colors"
//             >
//               +92321222 5212
//             </a>
//           </div>
//         </div>

//         {/* Social Icons */}
//         <div className="flex items-center gap-4">
//           <a
//             href="https://facebook.com/eziline"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#666] hover:text-[#0d6efd] transition-colors"
//           >
//             <svg
//               className="w-4 h-4 fill-current"
//               viewBox="0 0 24 24"
//             >
//               <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//             </svg>
//           </a>
//           <a
//             href="https://linkedin.com/company/eziline"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#666] hover:text-[#0d6efd] transition-colors"
//           >
//             <svg
//               className="w-4 h-4 fill-current"
//               viewBox="0 0 24 24"
//             >
//               <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
//             </svg>
//           </a>
//           <a
//             href="https://twitter.com/eziline"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#666] hover:text-[#0d6efd] transition-colors"
//           >
//             <svg
//               className="w-4 h-4 fill-current"
//               viewBox="0 0 24 24"
//             >
//               <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//             </svg>
//           </a>
//           <a
//             href="https://youtube.com/eziline"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#666] hover:text-[#0d6efd] transition-colors"
//           >
//             <svg
//               className="w-4 h-4 fill-current"
//               viewBox="0 0 24 24"
//             >
//               <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopBar;
const TopBar = () => {
  return (
    <div className="bg-white py-2 border-b text-[13px] hidden md:block">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <div className="flex flex-wrap items-center gap-6 text-[#666]">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            <span className="hidden lg:inline">Office 304-B Amna Plaza Near Radio Pakistan Peshawar Road Rawalpindi</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <a href="mailto:info@eziline.com" className="hover:text-[#0d6efd] transition-colors">info@eziline.com</a>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <a href="tel:+923212225212" className="hover:text-[#0d6efd] transition-colors">+92321222 5212</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://facebook.com/eziline" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-[#0d6efd] transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </a>
          <a href="https://linkedin.com/company/eziline" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-[#0d6efd] transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
          </a>
          <a href="https://twitter.com/eziline" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-[#0d6efd] transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
          <a href="https://youtube.com/eziline" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-[#0d6efd] transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar

