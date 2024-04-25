import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Injectable({ providedIn: "root" })
export class ValidateService {
  constructor() {}
  getValidate = (form: FormGroup, formErrors: any, validationMessages: any) => {
    if (!form) {
      return formErrors;
    }
    // clear previous error message (if any)
    this.resetFormErrors(formErrors);
    for (const field in formErrors) {
      const control = form.get(field);
      if (typeof formErrors[field] == "object") {
        this.getValidate(
          control as FormGroup,
          formErrors[field],
          validationMessages[field],
        );
      }
      if (typeof formErrors[field] == "string") {
        if (control && control.dirty && !control.valid && !formErrors[field]) {
          const messages = validationMessages[field];
          // tslint:disable-next-line:forin
          for (const key in control.errors) {
            if (!formErrors[field] && messages[key]) {
              formErrors[field] += messages[key] + "";
            }
          }
        }
      }
    }
    return formErrors;
  };

  checkErorrNotDiry = (
    form: FormGroup,
    formErrors: any,
    validationMessages: any,
  ) => {
    if (!form) {
      return formErrors;
    }
    // clear previous error message (if any)

    for (const field in formErrors) {
      const control = form.get(field);
      if (typeof formErrors[field] == "object") {
        this.checkErorrNotDiry(
          control as FormGroup,
          formErrors[field],
          validationMessages[field],
        );
      }
      if (typeof formErrors[field] == "string") {
        (control as FormControl).markAsDirty();
        if (control && control.invalid && !formErrors[field]) {
          const messages = validationMessages[field];
          // tslint:disable-next-line:forin
          for (const key in control.errors) {
            if (!formErrors[field] && messages[key]) {
              formErrors[field] += messages[key] + "";
            }
          }
        }
      }
    }
    return formErrors;
  };

  resetFormErrors = (ferrors: any) => {
    for (const prop in ferrors) {
      if (typeof ferrors[prop] == "object") {
        this.resetFormErrors(ferrors[prop]);
      } else {
        ferrors[prop] = "";
      }
    }
  };
}
