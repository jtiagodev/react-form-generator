import React, { useContext } from "react";
import FormContext from "./../FormGenerator/context";
import { InputOptionsSchema } from "./../utils/schemas";
import { Flex } from "./../Grid";
import ErrorMessage from "./../Form/ErrorMessage";
import { LabelPositionEnum } from "./../utils/enums";
import { formOptionDefaultValues } from "./../utils/defaults";
import * as R from "ramda";

const FormEntry = ({ row, col }) => {
  const formCtx = useContext(FormContext);

  // Calculate which FormEntry to be rendered
  let index;
  if (row === 0) {
    index = row + col;
  } else {
    index = row * formCtx.colNum + col;
  }

  if (formCtx.formOptions[index]) {
    // Validate Schema for the provided Form Entry
    const { value, error, warning } = InputOptionsSchema.validate(
      formCtx.formOptions[index]
    );

    // Merges Default Values with Input Configurations provided
    const inputFormOptions = R.merge(
      formOptionDefaultValues,
      formCtx.formOptions[index]
    );

    const {
      cols: entrySize,
      alignX: entryJustifyContent,
      alignY: entryAlignItems,
      inputType: entryType,
      inputProps: entryInputProps,
      validation: entryValidation,
      inputLabel: entryInputLabel,
      dependencies: entryDependencies,
      showValidation: entryShowValidation,
      showLabel,
      labelPosition,
      labelMarginRight: labelMargin,
      labelStyle,
      labelText,
      margin: entryMargin
    } = inputFormOptions;

    const divSize = formCtx.colSize * entrySize;
    const divMargin = entryMargin || formCtx.margin;

    // Schema Validation Error
    if (error) {
      return (
        <Flex
          flexDirection="column"
          justifyContent={entryJustifyContent}
          alignItems={entryAlignItems}
          key={index}
          style={{ width: `${divSize}px`, margin: divMargin }}
        >
          <ErrorMessage>Invalid Input Object</ErrorMessage>
          <ErrorMessage>{error.toString()}</ErrorMessage>
        </Flex>
      );
    }

    // If TypeMap has a valid Entry
    // TODO: Add schema validation for input on if
    if (formCtx.typesMap.hasOwnProperty(entryType)) {
      const TypeComponent = formCtx.typesMap[entryType].render;
      return (
        <section>
          <Flex
            flexDirection={labelPosition}
            justifyContent={entryJustifyContent}
            alignItems={entryAlignItems}
            key={index}
            style={{ width: `${divSize}px`, margin: divMargin }}
          >
            {showLabel && (
              <Flex style={{ marginRight: labelMargin }}>
                <label style={labelStyle}>{labelText}</label>
              </Flex>
            )}

            <TypeComponent
              register={formCtx.register}
              name={entryInputLabel}
              setValue={formCtx.setValue}
              value={formCtx.watch[entryInputLabel]}

              id={entryInputLabel}
              onChange={formCtx.handleChange}
              inputRef={formCtx.register({ ...entryValidation })}
              inputLabel={entryInputLabel}
              inputProps={entryInputProps}
              control={formCtx.control}
            />
            {entryShowValidation &&
              formCtx.errors[entryInputLabel] &&
              formCtx.errors[entryInputLabel].message}
          </Flex>
        </section>
      );
      // If TypeMap is not a valid Entry
    } else {
      return (
        <Flex
          justifyContent={entryJustifyContent}
          alignItems={entryAlignItems}
          key={index}
          style={{ width: `${divSize}px`, margin: divMargin }}
        >
          <ErrorMessage>{`Undefined 'type' for FormComponent ${entryInputLabel}`}</ErrorMessage>
        </Flex>
      );
    }
  } else {
    return null;
  }
};

export default FormEntry;
