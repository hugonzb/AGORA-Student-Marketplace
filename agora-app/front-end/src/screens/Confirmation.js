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
      Your purchase was successful and you have been sent a confirmation email.
    </div> 
    <div class="small-text">
      The buyer's contact details can be found in your purchase history tab.    </div> 
    <div>
      <Link to={"/"}>
          <button class="button-confirmation">Home</button>   
      </Link>
      <Link to={"/account/history"}>
          <button class="button-confirmation">History</button>   
      </Link>
    </div>
  </div> 
</div> 
    
  


);
}

export default Confirmation;