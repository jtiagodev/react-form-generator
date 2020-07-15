import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import * as R from 'ramda';
import { Select, MenuItem } from "@material-ui/core";
import { useForm, ErrorMessage, Controller } from "react-hook-form";
import FormContext from "./../FormGenerator/context";

const ErrorDisplay = (props) => {

      const { showValidation, name } = props;
      const formCtx = useContext(FormContext);

    return (
        <>
        {showValidation &&
    formCtx.errors[name] &&
    formCtx.errors[name].message}
        </>
    )
};

export default ErrorDisplay;