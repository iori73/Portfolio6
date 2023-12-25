import React from 'react';
import "../css/Monex.css"

export default function Monex() {
    return (
        <div>
            <div className="main-top" aria-hidden="true">
                <p className="copy js-skip-target">
                    <span className="text">Hi, I'm Iori !<br className="break" />I'm learning</span><br />
                    <span className="text"> 👩‍💻 Frontend and 🧑🏼‍🎨 UI / UX</span>
                </p>


                <div className="slides" aria-hidden="true">
                    <div className="slider-top js-topSlider">
                        <div className="slide"><img className="image" src="hero__images/w400/Aus3.png" alt="" /></div>
                        <div className="slide"><img className="image" src="hero__images/w400/Aus1.png" alt="" /></div>
                        <div className="slide"><img className="image" src="hero__images/w400/Amami1.png" alt="" /></div>
                        
                        <div className="slide"><img className="image" src="hero__images/w400/Aus2.png" alt="" /></div>

                        <div className="slide"><img className="image" src="hero__images/w400/High-school2.png" alt="" /></div>
                        <div className="slide"><img className="image" src="hero__images/w400/Bali1.png" alt="" /></div>


                        {/*  */}
                        <div className="slide"><img className="image" src="hero__images/w400/Aus3.png" alt="" /></div>
                        <div className="slide"><img className="image" src="hero__images/w400/Aus1.png" alt="" /></div>

                        <div className="slide"><img className="image" src="hero__images/w400/Amami1.png" alt="" /></div>
                        <div className="slide"><img className="image" src="hero__images/w400/Aus2.png" alt="" /></div>

                    </div>
                </div>

            </div>

        </div>
    );
}
