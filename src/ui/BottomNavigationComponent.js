import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { Redirect,Link} from 'react-router-dom';
import {routes} from '../navigation'
import {MuiGrid} from '../ui'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
const useStyles = makeStyles({
  root: {
    // width: 500,
    color:'white'
  },
  selected:{
    color:'#4caf50'
  }
});

export default class BottomNavigationComponent extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
    //  value:0,
     isButtonClicked:false
    }
  }
  // getRedirect=()=>{
  //   if(selected==1)
  //   {
  //     setPathname('routes.home')
  //   }
  //   else if(selected==2)
  //   {
  //     setPathname('routes.eventList')
  //   }
  //   else
  //   {
  //     setPathname('routes.dashboard')
  //   }
  // }
  handleChange = (event, newValue) => {
    console.log("newVlaue",newValue)
    this.setState({value:newValue})
    this.setState({isButtonClicked:true})

  };
   getValue = () => {
    console.log("Vlaue",this.state.value)
    // setValue(newValue);

  };
  routeToComponents=(value)=>{
if(value==0)
{
  return routes.dashboard
}
  }
  render(){
    console.log("THIS.STATE.VALUE",this.state.value)
    return (
      <MuiGrid>
       
  {/* {getRedirect && <Redirect to={{pathname:pathname}}>
    </Redirect>} */}
 
        {this.state.isButtonClicked && this.state.value==2?(<Redirect to={{pathname:routes.dashboard}}>
  
  </Redirect>):(this.state.isButtonClicked && this.state.value==1?<Redirect to={{pathname:routes.eventList}}>

  </Redirect>:this.state.isButtonClicked && this.state.value==0&&<Redirect to={{pathname:routes.clientsList}}>:

</Redirect>)}
        {/* {selected==2?<Redirect to={{pathname:routes.eventList}}>
  
        </Redirect>:null} */}
  <BottomNavigation
        value={this.state.value}
        style={{backgroundColor:"#424242"}}
        onChange={(event,newValue)=>this.handleChange(event,newValue)}
        showLabels
        // className={classes.root}
      >
        
        <BottomNavigationAction label="Home" icon={<HomeIcon />}  style={this.state.value==0?elementStyles.btnStyleClicked:elementStyles.btnStyle}/>
        <BottomNavigationAction label="Events" icon={<EventIcon />} style={this.state.value==1?elementStyles.btnStyleClicked:elementStyles.btnStyle} />
        <BottomNavigationAction label="Dashboard" icon={<ShowChartIcon />}style={this.state.value==2?elementStyles.btnStyleClicked:elementStyles.btnStyle} />
      
      </BottomNavigation>
      </MuiGrid>
     
      
    );
  }
  
}
const elementStyles ={
  btnStyle:{
    color:'white'
    
  },
  btnStyleClicked:{
    // color:'#8bc34a'
    color:'white'
  },
}
//onClick={()=>handleChange(1)} style={selected==1?elementStyles.btnStyleClicked:elementStyles.btnStyle} 
// onClick={()=>handleChange(2)} style={selected==2?elementStyles.btnStyleClicked:elementStyles.btnStyle}
// onClick={()=>handleChange(3)} style={selected==3?elementStyles.btnStyleClicked:elementStyles.btnStyle}


//style={this.state.value==0?elementStyles.btnStyleClicked:elementStyles.btnStyle}