import { TextField } from '@material-ui/core';
import React, { forwardRef, useRef, useEffect, useState, useContext } from 'react';
import FormContext from "./../FormGenerator/context";

const TextInput = (props) => {
  const { inputFormOptions, name } = props;
  const formCtx = useContext(FormContext);
  const onChangeHandler = (evt) => formCtx.handleChange(evt);

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
        disabled={disabled}
        onChange={onChangeHandler} 
        inputProps={{ name }} 
        label={inputFormOptions.inputProps.labelDisplay ? inputFormOptions.inputProps.labelText : ''} 
        inputRef={formCtx.register({ ...inputFormOptions.validation })} 
        InputProps={{ readOnly: (formCtx.readOnlyMode || inputFormOptions.readOnly) }}
        
        />

    );
};

export default TextInput;
