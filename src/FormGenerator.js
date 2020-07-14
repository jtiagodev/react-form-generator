import React, { createRef, useRef, useEffect, useState } from "react";
import { Flex } from "./Grid";
import PropTypes from "prop-types";
import {
  defaultTypesMap,
  formGeneratorDefaultValues,
  useFormOptions,
} from "./utils/defaults";
import { testFormOptions, testFormGeneratorOptions } from "./utils/demo";
import { useForm, useWatch } from "react-hook-form";
import { Paper, FormGroup, TextField } from "@material-ui/core";
import {
  computeDependencies,
  computeFormValues,
  computeDefaultValues,
  computeDisableWhile,
  filterFormOptionsEntryByLabel,
  computeDisabledItems,
  findAllFieldsWhereInputIsADepedency,
  checkIfAllDisableDependenciesAreSatisfied,
} from "./utils/form";
import { InputOptionsSchema, formGeneratorPropTypesSchema } from "./utils/schemas";
import ErrorMessage from "./Form/ErrorMessage";
import { defaultProps } from "recompose";
import FormGeneratorRender from "./FormGenerator/FormGeneratorRender";
import FormEntry from "./FormGenerator/FormEntry";
import FormContext from "./FormGenerator/context";
import * as R from "ramda";

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

  const [disabledItems, setDisabledItems] = useState(
    computeDisabledItems(formOptions)
  );

  const {
    watch,
    handleSubmit,
    register,
    errors,
    control,
    setValue,
    reset,
    getValues,
    formState,
  } = useForm(useFormOptions);
  const allWatch = watch();
  const {
    isDirty,
    dirtyFields,
    touched,
    isSubmitted,
    isSubmitting,
    submitCount,
    isValid,
  } = formState;

  const handleReset = () => {
    reset();
  };

  const resetValue = (inputLabel, value) => {
    setValue(inputLabel, value, { shouldDirty: false });
  };

  const handleChange = (event) => {
    // HANDLE DISABLE WITHOUT
    const fieldsDependingOnCurrentChangedInput = findAllFieldsWhereInputIsADepedency(
      event.target.id || event.target.name,
      formOptions
    );
    if (fieldsDependingOnCurrentChangedInput.length > 0) {
      fieldsDependingOnCurrentChangedInput.forEach(
        (fieldDependingOnCurrentInput) => {
          const formEntry = filterFormOptionsEntryByLabel(
            formOptions,
            fieldDependingOnCurrentInput
          );
          const shouldDisable = checkIfAllDisableDependenciesAreSatisfied(
            formEntry.disableWhileNotFilled,
            getValues
          );
          if (shouldDisable) {
            // filters out the item to be disabled
            const newDisabledItemsResult = R.filter(
              (item) => item !== fieldDependingOnCurrentInput,
              disabledItems
            );
            setDisabledItems(newDisabledItemsResult);
          } else {
            // adds the item to be disabled
            disabledItems.push(fieldDependingOnCurrentInput);
            const newDisabledItemsSet = new Set(disabledItems); //remove duplicates
            const newDisabledItemsResult = Array.from(newDisabledItemsSet);
            setDisabledItems(newDisabledItemsResult);
          }
        }
      );
    }
    // HANDLE DEPENDENCY RESET
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
        watch: allWatch,
        disabledItems,
      }}
    >
      <FormGeneratorRender
        onSubmit={handleSubmit(onSubmit)}
        rows={rows}
        cols={cols}
        enableFooter={enableFooter}
        enableFooterButtons={enableFooterButtons}
        onReset={handleReset}
        {...testFormGeneratorOptions}
      />
    </FormContext.Provider>
  );
};

FormGenerator.propTypes = formGeneratorPropTypesSchema;
const withDefaultProps = defaultProps(formGeneratorDefaultValues);
export default withDefaultProps(FormGenerator);
