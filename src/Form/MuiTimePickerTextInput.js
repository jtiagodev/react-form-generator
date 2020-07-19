import { TextField } from "@material-ui/core";
import React, {
  forwardRef,
  useRef,
  useEffect,
  useState,
  useContext,
} from "react";
import { FormInternalContext } from "./../FormGenerator/context";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";

const MuiTimePickerTextInput = (props) => {
  const { inputFormOptions, name } = props;
  const formCtx = useContext(FormInternalContext);

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
      type="date"
      onChange={(evt) => formCtx.handleChange(name, evt.target.value)}
      inputProps={{ name }}
      defaultValue={inputFormOptions.defaultValue}
      label={
        inputFormOptions.inputProps.labelDisplay
          ? inputFormOptions.inputProps.labelText
          : ""
      }
      inputRef={formCtx.register({ ...inputFormOptions.validation })}
      InputProps={{
        readOnly: formCtx.readOnlyMode || inputFormOptions.readOnly,
        disableUnderline: formCtx.readOnlyMode || inputFormOptions.readOnly,
      }}
    />
  );
};

export default MuiTimePickerTextInput;
