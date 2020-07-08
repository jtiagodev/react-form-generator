import { TextField } from '@material-ui/core';
import React, { forwardRef, useRef } from 'react';

const TextInput = (props) => {
    const { label = "Label", inputRef, inputProps, inputLabel } = props;
    // const myRef = useRef(ref);

    return (
        <TextField id="standard-basic" inputProps={{ name: inputLabel }} label={label} inputRef={inputRef} {...inputProps} />

    );
};

export default TextInput;
