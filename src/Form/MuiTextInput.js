import { TextField } from '@material-ui/core';
import React, { forwardRef, useRef, useEffect, useState } from 'react';

const TextInput = (props) => {
    const { name, label = "Label", onChange, inputRef, inputProps, disabledItems, inputLabel } = props;
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
        onChange={onChange} 
        inputProps={{ name: inputLabel }} 
        label={label} 
        inputRef={inputRef} 
        />

    );
};

export default TextInput;
