
import "./formcomponent.css"
import { useForm } from "react-hook-form"
import { useState } from "react";
import Stepper1 from "../../components/StepperComponents/Stepper1";
import Stepper2 from "../../components/StepperComponents/Stepper2";
import Stepper3 from "../../components/StepperComponents/Stepper3";

import { Stepper, Button, Group } from '@mantine/core';



enum genderEnum {
  male = "male",
  female = "female"
}
export interface DataFromForm {
  fullName: string;
  email: string;
  age: number;
  password: string;
  gender:string | null;
  date?: string;
}
const FormComponent = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm<DataFromForm>()


  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  const updateStepper = (step:number)=>setActive(step)


  // const onSubmit: SubmitHandler<DataFromForm> = (data) => {
  //   const today: string = new Date().toLocaleDateString()
  //   console.log(today);


  //   data.date = value?.toLocaleDateString()
  //   console.log(value);
  //   console.log(data);
  //   if (data.date !== undefined) {
  //     if (today < data.date) {
  //       console.log("date is valid");

  //     } else if (data.date < today) {
  //       console.log("date is late");
  //     } else {
  //       console.log("equal");
  //     }
  //   }

  // }
  return (
    <div className="form-component-container">
      <div className="form-component-wraper">
        <h1>Submit Details</h1>
        <>
          <Stepper mt={50} w={"100%"} color="pink" size="xl" active={active} onStepClick={setActive}>
            <Stepper.Step label="First step" description="Create an account">
              <Stepper1 register={register} errors={errors} handleSubmit={handleSubmit} updateStepper={updateStepper} />
            </Stepper.Step>
            <Stepper.Step label="Second step" description="Verify email">
            <Stepper2 register={register} errors={errors} handleSubmit={handleSubmit} updateStepper={updateStepper} />
            </Stepper.Step>
            <Stepper.Step label="Final step" description="Get full access">
            <Stepper3 />
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>

          <Group justify="center" mt="xl">
            <Button variant="default" onClick={prevStep}>Back</Button>
            <Button onClick={nextStep}>Next step</Button>
          </Group>
        </>

        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("fullName",{required:true})} type="text" placeholder="fullname" />
          {
            errors?.fullName?.type==="required"&&<p>the field is required</p>
          }
          <input {...register("email",{pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/})} type="text" placeholder="email" />
          {
            errors?.email?.type === "pattern"&& <p>invalid gmail</p>
          }
          <input {...register("age",{max:70,min:20})} type="number" placeholder="Age"/>
          {
            errors?.age?.type==="max"&&<p>age cannot exeed 70</p>
          }
          <DatePicker bg={"white"} value={value} onChange={setValue}/>
          <input {...register("password",{pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/,maxLength:10})} type="password" placeholder="Password"/>
          {
            errors?.password?.type==="pattern"?<ul>
              <li>first letterShould be Uppercase</li>
              <li>must contain atleast 1 symbol</li>
              <li>must hav atleast 1 num</li>
            </ul>
            :
            errors?.password?.type==="maxLength"&&<p>password length should be less than 20</p>
          }
          <input type="password" placeholder="Confirm password"/>

          <select {...register("gender")} name="Gender">
            <option value="male">
              male
            </option>
            <option value="female">
              Female
            </option>
          </select>
          <input className="btn" type="submit" />
        </form> */}
      </div>
    </div>
  )
}

export default FormComponent