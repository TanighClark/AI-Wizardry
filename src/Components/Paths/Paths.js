import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './Components/Banner/Banner'; // Import Banner if it's a component
import ImageGenerator from './Components/ImageGenerator/ImageGenerator';
import TextToSpeech from './Components/TextToSpeech/TextToSpeech';

const Paths = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Banner />} />
                <Route path="/image-generator" element={<ImageGenerator />} />
                <Route path="/text-to-speech" element={<TextToSpeech />} />

            </Routes>
        </div>
    );
}

export default Paths;
