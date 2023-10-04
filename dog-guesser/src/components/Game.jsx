import React from 'react'
import { useQuery } from 'react-query'

export default function Game() {

    const { data: dogs, isSuccess, isLoading } = useQuery(['dogs'], fetchDogs);
    function fetchDogs() {
        return fetch(`https://dog.ceo/api/breed/hound/images`).then(res => res.json()).then(dogs => dogs.message[randomIntFromInterval(0, dogs.message.length)])
    }
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return (
        <div>
            {isLoading && <div>Loading</div>}
            {isSuccess && <div className='w-full py-10 flex flex-col md:flex-row gap-10'>
                <div className="h-[30rem] w-full border-2 bg-[url('https://cdn2.thedogapi.com/images/HkZ57lq4m_1280.jpg')] bg-cover bg-center border-yellow-800 rounded-xl"></div>
                <div className='w-full grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-2'>
                    <button className='bg-green-100 hover:bg-yellow-600 rounded-xl h-16 md:h-full'>choice 1</button>
                    <button className='bg-green-100 hover:bg-yellow-600 rounded-xl'>choice 2</button>
                    <button className='bg-green-100 hover:bg-yellow-600 rounded-xl'>choice 3</button>
                    <button className='bg-green-100 hover:bg-yellow-600 rounded-xl'>choice 4</button>
                </div>
            </div>}
            <div className='flex justify-center md:justify-start'>
                <button className='bg-slate-400 hover:bg-yellow-600 font-semibold text-white px-4 py-2 rounded-xl text-2xl font-mono'>Other Image</button>
            </div>
        </div>
    )
}
