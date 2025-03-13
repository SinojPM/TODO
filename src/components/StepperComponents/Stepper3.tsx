import { useForm } from "@mantine/form"
import { TextInput, Group, ActionIcon, Button, Switch } from "@mantine/core"
import { randomId } from "@mantine/hooks";
import { YearPickerInput } from "@mantine/dates";
import { useEffect } from "react";
const Stepper3 = () => {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            employees: [{ Cource: '', yearOfPass: 0, key: randomId() }],
        },
    });
    useEffect(()=>{
        console.log(form.getValues().employees);
    },[form])

    return (
        <div className="stepper-container">
            {
                form.getValues().employees.map((item,index)=>(
                    <Group mt="md">
                <TextInput
                label="cource"
                    placeholder="John Doe"
                    withAsterisk
                    style={{ flex: 1 }}
                    key={form.key(`employees.${index}.name`)}
                    {...form.getInputProps(`employees.${index}.Cource`)}
                />
                <YearPickerInput
                    label="Pick date"
                    placeholder="Pick date"
                    valueFormat="YYYY"
                    {...form.getInputProps(`employees.${index}.yearOfPass`)}
                />
                <ActionIcon mt={20} color="red" onClick={() => form.removeListItem('employees', index)}>

                </ActionIcon>
            </Group>
                ))
            }
            <Button mt="lg">Add</Button>
        </div>
    )
}

export default Stepper3