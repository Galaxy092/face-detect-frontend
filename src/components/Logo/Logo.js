import React from 'react';
import Tilt from 'react-tilt';
import FaceID from './face-id.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo-box">
            <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"><img style={{backgroundPosition: 'center'}}src={FaceID} alt="FaceID" /></div>
            </Tilt>
        </div>
    );
}

export default Logo;