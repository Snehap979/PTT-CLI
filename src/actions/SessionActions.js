import {APIDirectory,HTTP} from '../rest'
export const createSession=async(session)=>{
let url=APIDirectory.createSession()
let response= await HTTP.post(url,session)
console.log("response",response)
return response
}