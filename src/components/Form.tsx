import { Button, PasswordInput, TextInput } from "@mantine/core"
import { isEmail, useForm } from "@mantine/form";
import { useContext, useEffect, useState } from "react";
import { Users, Welcome ,Authorization} from "../interfaces/interface";
import { getData } from "../api/axios";
import { isUser } from "../functions/utils";
import { useNavigate } from "react-router";
import { AuthenticationContext } from "../context/AuthContext";






const Form = () => {
    const {setIslogined} = useContext<{isLogined:boolean;setIslogined:React.Dispatch<React.SetStateAction<boolean>>}>(AuthenticationContext)
    const navigate = useNavigate()
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: { email: '' ,password: ""},
        validate: {
            email: isEmail('Invalid email'),
        },
    });
    const [userData,setUserData] = useState<Welcome[] | []>([])


    useEffect(()=>{
       fetchUser() 
    },[])
    
    
    
    const fetchUser = async()=>{
        try{
            const data:Users = await getData()
            setUserData(data.users)
            console.log(userData);
            
        }catch(err){
            console.log(err);   
        }
    }
    
    const handleSubmit=(values:typeof form.values)=>{
        console.log(userData);
        const isAuth:Authorization = isUser(userData,values)
        if (isAuth=="passed") {
            setIslogined(true)
            navigate("/")
        }else{
            alert(isAuth)
        }
    }


    return (
        <form onSubmit={form.onSubmit((values)=>handleSubmit(values))}>
            <TextInput w={"100%"} radius={"md"} size="xl" {...form.getInputProps('email')} mt="md" placeholder="Email" />
            <PasswordInput w={"100%"} radius={"md"} className="inputs" size="xl" {...form.getInputProps('password')} mt={"md"} placeholder="Password" />
            
            <Button radius={"lg"} type="submit" mt="md" w={200} h={50}>
                Login
            </Button>
        </form>
    )
}

export default Form