import { Slider } from "@material-ui/core";
import React, { useContext } from "react";
import { Controller } from "react-hook-form";
import FormContext from "./../FormGenerator/context";

const MuiSlider = (props) => {
  const { inputFormOptions, name } = props;
  const formCtx = useContext(FormContext);

  return (
    <Controller
      name={name}
      control={formCtx.control}
      defaultValue={[0, 10]}
      render={(props) => (
        <Slider
          {...props}
          onChange={(_, value) => {
            props.onChange(value);
            formCtx.handleChange(name, value);
          }}
          valueLabelDisplay="auto"
          max={10}
          step={1}
        />
      )}
    />
  );
};

export default MuiSlider;
