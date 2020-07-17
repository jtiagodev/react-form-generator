import { TextField } from '@material-ui/core';
import React, { forwardRef, useRef, useEffect, useState, useContext } from 'react';
import FormContext from "./../FormGenerator/context";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';

const MuiNumericTextField = (props) => {
  const { inputFormOptions, name } = props;
  const formCtx = useContext(FormContext);

  const style = inputFormOptions.readOnly
    ? makeStyles(inputFormOptions.readOnlyStyles)()
    : makeStyles(inputFormOptions.entryStyle)();

  // HANDLE DISABLE LOGIC
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (formCtx.disabledItems.includes(name)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [formCtx.disabledItems, name]);

    return (

        <TextField 
        id={name} 
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        disabled={disabled}
        onChange={(evt) => formCtx.handleChange(name, evt.target.value)} 
        inputProps={{ name }} 
        label={inputFormOptions.inputProps.labelDisplay ? inputFormOptions.inputProps.labelText : ''} 
        inputRef={formCtx.register({ ...inputFormOptions.validation })} 
        InputProps={{ readOnly: (formCtx.readOnlyMode || inputFormOptions.readOnly), classes: style }}
        />

    );
};

export default MuiNumericTextField;
