import React from 'react'
import { MuiGrid, MuiTextField,MuiButton,MuiSelect,MuiFormControl,MuiInputLabel,MuiMenuItem, MuiTypography} from '../../../ui'
class ClientCreationComponent extends React.Component {
    modeOfPayment=[
        {
            label:'cash',
            value:'2000'

        },
        {
            label:'card',
            value:'2000'
        },
        {
            label:'online',
            value:'2000'
        },
        {
            label:'cheque',
            value:'2000'
        }
    ]
    render() {
        return (
            <MuiGrid style={{background: "linear-gradient(#424242,#212121,black,black,black,black,black,black,#424242,#212121,black)",width:'100%',height:'100vh'}}>
              
                <MuiGrid style={{ height: '40px', background: 'black' }} align='center'>
                <MuiGrid  style={{}}>
                    <MuiTypography style={{color:'white',paddingTop:8,fontWeight:'bold',fontSize:20}}>
                    Add A Client
                    </MuiTypography>
                   
                </MuiGrid>
              
              
                </MuiGrid>
                <MuiGrid container justify='flex-end' style={{paddingRight:32,paddingTop:16,paddingBottom:8}}>
                <MuiGrid>
                    <MuiButton variant='contained' style={{backgroundColor:'#4caf50',color:'white'}}>SUBMIT</MuiButton>
                </MuiGrid>
                <MuiGrid item style={{paddingLeft:8}}>
                    <MuiButton variant='contained' style={{backgroundColor:'#4caf50',color:'white',}}>CANCEL</MuiButton>
                </MuiGrid>
                </MuiGrid>
                
                <MuiGrid container justify='center'style={{padding:8}}>
                    <MuiGrid item >
                      <MuiGrid style={{paddingBottom:16}}>
                      <MuiTextField
                          size="small"
                          variant="outlined"
                          label='Name'
                          fullWidth
                          value=""
                         style={{background:'white',width:300,border:'2px solid #4caf50',borderRadius:8}}
                      >
                      </MuiTextField>
                  </MuiGrid>
                  <MuiGrid style={{paddingBottom:16}}>
                      <MuiTextField
                          size="small"
                          variant="outlined"
                          label='Dob'
                          // fullWidth
                          value=""
                          style={{background:'white',width:300,border:'2px solid #4caf50',borderRadius:8}}
                      >
                      </MuiTextField>
                  </MuiGrid>
                  <MuiGrid style={{paddingBottom:16}}>
                      <MuiTextField
                          size="small"
                          variant="outlined"
                          label='Phone Number'
                          // fullWidth
                          value=""
                          style={{background:'white',width:300,border:'2px solid #4caf50',borderRadius:8}}
                      >
                      </MuiTextField>
                  </MuiGrid>
                  <MuiGrid style={{paddingBottom:16}}>
                  <MuiTextField
            id="outlined-select-currency"
            select
            label="Mode Of Payment"
            value={this.modeOfPayment}
          //   onChange={handleChange}
  
            // variant="outlined"
  
            style={{width:300,background:'white',border:'2px solid #4caf50',borderRadius:8}}
          >
            {this.modeOfPayment.map((option) => (
              <MuiMenuItem key={option.value} value={option.value}>
                {option.label}
              </MuiMenuItem>
            ))}
          </MuiTextField>
                  </MuiGrid>
                  <MuiGrid style={{paddingBottom:16}}>
                      <MuiTextField
                          size="small"
                          variant="outlined"
                          label='Amount'
                          // fullWidth
                          value=""
                          style={{background:'white',width:300,border:'2px solid #4caf50',borderRadius:8}}
                      >
                      </MuiTextField>
                      </MuiGrid>
                      <MuiGrid style={{paddingBottom:16}}>
                      <MuiTextField
                          size="small"
                          variant="outlined"
                          label='Due'
                          // fullWidth
                          value=""
                          style={{background:'white',width:300,border:'2px solid #4caf50',borderRadius:8}}
                      >
                      </MuiTextField>
                      </MuiGrid>
                      <MuiGrid style={{paddingBottom:8}}>
                      <MuiTextField
                          size="small"
                          variant="outlined"
                          label='Sessions Subscribed'
                          // fullWidth
                          value=""
                          style={{background:'white',width:300,border:'2px solid #4caf50',borderRadius:8}}
                      >
                      </MuiTextField>
                  </MuiGrid></MuiGrid>
              
                </MuiGrid>
               
            </MuiGrid>

        )
    }
}
export default ClientCreationComponent