import React from "react";
import "../history.css";

function History(props) {

 return (

<div>
   <div class="HistoryTab">
    <h3>Trade History</h3>
  </div>

<div class="hist-wrapper">
  <div class="leftbar">
    <div class="folderTab sub">
      <h3>Sold Items</h3>
    </div>
    <div class="borderBox">
      <ul class="options-history">
        <li class="hist-item"><a href="#">item 1</a></li>
		<div class="separator"></div>
        <li class="hist-item"><a href="#">item 1</a></li>
		<div class="separator"></div>
        <li class="hist-item"><a href="#">item 1</a></li>
		<div class="separator"></div>
        <li class="hist-item"><a href="#">item 1</a></li>
		<div class="separator"></div>
        
      </ul>      
    </div>
  </div>
  
 
 <div class="leftbar">
  <div class="folderTab">
    <h3>Purchased items</h3>
  </div>
  <div class="borderBox">   
     <ul class="options-history">
     <li class="hist-item"><a href="#">item 1</a></li>
		<div class="separator"></div>
        <li class="hist-item"><a href="#">item 1</a></li>
		<div class="separator"></div>
        <li class="hist-item"><a href="#">item 1</a></li>
		<div class="separator"></div>
        <li class="hist-item"><a href="#">item 1</a></li>
		<div class="separator"></div>
        <li class="hist-item"><a href="#">item 1</a></li>
		<div class="separator"></div>
		</ul>        
      </div>
  </div>
</div>  
</div>

     
     
  );
}
 


export default History;
