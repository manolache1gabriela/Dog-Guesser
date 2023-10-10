import React from 'react'

export default function Score({ points }) {
    return (
        <div className='mb-2 flex justify-center md:justify-end'>
            <p className='text-yellow-800 px-4 py-2 text-4xl'>
                Score: &#127942; {points}
            </p>
        </div>
    )
}
