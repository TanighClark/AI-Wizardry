import React from 'react'
import './HomeContent.css'
import one from '../../Assets/one.png'
import two from '../../Assets/two.png'
import three from '../../Assets/three.png'


const HomeContent = () => {
    return (
        <div className='entire'>
            <h3>Unleash the magic of storytelling in just three simple steps:</h3>
            <div className="steps">
                <div className="left">
                    <h5>Let our AI wizardry weave captivating tales with advanced text  generation. </h5>
                    <div className="image">
                        <img src={one} alt="" />
                    </div>
                </div>
                <div className="left">
                    <h5>Bring your story to life with vibrant visuals conjured by our text-to-image alchemy. </h5>
                    <div className="image">
                        <img src={two} alt="" />
                    </div>
                </div>
                <div className="left">
                    <h5>Give your characters a voice that echoes through the realms,  text-to-speech. </h5>
                    <div className="image"><img src={three} alt="" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default HomeContent