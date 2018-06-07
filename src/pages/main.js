import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Workouts from './groupworkouts';
import About from './aboutus';
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import Dashboard from './Dashboard'
import UserHistory from './user_history'
import CreateMovement from './create_movement'
import CreateWorkout from './create_workout'
import LogWorkout from './log_workout'
import WorkoutPage from './workout_page'

class Main extends Component{
  render(){
    return(
      <Switch>
        <Route exact path="/" render={(props) => <LandingPage path="/" />} />
        <Route exact path="/login" render={(props) => <LoginForm path="/login"/>} />
        <Route exact path="/register" render={(props) => <SignUpForm path="/register"/>} />
        <Route exact path="/dashboard" render={(props) => <Dashboard path="/dashboard" />} />
        <Route path="/groupworkouts" render={(props) => <Workouts path="/groupworkouts" />} />
        <Route path="/aboutus" component={About} />
        <Route exact path ="/moves" render={(props) => <CreateMovement path="/moves"/>} />
        <Route exact path ="/newworkout" render={(props) => <CreateWorkout path="/newworkout"/>} />
        <Route exact path ="/stats" render={(props) => <UserHistory path="/stats"/>} />
        <Route exact path ="/log" render={(props) => <LogWorkout path="/log"/>} />
        <Route exact path ="/new" render={(props) => <WorkoutPage path="/new"/>} />
      </Switch>
    )
  }
}

export default withRouter(Main);
