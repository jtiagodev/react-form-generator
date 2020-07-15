import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Checkbox as MuiCheckbox } from "@material-ui/core";
import FormContext from "./../FormGenerator/context";

const Checkbox = (props) => {
  const { inputFormOptions, name } = props;

  const formCtx = useContext(FormContext);
  const onChangeHandler = (evt) => formCtx.handleChange(evt);

  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    const checked = e.target.checked;

    setChecked(checked);
    formCtx.setValue(inputFormOptions.inputLabel, checked);
    onChangeHandler(e);

  };

  useEffect(() => {
    formCtx.register({ name: inputFormOptions.inputLabel });
  }, [inputFormOptions.inputLabel, formCtx]);

  useEffect(() => {
    if (formCtx.disabledItems.includes(inputFormOptions.inputLabel)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [formCtx.disabledItems, inputFormOptions.inputLabel]);

  useEffect(() => {
    if (formCtx.watch[inputFormOptions.inputLabel] !== checked) {
      setChecked(formCtx.watch[inputFormOptions.inputLabel]);
      formCtx.setValue(inputFormOptions.inputLabel, formCtx.watch[inputFormOptions.inputLabel]);
    }
  }, [inputFormOptions.inputLabel, formCtx, setChecked, formCtx.setValue]);

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
