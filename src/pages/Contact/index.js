import React from "react";
import "../../index.css";
import SectionImage from "../../components/Background/SectionImage"
import contact from "../../images/backgrounds/geometric2.png"


function Contact() {
  return (
    <div id="contact">
  

  <SectionImage bgIMG={contact} sectionName={"CONTACT"}/>

      <div className="content section" id="contactSection">
        <h3 className="center">CONTACT ME</h3>
        <hr></hr>

          <div className="col-md-12" id="contactPanel">
            <div id="addressDetails">
              <i className="fa fa-map-marker fa-fw margin-right"></i> Cary, NC, US<br></br>
              <i className="fa fa-envelope fa-fw margin-right"></i> s.tyler.buck@gmail.com<br></br>
            </div>
            
          <form className="contact-section" id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/mjvaryny" method="post">
            <fieldset id="fs-frm-inputs">
              <div class="contact-section">
                <div class="inner-width">
                <input type="text" class="name" placeholder="Your Name"></input>
                <input type="email" class="email" placeholder="Your Email"></input>
                <textarea rows="1" placeholder="Message" class="message"></textarea>
        <         button>Submit</button>
                </div>
              </div>
            </fieldset>
          </form>
          </div>
        </div>
    </div>
    );
}

export default Contact;