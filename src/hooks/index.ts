import React, { useState } from "react";
import { IRegister, IUseFormReturn, IValues } from "../types";

export const useForm = (): IUseFormReturn => {
    
  const [values, setValues] = useState<IValues>({});
  const [errors, setErrors] = useState<IValues>({});
  const rules: {
    [key: string]: IRegister | undefined;
    name?: IRegister;
    age?: IRegister;
  } = {};


  const handleSubmit =
    (callback: (data: IValues) => void) =>
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const tmp: IValues = { ...errors };
      for (let key in rules) {
        if (rules[key]?.required && (!values[key] || !values[key]?.trim())) {
          tmp[key] = rules[key]?.required;
        } else {
          delete tmp[key];
        }
      }
      setErrors(tmp);
      if (Object.keys(tmp).length == 0) {
        callback(values);
      }
    };
  const register = (key: keyof IValues, options: IRegister = {}) => {
    rules[key] = options;
    return {
      value: values[key] || "",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setValues({ ...values, [key]: e.target.value }),
    };
  };
  const reset = () => {
    setValues({});
    setErrors({});
  };
  return {
    handleSubmit,
    register,
    errors,
    reset,
  };
};
