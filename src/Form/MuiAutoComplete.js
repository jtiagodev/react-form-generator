import React from "react";
import _ from "lodash/fp";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Controller } from "react-hook-form";

const MuiAutoComplete = ({ control, inputProps, inputLabel, onChangeHandler }) => {
  return (
   
    <Controller
      render={props => (
        <Autocomplete
          // {...props}
          // id={inputLabel}
          style={{ width: 300 }}
          options={inputProps.options}
          getOptionLabel={option => option.label}
          renderOption={option => (
            <span>
              {countryToFlag(option.code)}
              {option.label}
            </span>
          )}
          getOptionSelected={(option, value) => _.isEqual(option, value)}
          renderInput={params => (
            <TextField
              {...params}
              label="Choose a country"
              variant="outlined"
            />
          )}
          onChange={(_, data) => onChangeHandler(data)}
        />
      )}
      name="country"
      control={control}
    />
  );
};

const countryToFlag = (isoCode) => {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, char =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

export default MuiAutoComplete;