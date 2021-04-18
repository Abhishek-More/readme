import React from 'react'
import { Link } from 'react-router-dom'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import translate from 'translate'
import Nav from '../Nav/Nav'
import './landing.css'

export default function Landing() {

  const { transcript, resetTranscript } = useSpeechRecognition()

    return (
      <div className="landing">
      <Nav />
      <hr />
        <div className="title">
          <h1 className="title-text">Live Captioning.</h1>
          <h1 className="title-text">System-wide.</h1>
        </div>
          <Link className="start-session">start your session</Link>
      </div>
    )
}