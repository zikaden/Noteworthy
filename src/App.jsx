import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
