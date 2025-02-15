import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import logo from './logoJRremovebg.png';
import { useLottie } from "lottie-react";
import rocketLP from '../../assets/rocketLP.json';
import './LandingPage.scss';

export default function LandingPage() {

    const [sound, setSound] = React.useState(true);

    // Lottie
    const options = {
        animationData: rocketLP,
        loop: true
    };
    const { View } = useLottie(options);

    return (

        <div className="landingpageContainer">

            <Link to='/home'>
                <div>
                    <div className='night'>
                        <img src={logo} className='logolandingpage' />
                        <span className='moon'></span>
                        <span className="spot1"></span>
                        <span className="spot2"></span>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </Link>
            <div>
                <Typewriter
                    options={{
                        strings: ['En JUNIOR potencia tu carrera como DESARROLLADOR'],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        pauseFor: 20000
                    }}
                />
            </div>
            <span id='rocketLandingPage'>
                {View}
            </span>
        </div>

    )
}