import React from 'react'

export default function Time({ time, correct }) {

    return (
        <div className='flex w-full md:w-1/2 gap-4 items-center mb-4'>
            <div className='w-full h-4 border-2 relative border-black rounded-full'>
                <div className={`w-0 bg-green-400 top-0 left-0 h-full ${!correct && 'animate-wider'} absolute rounded-full`}></div>
            </div>
            <p className='text-2xl w-8 font-mono'>{time}</p>
        </div>
    )
}
