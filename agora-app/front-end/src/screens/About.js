import React from "react";
import profileicon from "../images/profileicon.png";



function About(props) {
  return (
    
    <div className="about-container">
      <h1 className="heading">Agora Team</h1>

      <div className="profiles">
        <div className="profile-card">
          <img src={profileicon} className="profile-img" />
          <h3 className="user-name">Name</h3>
          <h5>Memeber Role</h5>
          <p></p>
        </div>

        <div className="profile-card">
          <img src={profileicon} className="profile-img" />
          <h3 className="user-name">Name</h3>
          <h5>Memeber Role</h5>
          <p></p>
        </div>

        <div className="profile-card">
          <img src={profileicon} className="profile-img" />
          <h3 className="user-name">Name</h3>
          <h5>Memeber Role</h5>
          <p></p>
        </div>

        <div className="profile-card">
          <img src={profileicon} className="profile-img" />
          <h3 className="user-name">Name</h3>
          <h5>Memeber Role</h5>
          <p></p>
        </div>

        <div className="profile-card">
          <img src={profileicon} className="profile-img" />
          <h3 className="user-name">Name</h3>
          <h5>Memeber Role</h5>
          <p></p>
        </div>

      </div>
      <form>
       <div className="contact-comment"> <h2> Leave us a Comment </h2>	</div>
        <input name="namess" type="text" className="feedback-input" placeholder="Name" />
        <input name="emailss" type="text" className="feedback-input" placeholder="Email" />
        <textarea name="texts" className="feedback-input" placeholder="Comment"></textarea>
        <input type="submit" name="send it" value="Send" />
      </form>
    </div>  
    
  


);
}

export default About;

   
  
    
      
   





