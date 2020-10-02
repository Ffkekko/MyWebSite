import React from 'react';

class ContactSection extends React.Component {

    render() {
       
        return (

        <div>
            {/* Contact Section */}
            <section id="contact">
                <div className="contact container">
                    <div><h1 className="section-title" data-aos="zoom-in" data-aos-once="true">Contact <span>info</span></h1></div>
                
                    <div className="contact-items" data-aos="zoom-in">
                        <div className="contact-item" >
                            <div className="icon" ><img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="icon" data-aos="zoom-in" data-aos-delay="2"/></div>
                            <div className="contact-info" data-aos="zoom-in" data-aos-delay="1">
                                <h1>Phone</h1>
                                <h2><a href="tel:+447732856280">+44 7732856280</a></h2>
                                {/* <h2><a href="tel:+393927839593">+39 3927839593</a></h2> */}
                            </div>
                        </div>

                        <div className="contact-item" >
                            <div className="icon" ><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt="icon" data-aos="zoom-in" data-aos-delay="2"/></div>
                            <div className="contact-info" data-aos="zoom-in" data-aos-delay="1">
                                <h1>Email</h1>
                                <h2><a href="mailto:fnc.franzese1@gmail.com">fnc.franzese1@gmail.com</a></h2>
                            
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" alt="icon" data-aos="zoom-in" data-aos-delay="2"/></div>
                            <div className="contact-info" data-aos="zoom-in" data-aos-delay="1">
                                <h1>Address</h1>
                                <h2>Around the World</h2>
                            </div>
                        </div>

                    </div>

                    
                    <p className='quote' >Request a <span data-aos="zoom-in-up" data-aos-once="true">free quote </span>
                        by filling out the form below.
                        In alternative, reach me out with one of the options above or 
                        via Whatsapp at the bottom of the page.
                    </p>

                </div>
            </section>
            {/* End Contact Section */}
        </div>
        );
    }
}

export default ContactSection;



