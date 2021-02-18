import React from 'react'
import ClientListComponent from '../components/functional/client/ClientListComponent'
import ClientListDetails from '../components/functional/client/ClientListDetails'
// import ClientCreationComponent from '../components/functional/client/ClientListComponent'
import AddSessionComponent from '../components/functional/client/AddSessionComponent'
import AddClientComponent from '../components/functional/client/AddClientComponent'
import SignUp from '../components/functional/login/SignUp'
import SignIn from '../components/functional/login/SignIn'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./Routes";
import EventListComponent from '../components/functional/event/EventListComponent'
import DashboardComponent from '../components/functional/dashboard/DashboardComponent'
import EventCreationComponent from '../components/functional/event/EventCreationComponent'
import EventDetailsComponent from '../components/functional/event/EventDetailsComponent'
class AppRouter extends React.Component {
	render=()=>{
    console.log("in approutes")
		return (
      <Router>
        <Switch>
        <Route
              exact
              path={routes.home}
              render={(props) => <SignIn {...props}></SignIn>}
            />
          {/* <Route
              exact
              path="/clientList"
              render={() => (<div>List of Items</div>)} 
            /> */}

             <Route
              exact
              path={routes.clientDetails}
              render = {(props) => 
                <ClientListDetails {...props}/>
              }   
            />
            
              <Route
              exact
              path={routes.addSession}
              render = {props => 
                <AddSessionComponent {...props}/>
              }   
            />
              <Route
              exact
              path={routes.addClient}
              render = {props => 
                <AddClientComponent {...props}/>
              }   
            />
             <Route
              exact
              path={routes.signUp}
              render = {props => 
                <SignUp {...props}/>
              }   
            />
              <Route
              exact
              path={routes.signIn}
              render = {props => 
                <SignIn {...props}/>
              }   
            />
             <Route
              exact
              path={routes.eventList}
              render = {props => 
                <EventListComponent {...props}/>
              }   
            />
             <Route
              exact
              path={routes.dashboard}
              render = {props => 
                <DashboardComponent {...props}/>
              }   
            />
            <Route
            exact
            path={routes.eventCreation}
            render={props=>

            <EventCreationComponent {...props}/>
            }
/>
<Route
            exact
            path={routes.eventDetails}
            render={props=>

            <EventDetailsComponent {...props}/>
            }
/>
<Route
            exact
            path={routes.clientsList}
            render={props=>

            <ClientListComponent {...props}/>
            }
/>
        </Switch>
      </Router>
    );
	};
}

export default AppRouter;