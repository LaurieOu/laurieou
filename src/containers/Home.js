import React, { Component } from "react";
import {Link, Route} from 'react-router-dom';
import "./Home.css";
import Flights from "./Flights";
import { PageHeader, ListGroup } from "react-bootstrap";
import { invokeApig } from '../libs/awsLib';



export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      calendar: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {
      const results = await this.calendar();
      this.setState({ calendar: results });
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  calendar() {
    return invokeApig({ path: "/calendar" });
  }

  rendercalendarList(calendar) {
    return null;
  }

  renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple note taking app</p>
      </div>
    );
  }

  rendercalendar() {
    return (
      <div className="calendar">
        <PageHeader>Your calendar</PageHeader>
        <ListGroup>
          {!this.state.isLoading && this.rendercalendarList(this.state.calendar)}
        </ListGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.rendercalendar() : this.renderLander()}
      </div>
    );
  }
}

// export default class Home extends Component {
//
//   render() {
//     return (
//       <div className="Home">
//         <div className="lander">
//           <li>
//             <ul><Link to='/flights'><img alt='' src='https://cheapflight2017.files.wordpress.com/2017/01/google_flights2.png?w=300'></img></Link></ul>
//           </li>
//         </div>
//         <Route path="/flights" component={Flights}/>
//       </div>
//     );
//   }
// }
