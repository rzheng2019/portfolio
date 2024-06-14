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
          <Route index element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
        </ Routes>
      </ BrowserRouter>
    </div>
  );
}

export default App;
