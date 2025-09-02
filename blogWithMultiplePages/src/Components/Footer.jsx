import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo Section */}
          <div className="text-2xl font-bold mb-4 md:mb-0">
            MyBlog
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col md:flex-row gap-4 text-lg">
            <li>
              <NavLink 
                to="/" 
                className="hover:text-gray-200 transition-colors duration-200"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/blog" 
                className="hover:text-gray-200 transition-colors duration-200"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className="hover:text-gray-200 transition-colors duration-200"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className="hover:text-gray-200 transition-colors duration-200"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm mt-4 border-t border-white/20 pt-2">
          © {new Date().getFullYear()} MyBlog. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default Footer
