import React, { Component } from 'react'
import SideNavBar from "./SideNavBar"
export default class MathsExercices extends Component {
    render() {
        return (
                 <div className="body">
                <div>
                    <SideNavBar />
                </div>
                <div className="pushmain">
                <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active h6" aria-current="page">Home/Homeworks/MathsExercices</li>
  </ol>
</nav>
                    <div className="row">
                       <div className="card mt-5 ml-5">
                         <div className="card-body">
<h4>Ex1</h4>
                           <h6>5+12 = ?</h6>
                    <div className="form-group">
                       <select className="form-control">
                        <option>10</option>
                        <option>15</option>
                        <option>5</option>
                    </select>  
                    <button className="btn btn-info mt-3">Save</button>  
                         </div>
                    
                    </div>

                   
                    </div>
                    <div className="card mt-5 ml-5">
                         <div className="card-body">
<h4>Ex2</h4>
                           <h6>20*5 = ?</h6>
                    <div className="form-group">
                       <select className="form-control">
                        <option>10</option>
                        <option>15</option>
                        <option>5</option>
                    </select>  
                    <button className="btn btn-info mt-3">Save</button>  
                         </div> 
                    </div>
                     
                    
                    </div>

                   
                    </div>
                </div>
               
            </div>
        )
    }
}
