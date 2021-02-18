import {APIDirectory,HTTP} from '../rest'
export const getEvents=async()=>{

let url=APIDirectory.getEvents()
console.log("url",url)
let response=await HTTP.get(url)
console.log("response",response)
if(response.status==200)
{
    return response.data
}
}



export const createEvents=async(event)=>{
    let url=APIDirectory.createEvents()
    console.log("url",url)
    let response=await HTTP.post(url,event)
    console.log("response",response)
    return response
}

export const deleteEvent=async(eventObject)=>{
    let url=APIDirectory.deleteEvent()
    console.log("url",url,eventObject)
    let response=await HTTP.put(url,eventObject)
    console.log("response",response)
    return response
}