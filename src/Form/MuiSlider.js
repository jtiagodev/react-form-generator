import { Slider } from "@material-ui/core";
import React, { useContext } from "react";
import { Controller } from "react-hook-form";
import { FormInternalContext } from "./../FormGenerator/context";
import { makeStyles } from "@material-ui/core/styles";

const MuiSlider = (props) => {
  const { inputFormOptions, name } = props;
  const formCtx = useContext(FormInternalContext);
  const style = inputFormOptions.readOnly
    ? makeStyles(inputFormOptions.readOnlyStyles)()
    : makeStyles(inputFormOptions.entryStyle)();


  return (
    <Controller
      name={name}
      control={formCtx.control}
      render={(props) => (
        <Slider
          {...props}
          onChange={(_, value) => {
            props.onChange(value);
            formCtx.handleChange(name, value);
          }}
          valueLabelDisplay="auto"
          classes={style}
          defaultValue={inputFormOptions.defaultValue || [0, 10]}
          inputProps={{
            name,
            classes: style,
          }}
          max={inputFormOptions.max || 100}
          step={inputFormOptions.step || 1}
        />
      )}
    />
  );
};

export default MuiSlider;
