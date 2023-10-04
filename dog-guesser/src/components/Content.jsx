import React, { useState } from 'react'
import About from './About'
import PlayButton from './PlayButton';
import Features from './Features';
import Start from './Start';
import AboutApp from './AboutApp';

export default function Content() {
    const [play, setPlay] = useState(false);
    const letPlay = () => {
        if (play === false) {
            setPlay(true);
        }
    }

    return (
        <div className='bg-yellow-100 p-10'>
            {!play &&
                <>
                    <About />
                    <div className='flex flex-col lg:flex-row gap-5 my-4 justify-center items-center'>
                        <Features />
                        <Start />
                    </div>
                </>
            }
            <PlayButton letPlay={letPlay} />
            <AboutApp />
        </div>
    )
}
