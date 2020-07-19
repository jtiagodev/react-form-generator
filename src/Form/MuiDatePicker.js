
import MomentUtils from '@date-io/moment';
import {
  DatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import React, { useContext, useState } from 'react';
import { Controller } from "react-hook-form";
import {FormInternalContext} from "./../FormGenerator/context";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';

const MuiDatePicker = (props) => {
  const { inputFormOptions, name } = props;

  const formCtx = useContext(FormInternalContext);
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleChange = (val) => {
    formCtx.handleChange(name, val);
    formCtx.setValue(name, val);
    handleDateChange(val);
  }

  return (
    <Controller
    name={name}
    control={formCtx.control}
    render={(props) => (
      <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        openTo="year"
        views={["year", "month"]}
        label="Year and Month"
        helperText="With min and max"
        minDate={new Date("2011-01-01")}
        maxDate={new Date("2018-12-01")}
        value={selectedDate}
        onChange={val => {
          handleChange(val);
        }}
      />
      </MuiPickersUtilsProvider>
    )}
  />
  );
};

export default MuiDatePicker;


