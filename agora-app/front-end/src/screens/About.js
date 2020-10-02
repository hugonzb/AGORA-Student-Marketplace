import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import "../signup.css";
import {submitFeedback} from "../actions/feedbackActions";


function About(props) {

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  // Yeah should change this soon
  const profileicon = "/profilePictures/kachow_1601281716732.jpg"
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    return () => {
    };
    // eslint-disable-next-line
  }, []);

  const submitHandler = (e) => {
    // Shows the loading div
    setUploading(true);
    e.preventDefault();
    dispatch(submitFeedback(
      name,
      email,
      feedback,
    ));
    // Hides the loading div
    setUploading(false);
  };

  return (

    <div className="about-container">
      <h1 className="heading">Agora Team</h1>

      <div className="profiles">
        <div className="profile-card">
          <img src={profileicon} className="profile-img" alt="profile" />
          <h3 className="user-name">Name</h3>
          <h5>Memeber Role</h5>
          <p></p>
        </div>

        <div className="profile-card">
          <img src={profileicon} className="profile-img" alt="profile" />
          <h3 className="user-name">Name</h3>
          <h5>Memeber Role</h5>
          <p></p>
        </div>

        <div className="profile-card">
          <img src={profileicon} className="profile-img" alt="profile" />
          <h3 className="user-name">Name</h3>
          <h5>Memeber Role</h5>
          <p></p>
        </div>

        <div className="profile-card">
          <img src={profileicon} className="profile-img" alt="profile" />
          <h3 className="user-name">Name</h3>
          <h5>Memeber Role</h5>
          <p></p>
        </div>

        <div className="profile-card">
          <img src={profileicon} className="profile-img" alt="profile" />
          <h3 className="user-name">Name</h3>
          <h5>Memeber Role</h5>
          <p></p>
        </div>

      </div>
      <form onSubmit={submitHandler}>
        <div className="contact-comment"> <h2> Leave us a Comment </h2>	</div>
        <input name="namess" type="text" className="feedback-input" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
        <input name="emailss" type="email" className="feedback-input" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <textarea type="text" name="texts" className="feedback-input" placeholder="Comment" required onChange={(e) => setFeedback(e.target.value)}></textarea>
        {uploading && <div>Submitting feedback</div>}
        <input type="submit" name="send it" value="Send" />
      </form>
    </div>




  );
}

export default About;











