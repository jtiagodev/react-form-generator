import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Controller } from "react-hook-form";
import FormContext from "./../FormGenerator/context";
import { countries, countryToFlag } from "./../utils/demo-lov";
import { withStyles } from "@material-ui/core/styles";


const MuiAutoComplete = (props) => {
  const { inputFormOptions, name } = props;

  const AutocompleteStyled = withStyles(inputFormOptions.inputProps.muiStyles)(Autocomplete);
  const lovOptions = countries; // inputFormOptions.inputProps.options;
  const formCtx = useContext(FormContext);

  return (
    <Controller
      render={props => (
        <AutocompleteStyled
          {...props}
          options={lovOptions}
          getOptionLabel={option => option.label}
          renderOption={option => (
            <span>
              {countryToFlag(option.code)}
              {option.label}
            </span>
          )}
          renderInput={params => (
            <TextField
              {...params}
              label="Choose a country"
              variant="outlined"
            />
          )}
          onChange={(_, data) => { formCtx.handleChange(name, data); props.onChange(data); }}
        />
      )}
      name={name}
      control={formCtx.control}
    />
  );
}



export default MuiAutoComplete;