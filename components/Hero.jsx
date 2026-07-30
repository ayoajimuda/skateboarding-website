import Image from 'react-bootstrap';
import React from 'react';

const Hero = () => {
    return ( <section>
        <b><h2>NO FEAR!</h2></b>
        <b><h2>JUST SKATE!</h2></b>
        <p>Slam.com; A way for skaters to learn, connect and explore</p>
        <div className="hero-image">
            <Image src="/images/logo.png" alt="hero-image" className="Logo" width={40} height={40}/>
        </div>
    </section>
    );
};

export default Hero;