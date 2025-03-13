import React from "react";
import { DataFromForm } from "../../Pages/FormComponent/FormComponent";
import { SubmitHandler } from "react-hook-form";
import { StepperComponentProps } from "../../interfaces/interface";


const Stepper1:React.FC<StepperComponentProps> = ({register,errors,handleSubmit,updateStepper}) => {
    const onsubmit:SubmitHandler<DataFromForm> = ()=>{
        updateStepper(1)
    }
  return (
    <div className="stepper-container">
        <form onSubmit={handleSubmit(onsubmit)} className="form">
            <input className="inputs normal-Inputs" {...register("fullName",{required:true})} type="text" placeholder="Fullname" />
            {
                errors?.fullName?.type==="required"&&<p>Field is required</p>
            }
            <input className="inputs normal-Inputs" {...register("email",{pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/})} type="string" placeholder="Email" />
            {
            errors?.email?.type === "pattern"&& <p>invalid gmail</p>
            }
            <input className="inputs normal-Inputs" {...register("password",{pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/,maxLength:10})} type="password" placeholder="password" />
            {
                
                    errors?.password?.type==="pattern"?<ul>
                      <li>first letterShould be Uppercase</li>
                      <li>must contain atleast 1 symbol</li>
                      <li>must hav atleast 1 num</li>
                    </ul>
                    :
                    errors?.password?.type==="maxLength"&&<p>password length should be less than 20</p>
            }
            <button type="submit">proceed</button>
        </form>
    </div>
  )
}

export default Stepper1