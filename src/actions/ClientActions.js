import {APIDirectory,HTTP} from '../rest'
export const getAllClients=async()=>{

let url=APIDirectory.getClients()
console.log("url",url)
let response=await HTTP.get(url)
console.log("response",response)
if(response.status==200)
{
    return response.data
}
}

export const addASession=async()=>{
    let url=APIDirectory.addSession()
console.log("url",url)
let response=await HTTP.post(url)
console.log("response",response)
}

export const createClient=async(client)=>{
    console.log("client in create client",client)
    let url=APIDirectory.createClient()
    console.log("url",url)
    let response=await HTTP.post(url,client)
    console.log("response",response)
    return response
}


export const getFormerClient=async()=>{
    let url=APIDirectory.getFormerClient()
    console.log("url",url)
    let response=await HTTP.get(url)
    console.log("response",response)
    return response.data
}