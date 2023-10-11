import React, { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import Error from './Error';
import Correct from './Correct';
import Incorrect from './Incorrect';
import Loading from './Loading'
import Score from './Score';
import Time from './Time';

export default function Game() {

    const [correct, setCorrect] = useState(false);
    const [show, setShow] = useState(false);
    const [points, setPoints] = useState(0);
    const [time, setTime] = useState(15);
    const [isCountdown, setIsCountdown] = useState(true);
    const { data, refetch, isLoading, isSuccess, isError } = useQuery('dog', getDogInfo);

    async function getDogInfo() {
        const dogs = await fetchTheDog();
        const otherDogs = await fetchOtherDogs(dogs);
        let link = await fetchDogs(dogs);

        return [dogs, link, otherDogs];
    }

    async function fetchTheDog() {
        let res = await fetch('https://dog.ceo/api/breeds/list/all');
        res = await res.json();
        let response = Object.keys(res.message);
        let dog = response[randomIntFromInterval(0, response.length)]
        return dog;
    }

    async function fetchOtherDogs(dogs) {
        let arrOfDogs = [];
        let dogSet = new Set();
        dogSet.add(dogs);

        while (arrOfDogs.length < 3) {
            let res = await fetch('https://dog.ceo/api/breeds/list/all');
            res = await res.json();
            let response = Object.keys(res.message);
            let otherDog = response[randomIntFromInterval(0, response.length)];

            if (!dogSet.has(otherDog) && dogs !== otherDog) {
                arrOfDogs.push(otherDog);
                dogSet.add(otherDog);
            }
        }

        arrOfDogs.push(dogs);
        return arrOfDogs.sort(() => 0.6 - Math.random());
    }


    async function fetchDogs(dogs) {
        let result = await fetch(`https://dog.ceo/api/breed/${dogs}/images`);
        result = await result.json();
        if (result === undefined) {
            result = await fetch(`https://dog.ceo/api/breed/${dogs}/images`);
            result = await result.json();
            return result.message[randomIntFromInterval(0, result.message.length)]
        }
        return result.message[randomIntFromInterval(0, result.message.length)]
    }

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    async function isCorrect(dog) {
        setShow(true);
        const isCorrectAnswer = dog === data[0];
        setCorrect(isCorrectAnswer);
        const quantity = points + 1;
        if (isCorrectAnswer) {
            setPoints(quantity);
            setTimeout(() => {
                const setterCountdown = false;
                setShow(false)
                refetch();
                setCorrect(false)
                setIsCountdown(setterCountdown);
                setTime(15);
                setIsCountdown(!setterCountdown);
            }, 1000);
        }
    }

    function useInterval(callback, delay) {
        const savedCallback = useRef();

        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    function nextDog() {
        const setterCountdown = false;
        setIsCountdown(setterCountdown);
        setShow(false);
        refetch();
        setTime(15);
        setIsCountdown(!setterCountdown);
    }

    useInterval(() => {
        let newTime = time - 1;
        setTime(newTime)
    }, isCountdown ? 1000 : null);

    useInterval(() => {
        const setterCountdown = false;
        setIsCountdown(setterCountdown);
        nextDog();
        setTime(15);
        setIsCountdown(!setterCountdown);
    }, isCountdown ? 15000 : null);

    return (
        <div>
            {isLoading && <Loading />}
            {isError && <Error />}
            {isSuccess &&
                <div className='flex justify-center md:justify-between items-center flex-col-reverse md:flex-row'>
                    <Time time={time} isCountdown={isCountdown} correct={correct} />
                    < Score points={points} setPoints={setPoints} />
                </div>}
            <div className='flex flex-col'>
                {show && <>
                    {correct && <Correct />}
                    {!correct && <Incorrect />}
                </>}
            </div>
            {isSuccess &&
                <div>
                    <div className='w-full py-10 flex flex-col md:flex-row gap-10'>
                        <div style={{ backgroundImage: `url('${data[1]}'` }} className="h-[30rem] w-full border-2 bg-cover bg-no-repeat bg-center border-yellow-800 rounded-xl"></div>
                        <div className='w-full grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-2'>
                            {data[2].map((dog) => (<button onClick={() => isCorrect(dog)} key={dog} className='bg-green-100 hover:animate-pulse hover:bg-yellow-600 rounded-xl h-16 md:h-full font-mono capitalize'>{dog}</button>))}
                        </div>
                    </div>
                    <button className='bg-yellow-800 hover:bg-yellow-600 font-semibold text-white w-64 h-16 rounded-xl mb-4 text-2xl font-mono' onClick={nextDog}>Other Dog</button>
                </div>
            }
        </div >
    )
}
