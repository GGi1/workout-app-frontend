import React, { Component } from 'react';
import {Card, Paper, Button, CardContent, Typography, CardActions, ButtonBase} from '@material-ui/core'
import './set_display.css'
import { withStyles } from '@material-ui/core/styles';
import NewLog from './newlog'





class SetDisplay extends Component{
  constructor(props){
    super(props)
    this.state = {
      set: 1,
    }
}





    render(){
      return(

      <div>
          <div className='myroot'>
            <div className='mytopimage'>
              <span className='myimageSRC'></span>
              <span className='myimagebackdrop'></span>
              <span className='myimagebutton'>
                <Typography className='myimagetitle'>
                  <span className='mytopimagemarked'>The Log</span>
                </Typography>
              {/* <img className='myimage' src='/assets/images/padandpencil.jpeg'/> Picture here */}
            </span>
          </div>


          <div className='workoutflexbox'>
            <div className='myimage'>
              <span className='myimageSRC1'></span>
              <span className='myimagebackdrop'></span>
              <span className='myimagebutton'>
                <Typography className='myimagetitle'>
                  <span className='myimagemarked'>
                    <table className='setTable'>
                     <tr>
                       <div className='th1'>Today's Workout:    Ab Blaster 5000</div> </tr>
                       <tr>
                           <th>Set 1: </th> </tr>
                           <tr>
                       <th>Sit ups:</th>  <td>45 sec</td>
                     </tr>
                     <tr>
                       <th>Push ups:</th>  <td>45 sec</td>
                     </tr>
                     <tr>
                       <th>Pull ups:</th>  <td>45 sec</td>
                     </tr>


                     </table>
                  </span>
                </Typography>
              {/* <img className='myimage' src='/assets/images/padandpencil.jpeg'/> Picture here */}
            </span>
          </div>

          {/* //Second box: */}
          <div className='myimage'>
            <span className='myimageSRC2' style={{
              backgroundPosition: 'fixed',


            }}></span>
            <span className='myimagebackdrop'></span>
            <span className='myimagebutton'>
              <Typography className='myimagetitle'>
                <span className='myimagemarked2'>

                  <table className='setTable'>
                   <tr>
                     <div className='th1'>Record your stats:</div> </tr>
                     <tr>
                         <th>Set 1: </th> </tr>
                         <tr>
                     <th>Sit ups:</th>  <td>45 sec</td>
                   </tr>
                   <tr>
                     <th>Push ups:</th>  <td>45 sec</td>
                   </tr>
                   <tr>
                     <th>Pull ups:</th>  <td>45 sec</td>
                   </tr>


                   </table>
                </span>
              </Typography>
            {/* <img className='myimage' src='/assets/images/padandpencil.jpeg'/> Picture here */}
          </span>
        </div>
        {/* //end */}


        </div>


            </div>


  <div className= 'flextits'>


        <div className="contain-box">
            <div className='workout-note'><Card>Today's Workout <div className='workout-name'> Ab Blaster 5000</div></Card> </div>
            <div className='workout-note-overlay'><Card>Today's Workout <div className='workout-name'> Ab Blaster 5000  </div></Card> </div>

        <div className='setandpin'>
          <div className='pic'>
            <img alt='pin' src='/images/pushpin1.png'/>
          </div>


            <div className='setlist'>
              <Paper>
                <Card>
              <Card style={{width: '300px', position: 'center'}}>
                <CardContent>
                  <Typography color="textSecondary">
                    Set {this.state.set}:
                  </Typography>
                 <div className='setmoves'>
                   Push Ups  &nbsp;  &nbsp; &nbsp;  30 sec
                 </div>
                 <div className='setmoves'>
                     Pull Ups  &nbsp;  &nbsp; &nbsp;  30 sec
                   </div>
                   <Typography style={{fontSize: '20px'}}>
                  Kettle Bell Swings &nbsp;   45 sec
                   </Typography>
                 </CardContent>
                 <CardActions style={{alignItems: 'right'}}>
                   <Button position="right" size="small" >Next Set</Button>
                 </CardActions>
               </Card>
               </Card>
               </Paper>
             </div>
          </div>

         </div>
         <div>

        </div>
         <div className='pad'></div>
</div>
</div>
      )
    }


}

export default SetDisplay
