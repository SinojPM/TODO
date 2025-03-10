import axios,{AxiosResponse} from "axios"


export const getData = async()=>{
    try{
        const {data}:AxiosResponse =await axios.get("https://dummyjson.com/users")
         return data
    }catch(err){
        return err
    }
}