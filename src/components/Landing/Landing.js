import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import translate from 'translate'
import Nav from '../Nav/Nav'
import './landing.css'

export default function Landing() {

    const { transcript, resetTranscript } = useSpeechRecognition()

    async function handleStart() {
        SpeechRecognition.startListening({ continuous: true })
        let button = document.querySelector('button')
        console.log("Started")
        button.innerHTML = 'stop your session'
        button.onclick = handleStop;
    }

    function handleStop() {
        SpeechRecognition.abortListening();
        let button = document.querySelector('button')
        console.log("stopped")
        button.innerHTML = "start your session"
        button.onclick = handleStop;
    }

    return (
        <div className="landing">
            <Nav />
            <hr />
            <div className="container">
                <div className="title">
                    <h1 className="title-text">Live Captioning.</h1>
                    <h1 className="title-text">System-wide.</h1>
                    <button className="start-session" onClick={handleStart}>start your session</button>
                </div>
                <div className="doc">Hello, welcome to readme! Start a session to get system-wide live captioning.{transcript}</div>
            </div>
            <div id="pdfLink"></div>
        </div>
    )
}
