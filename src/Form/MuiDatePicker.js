
import React, { useState } from 'react';
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
  import ReactDatePicker from "react-datepicker";
  import MomentUtils from '@date-io/moment';
  import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
  } from '@material-ui/pickers';

const MuiDatePicker = (props) => {
  const [selectedDate, handleDateChange] = useState(new Date());


  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
    <DatePicker value={selectedDate} onChange={handleDateChange} />
    
  </MuiPickersUtilsProvider>
  );
};

export default MuiDatePicker;

