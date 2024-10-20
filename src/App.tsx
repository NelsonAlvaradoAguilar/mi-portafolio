import { useState } from 'react'

import './App.css'
 import AboutMe from './components/AboutMe/AboutMe'
import { aboutMeData } from './apiData/ApiData'
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <>
      <div>
      <h1>Vite + React</h1>
      </div>
      <AboutMe aboutMeData={aboutMeData}/>
   
    
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  
    
    
    </>
  )
}

export default App
