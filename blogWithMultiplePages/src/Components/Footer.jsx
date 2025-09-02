import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='w-full flex justify-around p-4 absolute bottom-0 bg-amber-500'>
        <div>
            logo
        </div>
        <div>
             <ul className="flex gap-5 flex-col">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
    </div>
    </>
  )
}

export default Footer