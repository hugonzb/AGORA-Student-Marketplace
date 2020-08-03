import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './screens/Home';
import SignUp from './screens/SignUp';

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <div className="main">
              <Link to="/signup">Sign Up</Link>
              <div className="content-display">
                  <Route path="/signup" component={SignUp} />
                  <Route path="/" exact={true} component={Home} />
              </div>
            </div>
        </div>
    </BrowserRouter>  
  );
}

export default App;
