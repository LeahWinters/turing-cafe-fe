import React, { Component } from 'react';
import './ReservationList.css';
import Reservation from '../Reservation/Reservation.js'

class ReservationList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    if(this.props.reservations.length === 0) {
      return <div className="loading">loading</div>
    } else {
      let resCards = this.props.reservations.map(res => {
        return <Reservation date={res.date} id={res.id} name={res.name} time={res.time} number={res.number} key={Date.now+1}/>})
      return (
        <section className="reservation-holder">
          {resCards}
        </section>
      )
    }
  }
}


export default ReservationList
