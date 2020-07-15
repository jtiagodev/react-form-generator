import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Checkbox as MuiCheckbox } from "@material-ui/core";
import FormContext from "./../FormGenerator/context";

const Checkbox = (props) => {
  const { inputFormOptions, name } = props;

  const formCtx = useContext(FormContext);

  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    const checked = e.target.checked;
    setChecked(checked);
    formCtx.setValue(name, checked);
    formCtx.handleChange(name, e.target.checked);
  };

  useEffect(() => {
    formCtx.register({ name: name });
  }, [name, formCtx]);

  useEffect(() => {
    if (formCtx.disabledItems.includes(name)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [formCtx.disabledItems, name]);

  useEffect(() => {
    if (formCtx.watch[name] !== checked) {
      setChecked(formCtx.watch[name]);
      formCtx.setValue(name, formCtx.watch[name]);
    }
  }, [name, formCtx, checked]);

  return (    
    <MuiCheckbox
      id={name}
      name={name}
      disabled={disabled}
      checked={checked}
      onChange={handleChange}
    />
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.bool,
};

export default Checkbox;
