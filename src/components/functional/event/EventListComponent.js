import React from 'react'
import {MuiGrid,MuiList,MuiListItem, MuiListItemText,MuiIconButton,MuiDivider,MuiTypography,MuiButton} from '../../../ui'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import WithAppShell from '../../hoc/withAppShell/WithAppShell'
import Box from '@material-ui/core/Box';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from 'react-router-dom'
import routes from '../../../navigation/Routes'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { getEvents } from '../../../rest/APIDirectory';
import * as Events from '../../../actions/EventActions'
export default class EventListComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            events:[]
        }
    }
   eventList=[
        {
            'name':'functional',
            'clientName':'Ramya Rajendra',
            'time':'Fri,Nov 20 • 7:00 PM'
        },
        {
            'name':'functional',
            'clientName':'Ramya Rajendra',
            'time':'Fri,Nov 20 • 7:00 PM'
        },
        {
            'name':'functional',
            'clientName':'Ramya Rajendra',
            'time':'Fri,Nov 20 • 7:00 PM'
        },
        {
            'name':'functional',
            'clientName':'Ramya Rajendra',
            'time':'Fri,Nov 20 • 7:00 PM'
        },
        {
            'name':'functional',
            'clientName':'Ramya Rajendra',
            'time':'Fri,Nov 20 • 7:00 PM'
        },
        {
            'name':'functional',
            'clientName':'Ramya Rajendra',
            'time':'Fri,Nov 20 • 7:00 PM'
        },
        {
            'name':'functional',
            'clientName':'Ramya Rajendra',
            'time':'Fri,Nov 20 • 7:00 PM'
        }
    ]
    getEvents=async()=>{
        let events=await Events.getEvents()
        this.setState({events:events})
    }
    handleDeleteEvent=async(event,eventObject)=>{
        console.log("inside the handledelete function",eventObject)
        let response=await Events.deleteEvent(eventObject)
console.log("response",response)
if(response.data.ok==1)
{
    this.getEvents()
}
    }
    componentDidMount(){
        this.getEvents()
    }
    render(){
        console.log("events",this.state.events)
        return(
            <WithAppShell title={"Events"} showBackArrowIcon={false} onClickOfBackArrow={this.routeToClientList} showBottomNavigationComponent={true}>
            <MuiGrid >
            <MuiList>
                    {this.state.events!=undefined && this.state.events.map((item)=>{
                        return(
                            <React.Fragment>
                              
<MuiListItem>
<Link style={{textDecoration: 'none',color: 'inherit'}}to={{pathname:routes.eventDetails,state:{eventDetail:item}}}>
                            {/* <MuiListItemText primary={item.time} style={{fontWeight:'bold',border:'1px solid black',fontSize:'21px'}}/> */}
                            <MuiListItemText
                    primary={<MuiTypography style={{fontSize:20}}>
                      {item.date} • {item.time}
                    </MuiTypography>}
                    secondary={<MuiTypography style={{fontSize:18,color:'grey'}}>
                        {item.client}
                    </MuiTypography>}
                  />
                     </Link>
               
                  <ListItemSecondaryAction style={{paddingBottom:24}}>
                    {/* <MuiIconButton  aria-label="delete" style={{}}>
                      <EditIcon style={{color:'#8bc34a'}}/>
                    </MuiIconButton> */}
                    <MuiIconButton  aria-label="delete"style={{paddingLeft:8}} onClick={(event)=>{this.handleDeleteEvent(event,item)}}>
                      <HighlightOffIcon style={{color:'red'}} onClick={this.handleDeleteEvent}/>
                    </MuiIconButton>
                  </ListItemSecondaryAction>
               
                           </MuiListItem>
                       
                       <MuiDivider>

                       </MuiDivider>
                    
                            </React.Fragment>
                            
                        )
                    })}
                    
                </MuiList>
             
                <Link to={{pathname:routes.eventCreation}}>
          <Fab style={{ margin: 0,
    top: 'auto',
    right: 38,
    bottom: 58,
    left: 'auto',
    position: 'fixed',
    background:'#8bc34a'}} size="medium">
          <AddIcon style={{color:'white'}}>

          </AddIcon>
          </Fab>
          </Link>
               
  </MuiGrid>
  </WithAppShell>
        )
    }
}