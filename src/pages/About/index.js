import React from "react";
import "../../index.css";
import SectionImage from "../../components/Background/SectionImage"
import tyler from "../../images/resume/tyler.jpg";
import Resume from "../../images/resume/Resume.pdf";
import about from "../../images/backgrounds/geometric1.jpg"


function About() {
  return (
    <div id="about">
  

  <SectionImage bgIMG={about} sectionName={"ABOUT"}/>

      <div className="content section" id="aboutSection">
        <h3 className="center">ABOUT ME</h3>
        <hr></hr>

        <p className="center padding-10"><em>Full Stack Web Developer</em></p>
        <p>I am a full stack web developer with years of experience with sales and music. I believe that with my mixed background that I will bring a valuable point of view when it comes to UI. I taught myself how to produce music so I love a good challenge. Coding has been a massive challenge that has proven extremely rewarding. I LOVE learning more about it and being able to accomplish more than I was able to yesterday.  </p>
        <div className="row">
          <div className="col-md-12 center" id="aboutRow">      
          <br></br><br></br>
            <div className="row">
              <div className= "col-md-6">
                <h4>Tyler Buck</h4>
                <br></br>
                <img src={tyler} id="myPhoto" className="gradient-border" alt="Tyler Buck" width="280" height="300"></img>
              </div>
              <div className="col-md-6">
                <h4>My Skills</h4>
                <hr></hr>
                <br></br>
                <p>Front End: HTML, CSS, React, Bootstrap, Materialize, JavaScript, JQuery, Node.js, Express.</p> 
                <p>Back End: MySQL, Passport, RESTful APIs, Sequelize, MongoDB, Mongoose, IndexedDB API.</p>
    
                <br></br>
            
                <form method="get" action={Resume}>
                <button className="btn btn-outline-dark"id="resumeBtn" type="submit"><i className="fa fa-download fa-fw"></i> Download Resume</button>
                </form>
              </div>     
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default About;