import React, { createContext, useContext } from "react";
import { FieldValues, FormContextValues } from "react-hook-form";

export const FormContext = createContext<Partial<FormContextValues>>(
  null as any
);

export interface Props {
  form: FormContextValues<FieldValues>;
  id: string;
  onSubmit?: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;
}

export const Form: React.FC<Props> = ({ children, form, id, onSubmit }) => {
  return (
    <FormContext.Provider value={form}>
      <form onSubmit={onSubmit} id={id}>
        <input type="reset" hidden />
        {children}
      </form>
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("Cannot get FormContext");
  }

  return context;
};

export default Form;
