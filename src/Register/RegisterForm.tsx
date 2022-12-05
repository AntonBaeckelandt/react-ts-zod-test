import { TextInput } from "../Common/TextInput";
import useValidatedInput from "../Hooks/UseValidatedInput";
import { initialRegisterInput, RegisterInput, registerSchema } from "./models";

export function RegisterForm() {

  const [formInput, setFormInput, validate, validationResult] = useValidatedInput<RegisterInput>(registerSchema, initialRegisterInput);

  const validateRegisterForm = () => {
    const validationResult = validate();
    if (validationResult.valid) {
      //Do api call or something
      console.info('form is valid');
    }
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateRegisterForm();
  };

  return <>
    <form onSubmit={onFormSubmit}>
      <TextInput identifier="name" label="Name" value={formInput.name} setValue={(name) => setFormInput({ ...formInput, name })} validationResult={validationResult} />
      <TextInput identifier="age" label="Age" value={formInput.age.toString()} setValue={(age) => setFormInput({ ...formInput, age: parseInt(age) })} validationResult={validationResult} />
      <button type="submit">Submit</button>
    </form>
  </>;
}