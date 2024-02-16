import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  setInterval(changeTime,1000);
  var time = new Date().toLocaleTimeString();
  const [count, setCount] = useState(0);

  function changeTime(){
    var newTime = new Date().toLocaleTimeString();
    setCount(newTime);
  }

  return (
    <>
    <div className='container'>
     <h1>{time}</h1>
    <button onClick={changeTime}>Get Time</button>
    </div>
     
    </>
  )
}

export default App
