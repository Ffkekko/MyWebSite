import React from 'react';

class Hero extends React.Component {
   

    render() {

        return (
            /* Hero Section  */
            <section id="hero"> {/* here i added the image in css attached to the id */} 
                <canvas></canvas>
                <div className="hero container">
                <div className="myname">
                    <h1>Hello, <span></span></h1>
                    <h1>My Name is <span></span></h1>
                    <h1>Francesco <span></span></h1>
                    <a href="#contact" /* type="button" */ className="cta_hero">REQUEST A QUOTE </a>
                </div>
                </div>
            </section>
            /* End Hero Section */
        );
    }
}

export default Hero;
