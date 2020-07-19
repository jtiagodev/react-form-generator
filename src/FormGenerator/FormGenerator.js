import * as R from "ramda";
import React, { useCallback, useState, useRef, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  checkIfAllDisableDependenciesAreSatisfied,
  computeDefaultValues,
  computeDependencies,
  computeDisabledItems,
  filterFormOptionsEntryByLabel,
  findAllFieldsWhereInputIsADepedency,
} from "../utils/form";
import { FormInternalContextProvider } from "./context";
import FormGeneratorRender from "./FormGeneratorRender";
import { FormGlobalContext } from "./context";

const FormGenerator = (props) => {
  const FormGlobalCtx = useContext(FormGlobalContext);

  useEffect(() => {
  
    let newObject = {};
    newObject[props.id] = {
      setValues: (name, value) => setValue(name, value)
    };

    FormGlobalCtx.setRegisteredForms(newObject);
    
  }, []);

  const {
    typesMap,
    formOptions
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


  const handleChange = useCallback((sourceId, data) => {

    // HANDLE DISABLE WITHOUT BEING TOUCHED
    const fieldsDependingOnCurrentChangedInput = findAllFieldsWhereInputIsADepedency(
      sourceId,
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
    if (dependenciesMapping[sourceId]) {
      const fieldsToResetFromDependency = dependenciesMapping[sourceId];
      fieldsToResetFromDependency.forEach((fieldName) => {
        const formEntry = filterFormOptionsEntryByLabel(formOptions, fieldName);
        setValue(fieldName, formEntry.defaultValue);
        handleChange(fieldName, undefined); // recursive
      });
    }
  }, []);


  return (
    <FormInternalContextProvider
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
        disabledItems,
      }}
    >
                  <FormGeneratorRender {...props} handleSubmit={handleSubmit} />

    </FormInternalContextProvider>
  );
};

export default FormGenerator;
