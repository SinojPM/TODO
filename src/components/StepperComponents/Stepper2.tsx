import React, { useState } from "react"
import { StepperComponentProps } from "../../interfaces/interface"
import { DateInput } from '@mantine/dates'
import { Select } from "@mantine/core"
import { SubmitHandler } from "react-hook-form"
import { DataFromForm } from "../../Pages/FormComponent/FormComponent"



const Stepper2:React.FC<StepperComponentProps> = ({handleSubmit,updateStepper}) => {
    const [value, setValue] = useState<Date | null>(new Date())
    const [gender,setGender] = useState<string | null>("select")
    const onsubmit:SubmitHandler<DataFromForm> = (data)=>{
            data.date=value?.toLocaleDateString()
            if(gender!="select"){
                data.gender=gender
            }
            if(value&&gender!=="select"){
                console.log(data);
                
                updateStepper(2)
            }
            
        }
    

  return (
    <form onSubmit={handleSubmit(onsubmit)} className="stepper-container">
        <div className="first-row">
        <DateInput label={"dob"} w={"100%"} value={value} onChange={setValue}/>
        <div>
            <Select
            checkIconPosition="left"
            data={["Male","Female","Others"]}
            label={"gender"}
            onChange={setGender}
            />
            {
            gender==="select"&&
                <p>select gender</p>
        }
        </div>
        
        </div>
        <button type="submit">proceed</button>
    </form>
  )
}

export default Stepper2