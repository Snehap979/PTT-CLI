import React from 'react'
import { MuiGrid, MuiTextField, MuiMenuItem, MuiButton } from '../../../ui'
import WithAppShell from '../../hoc/withAppShell/WithAppShell'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import moment from 'moment'
import * as EventActions from '../../../actions/EventActions'
import {Redirect} from 'react-router-dom'
import routes from '../../../navigation/Routes'
import * as  ClientActions from '../../../actions/ClientActions'
export default class EventCreationComponent extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
     notes:'',
      name:'',
      date:'',
      showTime:new Date(),
      showDate:'',
      client:'',
      time:moment().format('LT'),
      clients:[]
    }
  }
 
  handleDateChange=(event)=>{
    let date=moment(event).format('ddd MMM Do');      
this.setState({date:date})
this.setState({showDate:event.target.value})
  
  }
  handleWorkoutNotes=(event)=>{
    console.log("notes",event.target.value)
  
this.setState({notes:event.target.value})

  } 
  setCalendarEvent=(time)=>{
    console.log("time",time)
  }
  
  handleTimeChange=(event)=>{
    // let time=event.toISOString().getUTCHours();
    console.log("time",event.getHours(),event.getMinutes())
    let hours=event.getHours()
    let meridian=''
    if(hours>=12)
    {
      meridian='PM'
    }
    else
    {
      meridian='AM'
    }
   
  let minutes=event.getMinutes()
  console.log("hours++minutes++meridian0",hours+":"+minutes+" "+meridian)
  this.setState({showTime:event})
  let time=hours+":"+minutes+" "+meridian
    this.setState({time:time})
   
    
  }
  handleWorkoutName=(event)=>{
this.setState({name:event.target.value})

  }
  handleSubmit=async()=>{
   
let response=await EventActions.createEvents(this.state)
console.log("response",response)
if(response.status==200)
{
  this.setState({routeToList:true})
}
  }
  handleClient=(event)=>{
this.setState({client:event.target.value})
  }
  setClients=async()=>{
    let clients=await ClientActions.getAllClients()
    this.setState({clients:clients})
    console.log("clients",clients)
        }
  
  componentDidMount(){
   this.setClients()
  }
  routetoList=()=>{
    this.setState({routeToList:true})
  }
  render() {
  
    const d=new Date()
   
    const month=new Date().getMonth()+1
    const date=d.getFullYear()+'-'+month+'-'+d.getUTCDate()
    
    return (
      <React.Fragment>
                {this.state.routeToList ? <Redirect
                    to={{
                        pathname: routes.eventList
                    }} /> :
      <WithAppShell showBackArrowIcon={true} onClickOfBackArrow={this.routetoList}
      title="Add Events">
 <MuiGrid style={{ padding: 20}} container justify='space-between' spacing={2}xs > 
        <MuiGrid item >
          <MuiTextField
            id="outlined-select-currency"
            select
            label="Client"
            defaultValue={this.state.clients}
            variant="outlined"
            value={this.state.client}
            style={{ background: 'white',width:320}}
            onChange={this.handleClient}
          >
            {this.state.clients!=undefined && this.state.clients.map((option) => (
              <MuiMenuItem key={option.id} value={option.firstName}>
                {option.firstName}
              </MuiMenuItem>
            ))}
          </MuiTextField>
        </MuiGrid>
     
        <MuiGrid item >
          <MuiTextField label='Workout Name' style={{width:320}} variant="outlined" onChange={this.handleWorkoutName}>
            
          </MuiTextField>
        </MuiGrid>
        <MuiGrid item>
          <MuiTextField label='Workout Notes' multiline
          rows={4} variant="outlined"style={{width:320}} onChange={this.handleWorkoutNotes}>
            
          </MuiTextField>
        </MuiGrid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <MuiGrid item >
        <MuiTextField
         style={{width:320}}
         onChange={(event)=>{this.handleDateChange(event)}}
    id="date"
    label="Date"
    type="date"
    defaultValue={date}
    InputLabelProps={{
      shrink: true,
    }}
  />
        </MuiGrid>
        <MuiGrid item >
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time"
          // defaultValue={new Date()}
          value={new Date(this.state.showTime)}
          style={{width:320}}
          onChange={(event)=>this.handleTimeChange(event)}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        </MuiGrid>
        </MuiPickersUtilsProvider>
        <MuiGrid item>
          <MuiButton style={{backgroundColor:"#4caf50",width:320}} onClick={this.handleSubmit}>
            SAVE
          </MuiButton>
        </MuiGrid>
       
     
      </MuiGrid>
      </WithAppShell>}
   </React.Fragment>
    )
  }
}