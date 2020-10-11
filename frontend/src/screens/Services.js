import React from 'react';
import iconsCart from '../img/iconsCart.png';
import iconstools from '../img/iconstools.png';
import iconsPaint from '../img/iconsPaint.png';
import iconsresponsive from '../img/iconsresponsive.png';
import iconsdevelopment from '../img/iconsdevelopment.png';
import iconsrefresh from '../img/iconsrefresh.png';

class Services extends React.Component {
    
    render() {

        return (

            /* Service Section */

            <section id="services">

                <div className="services container"> 

                <div className="service-top" data-aos="zoom-in" data-aos-once="true"> 

                    <h1 className="section-title">Ser<span>v</span>ices <span>I</span> of<span>f</span>er</h1>
                    <p>Making my clients happy isn’t just about building beautiful websites, it is about building a relationship, earning trust and growing together. I provide honest advice and the best possible support for you to reach your goals. </p>
                </div>


                <div className="service-bottom">

                    {/* first card */}
                    <div className="service-item" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-once="true"> 
                    <div className="service-itemBG"></div>
                    <div className="icon"><img src={iconsCart} alt="icon of cart representing e-commerce website"/></div> 
                    <h2 className="span">E-Commerce</h2>
                    <p>I create e-commerce websites for online sales: the best solution to bring your store online. <br></br> Let's get your business online!</p>
                    </div>

                    {/* second card */} 
                    <div className="service-item" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-once="true">
                    <div className="service-itemBG"></div>
                    <div className="icon"><img src={iconstools} alt="icon of tools for web site maintenance services"/></div>
                    <h2 className="span">MAINTENANCE & SUPPORT</h2>
                    <p>I provide ongoing support and maintenance services to ensure that your website always runs smoothly.</p>
                    </div>

                    {/* third card */}
                    <div className="service-item" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-once="true">
                    <div className="service-itemBG"></div>
                    <div className="icon"><img src={iconsPaint} alt="paint brush representing web design service"/></div>
                    <h2 className="span">Web Design</h2>
                    <p>I offer websites from the first idea to the successful launch. Together, with you, I make an appealing design that suits your business.</p>
                    </div>

                    {/* fourth card */} 
                    <div className="service-item" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-once="true">
                    <div className="service-itemBG"></div>
                    <div className="icon"><img src={iconsresponsive} alt="icon of screens for responsive design"/></div>
                    <h2 className="span">Responsive Design</h2>
                    <p>I can develop a responsive website design for you with an enhanced experience for visitors who use mobile devices & smartphones, not just Desktop PCs.</p>
                    </div>

                      {/* fifth card */}
                    <div className="service-item" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-once="true"> 
                    <div className="service-itemBG"></div>
                    <div className="icon"><img src={iconsdevelopment} alt="icon of screen with html tag for web development"/></div> 
                    <h2 className="span">Web Development</h2>
                    <p>Send your design mock-ups and I will                                                 convert them to a fully functional and responsive website for a unique user experience. </p>
                    </div>

                    {/* sixth card */} 
                    <div className="service-item" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-once="true">
                    <div className="service-itemBG"></div>
                    <div className="icon"><img src={iconsrefresh} alt="icon refresh to indicate website improvment service"/></div>
                    <h2 className="span">Refurbishment</h2>
                    <p>Does your website need improvement? Get in touch to turn it into a modern, user-friendly and responsive website that will convert more visitors into customers.</p>
                    </div>

                </div>

                </div>

            </section>
            /* End Service Section */

        );
    }
}

export default Services;