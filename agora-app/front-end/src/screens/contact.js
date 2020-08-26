import React from "react";

function Contact(props) {
  return (
    <div className="c-wrapper">
      <h1>Contact Us Form</h1>
     
      <div className="c-contactus">
        <div className="c-input_wrapper input_wrapper_top">
          <div className="c-input_item">
            <input type="text" placeholder="Your Name"/>
              <i className="c-fas fa-user"></i>
			</div>
            <div className="c-input_item">
              <input type="text" placeholder="Your Email"/>
                <i className="c-fas fa-at"></i>
			</div>
            </div>
            <div className="c-input_wrapper input_wrapper_bottom">
              <div className="c-input_item">
                <input type="text" placeholder="Your Subject"/>
                  <i className="c-fas fa-sticky-note"></i>
			</div>
                <div className="c-input_item">
                  <input type="text" placeholder="Your Phone"/>
                    <i className="c-fas fa-phone"></i>
			</div>
                </div>
                <div className="c-message_wrapper">
                  <textarea placeholder="Your Message"></textarea>
                  <i className="c-fas fa-envelope-open"></i>
                </div>
                <div className="c-btn">Send</div>
              </div>
            </div>
  );
}

export default Contact;
