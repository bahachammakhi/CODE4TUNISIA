import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            
                <div class="card mt-3" >
  <div class="card-body ml-3">
    <div className="row">
        <h5 class="card-title text-info">{this.props.title}</h5>
        <div class="progress">
  <div class="progress-bar w-25" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>
  <ul className="list-unstyled">
      <li>{this.props.op1}<i class="fas fa-check-circle ml-2 text-info"></i></li> 
      <li>{this.props.op2}<i class="fas fa-check-circle ml-2 "></i></li>
      <li>{this.props.op3}<i class="fas fa-check-circle ml-2 text-info"></i></li>
      <li>{this.props.op4}<i class="fas fa-check-circle ml-2"></i></li>
  </ul>
  </div>
</div>
           
        )
    }
}
