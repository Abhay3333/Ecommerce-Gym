import React from 'react'
import Logo from '../../Assets/Logo.png'
import {NavLink,Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="flex items-center justify-center">
    <nav className="relative flex w-full flex-wrap items-center justify-center bg-gradient-to-r from-gray-900 to-zinc-800 h-[6rem] text-neutral-900 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-white lg:py-2">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="ml-2 items-center justify-center">
          <Link to="/">
            <img src={Logo} className="h-24 w-[13rem]" alt="Logo" />
          </Link>
        </div>
        <ul className="flex items-center justify-center mx-5 space-x-6 text-white lg:space-x-8">
          <li>
            <NavLink to="/bestSellers">BestSellers</NavLink>
          </li>
          <li>
            <NavLink to="/homeGym">HomeGym</NavLink>
          </li>
          <li>
            <NavLink to="/crossfit">Crossfit</NavLink>
          </li>
          <li>
            <NavLink to="/machines">Machines</NavLink>
          </li>
          <li>
            <NavLink to="/cardio">Cardio</NavLink>
          </li>
          <li>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-b border-white text-white px-3 py-1 focus:outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-2 top-2 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.293 5.293a1 1 0 011.414 1.414l4 4a1 1 0 01-1.414 1.414l-4-4a1 1 0 111.414-1.414z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M8 16a8 8 0 100-16 8 8 0 000 16z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>
          <li>
            <NavLink to="/signup">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 7c0-1.104.896-2 2-2h8a2 2 0 012 2v1M4 6h16M4 10h16"
                />
              </svg>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  
  
  
  )
}

export default NavBar