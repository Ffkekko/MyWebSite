import React from 'react';


function Skills() {
    
    return (

        <section id="skills">
            <div className="skills container">

                <div className="skills-top" data-aos="zoom-in" data-aos-once="true">

                    <h1 className="section-title">Ski<span>l</span>ls</h1>
                    <p>Working together throughout the process, I can make an appealing design that suits your business by using the latest techniques and trends.</p>
                </div>

                <div className="skills-bottom">
                    <div className="skills-item" data-aos="fade-down">
                        <div className="html"></div>
                        <div className="html-text">Html5</div>
                    </div>
                    <div className="skills-item" data-aos="fade-down" data-aos-delay="400" data-aos-offset="50">
                        <div className="css"></div>
                        <div className="css-text">css3</div>
                    </div>
                    <div className="skills-item" data-aos="fade-down" data-aos-delay="800">
                        <div className="javascript"></div>
                        <div className="javascript-text">javascript</div>
                    </div>
                    <div className="skills-item" data-aos="fade-down" data-aos-delay="400" data-aos-offset="50">
                        <div className="nodejs"></div>
                        <div className="nodejs-text">node.js</div>
                    </div>
                    <div className="skills-item" data-aos="fade-down" data-aos-offset="50">
                        <div className="react"></div>
                        <div className="react-text">react.js</div>
                    </div>

                    <div className="skills-item" data-aos="fade-down" data-aos-delay="400" data-aos-offset="50">
                        <div className="mongodb"></div>
                        <div className="mongodb-text">mongodb</div>
                    </div>
                </div>
            </div>          
        </section>

    );
}

export default Skills;