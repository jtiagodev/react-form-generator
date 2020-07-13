import React, { useState } from "react";

import { Select, MenuItem } from "@material-ui/core";
import { useForm, ErrorMessage, Controller } from "react-hook-form";

const MuiSelect = (props) => {
  const { inputProps, inputLabel, inputRef, onChange, control, register } = props;
  
  return (

    <Select 
      inputProps={{ 
      name: inputLabel, 
      inputRef: (ref) => {
        if (!ref) return;
        register({ name: inputLabel, value: ref.value });
      }}}
      onChange={onChange}
    >
      {inputProps.options.map((item, i) => (
        <MenuItem key={i} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default MuiSelect;
