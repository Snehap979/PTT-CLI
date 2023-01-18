import React from 'react';
import AppBarComponent from '../../../ui/AppBarComponent'
import BottomNavigationComponent from '../../../ui/BottomNavigationComponent'
import {MuiAppBar,MuiToolbar,MuiGrid, MuiIcon, MuiTypography} from '../../../ui'

    class WithAppShell extends React.Component{
        constructor(props) {
            super(props);
          }
          componentDidMount()
          {

        let paperless={
            isEasyPay:'N'
        }
        let EventTypeClass=''
            if (paperless.isEasyPay == 'Y') {
                if ((paperless.totalDue < 0) && (paperless.languageCode == 'ENG' || paperless.languageCode == 'Default')) {
                    EventTypeClass = "EasyPay_Credit_EN_SMS"
                }
                if ((paperless.totalDue < 0) && (paperless.languageCode == "SPAN")) {
                    EventTypeClass = "EasyPay_Credit_SPN_SMS"
                }
                if ((paperless.totalDue > 0) && (paperless.pastAmountDueDate > 0) && (paperless.languageCode == "ENG" || paperless.languageCode == "Default")) {
                    EventTypeClass = "EasyPay_Overeage_EN"
                }
    
                if ((paperless.totalDue > 0) && (paperless.pastAmountDueDate > 0) && (paperless.languageCode == "SPAN")) {
                    EventTypeClass = "EasyPay_Overeage_SPN"
                }
                if ((paperless.totalDue > 0) && (paperless.pastAmountDueDate > 0) && (paperless.languageCode == "SPAN")) {
                    EventTypeClass = "EasyPay_Overeage_SPN"
                }
                if ((paperless.totalDue > 0) && (paperless.pastAmountDueDate < 0) && (paperless.languageCode == "ENG" || paperless.languageCode == "Default")) {
                    EventTypeClass = "EasyPay_NoOvereage_EN"
                }
                if ((paperless.totalDue > 0) && (paperless.pastAmountDueDate < 0) && (paperless.languageCode == "SPAN")) {
                    EventTypeClass = "EasyPay_NoOvereage_SPN"
                }
            }
            if (paperless.isEasyPay == 'N') {
                if ((paperless.totalDue < 0) && (paperless.languageCode == "ENG" || paperless.languageCode == "Default")) {
                    EventTypeClass = "NonEasyPay_Credit_EN_SMS"
                }
                if ((paperless.totalDue < 0) && (paperless.languageCode == "SPAN")) {
                    EventTypeClass = "NonEasyPay_Credit_SPN_SMS"
                }
    
                if ((paperless.totalDue > 0) && (paperless.pastAmountDueDate > 0) && (paperless.languageCode == "ENG" || paperless.languageCode == "Default")) {
                    EventTypeClass = "NonEasyPay_Overeage_EN"
                }
    
                if ((paperless.totalDue > 0) && (paperless.pastAmountDueDate > 0) && (paperless.languageCode == "SPAN")) {
                    EventTypeClass = "NonEasyPay_Overeage_SPN"
                }
                if ((paperless.totalDue > 0) && (paperless.pastAmountDueDate < 0) && (paperless.languageCode == "ENG" || paperless.languageCode == "Default")) {
                    EventTypeClass = "NonEasyPay_NoOvereage_EN"
                }
                if ((paperless.totalDue > 0) && (paperless.pastAmountDueDate < 0) && (paperless.languageCode == "SPAN")) {
                    EventTypeClass = "NonEasyPay_NoOvereage_SPN"
                }
            }
            console.log("EventTypeClass",EventTypeClass)
       
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