
import MomentUtils from '@date-io/moment';
import {
  DatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import React, { useContext, useState } from 'react';
import { Controller } from "react-hook-form";
import { FormInternalContext } from "./../FormGenerator/context";

const ControlledInput = (props) => {
  const { inputFormOptions, name } = props;
  const formCtx = useContext(FormInternalContext);
  const [value, setValue] = useState(inputFormOptions.defaultValue);

  const Input = inputFormOptions.inputProps.inputRender;

  const handleChange = (evt) => {
    const val = evt.target.value;
    formCtx.handleChange(name, val);
    formCtx.setValue(name, val);
    setValue(val);
  }

  return (
    <Controller
    name={name}
    control={formCtx.control}
    render={(props) => (
      <Input 
      value={value}
      onChange={handleChange}
      />
    )}
  />
  );
};

export default ControlledInput;


