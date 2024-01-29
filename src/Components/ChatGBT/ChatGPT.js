import React, { useRef, useState } from 'react';

const ChatGPT = () => {
    const [response, setResponse] = useState(null);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    const endpoint = 'https://api.openai.com/v1/completions';

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    prompt: userInput,
                    max_tokens: 100,
                }),
            });

            const data = await response.json();
            if (data.choices && data.choices.length > 0) {
                setResponse(data.choices[0].text);
            } else {
                setResponse("No response from the API");
            }
        } catch (error) {
            console.error("Error fetching completion:", error);
            setResponse("Error fetching data");
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
        <div>
            <div className="input-box">
                <textarea
                    type="text"
                    placeholder='Enter your text here'
                    onChange={handleInputChange}
                    value={userInput}
                />
            </div>
            <button onClick={fetchData} disabled={isLoading}>
                {isLoading ? 'Fetching...' : 'Fetch Data'}
            </button>
            {response && (
                <>
                    <p>Response: {response}</p>
                    <button onClick={downloadText}>Download Text</button>
                </>
            )}
        </div>
    );
};

export default ChatGPT;
