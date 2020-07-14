import { TextField } from '@material-ui/core';
import React, { forwardRef, useRef, useEffect, useState } from 'react';

const TextInput = (props) => {
    const { name, label = "Label", onChangeHandler, inputRef, inputProps, disabledItems, inputLabel, readOnly } = props;
  
  // HANDLE DISABLE LOGIC
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (disabledItems.includes(name)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [disabledItems]);


    return (
        <TextField 
        id={inputLabel} 
        disabled={disabled}
        onChange={onChangeHandler} 
        inputProps={{ name: inputLabel }} 
        label={label} 
        inputRef={inputRef} 
        InputProps={{ readOnly: readOnly ? true : false }}
        />

    );
};

export default TextInput;
