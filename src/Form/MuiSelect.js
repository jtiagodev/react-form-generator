import React, { useState } from "react";

import { Select, MenuItem } from "@material-ui/core";
import { useForm, ErrorMessage, Controller } from "react-hook-form";

const MuiSelect = (props) => {
  const { inputProps, inputLabel, inputRef, onChangeHandler, control } = props;

  return (
    <Controller
    render={({ onChange, onBlur, value}) => (
      <Select inputProps={{ name: inputLabel }} onChange={(evt) => { onChange(evt); onChangeHandler(evt) }} >
          <MenuItem value="">
            <em>Select an Option</em>
          </MenuItem>
          {inputProps.options.map((option, i) => {
            return (
              <MenuItem key={i} value={option.value}>
                {option.label}
              </MenuItem>
            );
          })}
        </Select>
    )}
        
      
      name={inputLabel}
      rules={{ required: "this is required" }}
      control={control}
      defaultValue=""
    />
  );
};

export default MuiSelect;
