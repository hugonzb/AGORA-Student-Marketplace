import React from "react";


function SignIn(props) {
  return (
   <div className="sign-in-container">



<form>
<fieldset>

  <div className="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
        
    <button type="submit">Login</button>
	<button type="button" className="cancelbtn">Cancel</button>

	<br></br>
  <br></br>
  
    <label>
      <input type="checkbox" checked="checked" name="remember"/> stay logged-in
    </label>
	
	
  </div>

  <div className="container">
   
	<span>Dont have an Account? <a href="/SignUp">Click here to register</a> </span>
	
	<span> Or Click here if <a href="#">forgot password</a></span>
  </div>
  </fieldset>
</form>

    
    
    </div>
  );
}

export default SignIn;
