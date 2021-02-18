import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClientListComponent from './components/functional/client/ClientListComponent'
import EventScheduler from './ui/EventScheduler'
import ClientListDetails from './components/functional/client/ClientListDetails'
import AddSessionComponent from './components/functional/client/AddSessionComponent'
import ClientCreationComponent from './components/functional/client/ClientCreationComponent'
import AppBarComponent from './ui/AppBarComponent'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigationComponent from './ui/BottomNavigationComponent'
import AddClientComponent from '../src/components/functional/client/AddClientComponent'
import SignIn from '../src/components/functional/login/SignIn'
import AppRouter from '../src/navigation/AppRouter';
import EventListComponent from '../src/components/functional/event/EventListComponent'
import DashboardComponent from '../src/components/functional/dashboard/DashboardComponent'
import EventCreationComponent from '../src/components/functional/event/EventCreationComponent'
import EventListDetails from '../src/components/functional/event/EventDetailsComponent'
import Demo from '../src/components/functional/Demo'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
class App extends React.Component {
  
  checkMonth=()=>{
    console.log("in month fnctions")
  }
  render() {
    let a=<h1>
      heeyy
    </h1>
    return (
 <AppRouter>
<EventCreationComponent>
    
</EventCreationComponent>
</AppRouter>
    );
  }
}

export default App;



{/* <AppRouter>
<SignIn>
    
</SignIn>
</AppRouter> */}


{/* <EventListComponent>
  
</EventListComponent>

 */}

//  
{/* <AppRouter>
<EventCreationComponent>
    
</EventCreationComponent>
</AppRouter> */}