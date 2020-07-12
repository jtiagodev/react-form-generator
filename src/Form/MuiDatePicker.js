
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

const MuiDatePicker = (props) => {
    const { onChange, inputRef, inputProps, inputLabel, control } = props;

    return (
 <span>Implement @materia-ui/pickers datepicker</span>


    );
};

export default MuiDatePicker;

