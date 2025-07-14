import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full p-10 gap-3 bg-gray-900 py-12 text-center text-white flex justify-center items-center">
     <div>
       <nav>
        <a href="/Hero_Section" className="text-white mx-2 hover:underline">Main</a>
        <a href="/about" className="text-white mx-2 hover:underline">About Us</a>
        <a href="/contact" className="text-white mx-2 hover:underline">Contact Info</a>
      </nav>
     </div>
      
    </footer>
  )
}

export default Footer