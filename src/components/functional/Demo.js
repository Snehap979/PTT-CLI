import { Button } from '@material-ui/core'
import React from 'react'
class Demo extends React.Component{
    constructor(props){
        console.log("inside the constructor")
            super(props)
            this.state={
                count:0
            }

    }
handleAdd=()=>{
    let count=++this.state.count
    this.setState({count:count})
}
    render(){
        console.log("inside the render method",this)
        return(
            <Button onClick={()=>{this.handleAdd()}}>
               add
            </Button>
        )
    }
}
export default Demo