import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {MuiAppBar,MuiToolbar,MuiGrid, MuiIcon, MuiTypography} from './index'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
export default class AppBarComponent extends React.Component {
  handleLogout=()=>{
    localStorage.clear();
    window.location.href = '/';
  }
 render(){
   console.log("this.props",this.props)
  return (
      
    <MuiAppBar position="static" style={{backgroundColor:"#424242"}}>
      <MuiToolbar>
          <MuiGrid container direction='row' spacing={2}>
              
            {this.props.showBackArrowIcon?<MuiGrid item>
              <MuiIcon>
            <ArrowBackIcon onClick={this.props.onClickOfBackArrow}>

            </ArrowBackIcon>
        </MuiIcon>
              </MuiGrid>:null}  
              {this.props.showMenu? <MuiGrid item>
                <MuiIcon>
              <MenuIcon style={{}}>

              </MenuIcon>
          </MuiIcon>
                </MuiGrid>:null
              }
             
     
        <MuiGrid item>
            <MuiTypography   variant='h5' style={{fontWeight:'bold',fontSize:18}}>
               {this.props.title}
            </MuiTypography>
        </MuiGrid>
          </MuiGrid>
          
        <MuiGrid>
          <MuiIcon onClick={()=>{this.handleLogout()}}>
          <ExitToAppIcon >

</ExitToAppIcon>
          </MuiIcon>

        </MuiGrid>
      </MuiToolbar>
    </MuiAppBar>
  
);
 }
    
  }