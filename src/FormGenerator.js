import React, { createRef, useRef, useEffect, useState } from "react";
import { Flex } from "./Grid";
import PropTypes from "prop-types";
import { defaultTypesMap, formGeneratorDefaultValues, useFormOptions } from "./utils/defaults";
import { testFormOptions } from "./utils/demo";
import { useForm, useWatch } from "react-hook-form";
import { Paper, FormGroup, TextField } from "@material-ui/core";
import {
  computeDependencies,
  computeFormValues,
  computeDefaultValues,
  filterFormOptionsEntryByLabel
} from "./utils/form";
import { InputOptionsSchema } from "./utils/schemas";
import ErrorMessage from "./Form/ErrorMessage";
import { defaultProps } from "recompose";
import FormGeneratorRender from "./FormGenerator/FormGeneratorRender";
import FormEntry from "./FormGenerator/FormEntry";
import FormContext from "./FormGenerator/context";

const FormGenerator = (props) => {
  const {
    typesMap,
    colSize,
    rowNum,
    colNum,
    formOptions,
    margin,
    enableFooter,
    enableFooterButtons,
  } = props;

  const [dependenciesMapping, setDependenciesMapping] = useState(
    computeDependencies(formOptions)
  );

  const [defaultValues, setDefaultValues] = useState(
    computeDefaultValues(formOptions)
  );

  const {
    watch,
    handleSubmit,
    register,
    errors,
    control,
    setValue,
    reset,
    getValues
  } = useForm(useFormOptions);
  const allWatch = watch();

  const handleReset = () => {
    reset(defaultValues);
  };

  const handleChange = (event) => {
    // HANDLE DEPENDENCIES
    if (dependenciesMapping[event.target.id]) {
      const fieldsToResetFromDependency = dependenciesMapping[event.target.id];
      fieldsToResetFromDependency.forEach((fieldName) => {
        const formEntry = filterFormOptionsEntryByLabel(formOptions, fieldName);
        setValue(fieldName, formEntry.defaultValue);
        handleChange({ target: { id: fieldName } }); // recursive
      });
    }
  };

  const onSubmit = (data) => alert(JSON.stringify(data));

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
    <FormContext.Provider
      value={{
        formOptions: formOptions,
        colNum: colNum,
        colSize: colSize,
        margin: margin,
        typesMap: typesMap,
        handleChange: handleChange,
        register: register,
        control: control,
        errors: errors,
        values: getValues,
        setValue: setValue,
        watch: allWatch
      }}
    >
      <FormGeneratorRender
        onSubmit={handleSubmit(onSubmit)}
        rows={rows}
        cols={cols}
        enableFooter={enableFooter}
        enableFooterButtons={enableFooterButtons}
        onReset={handleReset}
      />
    </FormContext.Provider>
  );
};

FormGenerator.propTypes = {
  /**
   * Maximum Width of the Form Container
   */
  maxWidth: PropTypes.string,
  /**
   * Maximum Height of the Form Container
   */
  maxHeight: PropTypes.string,
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
  /**
   * Enable Form Footer
   */
  enableFooter: PropTypes.bool,
  /**
   * Enable Default Footer Buttons
   */
  enableFooterButtons: PropTypes.bool,
};

const withDefaultProps = defaultProps(formGeneratorDefaultValues);

export default withDefaultProps(FormGenerator);
