import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Projects from './pages/Projects';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="signin" element={<Signin />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="projects" element={<Projects />}/>
        <Route path="about" element={<About />}/>
        <Route path="dashboard" element={<Dashboard />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
