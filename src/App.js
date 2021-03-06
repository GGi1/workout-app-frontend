import React, { Component } from 'react';
import './App.css';
import Main from './pages/main';
import Footer from './components/Footer'

import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthService from './components/AuthService'
import LoggedInNav from  './components/LoggedInNav'
import GuestNav from './components/GuestNav'


const Auth = new AuthService()
class App extends Component {
  constructor(props) {
    super(props)
    this.state={
    }
  }
  handleLogout(){
    Auth.logout()
    this.props.history.push("/")
  }
  render() {
    return (
      <div>
      <div className="back">
        <CssBaseline />
        <span>
          {Auth.loggedIn() && <LoggedInNav logout={this.handleLogout.bind(this)}/>}
          {!Auth.loggedIn() && <GuestNav />}
        </span>
        <Main/>

        </div>
        <div className = 'bottombitch'>
        <Footer />
      </div>

    </div>
    )
  }
}

export default withRouter(App);
