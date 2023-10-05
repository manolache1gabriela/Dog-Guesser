import React from 'react'
import { useQuery } from 'react-query'

export default function Game() {


    const { data, isLoading, isSuccess } = useQuery('nume', functiaCreata);

    async function functiaCreata() {
        const dogs = await fetchTheDog();
        let link = await fetchDogs(dogs);
        return [dogs, link];
    }

    async function fetchTheDog() {
        let res = await fetch('https://dog.ceo/api/breeds/list/all');
        res = await res.json();
        let response = Object.keys(res.message)
        return response[randomIntFromInterval(0, response.length)];
    }

    async function fetchDogs(dogs) {
        let result = await fetch(`https://dog.ceo/api/breed/${dogs}/images`);
        result = await result.json()
        return result.message[randomIntFromInterval(0, result.message.length)]
    }

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


    console.log(data);

    return (
        <div>
            {isLoading && <div>Loading</div>}
            {isSuccess && <div className='w-full py-10 flex flex-col md:flex-row gap-10'>
                {isSuccess && <div style={{ backgroundImage: `url('${data[1]}' ` }} className="h-[30rem] w-full border-2 bg-cover bg-no-repeat bg-center border-yellow-800 rounded-xl"></div>}
                <div className='w-full grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-2'>
                    <button className='bg-green-100 hover:bg-yellow-600 rounded-xl h-16 md:h-full'>{data[0]}</button>
                    <button className='bg-green-100 hover:bg-yellow-600 rounded-xl'>choice 2</button>
                    <button className='bg-green-100 hover:bg-yellow-600 rounded-xl'>choice 3</button>
                    <button className='bg-green-100 hover:bg-yellow-600 rounded-xl'>choice 4</button>
                </div>
            </div>}
            <div className='flex justify-center md:justify-start'>
                <button className='bg-slate-400 hover:bg-yellow-600 font-semibold text-white px-4 py-2 rounded-xl text-2xl font-mono'>Other Image</button>
            </div>
        </div >
    )
}
