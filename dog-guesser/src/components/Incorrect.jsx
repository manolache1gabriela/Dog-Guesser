import React from 'react'

export default function Incorrect() {
    return (
        <div className='flex items-center justify-center w-full'>
            <div className='rounded-xl font-mono w-full bg-red-300 h-20 md:w-1/2 lg:w-1/4 flex items-center justify-center'>
                <p className='text-white px-4 py-2 text-2xl'>
                    Incorrect &#10060;
                </p>
            </div>
        </div>
    )
}
