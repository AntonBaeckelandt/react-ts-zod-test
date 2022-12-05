import { FieldValidationError } from "./models";

interface ErrorLabelProps {
  error: FieldValidationError,
}

export function ErrorLabel(props: ErrorLabelProps) {
  return <>
    {
      props.error.errorCodes.map((error) => {
        return <p key={error}>{error}</p>;
      })
    }
  </>;
}