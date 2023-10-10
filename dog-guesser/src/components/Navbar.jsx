import React from 'react'

export default function Navbar() {
    return (
        <div className='flex justify-between items-center px-10 lg:px-20 py-5 bg-green-200'>
            <a href="/"><img className='w-16' src="./assets/paw-solid.svg" alt="app logo" /></a>
            <p className='font-semibold text-yellow-800 hover:text-white font-mono lg:text-3xl text-2xl select-none cursor-pointer'>Paws and Guess</p>
        </div>
    )
}
