import React from 'react'
import { MuiGrid, MuiTypography, MuiIcon, MuiDivider } from '../../../ui'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, Redirect } from 'react-router-dom';

import routes from "../../../navigation/Routes";
import WithAppShell from '../../hoc/withAppShell/WithAppShell'
import { Divider } from '@material-ui/core';
class EventListDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isAddSessionClicked: false,
            clientListDetails:this.props.location.state.eventDetail
        }
    }
    
    handleAddSession = () => {
        this.setState({ isAddSessionClicked: true })
    }
    routeToClientList = () => {
        console.log("coming in route")
        this.setState({ routeToList: true })

    }
    render() {
        console.log("this.state.cleint", this.state.clientListDetails, this.props)
        return (
            <React.Fragment>
                {this.state.routeToList ? <Redirect
                    to={{
                        pathname: routes.eventList
                    }} /> :
                    <WithAppShell title={this.state.clientListDetails!=undefined &&this.state.clientListDetails.client!=undefined && this.state.clientListDetails.client} showBackArrowIcon={true} onClickOfBackArrow={this.routeToClientList}>

                        <MuiGrid container style={{}} direction='column'>

                            <MuiGrid item style={{padding:16}}>
                                <MuiGrid item>
                                    <MuiTypography style={{fontWeight:'bold'}}>
                                    Name
                                    </MuiTypography>
                                </MuiGrid>
                                <MuiGrid item>
<MuiTypography>
                                     {this.state.clientListDetails!=undefined &&this.state.clientListDetails.name!=undefined && this.state.clientListDetails.name}
                                    </MuiTypography>
                                </MuiGrid>
                            </MuiGrid>
                            <Divider>

                            </Divider>
                            <MuiGrid item style={{padding:16}}>
                                <MuiGrid >
                                <MuiTypography style={{fontWeight:'bold'}}> 
                                        Workout Plan
                                        </MuiTypography>
                                </MuiGrid>
                                <MuiGrid item>
                                <MuiTypography>
                                       {this.state.clientListDetails!=undefined &&this.state.clientListDetails.notes!=undefined && this.state.clientListDetails.notes}

                                        </MuiTypography>
                                </MuiGrid>
                                
                            </MuiGrid>
                            <Divider>
                                
                                </Divider>
                            <MuiGrid item style={{padding:16}}>
                                <MuiGrid item>
                                <MuiTypography style={{fontWeight:'bold'}}>  
                                        Date
                                        </MuiTypography>
                                </MuiGrid>
                                <MuiGrid item>
                                <MuiTypography>
                                       {this.state.clientListDetails!=undefined &&this.state.clientListDetails.date!=undefined && this.state.clientListDetails.date}
                                        </MuiTypography>
                                </MuiGrid>
                              
                            </MuiGrid>
                            <Divider>
                                
                                </Divider>
                            <MuiGrid item style={{padding:16}}>
                                <MuiGrid item>
                                <MuiTypography style={{fontWeight:'bold'}}>
                                        Time
                                        </MuiTypography>
                                </MuiGrid>
                                <MuiGrid item>
                                <MuiTypography>
                                      {this.state.clientListDetails!=undefined &&this.state.clientListDetails.time!=undefined && this.state.clientListDetails.time}
                                        </MuiTypography>
                                </MuiGrid>
                              
                            </MuiGrid>
                           
                            <Divider>
                                
                                </Divider>
                        </MuiGrid>

                    </WithAppShell>}
            </React.Fragment>


        )


    }
}
export default EventListDetails