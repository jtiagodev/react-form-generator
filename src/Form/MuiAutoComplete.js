import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Controller } from "react-hook-form";
import FormContext from "./../FormGenerator/context";
import { countries, countryToFlag } from "./../utils/demo-lov";
import { makeStyles } from "@material-ui/core/styles";

const MuiAutoComplete = (props) => {
  const { inputFormOptions, name } = props;

  const lovOptions = countries; // inputFormOptions.inputProps.options;
  const formCtx = useContext(FormContext);

  const style = inputFormOptions.readOnly
    ? makeStyles(inputFormOptions.readOnlyStyles)()
    : makeStyles(inputFormOptions.entryStyle)();

  return (
    <Controller
      render={(props) => (
        <Autocomplete
          {...props}
          options={lovOptions}
          getOptionLabel={(option) => option.label}
          renderOption={(option) => (
            <span>
              {countryToFlag(option.code)}
              {option.label}
            </span>
          )}
          defaultValue={inputFormOptions.defaultValue}
          renderInput={(params) => (
            <TextField
              {...params}
              label={
                inputFormOptions.inputProps.labelDisplay
                  ? inputFormOptions.inputProps.labelText
                  : ""
              }
              InputProps={
                inputFormOptions.readOnly
                  ? {
                      readOnly: true,
                      classes: style,
                    }
                  : {
                      ...params.InputProps,
                      classes: style,
                    }
              }
            />
          )}
          onChange={(_, data) => {
            formCtx.handleChange(name, data);
            props.onChange(data);
          }}
        />
      )}
      name={name}
      control={formCtx.control}
    />
  );
};

export default MuiAutoComplete;
