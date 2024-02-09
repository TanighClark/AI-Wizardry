import React, { useRef, useState } from 'react';
import "./ChatGPT.css"

const ChatGPT = () => {
    const [response, setResponse] = useState(null);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{
                        role: "user",
                        content: userInput
                    }]
                }),
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();
            setResponse(data.choices ? data.choices[0].message.content : "No response from the API");
        } catch (error) {
            console.error("Error fetching completion:", error);
            setResponse(`Error fetching data: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };


    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const downloadText = () => {
        if (!response) return;

        const blob = new Blob([response], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'generated-text.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="storybook-app">
            <h2>Create Your Story</h2>
            <div className="input-section">
                <textarea
                    className="story-input"
                    placeholder="EX: My characters name is Sally. Can you write a short story about sally? 
                    Can you bold the key scenes that would make great illustrations? "
                    onChange={handleInputChange}
                    value={userInput}
                />
            </div>
            <div className="actions">
                <button className="fetch-button" onClick={fetchData} disabled={isLoading}>
                    {isLoading ? 'Creating your story...' : 'Write My Story'}
                </button>
            </div>
            {response && (
                <div className="story-response">
                    <h3>Your Story</h3>
                    <p className="story-text">{response}</p>
                    <button className="download-button" onClick={downloadText}>Download My Story</button>
                </div>
            )}
        </div>
    );

};

export default ChatGPT;
