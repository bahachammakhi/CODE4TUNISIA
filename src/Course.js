import React, { Component } from 'react'
import './App.css';
import SideNavBar from "./components/SideNavBar"
import phy from "./img/phy.svg"
import Maths from "./img/maths.svg"
import eng from "./img/eng.svg"
import arab from "./img/arab.svg"
export default class Course extends Component {
    render() {
        return (
            <div className="body">
              <div>
            <SideNavBar  />
          </div>  
          <div className="pushmain">
          <div>
          <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active h6" aria-current="page">Home/Courses</li>
  </ol>
</nav>
<div className="">
         <h6 className="text-info font-weight-bold">Courses</h6>
        </div>
         <div className="row ml-5 mr-5 ">
 <div className="card border rounded-circle w-25"> 
           <div className="card-body text-center">
         <img src={phy} alt="physique" className="w-50" />
           <h4 className="text-center text-info">Physics</h4>
           </div>
         </div>
         <div className="card border rounded-circle w-25"> 
           <div className="card-body text-center">
         <img src={Maths} alt="physique" className="w-50" />
           <h4 className="text-center text-info">Maths</h4>
           </div>
         </div>
         <div className="card border rounded-circle w-25"> 
           <div className="card-body text-center">
         <img src={eng} alt="physique" className="w-50" />
           <h4 className="text-center text-info">English</h4>
           </div>
         </div>
         <div className="card border rounded-circle w-25"> 
           <div className="card-body text-center">
         <img src={arab} alt="physique" className="w-50" />
           <h4 className="text-center text-info">Arabic</h4>
           </div>
         </div>
       </div>
         </div>
        <div className="">
         <h6 className="text-info font-weight-bold">Progress</h6>
        </div>
        
        <div class="card ml-3 border rounded">
  <div class="card-body">
    <div className="row">
      <img src={Maths} alt="progress" className="w-25" />
        <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  
  </div>
</div>
          </div>
            </div>
            
        )
    }
}
