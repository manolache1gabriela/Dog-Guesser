import React from 'react'

export default function PlayButton({ letPlay }) {
    return (
        <div className='flex justify-center'>
            <button className='bg-yellow-800 hover:bg-yellow-600 font-semibold text-white w-64 h-16 rounded-xl my-4 text-2xl font-mono' onClick={letPlay}>Guess Dog</button>
        </div>
    )
}
