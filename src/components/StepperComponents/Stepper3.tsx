import { useForm } from "@mantine/form"
import { TextInput, Group, ActionIcon, Button } from "@mantine/core"
import { randomId } from "@mantine/hooks";
import { YearPickerInput } from "@mantine/dates";
import { StepperComponentProps } from "../../interfaces/interface";
import { SubmitHandler } from "react-hook-form";
import { DataFromForm } from "../../Pages/FormComponent/FormComponent";




const Stepper3:React.FC<StepperComponentProps> = ({handleSubmit,updateStepper}) => {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            employees: [{ cource: "", yearOfPass: new Date(), key: randomId() }],
        },
        validate: {
            employees: {
              cource: (value) =>
                value===""||value==null
                  ? 'field cannot be empty'
                  : null,
                yearOfPass:(value)=>
                    value.getFullYear()>new Date().getFullYear() 
                    ? "year canot be in future"
                    :null,

            },
          },

    });



    const handleDeleteItem = (index: number): void => {
        if (index > 0) {
            form.removeListItem("employees", index)

        }
    }

    const onSubmit:SubmitHandler<DataFromForm>=(data)=>{
        form.validate()
        if (Object.keys(form.errors).length===0) {
           const {employees} = form.values
            console.log(employees);
            data.education=employees
            console.log(data);
            
        }
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="stepper-container">
            {
                form.getValues().employees.map((item, index) => (
                    <Group key={item.key} mt="md">
                        <TextInput
                            label="cource"
                            placeholder="John Doe"
                            withAsterisk
                            style={{ flex: 1 }}
                            key={form.key(`employees.${index}.cource`)}
                            {...form.getInputProps(`employees.${index}.cource`)}
                        />
                        <YearPickerInput
                            label="Pick date"
                            placeholder="Pick date"
                            {...form.getInputProps(`employees.${index}.yearOfPass`)}
                        />
                        <ActionIcon mt={20} color="red" onClick={() => handleDeleteItem(index)}>
                            <i className="fa-solid fa-trash"></i>
                        </ActionIcon>
                    </Group>
                ))
            }
            <div className="btn-container">
            <Button color="green" mt="lg" onClick={() => form.insertListItem("employees", { Cource: '', yearOfPass: new Date(), key: randomId() })}>Add</Button>
            <Button mt="lg" type="submit">Submit</Button>
            </div>
        </form>
    )
}

export default Stepper3