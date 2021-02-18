import React, { useState } from 'react';
import { MuiGrid, MuiTypography, MuiIcon, MuiDivider, MuiPaper, MuiTabs, MuiTab, MuiTabPanel, MuiBox } from '../../../ui'
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles'
import ClientListDetails from './ClientListDetails'
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined'
import AddIcon from '@material-ui/icons/Add';
import ClientCreationComponent from './ClientCreationComponent'
import ActiveClientListComponent from './ActiveClientListComponent'
import FormerClientListComponent from './FormerClientComponents'
import AppBarComponent from '../../../ui/AppBarComponent'
import BottomNavigationComponent from '../../../ui/BottomNavigationComponent'
import WithAppShell from '../../hoc/withAppShell/WithAppShell'
import {Link} from 'react-router-dom'
import {routes} from '../../../navigation'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <MuiGrid
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        // <MuiBox p={3}>
        <MuiTypography>{children}</MuiTypography>
        // </MuiBox>
      )}
    </MuiGrid>
  );
}

function ClientListComponent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log("event",newValue)
    setValue(newValue);
  
  }
console.log("in function")
  return (
    <React.Fragment>
<WithAppShell 
title="Clients"
showBottomNavigationComponent={true}>
<MuiTabs
        // value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      // style={{paddingLeft:16,width:'100%'}}
      >
        <MuiTab label="Active" style={value==0?componentStyles.tabClicked:componentStyles.tabDefault}/>
        <MuiTab label="Former" style={value==1?componentStyles.tabClicked:componentStyles.tabDefault}/>
      </MuiTabs>
      <MuiDivider>

      </MuiDivider>
      <TabPanel value={value} index={0} >
        <ActiveClientListComponent></ActiveClientListComponent>
      </TabPanel>
      <TabPanel value={value} index={1} >
        <FormerClientListComponent></FormerClientListComponent>
      </TabPanel>
      {/* </MuiPaper> */}
      <Link to={{pathname:routes.addClient}}>
          <Fab style={{ margin: 0,
    top: 'auto',
    right: 45,
    bottom: 62,
    left: 'auto',
    position: 'fixed',
    background:'#8bc34a'}} size="medium">
          <AddIcon style={{color:'white'}}>

          </AddIcon>
          </Fab>
          </Link>
</WithAppShell>
      {/* <MuiPaper square> */}
      

    </React.Fragment>

  )




}

const componentStyles = {
  button: {
    // color: "#4caf50",
    backgroundColor: '#4caf50',
  },
  tabClicked:{
    color:'#8bc34a'
  },
  tabDefault:{
    color:'black'
  }
};
export default (ClientListComponent)