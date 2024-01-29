import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/HomePage/Home';
import HomeContent from './Components/HomePage/HomeContent/HomeContent';
import ImageGenerator from './Components/ImageGenerator/ImageGenerator';
import TextToSpeech from './Components/TextToSpeech/TextToSpeech';
import Footer from './Components/Footer/Footer';
import ChatGPT from './Components/ChatGBT/ChatGPT';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-content" element={<HomeContent />} />
          <Route path="/image-generator" element={<ImageGenerator />} />
          <Route path="/text-to-speech" element={<TextToSpeech />} />
          <Route path="/text-generation" element={<ChatGPT />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
