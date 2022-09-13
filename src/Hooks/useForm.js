import { useState } from "react";
export function useForm({ initFileds }) {
  const [formFileds, setFormFileds] = useState(initFileds); // set init values
  const [errors, setError] = useState({}); // set blank errors state

  // mange field onChange method
  const handleChangeField = (event) => {
    const { value, name } = event.target;
    const field = formFileds[name];
    const error = validation(field, value, formFileds); // validate single field.
    setFormFileds({ ...formFileds, [name]: { ...field, value, error } }); // update fields state with value and error
    setError({ ...errors, [name]: error }); // set error on error state
  };
  const reSetForm = () => {
    setFormFileds(initFileds);
  }

  const validateAllFields = () => { // method for validate all the form field errors
    let newErrors = {};
    Object.keys(formFileds).forEach((key) => { // object.keys are use for convert object to array and return object key value
      const field = formFileds[key];
      const error = validation(field, field.value, formFileds); // validate filed
      newErrors = { ...newErrors, [key]: error };
    });
    setError(newErrors); // set all the error msgs
  };
  const isValidForm = () => { // method for check form value is valid or not.
    let isError = false;
    Object.keys(formFileds).forEach((key) => {
      const field = formFileds[key];
      const error = validation(field, field.value, formFileds);
      if (error) {
        isError = true;
      }
    });
    return isError;
  };
  return {
    formFileds,
    handleChangeField,
    validateAllFields,
    errors,
    isValidForm,
    reSetForm
  };
}

const validation = (formFiled, value, formFileds) => {
  const { isRequired, pattarn, callBack } = formFiled;
  if (isRequired) {
    if (value.trim() === "") {
      return isRequired;
    }
  }
  if (pattarn) {
    // pattarn is a regular experations
    const { key, msg } = pattarn;
    if (!key.test(value)) {
      return msg;
    }
  }
  if (callBack) { // callback method for handle custom methods.
    const { isValid, errorMsg } = callBack(formFileds, value);
    if (!isValid) {
      return errorMsg;
    }
  }
  return "";
};
