
import React from 'react';
import {
    TextField,
    Checkbox,
    Select,
    MenuItem,
    Switch,
    RadioGroup,
    FormControlLabel,
    ThemeProvider,
    Radio,
    createMuiTheme,
    Slider
  } from "@material-ui/core";
  import { useForm, Controller } from "react-hook-form";
  import ReactDatePicker from "react-datepicker";

const InputReactDatePicker = (props) => {
    const { onChange, inputRef, inputProps, inputLabel, control } = props;

    return (
       
<Controller
control={control}
name="ReactDatepicker"
render={props => (
  <ReactDatePicker
    {...props}
    className="input"
    placeholderText="Select date"
    selected={props.value}
  />
)}
/>


    );
};

export default InputReactDatePicker;

