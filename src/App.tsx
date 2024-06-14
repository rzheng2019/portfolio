import React from 'react';
import './App.css';

// Import react-router-dom
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/portfolio' element={<Home />}></Route>
          <Route path='/portfolio/about' element={<About />}></Route>
          <Route path='/portfolio/contact' element={<Contact />}></Route>
          <Route path='/portfolio/resume' element={<Resume />}></Route>
          <Route path='/portfolio/projects' element={<Projects />}></Route>
        </ Routes>
      </ BrowserRouter>
    </div>
  );
}

export default App;
