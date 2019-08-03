import React from 'react';
import './App.css';
import SideNavBar from "./components/SideNavBar"
import Card from "./components/Card"
import CartCard from "./components/CartCard"
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
    <li class="breadcrumb-item active h6" aria-current="page">Home</li>
  </ol>
</nav>
       <div className="ml-3  row">
         <Card op1="Physics" op2="Math" op3="English" op4="French" title="Homework"/>
         <div className="ml-3">
           <Card  op1="Lesson-1-English" op2="Lesson-1-English" op3="Lesson-1-English" op4="Lesson-1-English" title="Quizz score"/>
         </div>
         <div className="ml-3">
           <Card op1="Doing well on math" op2="Doing well on math" op3="Doing well on math" op4="Doing well on math"   title="Instructor comments"/>
         </div>
      
       </div>
<div className="mt-5">
  <CartCard />
</div>
     </div>
      </div>
  );
  }
  
}

export default Dashboard;
