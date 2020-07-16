import React, { useContext } from 'react';
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
import FormContext from "./../FormGenerator/context";
import { Flex } from "./../Form/Grid";
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';

const MuiRadioGroup = (props) => {
    const { inputFormOptions, name } = props;
    const formCtx = useContext(FormContext);
    const RadioGroupStyled = withStyles(inputFormOptions.inputProps.muiStyles)(RadioGroup);
    const RadioStyled = withStyles(inputFormOptions.inputProps.radioStyles)(Radio);

    const rowOrientation = inputFormOptions.inputProps.orientation === "row" ? true : false;

    return (
<Controller
  as={
    <RadioGroupStyled row={rowOrientation} aria-label={inputFormOptions.inputProps.ariaLabel}>
      {inputFormOptions.inputProps.options.map((option , i) => (
        <FormControlLabel
        value={option.value}
        control={<RadioStyled />}
        label={option.label}
      />
      ))}
    </RadioGroupStyled>
  }
  name={name}
  control={formCtx.control}
/>
    )
};

export default MuiRadioGroup;
