import { useState } from 'react'

import './App.scss'
 import AboutMe from './components/AboutMe/AboutMe'
import { aboutMeData, educationData, educationDataTitles } from './apiData/ApiData'
import Education from './components/EducationDetails/EducationDetails'
function App() {
  const [count, setCount] = useState(0)
type likes ={
  likes:Number
}
type likesdata={
  likes:likes[]
}

 function handleLikes({likes}:likesdata) {
  setCount(prevCount => prevCount + 1);
 }
  return (
    <>
      <>
      <div>
      <h1>Vite + React + TypeScript</h1>
      </div>
      <AboutMe aboutMeData={aboutMeData}/>
   
    <Education educationData={educationData} titles={educationDataTitles} />
    <button onClick={() => handleLikes({ likes: [{ likes: count }] })}>
       Likes {count}
      </button>
    </>
  
    
    
    </>
  )
}

export default App
