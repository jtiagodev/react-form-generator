import { TextField } from '@material-ui/core';
import React, { forwardRef, useRef } from 'react';

const TextInput = (props) => {
    const { label = "Label", onChange, inputRef, inputProps, inputLabel } = props;
    // const myRef = useRef(ref);

    return (
        <TextField 
        id={inputLabel} 
        onChange={onChange} 
        inputProps={{ name: inputLabel }} 
        label={label} 
        inputRef={inputRef} 
        />

    );
};

export default TextInput;
