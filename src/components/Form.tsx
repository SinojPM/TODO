import { Button, PasswordInput, TextInput } from "@mantine/core"
import { isEmail, useForm } from "@mantine/form";
import { useContext, useEffect } from "react";
import { Authorization} from "../interfaces/interface";
import { isUser } from "../functions/utils";
import { useNavigate } from "react-router";
import { AuthenticationContext } from "../context/AuthContext";
import { useAppDispatch,useAppSelector } from "../Redux/Hooks";
import { fetchUsers } from "../Redux/slices/userSlice";

const Form = () => {
    const {setIslogined} = useContext<{isLogined:boolean;setIslogined:React.Dispatch<React.SetStateAction<boolean>>}>(AuthenticationContext)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const userData = useAppSelector((state)=>state.userReducer.users)

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: { email: '' ,password: ""},
        validate: {
            email: isEmail('Invalid email'),
        },
    });
    useEffect(()=>{
       dispatch(fetchUsers())
    },[])
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