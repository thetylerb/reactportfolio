import React from "react";
import "../../index.css";
import SectionImage from "../../components/Background/SectionImage";
import Projects from "../../components/Projects/Projects";
import portfolio from "../../images/backgrounds/gray-hall.jpg"


function Portfolio(){
  return (
    <div id="portfolio">
    <SectionImage bgIMG={portfolio} sectionName={"PORTFOLIO"}/>

    <div className="content section" id="portfolioSection">
      <h3 className="center">MY PORTFOLIO</h3>
      <hr></hr>
      <p className="center padding-10">
        <em>Here are some of the projects I've done.
          Click the images to view the deployed application or click 
          <a className="githubInText" href="https://github.com/thetylerb"> here </a>
          to see the Github repositories of these applications.</em> </p> 
     
    
    <Projects/>
    </div>
    </div>
    )
  }

export default Portfolio;