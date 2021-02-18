import axios from 'axios';

export const get = async (url,headers) => {
  try{
    
       
        let response = await axios.get(url);        
        return response
    }catch(error){
      
        throw error;
    }
}

export const post = async (url,data,headers) => {
    try{        
       
      
        let response = await axios.post(url,data)
       
        return response;
        
    }catch(error){
       
        throw error;    
    }
}

export const put = async (url,data,headers) => {
    try{        
       console.log("url,data",url,data)
        let response = await axios.put(url,data)
        console.log("response",response)
        return response;
        
    }catch(error){
        throw error;
    }
}

