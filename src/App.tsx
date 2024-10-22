import { useState } from "react";

import "./App.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import {
  aboutMeData,
  educationData,
  educationDataTitles,
} from "./apiData/ApiData";
import Education from "./components/EducationDetails/EducationDetails";
import { BrowserRouter, Route, Routes,useNavigate } from "react-router-dom";
import MainBodyPage from "./components/MainBodyPage/MainBodyPage";

function App() {
  const [count, setCount] = useState(0);

  type likes = {
    likes: Number;
  };
  type likesdata = {
    likes: likes[];
  };

  function handleLikes({ likes }: likesdata) {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <>
      <div>
        <h1>Vite + React + TypeScript</h1>
      </div>

      <button onClick={() => handleLikes({ likes: [{ likes: count }] })}>
        Likes {count}
      </button>

      <BrowserRouter>
        <Routes>
          {/* Route for Main page */}

          <Route path="/" element={<MainBodyPage/>} />
        
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
