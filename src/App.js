import React from 'react';
import './App.css';
import Dashboard from "./Dashbord";
import Course from "./Course";
import Chat from "./Chat";
import Homework from "./Homework";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignIn from './SignIn';
import MathsExercices from './components/MathsExercices';
import './signin.css';
function  Home() {
  return <div><Dashboard /></div>;
}
function  Courses() {
  return <div><Course /></div>;
}
function  Chats() {
  return <div><Chat /></div>;
}
function  SignIns() {
  return <div><SignIn /></div>;
}
function  Homeworks() {
  return <div><Homework /></div>;
}
function Mathexercice(){
  return <div>
    <MathsExercices />
  </div>
}



class App extends React.Component {
  render(){
    return (
      
        <Router>
     

        <Route path="/" exact component={Home} />
        <Route path="/Courses"  component={Courses} />
        <Route path="/Chat" component={Chats} />
        <Route path="/Homework" component={Homeworks} />
        <Route path="/SignIn" component={SignIns} />
        <Route path="/Mathexercice" component={Mathexercice} />
       
     
    </Router>
     
      
  );
  }
  
}

export default App;
