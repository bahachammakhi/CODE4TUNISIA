import React, { Component } from 'react'
import SideNavBar from "./components/SideNavBar"
import Education from "./img/education.png"
export default class Chat extends Component {
    render() {
        const imgs = {
            width : 50,
           };
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
<h6 className="text-info font-weight-bold ml-3">Chat</h6>
<ul class="list-unstyled list-group ">
  <li class="media list-group-item ">
  <span class="badge badge-success badge-pill">*</span> 
    <img  style={imgs} src={Education} className="mr-3 " alt="..." />
    <div class="media-body">
        <div className="row">
            <h6 class="mt-0">Baha eddine chammakhi</h6>
            <h6 class="ml-5 text-success">Parent available</h6>
            </div>
      
      <span class="badge badge-primary badge-pill">14</span>
    </div>
    
  </li>
  <li class="media  list-group-item ">
  <span class="badge badge-dark badge-pill">*</span>
    <img style={imgs}  src={Education} className="mr-3 " alt="..." />
    <div class="media-body">
      <h6 class="mt-0 mb-1">Haythem guidara</h6>
      <h6 class="ml-5 text-danger">Parent unavailable</h6>
      <span class="badge badge-primary badge-pill">20</span>
    </div>
  </li>
  <li  class="media list-group-item">
  <span class="badge badge-success badge-pill">*</span>
    <img style={imgs}  src={Education} className="mr-3 " alt="..." />
    <div class="media-body">
      <h6 class="mt-0 mb-1">Ahmed zerik</h6>
      <h6 class="ml-5 text-success">Parent available</h6>
      <span class="badge badge-primary badge-pill">50</span>
    </div>
  </li>
  <li class="media list-group-item">
  <span class="badge badge-success badge-pill">*</span>
    <img  style={imgs} src={Education} className="mr-3 " alt="..." />
    <div class="media-body">
      <h6 class="mt-0 mb-1">Hakim maaouia</h6>
      <h6 class="ml-5 text-success">Parent available</h6>
      <span class="badge badge-primary badge-pill">5</span>
    </div>
  </li>
  <li class="media list-group-item">
  <span class="badge badge-dark badge-pill">*</span>
    <img style={imgs}  src={Education} className="mr-3 " alt="..." />
    <div class="media-body">
      <h6 class="mt-0 mb-1">Ahmed yassine kortoba</h6>
      <h6 class="ml-5 text-danger">Parent unavailable</h6>
      <span class="badge badge-primary badge-pill">3</span>
    </div>
  </li>
</ul>
            </div>
                </div>
           
        )
    }
}
