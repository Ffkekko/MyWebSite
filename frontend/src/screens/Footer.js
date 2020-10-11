import React from 'react';

 

 function Footer() {

    return (

        /* Footer */
        <section id="footer">
            <div className="footer container">
                <div className="brand"><h1><span>F</span>ran<span>C</span>esco</h1></div>
                <h2>Your Complete Web Solution</h2>
                <div className="social-icon">
                    <div className="social-item">
                        <a href="https://www.facebook.com/ffkekko" target="_blank" rel="noopener noreferrer"><img src={require("../img/iconFacebook.png")} alt="facebook-icon linking web developer Francesco's personal profile"/></a>
                    </div>
                    <div className="social-item">
                        <a href="https://www.instagram.com/ff_franz/" target="_blank" rel="noopener noreferrer"><img src={require("../img/iconInstagram.png")} alt="instagram-icon to get you to Francesco's photos"/></a>
                    </div>
                    <div className="social-item">
                        <a href="https://api.whatsapp.com/send?phone=393927839593" target="_blank" rel="noopener noreferrer"><img src={require("../img/iconWhatsapp.png")} alt="whatsapp-icon: get in touch sending a message to Francesco web developer"/></a>
                    </div>
                    <div className="social-item">
                        <a href="https://www.linkedin.com/in/francesco-franzese-7a7243108/" target="_blank" rel="noopener noreferrer"><img src={require("../img/iconLinkedin.png")} alt="linkedin-icon linking to professional website of Francesco"/></a>
                    </div>
                </div>
                <p>Copyright © 2020 Francesco Franzese. All rights reserved</p>
                <a href="https://icons8.com">Icons by Icons8</a>
            </div>
        </section>
        /* End Footer */
    );
}

export default Footer;
