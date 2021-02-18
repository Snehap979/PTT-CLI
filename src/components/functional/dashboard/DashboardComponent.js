import React from 'react'
import {MuiGrid,MuiList,MuiListItem, MuiListItemText,MuiIconButton,MuiDivider,MuiTypography,MuiButton,MuiCard} from '../../../ui'
import WithAppShell from '../../hoc/withAppShell/WithAppShell'
import Box from '@material-ui/core/Box';
import EditIcon from '@material-ui/icons/Edit';
import * as EventsActions from '../../../actions/EventActions'
import moment from 'moment'

export default class DashboardComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            events:[],
            date:moment(new Date()).format('ddd MMM Do'),
            time:moment().format('LT')
        }
    }
   
   eventList=[
        {
            'name':'functional',
            'clientName':'Ramya Rajendra',
            'time':'7:00 AM'
        },
        {
            'name':'functional',
            'clientName':'Ramya Rajendra',
            'time':'1:00 PM'
        },
        {
            'name':'functional',
            'clientName':'Ramya Rajendra',
            'time':'7:00 PM'
        },
        {
            'name':'functional',
            'clientName':'Ramya Rajendra',
            'time':'4:00 PM'
        },
        {
            'name':'functional',
            'clientName':'Ramya Rajendra',
            'time':'5:00 PM'
        },
        {
            'name':'CARDIO',
            'clientName':'Ramya Rajendra',
            'time':'6:00 PM'
        },
        {
            'name':'CORE',
            'clientName':'Ramya Rajendra',
            'time':'7:00 PM'
        }
    ]
    getEvents=async()=>{
        let events=await EventsActions.getEvents()
       let eventsList= events.filter(event => event.date ===this.state.date);

        this.setState({events:eventsList})
    }
    componentDidMount()
    {
      
            this.getEvents()
        

    }
    
    render(){
        console.log("this.props",this.state.events,this.state.date)
        return(
            <WithAppShell title={"Today"} showBackArrowIcon={false} onClickOfBackArrow={this.routeToClientList} showBottomNavigationComponent={true}>
            <MuiGrid style={{padding:8}}>
                <MuiList>
                    {this.state.events.map((item)=>{
                        return(
                            <React.Fragment>
                                
                                <MuiCard style={{height:100,borderRadius:10,backgroundColor:"white"}} variant="outlined" >
                                

                            <MuiListItem>
                            <MuiListItemText
                
                    primary={<Box  justifyContent="center"
                    alignItems="center" display='flex' style={{width:100,height:75,background:"#8bc34a",borderRadius:10}}>   <MuiTypography style={{fontSize:22,color:'#424242'}}>
                    {item.time}
                </MuiTypography></Box>
                  }
                    
                  />
                 
                  <MuiListItemText
                  style={{}}
                    primary={<MuiTypography style={{fontSize:20,paddingLeft:16}}>
                    {item.client}
                </MuiTypography>}
                    secondary={<MuiTypography style={{fontSize:18,paddingLeft:16}}>
                    {item.name}
                </MuiTypography>}
                  />
                 
                </MuiListItem>
                            </MuiCard>
                   
                       {/* <MuiDivider>

                       </MuiDivider> */}

                       <br>
                       </br>
                            </React.Fragment>
                            
                        )
                    })}
                </MuiList>
  </MuiGrid>
  </WithAppShell>
        )
    }
}