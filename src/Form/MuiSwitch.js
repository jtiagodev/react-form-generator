import React, { useContext } from "react";
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
  Slider,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import FormContext from "./../FormGenerator/context";

const MuiSwitch = (props) => {
  const { inputFormOptions, name } = props;
  const formCtx = useContext(FormContext);

  return (
    <Controller
      name={name}
      control={formCtx.control}
      render={(props) => (
        <Switch
          onChange={(e) => {
            props.onChange(e.target.checked);
            formCtx.handleChange(name, e.target.checked);
          }}
          color={inputFormOptions.inputProps.color}
        />
      )}
    />
  );
};

export default MuiSwitch;
