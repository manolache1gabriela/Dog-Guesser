import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <div className='px-10 lg:px-20 py-5 bg-green-200'>
            <div className='flex gap-10 items-center'>
                <img className='w-16' src="./assets/paw-solid.svg" alt="app logo" />
                <p className='font-semibold text-yellow-800 hover:text-white font-mono lg:text-3xl text-2xl select-none cursor-pointer'>Paws and Guess</p>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center py-10 gap-4'>
                <ul className='text-xl font-mono flex gap-3 items-center'> Contact:
                    <li><a href="https://www.facebook.com/gabriela.manolache.739/" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className='hover:text-yellow-800' icon={faFacebook} size="2xl" /></a></li>
                    <li><a href="https://www.instagram.com/mano.gabriela/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='hover:text-yellow-800' icon={faInstagram} size="2xl" /></a></li>
                    <li><a href="https://www.linkedin.com/in/gabriela-manolache-240916215/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='hover:text-yellow-800' icon={faLinkedin} size="2xl" /></a></li>
                    <li><a href="https://github.com/manolache1gabriela" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='hover:text-yellow-800' icon={faGithub} size="2xl" /></a></li>
                </ul>
                <p className='text-xl text-center font-mono'>Project Repository: <br />
                    <a className='hover:text-yellow-800' href="https://github.com/manolache1gabriela/Dog-Guesser" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} size="sm" /> Dog Guesser</a>
                </p>
                <p className='text-xl text-center font-mono'>API used: <br />
                    <a className='hover:text-yellow-800' href="https://www.thedogapi.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} size="sm" /> The Dog API</a>
                </p>
            </div>
            <p className='text-sm text-center pb-4 font-mono'>Copyright &#169; 2023. All rights are reserved</p>
        </div>
    )
}
