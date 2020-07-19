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
import { FormInternalContext } from "./../FormGenerator/context";
import { Flex } from "./../Form/Grid";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";

const MuiRadioGroup = (props) => {
  const { inputFormOptions, name } = props;
  const formCtx = useContext(FormInternalContext);

  const rowOrientation =
    inputFormOptions.inputProps.orientation === "row" ? true : false;

  return (
    <Controller
      as={
        <RadioGroup
          row={rowOrientation}
          aria-label={inputFormOptions.inputProps.ariaLabel}
        >
          {inputFormOptions.inputProps.options.map((option, i) => (
            <FormControlLabel
              key={i}
              value={option.value}
              control={<Radio color={inputFormOptions.inputProps.color} />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      }
      name={name}
      control={formCtx.control}
    />
  );
};

export default MuiRadioGroup;
