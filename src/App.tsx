import { useState } from "react";

import "./App.scss";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainBodyPage from "./components/MainBodyPage/MainBodyPage";

function App() {
  const [count, setCount] = useState(0);



  function handleLikes() {
    setCount((likes) => likes+ 1);
  }
  return (
    <>
      <div>
        <h1>Vite + React + TypeScript</h1>
      </div>

      <button onClick={() => handleLikes()}>
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
