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

const TextInput = (props) => {
    const { onChange, inputRef, inputProps, inputLabel, control } = props;

    return (
        <Controller as={TextField} name="TextField" control={control} />


    );
};

export default TextInput;
