import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Checkbox } from "@material-ui/core";
import {FormInternalContext} from "./../FormGenerator/context";
import { Controller } from "react-hook-form";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";

const MuiCheckbox = (props) => {
  const { inputFormOptions, name } = props;
  const formCtx = useContext(FormInternalContext);
//  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    // setChecked(e.target.checked);
    // formCtx.setValue(name, e.target.checked);
    formCtx.handleChange(name, e.target.checked);
  };

  useEffect(() => {
    if (formCtx.disabledItems.includes(name)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [formCtx.disabledItems, name]);

  return (
    <Controller
    name={name}
    control={formCtx.control}
    render={props => (
      <Checkbox
        onChange={e => props.onChange(e.target.checked)}
        checked={props.value}
        disabled={disabled}

      />
    )}
  />

  );
};

export default MuiCheckbox;
