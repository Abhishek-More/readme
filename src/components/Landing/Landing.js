import React, { useRef } from 'react'
import { useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import translate from 'translate'
import Nav from '../Nav/Nav'
import './landing.css'

export default function Landing() {

    const { transcript, resetTranscript } = useSpeechRecognition()

    async function handleStart() {
        SpeechRecognition.startListening({ continuous: true })
        console.log("Started")
    }

    function handleStop() {
        SpeechRecognition.abortListening();
        let button = document.querySelector('button')
        console.log("stopped")
        button.innerHTML = "start your session"
        button.onclick = handleStop;
    }

    useEffect(() => {
        fetch("http://localhost:3001/getwords?text=" + transcript).then(res => console.log(res));
    }, [transcript]);

    useEffect(() => {
        handleStart();
    }, [])

    return (
        <div className="landing">
            <Nav />
            <hr />
            <div className="container">
                <h2>Transcript April 18, 2021 10:02AM</h2>
                {transcript}
            </div>
        </div>
    )
}
