import React, { useState } from "react";

import { Select, MenuItem } from "@material-ui/core";
import { useForm, ErrorMessage, Controller } from "react-hook-form";

const MuiSelect = (props) => {
  const { inputProps, inputLabel, inputRef, onChange, control } = props;
  
  return (

    
<Controller
              name={inputLabel}
              control={control}
              render={props => (
                <Select id={inputLabel} name={inputLabel} onChange={(evt) => onChange(evt)} >
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
            />

        
  );
};

export default MuiSelect;
