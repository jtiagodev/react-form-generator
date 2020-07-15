import { TextField } from '@material-ui/core';
import React, { forwardRef, useRef, useEffect, useState, useContext } from 'react';
import FormContext from "./../FormGenerator/context";

const TextInput = (props) => {
  const { inputFormOptions } = props;
  const formCtx = useContext(FormContext);
  const onChangeHandler = (evt) => formCtx.handleChange(evt);

  // register={formCtx.register}
  // name={entryInputLabel}
  // setValue={formCtx.setValue}
  // value={formCtx.watch[entryInputLabel]}
  // readOnly={formCtx.readOnlyMode || readOnly} // if Form has readonlymode it will flag as TRUE. Otherwise will fall back to input form readonly flag
  // disabledItems={formCtx.disabledItems}
  // id={entryInputLabel}
  // onChangeHandler={(evt) => formCtx.handleChange(evt)}
  // inputRef={formCtx.register({ ...entryValidation })}
  // inputLabel={entryInputLabel}
  // inputProps={entryInputProps}
  // control={formCtx.control}

  // HANDLE DISABLE LOGIC
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (formCtx.disabledItems.includes(inputFormOptions.inputLabel)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [formCtx.disabledItems, inputFormOptions.inputLabel]);


    return (
        <TextField 
        id={inputFormOptions.inputLabel} 
        disabled={disabled}
        onChange={onChangeHandler} 
        inputProps={{ name: inputFormOptions.inputLabel }} 
        label={inputFormOptions.labelText} 
        inputRef={formCtx.register({ ...inputFormOptions.validation })} 
        InputProps={{ readOnly: (formCtx.readOnlyMode || inputFormOptions.readOnly) }}
        />

    );
};

export default TextInput;
