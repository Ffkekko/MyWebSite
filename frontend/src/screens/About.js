import React from 'react';

function About() {

    return (

        /* About Section */
        <section id="about">

            <div className="about container">

            <div className="col-left" data-aos="fade-right">
                <div className="about-img"> {/* add image here with alt */}
                </div>
            </div>
            
            <div className="col-right" data-aos="fade-left">
                <h1 className="section-title">About <span>me</span></h1>
                <h2 className="section-h2">Full Stack Web Developer WORKING WORLDWIDE</h2>
                <p>My name is Francesco Franzese. I am passionate about designing and developing user-friendly websites. I have the right skills to both develop a new high quality website or improve existing ones for individuals and organisations. I focus on modern and responsive website solutions by using the latest techniques and trends. Are you looking for a high quality website for your organisation or company at a competitive price?</p>
                <a href="/#contact" className="cta_about">Get in touch</a> 
            </div>


            </div>
        </section>
        /* End About Section */
    );
}

export default About;



