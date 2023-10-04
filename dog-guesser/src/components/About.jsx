import React from 'react'

export default function About() {
    return (
        <div className='lg:px-10 py-5 flex flex-col lg:flex-row gap-5 items-center'>
            <div className='lg:w-2/3 bg-green-100 rounded-xl w-full p-6 shadow-2xl'>
                <p className='text-center text-lg font-mono'>Welcome to "Paws and Guess," the ultimate dog breed name guesser game that will put your canine knowledge to the test! If you're a dog lover, this game is tailor-made for you. Challenge yourself and your friends to see who can correctly identify the most dog breeds and become the ultimate dog breed guru.</p>
            </div>
            <ul className='text-xl font-mono text-justify list-decimal lg:ml-10 lg:w-2/3'><span className=' font-semibold text-yellow-800 text-2xl'>How to Play:</span>
                <li className='text-base'>Start the game and you'll be presented with a series of adorable dog pictures.</li>
                <li className='text-base'>Examine each furry friend closely; observe their size, coat, ears, and tail.</li>
                <li className='text-base'>Choose the breed name from multiple options provided.</li>
                <li className='text-base'>Earn points for each correct answer</li>
            </ul>
        </div>
    )
}