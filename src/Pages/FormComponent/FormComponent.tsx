
import "./formcomponent.css"
import { useForm } from "react-hook-form"
import { useState } from "react";
import Stepper1 from "../../components/StepperComponents/Stepper1";
import Stepper2 from "../../components/StepperComponents/Stepper2";
import Stepper3 from "../../components/StepperComponents/Stepper3";
import { stepper3Data } from "../../interfaces/interface";

import { Stepper } from '@mantine/core';

export interface DataFromForm {
  fullName: string;
  email: string;
  age: number;
  password: string;
  gender:string | null;
  date?: string;
  education:stepper3Data[]
}
const FormComponent = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm<DataFromForm>()


  const [active, setActive] = useState(0);

  const updateStepper = (step:number)=>setActive(step)
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
            <Stepper3 register={register} errors={errors} handleSubmit={handleSubmit} updateStepper={updateStepper}/>
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>
        </>
      </div>
    </div>
  )
}

export default FormComponent