import React from "react";
import Education from "../img/education.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class SideNavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      openNav: "push"
    };
  }
 /* componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.openNav !== this.state.openNav) {
      this.setState({ openNav: nextProps.openNav });
    }
  }*/

  render() {
    return (
      <div>
        <div>
          <nav className="sidenav" className={this.state.openNav}>
            <div className="ml-5 pt-3">
              <img
                src={Education}
                width="100"
                height="100"
                alt="Me"
                className="rounded-circle "
              />
              <h6 className="text-dark mt-3 ">Student</h6>
              <h6>Menu :</h6>
              <a onClick={this.props.note} className="text-dark mt-5">
              <Link to="/"> <i className="fas fa-clipboard mr-2" />Dashboard</Link> 
              </a>
              <hr />
              <a onClick={this.props.todo} className="text-dark">
              <Link to="/Courses/"><i className="fas fa-list mr-2" />Courses</Link> 
              </a>

              <hr />
              <a onClick={this.props.signout} className="text-dark">
                <i className="fas mr-2 fa-sign-out-alt" />Signout
              </a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default SideNavBar;