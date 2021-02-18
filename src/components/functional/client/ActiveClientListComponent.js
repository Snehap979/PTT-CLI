import React from 'react';
import { MuiGrid, MuiTypography, MuiIcon, MuiDivider,MuiList,MuiListItem } from '../../../ui'
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import {withStyles} from '@material-ui/core/styles'
import ClientListDetails from './ClientListDetails'
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined'
import AddIcon from '@material-ui/icons/Add';
import ClientCreationComponent from './ClientCreationComponent'
import {Link} from 'react-router-dom'
import {routes} from '../../../navigation'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import * as  ClientActions from '../../../actions/ClientActions'
import addClientImage from '../../../assets/images/addClient.svg'
import CircularProgress from '@material-ui/core/CircularProgress';
class ActiveClientListComponent extends React.Component {
    constructor(props) {
        super(props)

    }
    
    state = {
        clients: [],
        routeToDetails:false,
        apiResponse:'',
        clientCreationPage:false
    }
    // callAPI() {
    //     fetch("http://localhost:9000/testAPI")
    //         .then(res => res.text())
    //         .then(res => this.setState({ apiResponse: res }));
    // }
    setClients=async()=>{
let clients=await ClientActions.getAllClients()
this.setState({clients:clients})
console.log("clients",clients)
    }
    componentDidMount()
    {
        // this.callAPI();
        this.setClients()
        // this.setState({clients:this.clients})
        console.log("this.state.clients",this.clients)
        let tempClientListDetails=this.clients
        if(this.props.clientListDetails!=undefined)
        {

            console.log("in if")
            for(let i=0;i<tempClientListDetails.length;i++)
            {
                console.log("iin for")
                if(this.clients[i].id==this.props.clientListDetails.id)
                {
                   tempClientListDetails[i].sessions=this.props.sessions
                }
                console.log("tempClientListDetails",tempClientListDetails)
            }
            this.setState({clients:tempClientListDetails})
        }
    }
    
    onRouteToDetails=()=>{
    console.log("in onclick")
        this.setState({routeToDetails:true})
    }
    onRoutesToClientCreation=()=>{
        this.setState({clientCreationPage:true})
    }
    getClientName=(item)=>{
      console.log("item",item)
        let firstName=item.firstName
        let lastName=item.lastName!=undefined?item.lastName:""
return firstName+" "+lastName
    }

    render() {
        console.log("this.props",this.state.apiResponse)
const classes=this.props
    return (

        <MuiGrid style={{overflow:'hidden'}}>
              <React.Fragment>
                {this.state.clients.length>0? <MuiList style={{background:'#FFFF9'}}>
               {this.state.clients.map(item => {
                  return (
                      <React.Fragment>
                          <Link style={{textDecoration: 'none',color: 'inherit'}}to={{pathname:routes.clientDetails, state: { clientDetails: item }}}>
                 <MuiListItem >
                   <ListItemAvatar>
                     <Avatar style={{}}>
                       <AccountCircleOutlined  />
                     </Avatar>
                   </ListItemAvatar>
                   <ListItemText primary={this.getClientName(item)} secondary={item.sessionCount!=undefined && item.sessionCount}/>
                   
                  <Link to={{pathname:routes.addSession, state:{clientDetails: item}}}>
                 
                   <ListItemSecondaryAction>
                     <IconButton  aria-label="delete">
                       <FitnessCenterIcon style={{color:"#8bc34a"}}/>
                     </IconButton>
                   </ListItemSecondaryAction>
                   </Link>
                 </MuiListItem>
                 <MuiDivider style={{width: '100%', marginLeft:0}} variant="inset" component="li" />
                 </Link>
                 </React.Fragment>
               )})}
             </MuiList>:<MuiGrid container justify='center' alignItems='center' alignSelf='center'>
               <MuiGrid item style={{marginTop:200}}>
               {/* <img src={addClientImage} style={{width:150,height:150,padding:32}}>
              
              </img> */}
              <CircularProgress  color="yellow" style={{color:"#8bc34a"}}>

              </CircularProgress>
               </MuiGrid>
               
             
               </MuiGrid>}
              
             
             </React.Fragment>
          
        
        
        </MuiGrid>
    )
}
      
    // }
}
const componentStyles = {
    button: {
        // color: "#4caf50",
        backgroundColor: '#4caf50',
    }
  };
export default withStyles(componentStyles)(ActiveClientListComponent)