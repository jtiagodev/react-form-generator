import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import * as R from 'ramda';
import { Select, MenuItem } from "@material-ui/core";
import { useForm, ErrorMessage, Controller } from "react-hook-form";
import FormContext from "./../FormGenerator/context";

const MuiSelect = (props) => {
  const { inputFormOptions, name } = props;
  const formCtx = useContext(FormContext);



  // REF DATA HANDLER
  const [refData, setRefData] = useState(() => {
   if (!inputFormOptions.useRefDataLoader && inputFormOptions.inputProps.options) {
    return inputFormOptions.inputProps.options;
   } else {
     return [];
   }
  });
  useEffect(() => {
    if (inputFormOptions.useRefDataLoader) {
      axios({
        method: inputFormOptions.refDataMethod,
        url: inputFormOptions.refDataURL,
        data: inputFormOptions.refDataPayload
      }).then((response) => {
        const dataLens = R.lensPath(inputFormOptions.refDataLensPath);
        const data = R.view(dataLens, response);
        setRefData(data);
      });
    }
  }, []);


  return (
    <Controller
    render={({ onChange, onBlur, value}) => (
      <Select inputProps={{ name }} onChange={(evt) => { onChange(evt); formCtx.handleChange(name, evt.target.value) }} >
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
        
      
      name={name}
      rules={{ required: "this is required" }}
      control={formCtx.control}
      defaultValue=""
    />
  );
};

export default MuiSelect;
