import React, { Component } from 'react';
import './App.css';
import ReservationList from '../ReservationList/ReservationList.js';
import Form from '../Form/Form.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = async () => {
    const url = 'http://localhost:3001/api/v1/reservations'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({...this.state, reservations: data})
  }

  addReservation = (reservation) => {
    this.state.reservations.push(reservation)
    this.setState({...this.state});
  }

  render() {
    if (this.state.reservations.length === 0) {
      return <div>
          'loading!'
        </div>
    } else {
      return (
        <div className="App">
          <h1 className='app-title'>Turing Cafe Reservations</h1>
          <div className='resy-form'>
            <Form addReservation={this.addReservation}/>
          </div>
          <div className='resy-container'>
            <ReservationList reservations={this.state.reservations}/>
          </div>
        </div>
      )
    }

  }
}

export default App;
