export const routesObject ={
    'home': {id:'home', name:'/'},
   'addClient':{name:'/addClient'},
   'clientsList':{name:'/clientsList'},
   'addSession':{name:'/addSession'},
   'clientDetails':{name:'/clientDetails'},
   'signUp':{name:'/signUp'},
   'signIn':{name:'/signIn'},
   'eventList':{name:'/eventList'},
   'eventDetails':{name:'/eventDetails'},
   'dashboard':{name:'/dashboard'},
   'eventCreation':{name:'/eventCreation'}
}

const getRoute=(route)=>{
    return `${routesObject[route].name}`;
 }
 
 
 const routes = {
 
   'home': "/",
  
   'addClient': getRoute('addClient'),
   'clientsList':getRoute('clientsList'),
   'addSession':getRoute('addSession'),
   'clientDetails':getRoute("clientDetails"),
   'signUp':getRoute("signUp"),
   'signIn':getRoute("signIn"),
   'eventList':getRoute("eventList"),
   'eventDetails':getRoute("eventDetails"),
   'dashboard':getRoute("dashboard"),
   'eventCreation':getRoute("eventCreation")
 }

 export default routes;