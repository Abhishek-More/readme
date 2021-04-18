import {useEffect} from "react"
import logo from './logo.svg';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

function App() {
  const { transcript, resetTranscript } = useSpeechRecognition()
  return (
    <div>
      <button onClick={SpeechRecognition.startListening({ continuous: true })}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  )
}

export default App;
