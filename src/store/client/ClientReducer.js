import {ClientActionConstants} from '.'

const initialState = {
    fetchingClientListInProgress: false,
    fetchingClientListSuccess: false,
    fetchingClientListFail:false,
    creatingClientInProgress:false,
    creatingClientSuccess:false,
    creatingClientFailure:false,
    activeClientList: null,
}

const ClientReducer = (state=initialState,action)=>{
    switch(action.type){
      
        case ClientActionConstants.CREATING_NEW_CLIENT_IN_PROGRESS:
            return {...state, creatingClientInProgress:true, creatingClientFailure:false}

        case ClientActionConstants.CREATING_NEW_CLIENT_SUCCESS:
            return {...state, creatingClientInProgress:false, creatingClientSuccess:true, creatingClientFailure:false,activeClientList:action.data}    
        
        case ClientActionConstants.CREATING_NEW_CLIENT_FAILURE:
            return {...state, creatingClientFailure: true, creatingClientSuccess: false, creatingClientInProgress: false}
        
      
        default : return state
    }
}
export default ClientReducer