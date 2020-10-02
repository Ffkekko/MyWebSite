import React from 'react';




function Projects() {

  
  return (
   
    <section id="projects" >

        <div className="projects container">

            <div className="projects-header" data-aos="zoom-in" data-aos-once="true">
                <h1 className="section-title">Recent <span>Projects</span></h1>
            </div>


            <div className="all-projects">

              
                {/* FIRST PROJECT */}
                <div className="project-item" data-aos="fade-right">
                    <div className="project-info" >
                        <h1>Project 1</h1>
                        <h2>Under development</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde rem ipsa. distinctio illum quae mollitia ut. </p>
                    </div>
                    {/* IMAGE */}
                    <div className="project-img">
                        <img src={require("../img/macScreenProject1.jpg")} alt={"img"}/>
                    </div>
                    
                </div>

                {/* SECOND PROJECT */}
                <div className="project-item" data-aos="fade-left">
                    <div className="project-info" >
                        <h1>Project 2</h1>
                        <h2>Under development</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde rem ipsa. distinctio illum quae mollitia ut. </p>
                    </div>
                    {/* IMAGE */}
                    <div className="project-img">
                        <img src={require("../img/macScreenProject2.jpg")} alt={"img"}/>
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
                        <img src={require("../img/macScreen.jpg")} alt={"img"}/>
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
                        <img src={require("../img/macScreen.jpg")} alt={"img"}/>
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
                        <img src={require("../img/macScreen.jpg")} alt={"img"}/>
                    </div>
                    
                </div>


            </div>
        </div>
    </section>
  );
}

export default Projects;
