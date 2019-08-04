import React from 'react';
import './App.css';
import SideNavBar from "./components/SideNavBar"
import Card from "./components/Card"
import CartCard from "./components/CartCard"
import {  UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
class Dashboard extends React.Component {
  render(){
   
    return (
      <div className="body">
        <div>
          <SideNavBar  />
        </div>
     <div className="pushmain">
     <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <div className="row">
       <li class="breadcrumb-item active h6  col-lg-2" aria-current="page">Home</li>
       <div className="col-md-auto">    </div>
    <i class="fas fa-bell float-rigth col-lg-2 fa-2x text-danger" id="UncontrolledPopover" ></i>
    <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
        <PopoverHeader>Notifications</PopoverHeader>
        <PopoverBody><li className="text-red">
          Completed Ex1
          </li></PopoverBody>
      </UncontrolledPopover>
    </div>
   
  </ol>
  
</nav>
       <div className="ml-3  row">
         <Card  icon="fa-check-circle" op1="Physics" op2="Math" op3="English" op4="French" title="Homework"/>
         <div className="ml-3">
           <Card  icon="fa-check-circle"  op1="Lesson-1-English" op2="Lesson-1-Math" op3="Lesson-1-Physics" op4="Lesson-1-Arabic" title="Quizz score"/>
         </div>
         <div className="ml-3">
           <Card   icon="fa-check-circle"  op1="Doing well on math" op2="Doing well on math" op3="great bahavior" op4="contact"   title="Instructor comments"/>
         </div>
      
       </div>
       <div >
         <div className="mt-5">
  <CartCard />

</div>
<div  className="row">

<div className="ml-5 pt-3">
             
              </div>
  </div>

       </div>

     </div>
    
    </div>
      
      
  );
  }
  
}

export default Dashboard;
