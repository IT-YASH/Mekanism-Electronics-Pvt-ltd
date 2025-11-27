import { SearchIcon } from 'lucide-react'
import React from 'react'
import pokemonlogo from "../assets/ball.png"

const Navbar = () => {
    return (
        <div className='w-full flex justify-between bg-red-500 p-2 px-35'>
            <div className='flex gap-2 items-center'>
                <img src={pokemonlogo} className='w-8' alt="" />
                <h2 className='font-bold text-white flex'>
                    Pokedex
                </h2>
            </div>
            <div className="flex items-center border pl-4 gap-2 border-gray-500/30 rounded-md overflow-hidden w-64 bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 30 30" fill="#6B7280">
                    <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
                </svg>
                <input type="text" placeholder="Search" className="w-full h-full outline-none text-gray-500 bg-transparent placeholder-gray-500 text-sm" />
            </div>
        </div>
    )
}

export default Navbar