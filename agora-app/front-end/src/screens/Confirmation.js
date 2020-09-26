import React from "react";
import { Link } from "react-router-dom";



function Confirmation(props) {
  return (
    
    <div class="content">
  <div class="page-content">
    <div class="thank-you-big-text">
      THANK YOU
    </div>
    <div class="check-mark-container">
      <div class="check-mark">
        <img src="http://www.guerrillafitness.net/wp-content/themes/guerrilla/images/Free-Trial-Class/check-mark.png" alt="Image"/>
      </div>
    </div> 
    <div class="small-text">
      Your Purchase with Agora was Succesful. A member of our Sales Department will contact you soon for Shipping Arrangment.
    </div> 
   <Link to={"/"}>
  <button class="button-confirmation">Click here to go to Home Page</button>   
   </Link>
  </div> 
</div> 
    
  


);
}

export default Confirmation;