import { DataFromForm } from "../Pages/FormComponent/FormComponent";
import { UseFormRegister,FieldErrors ,UseFormHandleSubmit} from "react-hook-form";
export interface Users{
    users:Welcome[]
}

export interface Welcome {
    id:         number;
    firstName:  string;
    lastName:   string;
    maidenName: string;
    age:        number;
    gender:     string;
    email:      string;
    phone:      string;
    username:   string;
    password:   string;
    birthDate:  string;
    image:      string;
    bloodGroup: string;
    height:     number;
    weight:     number;
    eyeColor:   string;
    hair:       Hair;
    ip:         string;
    address:    Address;
    macAddress: string;
    university: string;
    bank:       Bank;
    company:    Company;
    ein:        string;
    ssn:        string;
    userAgent:  string;
    crypto:     Crypto;
    role:       string;
}

export interface Address {
    address:     string;
    city:        string;
    state:       string;
    stateCode:   string;
    postalCode:  string;
    coordinates: Coordinates;
    country:     string;
}

export interface Coordinates {
    lat: number;
    lng: number;
}

export interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType:   string;
    currency:   string;
    iban:       string;
}

export interface Company {
    department: string;
    name:       string;
    title:      string;
    address:    Address;
}

export interface Crypto {
    coin:    string;
    wallet:  string;
    network: string;
}

export interface Hair {
    color: string;
    type:  string;
}

export interface FormData{
    email:string;
    password:string;
}

export type Authorization = "passed" | "Email doesnt Exist" | "incorrect Password"

export interface UserData{
    username:string | null;
    email:string | null;
}
export interface ListData{
    id:number;
    item:string;
    status:"list" | "completed" | "ongoing"
}

export interface ChildProps {
    todoList?: ListData[] | [];
    setTodoList: React.Dispatch<React.SetStateAction<ListData[] | []>>;
  }

  export interface UpdateList{
    todoList:ListData[] | [];
    handleUpdateList:(data:ListData)=>void
  }

  export interface LoginState{
    isLogined:boolean;
    setIslogined:React.Dispatch<React.SetStateAction<boolean>>
  }

  export interface ListItemProps {
    data:ListData;
    index:number;
    isOngoing?:boolean;
    isList?:boolean;
    updateStatus:(id:number)=>void | null;
    handleDelete:(index:number)=>void;
  }
  export interface StepperComponentProps{
    register:UseFormRegister<DataFromForm>;
    errors:FieldErrors<DataFromForm>;
    handleSubmit:UseFormHandleSubmit<DataFromForm, undefined>;
    updateStepper:(step: number) => void
  }