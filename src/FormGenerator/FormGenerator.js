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
import FormGeneratorRender from "./FormGeneratorRender";

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
    readOnlyMode,
    styleFormWrapper,
    styleFormBody,
    styleFormFooter,
    children,
  } = props;

  // FORM GENERATOR


  const [dependenciesMapping, setDependenciesMapping] = useState(
    computeDependencies(formOptions)
  );

  const [defaultValues, setDefaultValues] = useState(
    computeDefaultValues(formOptions)
  );

  const [disabledItems, setDisabledItems] = useState(
    computeDisabledItems(formOptions)
  );

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

 

  return (
    <FormContext.Provider
      value={{
        formOptions,
        typesMap,
        // 
        handleChange: handleChange,
        register: register,
        control: control,
        errors: errors,
        values: getValues,
        setValue: setValue,
        watch: allWatch,
        disabledItems
      }}
    >
      <FormGeneratorRender {...props} handleSubmit={handleSubmit} />
    </FormContext.Provider>
  );
};

export default FormGenerator;

