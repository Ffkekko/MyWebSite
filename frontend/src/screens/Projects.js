/* eslint-disable no-restricted-globals */
import React from 'react';




function Projects() {

    let directToAzale = () => {
  window.location.href= "http://www.azaleflowerbar.com";
  window.target="_blank";
  window.rel="noopener noreferrer"
}

  let directToBehave = () => {
  window.location.href= 'http://www.behavefromlondon.it/';
  window.target="_blank";
  window.rel="noopener noreferrer"
}
  
  
  return (
   
    <section id="projects" >

        <div className="projects container">

            <div className="projects-header" data-aos="zoom-in" data-aos-once="true">
                <h1 className="section-title">Recent <span>Projects</span></h1>
            </div>


            <div className="all-projects">

              
                {/* FIRST PROJECT */}
                <div   onClick={directToAzale} className="project-item" data-aos="fade-left">

                    <div className="project-info" >
                        <h1>Project 1</h1>
                        <h2>Bar / Resturant</h2>
                        <p>Elegant and quick website for a beautiful and famous bar/restaurant. Booking system plus admin page for dynamically updating the menu are included. </p>
                    </div>
                    {/* IMAGE */}
                    <div className="project-img">
                        <picture>
                           {/*  <source srcset={require("../img/macScreenProjectAzale.webp")} type="image/webp" /> */}
                            <source srcset={require("../img/macScreenProjectAzale.jpg")} type="image/jpg" />
                            <img src={require("../img/macScreenProjectAzale.jpg")} alt={"mac screen with homepage of web design built by Francesco web developer"}/>
                        </picture>

                    </div>
                
                    
                </div>

                {/* SECOND PROJECT */}
                
                <div onClick={directToBehave} className="project-item" data-aos="fade-right">
                    <div className="project-info" >
                        <h1>Project 2</h1>
                        <h2>eCommerce</h2>
                        <p>Fully functional multivendor e-commerce. Classic user, seller and admin accounts available. You can see the sellers, products, orders, statistics and more within your dashboard. It allows you to fully control the vendors and products. Google Maps, Live Chat and PayPal APIs included.</p>
                    </div>
                    
                    {/* IMAGE */}
                    <div className="project-img">
                        <img src={require("../img/macScreenProject_ShopHere_2.jpg")} alt={"mac screen with homepage of e-commerce website built by Francesco web developer"}/>

                    </div>
                    
                </div>

                {/* THIRD PROJECT */}
                <div className="project-item" data-aos="fade-right">
                    <div className="project-info" >
                        <h1>Project 3</h1>
                        <h2>Under development</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde rem ipsa. distinctio illum quae mollitia ut. </p>
                    </div>
                    {/* IMAGE */}
                    <div className="project-img">
                        <picture>
                            <source srcset={require("../img/macScreenProject1.webp")} type="image/webp" />
                            <source srcset={require("../img/macScreenProject1.jpg")} type="image/jpg" />
                            <img src={require("../img/macScreenProject1.jpg")} alt={"mac screen with homepage of web project built by Francesco web developer"}/>
                        </picture>
                    </div>
                    
                </div>

                {/* FOURTH PROJECT */}
                <div className="project-item" data-aos="fade-left">
                    <div className="project-info" >
                        <h1>Project 4</h1>
                        <h2>Under development</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde rem ipsa. distinctio illum quae mollitia ut. </p>
                    </div>
                    {/* IMAGE */}
                    <div className="project-img">
                        <picture>
                            <source srcset={require("../img/macScreen.webp")} type="image/webp" />
                            <source srcset={require("../img/macScreen.jpeg")} type="image/jpeg" />
                            <img src={require("../img/macScreen.jpeg")} alt={"mac screen with homepage of web project built by Francesco web developer"}/>
                        </picture>
                    </div>
                    
                </div>

                {/* FIFTH PROJECT */}
                <div className="project-item" data-aos="fade-right">
                    <div className="project-info" >
                        <h1>Project 5</h1>
                        <h2>Under development</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde rem ipsa. distinctio illum quae mollitia ut. </p>
                    </div>
                    {/* IMAGE */}
                    <div className="project-img">
                        <picture>
                            <source srcset={require("../img/macScreen.webp")} type="image/webp" />
                            <source srcset={require("../img/macScreen.jpeg")} type="image/jpeg" />
                            <img src={require("../img/macScreen.jpeg")} alt={"mac screen with homepage of web project built by Francesco web developer"}/>
                        </picture>
                    </div>
                    
                </div>


            </div>
        </div>
    </section>
  );
}

export default Projects;
