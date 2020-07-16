import React, { useState } from "react";
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
  Slider,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";

const InputReactDatePicker = (props) => {
  const { onChange, inputRef, inputProps, inputLabel, control } = props;
  const [value, setValue] = useState(new Date());

  return (
    <Controller
      control={control}
      name="ReactDatepicker"
      render={(props) => (
        <ReactDatePicker
          {...props}
          className="input"
          placeholderText="Select date"
          selected={value}
        />
      )}
    />
  );
};

export default InputReactDatePicker;
