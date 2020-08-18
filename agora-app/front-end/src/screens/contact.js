import React from "react";

function Contact(props) {
  return (
    <div className="container-contact">
      <form className="form-contact"> 
      <fieldset className="contact-field">
        <label for="fname">Full Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your first name" required/>
        
      <label for="email">Email</label>
        <input type="text" placeholder="Enter Email" name="email" required/>

        <label for="country">Region</label>
      <input type="text" id="Rname" name="Region" placeholder="Your Region" required/>

      <label for="country">University</label>
        <input type="text" id="Uname" name="University" placeholder="Your University"/>

        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="write massege here"></textarea>     
      
        <input type="submit" value="Submit"/>	
      </fieldset>
      </form>   
    </div>
  );
}

export default Contact;
