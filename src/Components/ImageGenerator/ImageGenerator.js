import React, { useRef, useState } from 'react';
import './ImageGenerator.css';
import imagee from '../Assets/hero.png';

const ImageGenerator = () => {
    const [image_url, setImage_url] = useState('/');
    let inputRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const generateImage = async () => {
        if (inputRef.current.value === '') {
            return 0;
        }
        setLoading(true);


        const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
        const endpoint = 'https://api.openai.com/v1/images/generations';

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                'User-Agent': 'Chrome',
            },
            body: JSON.stringify({
                prompt: `${inputRef.current.value}`,
                n: 1,
                size: '512x512',
            }),
        });

        const data = await response.json();
        console.log(data)
        const data_array = data.data;
        setImage_url(data_array[0].url);
        setLoading(false);
    }
    const downloadImage = () => {

        const link = document.createElement('a');
        link.download = 'ai_generated_image.png';
        link.href = image_url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div>
            <div className='ai-image-generator'>
                <div className='headerrr'>Ai Image <span>Generator</span></div>
                <div className='img-loading'>
                    <div><img src={image_url === '/' ? imagee : image_url} alt='ai-image'></img></div>
                    <div className='loading'>
                        <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
                        <div className={loading ? "loading-text" : "display-none"}>Loading....</div>

                    </div>
                </div>
                <div className="search-box">
                    <input type="text" ref={inputRef} className='search-input' placeholder='Describe what you want to see.' />
                    <div className="generate-btn" onClick={() => { generateImage() }}>Generate</div>
                    {image_url !== '/' && <div className="download" onClick={downloadImage}>Download Image</div>}
                </div>
            </div>
        </div>
    )
}

export default ImageGenerator;
