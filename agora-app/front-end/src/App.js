import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <div className="main">
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
