import React, { Component } from 'react';
import SideNavBar from "./components/SideNavBar"
import './App.css';
import Card from "./components/Card"
import RadarChar from "./components/RadarChar"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Homework extends Component {
    render() {
        return (

            <div className="body">
                <div>
                    <SideNavBar />
                </div>
                <div className="pushmain">
                <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active h6" aria-current="page">Home/Courses</li>
  </ol>
</nav>
<div className="">
         <h6 className="text-info font-weight-bold ml-5">Homework</h6>
        </div>
        <div className="row">
        <div class="card mt-3 ml-5" >
  <div class="card-body ml-3">
    <div className="row">
        <h5 class="card-title text-info">Homeworks</h5>
        <div class="progress">
  <div class="progress-bar w-25" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>
  <ul className="list-unstyled">
      <li className="h6">Ex1 Maths <Link to="/Mathexercice/" ><i className="fas fa-play-circle fa-2x ml-2 text-info"></i></Link></li> 
      <li className="h6">Ex2 Phy<i className="fas fa-2x fa-play-circle ml-2 "></i></li>
      <li className="h6">Ex3 Phy<i className="fas  fa-2x fa-play-circle ml-2 text-info"></i></li>
      <li className="h6">Ex4 Arab<i className="fas fa-2x fa-play-circle ml-2"></i></li>
  </ul>
  </div>
</div>
<div>
<div class="card mt-3 ml-5" >
  <div class="card-body ml-3">
    <div className="row">
        <h5 class="card-title text-info">Homeworks Done </h5>
        <div class="progress">
  <div class="progress-bar w-25" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>
  <ul className="list-unstyled">
      <li>Ex5 Maths<Link path="/Mathsexercice" ><i className="fas fa-check-circle ml-2 text-info"></i></Link></li> 
      <li>Ex1 Eng<i className="fas fa-check-circle ml-2 text-info"></i></li>
      <li>Ex2 phys<i className="fas fa-check-circle ml-2 text-info"></i></li>
      <li>Ex4 Arab<i className="fas fa-check-circle ml-2 text-info"></i></li>
  </ul>
  </div>
</div>
    </div>
        </div>
        <div className=" ml-5  mt-3 row text-info">
            <h6 className="mt-5 ml-5">Stats</h6>
            <RadarChar />
        </div>
                </div>

            </div>
        )
    }
}
export default Homework;
