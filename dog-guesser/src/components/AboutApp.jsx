import React, { useState } from 'react'

export default function AboutApp() {

    const [learn, setLearn] = useState(false)

    return (
        <div className='bg-green-100 rounded-xl p-10 shadow-2xl flex flex-col items-center'>
            <p className='text-lg font-mono text-justify lg:px-10 font-normal box-content mb-6'>The "Paws and Guess" project is an exciting endeavor that combines the joy of gaming with the thrill of learning. This project is a personal journey aimed at mastering the art of using APIs (Application Programming Interfaces) while creating a fun and engaging experience for dog enthusiasts.</p>
            {!learn && <p className='text-md font-mono text-justify lg:px-10 font-normal box-content'>To learn more about the project click the button below.</p>}
            {learn && <>
                <ul>
                    <li className='text-lg font-mono font-semibold text-yellow-800'>Our Learning Mission</li>
                    <p className='text-md font-mono text-justify font-normal mb-2 box-content'>The primary goal of the "Dog Breed Name Guesser" project is to dive headfirst into the world of APIs. Through this project, we're on a mission to understand the power of APIs, how they work, and how they can enhance the user experience in a digital game. This is more than just a game; it's an educational adventure.</p>
                    <li className='text-lg font-mono font-semibold text-yellow-800'>Exploring the Canine Realm</li>
                    <p className='text-md font-mono text-justify font-normal mb-2 box-content'>Within this project, we have a virtual kennel filled with a diverse array of dog breeds. Each API call brings us closer to unraveling the mysteries of these furry friends. From retrieving breed information to showcasing adorable dog images, we're exploring the capabilities of APIs to enrich our content.</p>
                    <li className='text-lg font-mono font-semibold text-yellow-800'>Learning Through Play</li>
                    <p className='text-md font-mono text-justify font-normal mb-2 box-content'>While the project is a platform to experiment with APIs, it's also an opportunity to learn about the fascinating world of dog breeds. Every API interaction is a stepping stone toward building a more immersive and educational gaming experience.</p>
                    <li className='text-lg font-mono font-semibold text-yellow-800'>Challenge and Innovation</li>
                    <p className='text-md font-mono text-justify font-normal mb-2 box-content'>As we navigate the world of APIs, we're constantly challenging ourselves to find new and innovative ways to engage players. Expect exciting updates and improvements as we grow and learn.</p>
                    <li className='text-lg font-mono font-semibold text-yellow-800'>Join Us on Our Journey</li>
                    <p className='text-md font-mono text-justify font-normal mb-2 box-content'>We invite you to join us on this learning adventure. Follow our progress, share your insights, and, most importantly, enjoy the "Dog Breed Name Guesser" game as it evolves. Your feedback and support are invaluable in our quest to master APIs and deliver a fantastic gaming experience.</p>
                    <li className='text-lg font-mono font-semibold text-yellow-800'>Ready to Play?</li>
                    <p className='text-md font-mono text-justify font-normal mb-2 box-content'>Are you ready to embark on this journey with us? Stay tuned for updates and sneak peeks as we continue to refine our game and expand our knowledge of APIs. "Dog Breed Name Guesser" is where learning meets play, and we can't wait to have you as part of our community.</p>
                </ul>
            </>}
            {!learn && <button className='border-yellow-800 border-2 hover:bg-yellow-800 hover:text-white px-4 py-2 font-semibold text-black rounded-xl my-4 text-lg font-mono' onClick={() => { setLearn(true) }}>"Paws and Guess" Project</button>}
            <p className='text-2xl pt-6 font-mono text-center font-normal box-content'>&#x1F495; Thank you for being a part of this exciting project!</p>
        </div>
    )
}
