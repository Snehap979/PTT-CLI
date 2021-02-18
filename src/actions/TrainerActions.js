import {APIDirectory,HTTP} from '../rest'



export const createTrainer=async(user)=>{
  
    let url=APIDirectory.createTrainer()
    console.log("url",url)
    let response=await HTTP.post(url,user)
    console.log("response",response)
    return response
}


