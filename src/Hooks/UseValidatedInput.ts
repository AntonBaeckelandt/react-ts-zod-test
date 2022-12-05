import { useCallback, useState } from "react";
import { SafeParseError, ZodFirstPartySchemaTypes, ZodIssue } from "zod";
import { FieldValidationError, ValidationResult } from "../Validation/models";

const useValidatedInput = <T>(rule: ZodFirstPartySchemaTypes, initialValue: T) => {
  const [data, setData] = useState<T>(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult | undefined>();

  const validate = useCallback(() => {
    const zodResult = rule.safeParse(data);
    const errors = zodResult.success ? [] : mapZodErrors(zodResult);
    const validationResult = { valid: zodResult.success, errors };
    setValidationResult(validationResult);

    return validationResult;
  }, [data, rule]);

  return [data, setData, validate, validationResult] as const;
};


const mapZodErrors = (result: SafeParseError<any>): FieldValidationError[] => {
  const errors = result.error.flatten((issue: ZodIssue) => {
    return `${issue.path}_${issue.code}`;
  }).fieldErrors;

  return Object.keys(errors)
    .map((fieldName) => ({
      field: fieldName,
      errorCodes: errors[fieldName as keyof typeof errors] ?? [],
    }));
};


export default useValidatedInput;