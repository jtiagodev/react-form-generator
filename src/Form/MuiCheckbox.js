import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Checkbox as MuiCheckbox } from "@material-ui/core";
import FormContext from "./../FormGenerator/context";
import { Controller } from "react-hook-form";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';

const Checkbox = (props) => {
  const { inputFormOptions, name } = props;
  const CheckboxStyled = withStyles(inputFormOptions.inputProps.muiStyles)(MuiCheckbox);

  const formCtx = useContext(FormContext);
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    formCtx.setValue(name, e.target.checked);
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
              render={(props) => (
                <CheckboxStyled
                  onChange={e => { handleChange(e); } }
                  checked={checked}
                  disabled={disabled}
                />
              )}
            />

  );
};


export default Checkbox;
