import React from "react";
import "./SectionImage.css"
import Typist from 'react-typist';
import home from "../../images/backgrounds/pool.jpg";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainSectionImage(){
  return(
    <>
    <div className="bgImg" id="home" style={{height: window.innerHeight, backgroundImage: `url(${home})`}}>
      <div id="bgTextLeft">
      
      <Typist>
        <span className="wide text" id="nameSpan">
          Tyler Buck</span>
        <br></br>
        <span className="wide text" id="jobSpan">Full Stack Web Developer</span>
      </Typist>

      </div>
      <div id="bgTextRight">
          <a href="https://github.com/thetylerb"><i className="fa fa-github iconsTop"></i></a>
          <a href="https://www.linkedin.com/in/tyler-buck/"><i className="fa fa-linkedin iconsTop"></i></a>    
      </div>
    </div>


    </>
  )
}

export default MainSectionImage;