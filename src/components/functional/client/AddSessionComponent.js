import React from 'react'
import { MuiGrid, MuiTypography, MuiIcon, MuiDivider, MuiTextField, MuiButton, MuiFab, MuiRadio } from '../../../ui'
import AddIcon from '@material-ui/icons/Add';
import ClientListComponent from './ClientListComponent'
import WithAppShell from '../../hoc/withAppShell/WithAppShell'
import { Redirect, Link } from 'react-router-dom';
import { routes } from '../../../navigation';
import moment from 'moment'
import * as SessionActions from '../../../actions/SessionActions'
class AddSessionComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // sessions:this.props.completedSessions,
            routeToList: false,
            clientListDetails: this.props.location.state.clientDetails!=undefined && this.props.location.state.clientDetails,
            isPresent: false,
            isAbsent: false,
            attendanceStatus: '',
            price: 0,
            description: '',
            date: moment().format("D MM YYYY")

        }
        this.sessions = 0
    }
    componentDidMount() {
        // this.setState(sessions:this.props.completedSessions)
        console.log("in component did mount")

    }
    handleSessionChange = (event) => {
        this.sessions = event.target.value
        this.setState({ sessions: this.sessions })
    }
    handleChangeAddButton = () => {
        let tempSessions = this.state.sessions
        tempSessions = ++tempSessions
        this.setState({ sessions: tempSessions })

    }
    routeToClientList = async() => {
        console.log("coming in route", this.state)
       
        let session = {}
        session.count = this.state.sessionCount
        session.price = this.state.price
        session.date = this.state.date
        session.isPresent = this.state.isPresent
        session.clientId = this.state.clientListDetails._id
        session.description = this.state.description
 //MAKE AN API CALL TO SAVE THE SESSIONS CHANGE
 let response= await SessionActions.createSession(session)
console.log("response",response)
if(response.status==200)
{
    this.setState({routeToList:true})
}


    }
    redirectToClientList =async()=>{
      this.setState({routeToList:true})
    }
    handleAttendanceSelect = (name, event) => {

        this.setState({ attendanceStatus: event.target.value })

        if (event.target.value == 'Present') {

            let sessionCount = ++this.state.clientListDetails.sessionCount
            this.setState({ isPresent: true })
            this.setState({ sessionCount: sessionCount })
        }

    }
    handlePrice = (event) => {
        let price = Number(event.target.value)
        this.setState({ price: price })
    }
    handleDescription = (event) => {
        this.setState({ description: event.target.value })
    }
    render() {
        console.log("this.props", this.props)

        return (
            <React.Fragment>
                {this.state.routeToList ? <Redirect
                    to={{
                        pathname: routes.clientsList
                    }} /> :
                    <WithAppShell title="Add Session" showBackArrowIcon={true} onClickOfBackArrow={this.redirectToClientList}>
                        <MuiGrid container style={{ padding: 8 }} spacing={3}>
                            <MuiGrid item container style={{}} direction='column'>
                                <MuiGrid item>
                                    <MuiTypography>
                                        Client Attendance
                    </MuiTypography>

                                </MuiGrid>

                                <MuiGrid item container >
                                    <MuiGrid item >
                                        <MuiRadio onChange={(event) => { this.handleAttendanceSelect('Present', event) }} checked={this.state.attendanceStatus == 'Present'} style={{ color: 'green' }} value='Present' />
                                    </MuiGrid>
                                    <MuiGrid item style={{}}>
                                        <MuiTypography style={{ paddingTop: 8 }}>
                                            Present
                    </MuiTypography>
                                    </MuiGrid>
                                </MuiGrid>
                                <MuiGrid item container>
                                    <MuiGrid item style={{}}>
                                        <MuiRadio onChange={(event) => { this.handleAttendanceSelect('Absent', event) }} checked={this.state.attendanceStatus == 'Absent'} value='Absent' />
                                    </MuiGrid>
                                    <MuiGrid item style={{}}>
                                        <MuiTypography style={{ paddingTop: 8 }}>
                                            Absent
                    </MuiTypography>
                                    </MuiGrid>
                                </MuiGrid>


                            </MuiGrid>

                            <MuiGrid item container direction='column'>
                                <MuiGrid item>
                                    <MuiTypography>
                                        Date
                    </MuiTypography>

                                </MuiGrid>
                                <MuiGrid item>
                                    <MuiTypography>
                                        {moment().format("D MM YYYY")}
                                    </MuiTypography>
                                </MuiGrid>

                            </MuiGrid>
                            <MuiGrid item container direction='column'>
                                <MuiGrid item>
                                    <MuiTypography>
                                        Price
                    </MuiTypography>

                                </MuiGrid>
                                <MuiGrid item>
                                    <MuiTextField id="standard-basic" style={{ width: '100%' }} onChange={(event) => { this.handlePrice(event) }} />
                                </MuiGrid>


                            </MuiGrid>
                            <MuiGrid item container direction='column'>
                                <MuiGrid item>
                                    <MuiTypography>
                                        Session description
                        </MuiTypography>
                                </MuiGrid>
                                <MuiGrid item>
                                    <MuiTextField
                                        onChange={(event) => { this.handleDescription(event) }}
                                        style={{ width: '100%' }}
                                        id="outlined-textarea"

                                        multiline
                                        rows={7}
                                        variant="outlined"
                                    />

                                </MuiGrid>

                            </MuiGrid>

                            <MuiGrid item style={{ width: '100%' }}>
                                <MuiButton size='large' variant="contained" style={{ background: "#4caf50", width: '100%', color: "white" }} onClick={this.routeToClientList}>
                                    SAVE
                       </MuiButton>
                            </MuiGrid>
                        </MuiGrid>
                    </WithAppShell>
                }
            </React.Fragment>

        )
    }

}


export default AddSessionComponent