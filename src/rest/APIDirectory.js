

const scheme = 'http'
const host = 'localhost'
const port = '7000'


const baseUrl = `${scheme}://${host}:${(port)}`
// const baseUrl=`https://polar-hamlet-67064.herokuapp.com`
//client api
export const getClients = () => { return `${baseUrl}/clients` }
export const createClient = () => { return `${baseUrl}/clients` }
export const addSession = (clientId) => {return `${baseUrl}/clients/${clientId}/sessions` } 
export const createSession=()=>{return `${baseUrl}/sessions`}
export const createEvents=()=>{return `${baseUrl}/events`}
export const getEvents=()=>{return `${baseUrl}/events`}
export const deleteEvent=()=>{return `${baseUrl}/events`}
export const getFormerClient=()=>{return `${baseUrl}/clients/former`}
export const createTrainer=()=>{return`${baseUrl}/trainers`}