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


const MuiCheckbox = (props) => {
    const { control } = props;
    
    return (
      <Controller as={Checkbox} name="Checkbox" control={control} />

    );
};

export default MuiCheckbox;