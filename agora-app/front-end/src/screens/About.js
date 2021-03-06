import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../signup.css";
import { submitFeedback } from "../actions/feedbackActions";
import helpdocumentation from "../images/Agora_User_Documentation.pdf";

function About(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const hugoicon = "../profilePictures/hugo (2)_1601868657464.jpg";
  const leonicon = "../profilePictures/LeonAbout.png";
  const cedricicon = "../profilePictures/cedricabout.jpg";
  const husamicon = "../profilePictures/HusamAbout.jpg";
  const vainuiicon = "../profilePictures/2020_09_19_OSSABALL-77_1601933527426.jpg";
  const [uploading] = useState(false);

  useEffect(() => {
    return () => {};
    // eslint-disable-next-line
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(submitFeedback(name, email, feedback));
    window.alert("Feedback submitted successfully");
    window.location.reload();
  };

  return (
    <div className="about-container">
      <h1 className="heading">Meet The Agora Team</h1>
      <div className="profiles">

        <div className="profile-card">
          <img src={hugoicon} className="profile-img" alt="profile" />
          <h3 className="user-name">Hugo Baird</h3>
          <h5>Full-Stack Developer</h5>
          <p>Email: hugonzb@gmail.com</p>
        </div>

        <div className="profile-card">
          <img src={leonicon} className="profile-img" alt="profile" />
          <h3 className="user-name">Leon Hoogenraad</h3>
          <h5>Back-end Developer</h5>
          <p>Email: le.o.n@outlook.com</p>
        </div>

        <div className="profile-card">
          <img src={vainuiicon} className="profile-img" alt="profile" />
          <h3 className="user-name">Vainui Moresi</h3>
          <h5>Front-end Developer</h5>
          <p>Email: zedricvm@gmail.com</p>
        </div>

        <div className="profile-card">
          <img src={cedricicon} className="profile-img" alt="profile" />
          <h3 className="user-name">Cedric Stephani</h3>
          <h5>Back-end Developer</h5>
          <p>Email: cedric.wanaka@gmail.com</p>
        </div>

        <div className="profile-card">
          <img src={husamicon} className="profile-img" alt="profile" />
          <h3 className="user-name">Husam Ali</h3>
          <h5>Front-end Developer</h5>
          <p>Email: husam9825@gmail.com</p>
        </div>
      </div>
      <div className="about-help-box">
        <div className="about-help">Need help?</div>
        <a href={helpdocumentation} download="Agora_Help_Documentation">
          Download our end-user documentation here
        </a>
      </div>
      
      <div className="about-feedback">
        <form onSubmit={submitHandler}>
          <div className="contact-comment">
            {" "}
            <h2> Leave us feedback </h2>{" "}
          </div>
          <input
            name="namess"
            type="text"
            className="feedback-input"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            name="emailss"
            type="text"
            className="feedback-input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            type="text"
            name="texts"
            className="feedback-input"
            placeholder="Comment"
            required
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
          {uploading && <div>Submitting feedback</div>}
          <input type="submit" name="send it" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default About;
