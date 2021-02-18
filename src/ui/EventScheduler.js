import React from 'react';

import AddToCalendar from 'react-add-to-calendar-recurring';
import moment from 'moment'
import { MuiGrid } from '.';
 
export default class Example extends React.Component {
  constructor(){
      super()
      this.state={

      }
      this.weekdayshort = moment.weekdaysShort();
  }
  getWeekDayS=(day)=>{
      console.log("day",day)
      return day
  }
  render() {
    return (
        <MuiGrid>
            <MuiGrid style={{border:'1px solid black',padding:8}}>
            {this.weekdayshort.map(day => {
   return (
       

     this.getWeekDayS(day)
    
   );
})}
            </MuiGrid>
         

        </MuiGrid>
    )
  };
}