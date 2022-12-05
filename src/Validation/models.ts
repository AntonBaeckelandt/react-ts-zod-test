export interface ValidationResult {
  valid: boolean,
  errors: FieldValidationError[],
}

export interface FieldValidationError {
  field: string,
  errorCodes: string[],
}