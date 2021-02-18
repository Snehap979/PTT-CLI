import React from 'react'
import { MuiTextField, MuiTypography, MuiGrid, MuiDivider, MuiButton,MuiMenuItem } from '../../../ui'
import WithAppShell from '../../hoc/withAppShell/WithAppShell'
import axios from 'axios'
import { Redirect,Link} from 'react-router-dom';
import {routes} from '../../../navigation'
import * as ClientActions from '../../../actions/ClientActions'
export default class AddClientComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            address: {},
            sessionsSubscribed: 0,
            status: '',
            phoneNumber: '',
            firstName: '',
            lastName: '',
            modeOfPayment: '',
            // client: {}
        }

    };
    handleChange = (name, value) => {
        console.log("")
        let tempClientObject = {}
        tempClientObject[name] = value
        let client = tempClientObject
        console.log("client", client)
        this.setState({[name]:value})
    }
    handleAddressChange = (name, value) =>{
        let tempAddressObject=this.state.address
        tempAddressObject[name]=value
       this.setState({address:tempAddressObject})

    }
    onSave=async()=>{
        let client=this.state
        console.log("this.state",client)
        // client.
        client.id=0;
       let response=await ClientActions.createClient(client)
       if(response.status==200)
       {
        this.setState({routeToList:true})
       }
      
    }
    modeOfPayment=[
        {
            label:'cash',

        },
        {
            label:'card',
           
        },
        {
            label:'online',
            
        },
        {
            label:'cheque',
           
        }
    ]
    status=[
        {
            label:'active',
           
        },
        {
            label:'former',
           
        }
    ]
    routeToClientList=()=>{
        console.log("coming in route")
        this.setState({routeToList:true})
        
    }
    render() {
        return (
            <React.Fragment>
                {this.state.routeToList?<Redirect to={{pathname: routes.clientsList}}>
                </Redirect>:
                <WithAppShell showBackArrowIcon={true} onClickOfBackArrow={this.routeToClientList}
                    title="Add Clients">
                    <MuiGrid style={{}}>
                        <MuiGrid style={{ padding: 16 }}>
                            <MuiTextField variant="outlined" label="First Name"   onChange = {(event) => this.handleChange('firstName',event.target.value)} style={{ width: '100%', paddingBottom: 16 }}>

                            </MuiTextField>
                            <MuiTextField variant="outlined" label="Last Name" onChange = {(event) => this.handleChange('lastName',event.target.value)}style={{ width: '100%', paddingBottom: 16 }}>

                            </MuiTextField>
                            <MuiTextField variant="outlined" label="Phone Number" onChange = {(event) => this.handleChange('phoneNumber',event.target.value)}style={{ width: '100%', paddingBottom: 16 }}>

                            </MuiTextField>
                            <MuiTextField variant="outlined" label="Sessions Taken" onChange = {(event) => this.handleChange('sessionsSubscribed',event.target.value)}style={{ width: '100%', paddingBottom: 16 }}>

                            </MuiTextField>
                            <MuiTextField
            id="outlined-select-currency"
            select
            label="Mode Of Payment"
            value={this.state.modeOfPayment}
            onChange = {(event) => this.handleChange('modeOfPayment',event.target.value)}
  
            variant="outlined"
  
            style={{width:'100%',background:'white',borderRadius:8,paddingBottom: 16 }}
          >
            {this.modeOfPayment.map((option) => (
              <MuiMenuItem key={option.value} value={option.label}>
                {option.label}
              </MuiMenuItem>
            ))}
          </MuiTextField>
          <MuiTextField
            id=""
            select
            label="Status"
            value={this.state.status}
            onChange = {(event) => this.handleChange('status',event.target.value)}
  
            variant="outlined"
  
            style={{width:'100%',background:'white',borderRadius:8,paddingBottom: 16 }}
          >
            {this.status.map((option) => (
              <MuiMenuItem key={option.value} value={option.label}>
                {option.label}
              </MuiMenuItem>
            ))}
          </MuiTextField>
                            <MuiGrid >
                                <MuiTextField variant="outlined" label="Street Address" onChange = {(event) => this.handleAddressChange('street',event.target.value)}style={{ width: '100%', paddingBottom: 16 }}>

                                </MuiTextField>
                                <MuiTextField variant="outlined" label="City" onChange = {(event) => this.handleAddressChange('city',event.target.value)}style={{ width: '100%', paddingBottom: 16 }}>

                                </MuiTextField>
                                <MuiTextField variant="outlined" label="State" onChange = {(event) => this.handleAddressChange('state',event.target.value)}style={{ width: '100%', paddingBottom: 16 }}>

                                </MuiTextField>
                                <MuiTextField variant="outlined" label="PIN" onChange = {(event) => this.handleAddressChange('pin',event.target.value)}style={{ width: '100%' }}>

                                </MuiTextField>
                            </MuiGrid>
                        </MuiGrid>



                        <MuiGrid style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 16 }}>
                            <MuiButton variant="contained" style={{ width: '100%', backgroundColor: "#4caf50" }} onClick={this.onSave}>
                                save
            </MuiButton>
                        </MuiGrid>
                    </MuiGrid>
                </WithAppShell>}
            </React.Fragment>
        )
    }
}