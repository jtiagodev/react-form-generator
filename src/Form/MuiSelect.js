import React, { useEffect, useState } from "react";
import axios from 'axios';
import * as R from 'ramda';

import { Select, MenuItem } from "@material-ui/core";
import { useForm, ErrorMessage, Controller } from "react-hook-form";
import Axios from "axios";

const MuiSelect = (props) => {
  const { inputProps, inputLabel, inputRef, onChangeHandler, control } = props;

  // REF DATA HANDLER
  const [refData, setRefData] = useState(() => {
   if (!props.useRefDataLoader && inputProps.options) {
    return inputProps.options;
   } else {
     return [];
   }
  });
  useEffect(() => {
    if (props.useRefDataLoader) {
      axios({
        method: props.refDataMethod,
        url: props.refDataURL,
        data: props.refDataPayload
      }).then((response) => {
        const dataLens = R.lensPath(props.refDataLensPath);
        const data = R.view(dataLens, response);
        setRefData(data);
      });
    }
  }, []);


  return (
    <Controller
    render={({ onChange, onBlur, value}) => (
      <Select inputProps={{ name: inputLabel }} onChange={(evt) => { onChange(evt); onChangeHandler(evt) }} >
          <MenuItem value="">
            <em>Select an Option</em>
          </MenuItem>
          {refData.map((option, i) => {
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
