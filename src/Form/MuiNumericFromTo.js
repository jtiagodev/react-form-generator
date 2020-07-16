import React, { useContext, useState } from "react";
import FormContext from "./../FormGenerator/context";
import { Controller } from "react-hook-form";
import { Flex } from "./../Form/Grid";
import { TextField } from "@material-ui/core";

const MuiNumericFromTo = (props) => {
  const { inputFormOptions, name } = props;
  const formCtx = useContext(FormContext);
  const [toValue, setToValue] = useState(0);
  const [fromValue, setFromValue] = useState(0);

  return (
    <Controller
      name={name}
      control={formCtx.control}
      render={(props) => (
        <Flex flexDirection="row">
          <TextField
            id={`${name}-from`}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(evt) => {
              props.onChange({ to: toValue, from: evt.target.value });
              setFromValue(evt.target.value);
              // formCtx.handleChange(name, evt.target.value);
            }}
            label={
              inputFormOptions.inputProps.labelDisplay
                ? inputFormOptions.inputProps.labelText
                : ""
            }
            inputRef={formCtx.register({ ...inputFormOptions.validation })}
            // InputProps={{
            //   readOnly: formCtx.readOnlyMode || inputFormOptions.readOnly,
            // }}
          />
          <span> - </span>
          <TextField
            id={`${name}-to`}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(evt) => {
              props.onChange({ from: fromValue, to: evt.target.value });
              setToValue(evt.target.value);
              // formCtx.handleChange(name, evt.target.value);
            }}
            label={
              inputFormOptions.inputProps.labelDisplay
                ? inputFormOptions.inputProps.labelText
                : ""
            }
            inputRef={formCtx.register({ ...inputFormOptions.validation })}
            // InputProps={{
            //   readOnly: formCtx.readOnlyMode || inputFormOptions.readOnly,
            // }}
          />
        </Flex>
      )}
    />
  );
};

export default MuiNumericFromTo;
