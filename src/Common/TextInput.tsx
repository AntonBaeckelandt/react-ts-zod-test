import { ErrorLabel } from "../Validation/ErrorLabel";
import { ValidationResult } from "../Validation/models";

interface TextInputProps {
  identifier: string,
  label: string,
  validationResult?: ValidationResult,
  value: string,
  setValue: (newValue: string) => any,
}

export function TextInput(props: TextInputProps) {
  return <>
    <label htmlFor={props.identifier} >{props.label}</label>
    <input id={props.identifier} name={props.identifier} type="text" value={props.value} onChange={(e) => props.setValue(e.target.value)} />
    {
      props.validationResult?.errors
        .filter((error) => error.field === props.identifier)
        .map((error) => <ErrorLabel key={error.field} error={error} />)
    }
  </>;
}
