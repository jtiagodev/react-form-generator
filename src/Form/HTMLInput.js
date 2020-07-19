
import MomentUtils from '@date-io/moment';
import {
  DatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import React, { useContext, useState } from 'react';
import { Controller } from "react-hook-form";
import {FormInternalContext} from "../FormGenerator/context";

const HTMLInput = (props) => {
  const { inputFormOptions, name } = props;
  const formCtx = useContext(FormInternalContext);
  const [value, setValue] = useState(inputFormOptions.defaultValue);

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
      <input 
      {...inputFormOptions.inputProps}
      onChange={handleChange}
      />
    )}
  />
  );
};

export default HTMLInput;


