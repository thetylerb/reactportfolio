import React from "react";
import "./Footer.css";

function Footer(){
  return(
<>
<footer className="center">

  <div className="sectionMargin">
   
    <p id="copyright">Copyright &copy; Tyler Buck
    <br></br>
    <span className="footerIcons">
      <a href="https://github.com/thetylerb"><i className="fa fa-github icons"></i></a><a href="https://www.linkedin.com/in/tyler-buck/"><i className="fa fa-linkedin icons"></i></a> 
    </span>
    </p>
  </div>
  
</footer>
</>
)
}
export default Footer;