import React, { Component } from 'react';
import './Reservation.css';
// import ReservationList from '../ReservationList/ReservationList.js'

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="res-card">
        <h3>{this.props.name}</h3>
        <h3>{this.props.date}</h3>
        <h3>{this.props.time} pm</h3>
        <h3>Number of guests: {this.props.number}</h3>
        <button className="cancel-btn" type="button">Cancel</button>
      </div>
    )
  }
}


export default Reservation
