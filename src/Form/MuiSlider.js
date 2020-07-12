import React from 'react';
import {
    TextField,
    Checkbox,
    Select,
    MenuItem,
    Switch,
    RadioGroup,
    FormControlLabel,
    ThemeProvider,
    Radio,
    createMuiTheme,
    Slider
  } from "@material-ui/core";
  import { useForm, Controller } from "react-hook-form";

const MuiSlider = (props) => {
    const { onChange, inputRef, inputProps, inputLabel, control } = props;

    return (
      

<Controller
              name="MUI_Slider"
              control={control}
              defaultValue={[0, 10]}
              render={props => (
                <Slider
                  {...props}
                  onChange={(_, value) => {
                    props.onChange(value);
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
