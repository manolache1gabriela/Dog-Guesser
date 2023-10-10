import React from 'react'

export default function Error() {
    return (
        <div className='w-full h-96 flex flex-col md:flex-row items-center justify-center my-5'>
            <img src="./assets/sad-dog.png" alt="" />
            <p className='text-yellow-800 px-4 py-2 text-4xl text-center '>
                404 Not Found
            </p>
        </div>
    )
}
