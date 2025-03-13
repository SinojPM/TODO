
import { Welcome ,FormData ,Authorization} from "../interfaces/interface"



export const isUser = (userData:Welcome[],value:FormData):Authorization =>{
    console.log(value.email)
    
    const isPresent = userData.find((user)=>{
        return user.email == value.email
    })
    if(isPresent){
        if(isPresent.password == value.password){
            sessionStorage.setItem("username",isPresent.firstName)
            sessionStorage.setItem("email",isPresent.email)
            return "passed"
        }else{
            return "incorrect Password"
        }
        
    }else{
        return "Email doesnt Exist"
    }
}


// const dateValidation: (value:string,today:string)=>string = (value,today)=>{
//     return value
// }


