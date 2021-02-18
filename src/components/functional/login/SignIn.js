import React from 'react'
import { MuiGrid, MuiTextField,MuiButton,MuiTypography } from '../../../ui'
import fire from '../../../fire'
import { Redirect,Link} from 'react-router-dom';
import {routes} from '../../../navigation'
import pttIcon from '../../../assets/images/Green Round Frame Spa & Esthetic Logo (4).png'
import * as TrainerActions from '../../../actions/TrainerActions'

// import fr from '../../../assets/images/undraw_fitness_stats_sht6.svg'
export default class SignIn extends React.Component{
    constructor(props)
    {
        super(props)
        
            this.state={
email:'',
password:'',
routeToHome:false
            }
        
    }
    handleEmailInput=(event)=>{
this.setState({email:event.target.value})
    }
    handlePasswordInput=(event)=>{
        this.setState({password:event.target.value})
    }
    handleLogin=async()=>{
        //save the user in the database make an api call to the backend
      await fire.auth().createUserWithEmailAndPassword(
           this.state.email,this.state.password
          ).catch(function(error) {
            console.log("error",error)
          });

          let firebaseResponse=await fire.auth().currentUser;
          let userDetails={}
          userDetails.uid=firebaseResponse.uid
          userDetails.email=firebaseResponse.email
          userDetails.refreshToken=firebaseResponse.refreshToken
          let response=await TrainerActions.createTrainer(userDetails)
          if(response.status==200)
          {
              this.setState({routeToHome:true})
          }
          
          console.log("response",response)
    }
    
    render(){
        let secondary='black'
       
        return(
            <React.Fragment>

           
            {this.state.routeToHome ? <Redirect  to={{pathname: routes.clientsList}}>

                </Redirect>:
            <MuiGrid container justify='space-between' alignItems='center' style={{alignSelf:'center'}} xs={12} direction='column' spacing={2}>
                         <MuiGrid item container   justify='center'  >
                    {/* <MuiTypography style={{fontSize:'30',fontWeight:'bold'}}>
                    PTT
                    </MuiTypography> */}
                    <MuiGrid item style={{}} alignSelf='center'>
                    <img src={pttIcon} style={{width:130,height:130,}}>
                    </img>
                    </MuiGrid>
                   
                   
                </MuiGrid>
 <MuiGrid item container style={{alignSelf:'center'}} justify='center' direction='column' alignItems='center' >

<MuiGrid item style={{padding:4}} >
<MuiTextField label='Email' onChange={(event)=>{this.handleEmailInput(event)}} style={{width:250}}>
    
    </MuiTextField>

</MuiGrid>
<MuiGrid item style={{padding:4}} >
<MuiTextField label='password'onChange={(event)=>{this.handlePasswordInput(event)}} style={{width:250}} color={secondary}>

    </MuiTextField>
</MuiGrid>

<MuiGrid item style={{paddingTop:24}} alignSelf='center'>
<MuiButton variant='contained' onClick={()=>{this.handleLogin()}} style={{width:260,backgroundColor: "#4caf50" }}>
Sign In
</MuiButton>
</MuiGrid>

<MuiGrid container  style={{paddingTop:8,}} direction='row' justify='center'>
    <MuiGrid item>
    <MuiTypography style={{fontSize:14}}>
    Dont have an account?
</MuiTypography>
    </MuiGrid>
    <Link to={{pathname:routes.signUp}} style={{textDecoration:'none'}}>
    <MuiGrid item style={{paddingLeft:4}}>
<MuiTypography style={{color:"#4caf50",fontSize:14}}>
   Sign Up
</MuiTypography>
</MuiGrid>
    </Link>


</MuiGrid>
  
</MuiGrid>
<MuiGrid item container justify='center' style={{}}>
<MuiGrid item style={{}}>
    <img src={require("./undraw_personal_trainer_ote3.png")} style={{width:300,height:250}}>
    </img>
   
   
</MuiGrid>
</MuiGrid>

            </MuiGrid>
           
                }</React.Fragment>
        )
           
      
            }
    
}


