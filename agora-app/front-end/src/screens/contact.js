import React from "react";

function Contact(props) {
  return (
    <div className="c-wrapper">
      <div className="c-container">
        <div className="c-contactus">
          <h1>contact us</h1>
          <div className="c-item name_email">
            <input type="text" placeholder="Your name"/>
              <input type="text" placeholder="Email"/>		
      </div>
              <div className="c-item">
                <input type="text" placeholder="Subject"/>		
      </div>
                <div className="c-item">
                  <textarea placeholder="Message"></textarea>
                </div>
                <div className="c-btn">
                  <a href="#">send</a>
                </div>
              </div>
  </div>
          </div>	
  );
}

export default Contact;
