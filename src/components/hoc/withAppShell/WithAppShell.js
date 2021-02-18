import React from 'react';
import AppBarComponent from '../../../ui/AppBarComponent'
import BottomNavigationComponent from '../../../ui/BottomNavigationComponent'
import {MuiAppBar,MuiToolbar,MuiGrid, MuiIcon, MuiTypography} from '../../../ui'

    class WithAppShell extends React.Component{
        constructor(props) {
            super(props);
          }
    render(){
        return (
            <React.Fragment>
                <MuiGrid container direction='column' style={{overflow:'hidden'}}>
                <MuiGrid item style={{}} >
              <AppBarComponent {...this.props}>
      
      </AppBarComponent>  
            </MuiGrid>
            {this.props.showBottomNavigationComponent?<React.Fragment><MuiGrid item style={{paddingBottom:56}}>
           
           {this.props.children}
     
       
       </MuiGrid >
       
       <MuiGrid item style={{position:'fixed',bottom:0,width:'100%'}}>
            <BottomNavigationComponent>
 
            </BottomNavigationComponent>
        </MuiGrid></React.Fragment>:<MuiGrid item style={{overflow:'hidden'}}>
           
           {this.props.children}
     
       
       </MuiGrid >}
            
                </MuiGrid>
       

            </React.Fragment>
            
             
          );
    }
}
       
//  return AppShell
    
// }
    

    

export default WithAppShell;