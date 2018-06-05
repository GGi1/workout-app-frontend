import React, { Component } from 'react';
import {Paper, Button, Checkbox, Table, TableHead, TableCell, TableBody, TableRow, Input} from '@material-ui/core'
import LogHeader from '../components/log_header'
import AuthService from '../components/AuthService'  // <- We use the AuthService to logout

const Auth = new AuthService()
const BASE = 'http://localhost:3000'

class LogWorkout extends Component{
  constructor(props){
    super(props)
    this.state = {
      userhistory: {},
      userID: '',
      userhistoryAdded: false,
      workout: [],
      checked: [],
      reps: [],
      weight: [],
      workout_name: "test",
      name: '',
      savedSet: [],
      setNum: 1,
      ttoF: false,
      movement:[
        {
          id: 1,
          "name": "Push-Up",
          bodypart: "chest",
          url: "http://www.ebay.com",
          description: "push yourself up",
          //JOIN:
          duration: "30 seconds"
        },
        {
          id: 2,
          "name": "Pull-Up",
          bodypart: "back",
          url: "http://www.google.com",
          description: "pull yourself up",
          //JOIN:
          duration: "1 minute"
        },
        {
            id: 3,
            "name": "Kettle Bell Swings",
            bodypart: "Full Body",
            url: "http://www.google.com",
            description: "Swing that shit",
            //JOIN:
            duration: "45 seconds"
          }]

    }

  }


  componentWillMount() {
    let userID = Auth.getUserId()
    return fetch(BASE + '/workoutdetails' +'?id=' + userID)
      .then((resp) => {
        return resp.json()
      })
      .then(APIinfo => {
        this.setState({ workout: APIinfo, userID: userID, workout_name: APIinfo[0].workout_name})
      })
  }



  handleSubmit(event){



    this.loaduserhistory()
  console.log(this.state.userhistory);
    return fetch(BASE+'/user_histories', {
        body: JSON.stringify(this.state.userhistory),
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST"
    })
        .then((rawResponse) => {
            let parsedResponse = rawResponse.json()
            return parsedResponse
        }).then( userhistoryAdded => {
            console.log("Create Success!", userhistoryAdded ); this.setState({userhistoryAdded: true})
        })
    console.log(this.state.userhistory);
  }


  isChecked(index){
  return this.state.checked[index]
  }

  handleCheck(n, index){
    let {checked, ttoF} = this.state
    if (checked[index] === true){
      checked[index] = false
    } else checked[index] = true
    console.log(checked);
    ttoF == false ? ttoF = true : ttoF = false
    this.setState({checked: checked, ttoF: ttoF})
 };




handleReps(event){
  let { reps } = this.state
  reps[event.target.id] = event.target.value
  this.setState({reps: reps})
}

handleWeight(event){
  let weight = this.state.weight
  weight[event.target.id] = event.target.value
  this.setState({weight: weight})
}

nextSet(){
  let {setNum, reps, weight, savedSet, movement, checked, workout} = this.state
  // savedSet.push(reps)
  // savedSet.push(weight)
  setNum = setNum + 1
  let blankArr = new Array(workout.length).fill('')
  let falseArr = new Array(workout.length).fill(false)
  this.setState({setNum: setNum, reps: blankArr, weight: blankArr, checked: falseArr})
  console.log(checked);
}

saveAndQuit(){
}
loaduserhistory(){
  let userhistory = {userhistory: {user_id: 1, movement_id: 2, workout_id: 2, weight: 99, set: 99, rep: 99}}
  this.setState({userhistory: userhistory})
}

//  handleReps(n, index){
//    console.log(index);
//    let reps = this.state.reps
//   console.log(event.target.value);
//    this.setState({reps: reps})
//   // this.setState({ name: event.target.checked });
// };

 //  handleCheck = name => event => {
 //   this.setState({ [name]: event.target.checked });
 // };

  render(){
    // let {workout} = this.state
    // {console.log("THis.state,workout:")}
    //   {console.log(workout[0])}
{console.log(this.state.userhistory)}
    return(

        <div>
       <div style={{display: 'flex', justifyContent: 'center'}}>  <Paper className="paper" style={{marginTop: '10px', width: '800px', maxWidth: '1000px'}}>
        <h3 style={{textAlign: 'left', marginLeft: '10vw',  marginBottom: '10px', marginTop: '10px', marginRight: '0px'}} ><h1 style={{marginBottom: '10px'}}> {this.state.workout_name} :   Set {this.state.setNum}</h1></h3>
      </Paper></div><br/>

        <div style={{display: 'flex', justifyContent: 'center'}}>  <Paper className="paper" style={{marginTop: '0px', width: '800px', maxWidth: '1000px'}}>
        <h3 style={{textAlign: 'left', marginLeft: '10vw',  marginBottom: '10px', marginTop: '10px', marginRight: '0px'}} >Log your workout:</h3>
      </Paper></div>
      <br/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Paper className="paper" style={{marginTop: '0px', width: '800px', maxWidth: '1000px'}}>
             <Table className="log-table">

               <TableHead>
                 <TableRow>
                   <TableCell style={{padding: '8px',width: '5px', textAlign: 'center'}}></TableCell>
                   <TableCell style={{padding: '8px',width: '50px', textAlign: 'center'}}>Movement</TableCell>
                   <TableCell numeric style={{width: '50px',  padding: '8px', textAlign: 'center'}} >Time/Reps</TableCell>
                   <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}>Reps</TableCell>
                   <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}>Weight</TableCell>
                   <TableCell numeric style={{padding: '0px',width: '20px', textAlign: 'center'}}>Complete</TableCell>
                 </TableRow>
               </TableHead>
               <TableBody>
                 {this.state.workout.map((n, index) => {
                   return (

                     <TableRow key={n.id}>
                       <TableCell component="th" scope="row" style={{padding: '8px', width: '5px', textAlign: 'center'}}>
                         {index+1}
                       </TableCell>
                       <TableCell component="th" scope="row" style={{padding: '8px', width: '50px', textAlign: 'center'}}>
                         {n.movement_name}
                       </TableCell>
                       <TableCell numeric style={{width: '50px',  padding: '8px', textAlign: 'center'}}>{n.rec_duration}</TableCell>

                       <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}><Input id={index} value={this.state.reps[index]} onChange={this.handleReps.bind(this)} placeholder='0' type='number' style={{width: '30px'}} /></TableCell>
                       <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}><Input id={index} value={this.state.weight[index]} placeholder='lbs' type='number' style={{width: '45px'}} onChange={this.handleWeight.bind(this)}/></TableCell>
                       <TableCell numeric style={{padding: '0px',width: '20px', textAlign: 'center'}}>
                          <Checkbox name="checked" checked={this.state.checked[index]} onChange={this.handleCheck.bind(this,n,index)} color="primary"/>
                      </TableCell>
                     </TableRow>
                   );
                 })}

             <TableRow >
               <TableCell colspan='6'>
                 <div  style={{textAlign: 'right'}}>
                  <Button variant="contained" type='submit' color="primary" onClick={this.nextSet.bind(this)}>
                     Next Set
                  </Button> <nbsp/>
                  <Button variant="contained" color="primary" onClick={this.handleSubmit.bind(this)}>
                         Save and Quit
                  </Button>
                </div>
              </TableCell>

             </TableRow>
           </TableBody>
         </Table>
       </Paper>
   </div>


      </div>
    )
  }

}

export default LogWorkout
