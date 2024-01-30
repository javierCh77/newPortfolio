import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <nav className="  px-8 md:px-12  ">
      <div className="container mx-auto flex items-center justify-between ">
   
        {/* Menú Hamburguesa para dispositivos pequeños */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Menú de Navegación para pantallas grandes */}
        <div className="hidden lg:flex space-x-4 ml-10 ">
        <Link to="/abaut" class="text-lg font-semibold leading-6 text-gray-400  hover:text-white hover:underline hover:font-bold decoration-sky-500">
              Abaut
            </Link>
            <Link to="/articles" class="text-lg font-semibold leading-6 text-gray-400  hover:text-white hover:underline hover:font-bold decoration-green-500">
            Articles
            </Link>
            <Link to="/projects" class="text-lg font-semibold leading-6 text-gray-400  hover:text-white hover:underline hover:font-bold decoration-yellow-300">
              Projects
            </Link>
            <Link to="https://github.com/javierCh77" target="_blank" class="flex gap-2 text-lg font-semibold leading-6 text-gray-400  hover:text-white  hover:underline hover:font-bold decoration-indigo-500">
              GitHub
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Link>
        </div>
      </div>

      {/* Menú desplegable para dispositivos pequeños */}
      {menuAbierto && (
        <div className="lg:hidden mt-2">
          <ul className="bg-gray-700 p-2">
            <li className="text-white py-1"><Link to="/abaut" class="text-lg font-semibold leading-6 text-gray-400  hover:text-white hover:underline hover:font-bold decoration-sky-500">
              Abaut
            </Link></li>
            <li className="text-white py-1"> <Link to="/blog" class="text-lg font-semibold leading-6 text-gray-400  hover:text-white hover:underline hover:font-bold decoration-green-500">
              Blog
            </Link></li>
            <li className="text-white py-1"><Link to="/projects" class="text-lg font-semibold leading-6 text-gray-400  hover:text-white hover:underline hover:font-bold decoration-yellow-300">
              Projects
            </Link></li>
            <li className="text-white py-1"><Link to="https://github.com/javierCh77" target="_blank" class="flex gap-2 text-lg font-semibold leading-6 text-gray-400  hover:text-white  hover:underline hover:font-bold decoration-indigo-500">
              GitHub
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;