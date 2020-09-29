import React from "react";
import "../history.css";

function History(props) {

 return (
     <div>


<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"/>

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>

<div className="container-xl">
    <div className="table-responsive">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-4">
                        <h2>Order <b>Details History</b></h2>
                    </div>
                    <div className="col-sm-8">						
                        
                        
                    </div>
                </div>
            </div>
            <div className="table-filter">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="show-entries">
                            <span>Show</span>
                            <select className="form-control">
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                            </select>
                            <span>entries</span>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div className="filter-group">
                            <label>Name</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="filter-group">
                            <label>Location</label>
                            <select className="form-control">
                                <option>All</option>
                                <option>Auckland</option>
                                <option>Christchurch</option>
                                <option>Wellington</option>
                                <option>Hamilton</option>
                                <option>Dunedin</option>
                                <option>Palmerston North</option>								
                                <option>Napier</option>								
                                <option>Nelson</option>								
                                <option>Invercargill</option>								
                                <option>Whanganui</option>								
                                <option>Tauranga</option>								
								
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Status</label>
                            <select className="form-control">
                                <option>Any</option>
                                <option>Delivered</option>
                                <option>Picked-Up</option>
                                <option>Pending</option>
                                <option>Cancelled</option>
                            </select>
                        </div>
                        <span className="filter-icon"><i className="fa fa-filter"></i></span>
                    </div>
                </div>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Orders</th>
                        <th>Location</th>
                        <th>Order Date</th>						
                        <th>Status</th>						
                        <th>Price</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><a>Math TextBook(#215G88)</a></td>
                        <td>Dunedin</td>
                        <td>Aug 15, 2020</td>                        
                        <td><span className="status text-success">&bull;</span> Delivered</td>
                        <td>$25</td>
                        
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><a>iPad(#789G82)</a></td>
                        <td>Wellington</td>                       
                        <td>Dec 21, 2019</td>
                        <td><span className="status text-info">&bull;</span> Picked-Up</td>
                        <td>$660</td>
                        
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><a>Biology TextBook(#15H436)</a></td>
                        <td>Christchurch</td>
                        <td>Jan 04, 2020</td>
                        <td><span className="status text-danger">&bull;</span> Cancelled</td>
                        <td>$50</td>
                                               
                    </tr>
                    <tr>
                        <td>4</td>
                        <td><a>Dumbbells(#289G88)</a></td>
                        <td>Napier</td>
                        <td>Jul 16, 2020</td>						
                        <td><span className="status text-warning">&bull;</span> Pending</td>
                        <td>$1,572</td>
                        
                    </tr>
                    <tr>
                        <td>5</td>
                        <td><a>Samsung S8(#2F8888)</a></td>
                        <td>Invercargill</td>
                        <td>Feb 04, 2020</td>
                        <td><span className="status text-success">&bull;</span> Delivered</td>
                        <td>$380</td>
                       
                    </tr>
                </tbody>
            </table>
            <div className="clearfix">
                <div className="hint-text">Showing <b>5</b> out of <b>33</b> Orders Record</div>
                <ul className="pagination">
                    <li className="page-item"><a href="#" className="page-link">Previous</a></li>
                    <li className="page-item"><a href="#" className="page-link">1</a></li>
                    <li className="page-item"><a href="#" className="page-link">2</a></li>
                    <li className="page-item"><a href="#" className="page-link">3</a></li>
                    <li className="page-item active"><a href="#" className="page-link">4</a></li>                   
                    <li className="page-item"><a href="#" className="page-link">Next</a></li>
                </ul>
            </div>
        </div>
    </div>        
</div>                       
 
     </div>      
    
  );
}
 


export default History;
