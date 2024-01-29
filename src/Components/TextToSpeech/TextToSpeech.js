import React, { useRef, useState } from 'react';
import './TextToSpeech.css';

const TextToSpeech = () => {
    const [audioUrl, setAudioUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedVoice, setSelectedVoice] = useState("Alloy");
    const inputRef = useRef(null);

    const availableVoices = {
        "Alloy": "alloy",
        "Echo": "echo",
        "Fable": "fable",
        "Onyx": "onyx",
        "Nova": "nova",
        "Shimmer": "shimmer",
    };

    const generateSpeech = async () => {
        const text = inputRef.current.value;
        if (!text) {
            return;
        }
        setLoading(true);

        const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
        const endpoint = 'https://api.openai.com/v1/audio/speech';

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "tts-1",
                    voice: availableVoices[selectedVoice],
                    input: text,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const blob = await response.blob();
            const audioUrl = URL.createObjectURL(blob);
            setAudioUrl(audioUrl);
        } catch (error) {
            console.error('Error generating speech:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-to-speech-generator">
            <div className='heade'>Text to Speech <span>Generator</span></div>

            <textarea type="text" ref={inputRef} placeholder="Enter your text"></textarea>
            <div> {audioUrl && <audio src={audioUrl} controls autoPlay />}</div>
            <div className='voice-over' value={selectedVoice} onChange={e => setSelectedVoice(e.target.value)}>
                {Object.keys(availableVoices).map(voice => (
                    <button
                        key={voice}
                        onClick={() => setSelectedVoice(voice)}
                        className={selectedVoice === voice ? "selected" : ""}
                    >
                        {voice}
                    </button>
                ))}
            </div>
            <button className="generate-btn" onClick={generateSpeech} disabled={loading}>
                {loading ? "Loading..." : "Generate Speech"}
            </button>

        </div>
    );
};

export default TextToSpeech;
