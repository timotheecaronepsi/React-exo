import { useState } from 'react'
import Plateau from './Components/Plateau';
import Speudo from './Components/Speudo';
import Timer from './Components/Timer';
import Score from './Components/Score';
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1 className="titre-centre">MORPION</h1>
      </div>
      <div className="timer">
        <Timer />
      </div>
      <div className="plateau">
        <Plateau />
      </div>
      <div className="replay">

      </div>
      <div className="score-speudo">
        <div className="score">
        <Score />
        </div>
        <div className="speudo">
        <Speudo />
        </div>
      </div>
    </>
  )
}

export default App
