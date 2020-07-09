import React, { createRef, useRef, useEffect, useState } from "react";
import { Flex } from "./Grid";
import PropTypes from "prop-types";
import { testFormOptions, defaultTypesMap } from "./utils/defaults";
import { useForm, useWatch } from "react-hook-form";
import { Paper, FormGroup, TextField } from "@material-ui/core";
import { computeDependencies, computeFormValues } from "./utils/misc";
import { InputOptionsSchema } from "./utils/schemas";
import ErrorMessage from "./Form/ErrorMessage";
import { defaultProps } from "recompose";
import FormGeneratorRender from "./FormGenerator/FormGeneratorRender";
import FormEntry from "./FormGenerator/FormEntry";
import FormContext from './FormGenerator/context';

const FormGenerator = (props) => {
  const { typesMap, colSize, rowNum, colNum, formOptions, margin } = props;

  const [dependenciesMapping, setDependenciesMapping] = useState(
    computeDependencies(formOptions)
  );
  const {
    watch,
    handleSubmit,
    register,
    errors,
    control,
    setValue,
  } = useForm();


  const handleChange = (event) => {
    // setFormValues({...formValues, [event.target.id]: event.target.value });
    if (dependenciesMapping[event.target.id]) {
      const fieldsToResetFromDependency = dependenciesMapping[event.target.id];
      fieldsToResetFromDependency.forEach((fieldName) => {
        setValue(fieldName, "Resetted");
        handleChange({ target: { id: fieldName } });
      });
    }
  };

  const onSubmit = (values) => console.log(values);

  // Aux Row and Cols for Cell Builder with .map
  const rows = [];
  const cols = [];
  for (var i = 0; i < rowNum; i++) {
    rows.push(i);
  }
  for (var i = 0; i < colNum; i++) {
    cols.push(i);
  }



  return (
  <FormContext.Provider value={{
    formOptions: formOptions,
    colNum: colNum,
    colSize: colSize,
    margin: margin,
    typesMap: typesMap,
    handleChange: handleChange,
    register: register,
    control: control,
    errors: errors
  }}>
   <FormGeneratorRender 
   onSubmit={handleSubmit(onSubmit)}
   rows={rows}
   cols={cols}
   />
   </FormContext.Provider>
  );
};

FormGenerator.propTypes = {
  /**
   * (Advanced usage) Mapping the supported types of Form Inputs provided to the Form Generator
   */
  typesMap: PropTypes.object,
  /**
   * Size for a column (in pixels)
   */
  colSize: PropTypes.number,
  /**
   * Amount of Rows on the form
   */
  rowNum: PropTypes.number,
  /**
   * Amount fo Columns on the form
   */
  colNum: PropTypes.number,
  /**
   * Form elements definition
   */
  formOptions: testFormOptions,
  /**
   * Default magins applied to each cell
   */
  margin: PropTypes.number,
};

const withDefaultProps = defaultProps({
  typesMap: defaultTypesMap,
  colSize: 200,
  rowNum: 2,
  colNum: 2,
  margin: "5px",
  formOptions: testFormOptions,
});

export default withDefaultProps(FormGenerator);
