import React from 'react';
import './App.css';
import Dashboard from "./Dashbord"
import Course from "./Course"
import Chat from "./Chat"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function  Home() {
  return <div><Dashboard /></div>;
}
function  Courses() {
  return <div><Course /></div>;
}
function  Chats() {
  return <div><Chat /></div>;
}


class App extends React.Component {
  render(){
    return (
      
        <Router>
     

        <Route path="/" exact component={Home} />
        <Route path="/Courses"  component={Courses} />
        <Route path="/Chat" component={Chats} />
       
     
    </Router>
     
      
  );
  }
  
}

export default App;
