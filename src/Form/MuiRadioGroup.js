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

const MuiRadioGroup = (props) => {
    const { control } = props;
    
    return (
<Controller
  as={
    <RadioGroup aria-label="gender">
      <FormControlLabel
        value="female"
        control={<Radio />}
        label="Female"
      />
      <FormControlLabel
        value="male"
        control={<Radio />}
        label="Male"
      />
    </RadioGroup>
  }
  name="RadioGroup"
  control={control}
/>
    )
};

export default MuiRadioGroup;
