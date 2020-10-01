import React from "react";
import "../history.css";

function History(props) {

 return (

<div>
   <div  className="HistoryTab">
   <h2>Account Trading History</h2>
  </div>

<div  className="hist-wrapper">
  <div  className="leftbar">
    <div  className="folderTab sub">
      <h3>Sold items </h3>
    </div>
    <div  className="borderBox">
      <ul  className="options-history">
        <li  className="hist-item"><a href="#">item 1</a></li>
		<div  className="separator"></div>
        <li  className="hist-item"><a href="#">item 1</a></li>
		<div  className="separator"></div>
        <li  className="hist-item"><a href="#">item 1</a></li>
		<div  className="separator"></div>
        <li  className="hist-item"><a href="#">item 1</a></li>
		<div  className="separator"></div>
        <li  className="hist-item"><a href="#">item 1</a></li>
		<div  className="separator"></div>
        
      </ul>      
    </div>
  </div>
  
 
 <div  className="leftbar">
  <div  className="folderTab">
    <h3>Purchased items </h3>
  </div>
  <div  className="borderBox">   
     <ul  className="options-history">
     <li  className="hist-item"><a href="#">item 1</a></li>
		<div  className="separator"></div>
        <li  className="hist-item"><a href="#">item 1</a></li>
		<div  className="separator"></div>
        <li  className="hist-item"><a href="#">item 1</a></li>
		<div  className="separator"></div>
        <li  className="hist-item"><a href="#">item 1</a></li>
		<div  className="separator"></div>
        <li  className="hist-item"><a href="#">item 1</a></li>
		<div  className="separator"></div>
		</ul>        
      </div>
  </div>
</div>  
</div>

     
     
  );
}
 


export default History;
