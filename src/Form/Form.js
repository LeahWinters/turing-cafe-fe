import React, { Component } from 'react';
import './Form.css';
// import ReservationList from '../ReservationList/ReservationList.js'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      numOfGuests: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length < 1 || this.state.date.length < 1 || this.state.time.length < 1 || this.state.numOfGuests.length < 1) {
      alert('Please make sure all fields are filled out!');
    } else {
      this.props.addReservation({
        id: Math.ceil(Math.random()),
        name: this.state.name,
        date: this.state.date,
        time: this.state.time,
        number: this.state.numOfGuests
      })
    }
  }

  render() {
    return (
      <div className="form">
        <form>
          <input placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}></input>
          <input placeholder="Date (MM/DD)" name="date" value={this.state.date} onChange={this.handleChange}></input>
          <input placeholder="Time" name="time" value={this.state.time} onChange={this.handleChange}></input>
          <input placeholder="Number of Guests" name="numOfGuests" value={this.state.numOfGuests} onChange={this.handleChange}></input>
          <button type="button" className="make-res-btn" onClick={this.handleSubmit}>Make Reservation</button>
        </form>

      </div>
    )
  }
}


export default Form
