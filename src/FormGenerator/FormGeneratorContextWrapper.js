import * as R from "ramda";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import {
  checkIfAllDisableDependenciesAreSatisfied,
  computeDefaultValues,
  computeDependencies,
  computeDisabledItems,
  filterFormOptionsEntryByLabel,
  findAllFieldsWhereInputIsADepedency,
} from "../utils/form";
import FormContext from "./context";

const FormGeneratorContextWrapper = (props) => {
  const {
    typesMap,
    colSize,
    rowNum,
    colNum,
    formOptions,
    margin,
    enableFooter,
    enableFooterButtons,
    readOnlyMode,
    styleFormWrapper,
    styleFormBody,
    styleFormFooter,
    children,
  } = props;

  // FORM GENERATOR

  const computeArray = (count) => {
    const res = [];
    for (var i = 0; i < count; i++) {
      res.push(i);
    }
    return res;
  };

  const [dependenciesMapping, setDependenciesMapping] = useState(
    computeDependencies(formOptions)
  );

  const [defaultValues, setDefaultValues] = useState(
    computeDefaultValues(formOptions)
  );

  const [disabledItems, setDisabledItems] = useState(
    computeDisabledItems(formOptions)
  );

  // Aux Row and Cols for Cell Builder with .map
  const [rows, setRows] = useState(computeArray(rowNum));
  const [cols, setCols] = useState(computeArray(colNum));

  const handleChange = useCallback((event) => {
    console.log(event);

    // HANDLE DISABLE WITHOUT BEING TOUCHED
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
  }, []);

  // FORM FRAMEWORK
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
  } = useForm({});

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

  const onSubmit = useCallback((data) => alert(JSON.stringify(data)), []);

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
        readOnlyMode,
        handleSubmit,
        onSubmit,
        rows,
        cols,
        enableFooter,
        enableFooterButtons,
        styleFormWrapper,
        styleFormBody,
        styleFormFooter,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormGeneratorContextWrapper;
