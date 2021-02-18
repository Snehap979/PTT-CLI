import React from 'react'
import { MuiGrid, MuiTypography, MuiIcon, MuiDivider } from '../../../ui'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, Redirect } from 'react-router-dom';
import AddSessionComponent from './AddSessionComponent'
import routes from "../../../navigation/Routes";
import WithAppShell from '../../hoc/withAppShell/WithAppShell'
class ClientListDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            isAddSessionClicked:false,
            clientListDetails:this.props.location.state.clientDetails
        }
    }
//     componentDidMount(){
// this.setState({clientListDetails:this.props.location.state.clientDetails})
//     }
    clientListDetails = {
        modeOfPayment:'cash',
        sessionsSubscribed:36,
        address:{
"street":'42',
"city":"bangalore",
"state":"karnataka",
"pin":"560079"
        },
    status:"Active",
    phoneNumber:"+918971577450",
    firstName:"RAJU",
    lastName:"shree",
    }
    handleAddSession=()=>{
        this.setState({isAddSessionClicked:true})
    }
    routeToClientList=()=>{
        console.log("coming in route")
        this.setState({routeToList:true})
        
    }
    render() {
        console.log("this.state.cleint",this.state.clientListDetails,this.props)
        return (   
            <React.Fragment>
                {this.state.routeToList?<Redirect
            to={{
              pathname: routes.clientsList
            }}/>:
  <WithAppShell title={this.state.clientListDetails.firstName} showBackArrowIcon={true} onClickOfBackArrow={this.routeToClientList}>

<MuiGrid container style={{}} direction='column'>
              
                    <MuiGrid item style={{}}>
                        <MuiGrid style={{padding:4,backgroundColor:'#8bc34a'}}>
                        <MuiTypography style={{fontWeight:'bold',color:'white'}} variant='h6'>
                            General Information
                        </MuiTypography>

                        </MuiGrid>
                        <MuiDivider>

</MuiDivider>
                        <MuiGrid container direction='column' style={{paddingTop:4,paddingBottom:4,paddingRight:16,paddingLeft:16}}>
                        <MuiGrid item>
                        <MuiTypography  varaint='caption' style={{fontWeight:'bold'}}>
                            Sessions  Subscribed
                        </MuiTypography>
                        </MuiGrid>
                        <MuiGrid item style={{}}>
                        <MuiTypography style={{}} variant='subtitle2'>
                        {this.state.clientListDetails.sessionsSubscribed}
                        </MuiTypography>
                        </MuiGrid>
                       
                   
                        </MuiGrid>
                       
                        <MuiDivider>

</MuiDivider>
                     
                      
                        <MuiGrid item container direction='column' style={{paddingTop:4,paddingBottom:4,paddingRight:16,paddingLeft:16}}>
                        <MuiGrid item>
                        <MuiTypography varaint='caption' style={{fontWeight:'bold'}}>
                            Mode Of Payment
                        </MuiTypography>
                        </MuiGrid>
                        <MuiGrid item style={{}} >
                        <MuiTypography variant='body1'>
                        {this.state.clientListDetails.modeOfPayment}
                        </MuiTypography>
                        </MuiGrid>
                        </MuiGrid>
                        <MuiDivider>

</MuiDivider>
                    </MuiGrid>
                    
                    <MuiGrid item >
                        <MuiGrid item  direction='row' >
                            <MuiGrid style={{padding:4,backgroundColor:'#8bc34a'}}>
                            <MuiTypography style={{fontWeight:'bold',color:'white'}} variant='h6'>
                                Contact Information
                            </MuiTypography>
                            </MuiGrid>
                           
                        </MuiGrid>
                        <MuiDivider>

</MuiDivider>
                        <MuiGrid item container direction='column' style={{paddingTop:4,paddingBottom:4,paddingRight:16,paddingLeft:16}}>
                        <MuiGrid item>
                        <MuiTypography varaint='caption' style={{fontWeight:'bold'}}>
                        Phone Number
                        </MuiTypography>
                        </MuiGrid>
                        <MuiGrid item style={{}}>
                        <MuiTypography variant='body1' >
                        {this.state.clientListDetails.phoneNumber}
                        </MuiTypography>
                        </MuiGrid>
                        </MuiGrid>
                        <MuiDivider>

</MuiDivider>
                        <MuiGrid item container direction='column'style={{paddingTop:4,paddingBottom:4,paddingRight:16,paddingLeft:16}}>
                        <MuiGrid item>
                        <MuiTypography varaint='caption' style={{fontWeight:'bold'}}>
                            Street
                        </MuiTypography>
                        </MuiGrid>
                        <MuiGrid item style={{}}>
                        <MuiTypography variant='body1'>
                        {this.state.clientListDetails.address.street}
                        </MuiTypography>
                        </MuiGrid>
                        </MuiGrid>
                        <MuiDivider>

</MuiDivider>
                        <MuiGrid item container direction='column' style={{paddingTop:4,paddingBottom:4,paddingRight:16,paddingLeft:16}}>
                        <MuiGrid item>
                        <MuiTypography varaint='caption' style={{fontWeight:'bold'}}>
                            City
                        </MuiTypography>
                        </MuiGrid>
                        <MuiGrid item style={{}}>
                        <MuiTypography variant='body1'>
                        {this.state.clientListDetails.address.city}
                        </MuiTypography>
                        </MuiGrid>
                        </MuiGrid>
                        <MuiDivider>

</MuiDivider>
                        <MuiGrid item container direction='column' style={{paddingTop:4,paddingBottom:4,paddingRight:16,paddingLeft:16}}>
                        <MuiGrid item>
                        <MuiTypography varaint='caption' style={{fontWeight:'bold'}}>
                            State
                        </MuiTypography>
                        </MuiGrid>
                        <MuiGrid item style={{}}>
                        <MuiTypography variant='body1'>
                        {this.state.clientListDetails.address.state}
                        </MuiTypography>
                        </MuiGrid>
                        </MuiGrid>
                        <MuiDivider>

</MuiDivider>
                        <MuiGrid item container direction='column' style={{paddingTop:4,paddingBottom:4,paddingRight:16,paddingLeft:16}}>
                        <MuiGrid item>
                        <MuiTypography varaint='caption' style={{fontWeight:'bold'}}>
                            PIN
                        </MuiTypography>
                        </MuiGrid>
                        <MuiGrid item style={{}}>
                        <MuiTypography variant='body1'>
                        {this.state.clientListDetails.address.pin}
                        </MuiTypography>
                        </MuiGrid>
                        </MuiGrid>
                        <MuiDivider>

</MuiDivider>
                    </MuiGrid>
                </MuiGrid>
                <MuiGrid>

                </MuiGrid>
           
            </WithAppShell>}
            </React.Fragment>
          
            
        )
    
        
    }
}
export default ClientListDetails