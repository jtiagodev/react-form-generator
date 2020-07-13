import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Checkbox as MuiCheckbox } from "@material-ui/core";

const Checkbox = ({ name, register, setValue, value, disabledItems, onChange }) => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    const checked = e.target.checked;

    setChecked(checked);
    setValue(name, checked);
    onChange(e);
  };

  useEffect(() => {
    register({ name });
  }, [name, register]);

  useEffect(() => {
    if (disabledItems.includes(name)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [disabledItems]);

  useEffect(() => {
    if (value !== checked) {
      setChecked(value);
      setValue(name, value);
    }
  }, [name, value, setChecked, setValue]);

  return (
    <MuiCheckbox
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
