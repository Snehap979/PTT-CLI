import React from 'react'
import { MuiGrid, MuiTextField,MuiButton,MuiTypography } from '../../../ui'
import fire from '../../../fire'
// import fr from '../../../assets/images/undraw_fitness_stats_sht6.svg'
import pttIcon from '../../../assets/images/Green Round Frame Spa & Esthetic Logo (4).png'

export default class SignUp extends React.Component{
    handleInput=()=>{

    }
    handleLogin=()=>{
        fire.auth().createUserWithEmailAndPassword(
           "pojos97887@play588.com","1234567"
          ).catch(function(error) {
            console.log("error",error)
          });
    }
    
    render(){
        return(
            <MuiGrid container justify='space-between' alignItems='center' style={{alignSelf:'center'}} xs={12} direction='column' spacing={1}>
            <MuiGrid item container   justify='center'  >
       {/* <MuiTypography style={{fontSize:'30',fontWeight:'bold'}}>
       PTT
       </MuiTypography> */}
       <MuiGrid item style={{}} alignSelf='center'>
       <img src={pttIcon}style={{width:130,height:130,}}>
       </img>
       </MuiGrid>
      
      
   </MuiGrid>
<MuiGrid item container style={{alignSelf:'center'}} justify='center' direction='column' alignItems='center' >
<MuiGrid  item style={{padding:4}} >
<MuiTextField label='Username' onClick={()=>{this.handleInput()}} style={{width:250}}>

</MuiTextField>

</MuiGrid>
<MuiGrid item style={{padding:4}} >
<MuiTextField label='Email' onClick={()=>{this.handleInput()}} style={{width:250}}>

</MuiTextField>

</MuiGrid>
<MuiGrid item style={{padding:4}} >
<MuiTextField label='Password'onClick={()=>{this.handleInput()}} style={{width:250}}>

</MuiTextField>
</MuiGrid>
<MuiGrid item style={{paddingTop:24}} alignSelf='center'>
<MuiButton variant='contained' onClick={()=>{this.handleLogin()}} style={{width:260,backgroundColor: "#4caf50" }}>
Sign Up
</MuiButton>
</MuiGrid>


</MuiGrid>
<MuiGrid item container justify='center' >
<MuiGrid item style={{}}>
<img src={require("./undraw_personal_trainer_ote3.png")} style={{width:300,height:250}}>
</img>


</MuiGrid>
</MuiGrid>

</MuiGrid>


         
        )
    }
}


