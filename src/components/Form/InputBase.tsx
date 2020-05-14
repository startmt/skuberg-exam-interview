import { InputBase as MuiTextField } from "@material-ui/core";
import { InputBaseProps as MuiTextFieldProps } from "@material-ui/core/";
import React from "react";
import { RHFInput } from "react-hook-form-input";

import { useFormContext } from "./Form";
import { RHFInputProps } from "./Props";

export type TextFieldProps = MuiTextFieldProps & {
  name: string;
  RHFInputProps?: Partial<RHFInputProps>;
};

const TextField = ({ name, RHFInputProps, ...rest }: TextFieldProps) => {
  const { register, setValue, errors } = useFormContext();
  return (
    <RHFInput
      {...RHFInputProps}
      name={name}
      register={register}
      setValue={setValue}
      defaultValue={rest.defaultValue as string}
      as={<MuiTextField fullWidth error={!!errors![name]} {...rest} />}
    />
  );
};

export default TextField;
