import React, { useContext } from "react";
import FormContext from "./../FormGenerator/context";
import { InputOptionsSchema } from "./../utils/schemas";
import { Flex } from "../Form/Grid";
import ErrorMessage from "./../Form/ErrorMessage";
import { LabelPositionEnum } from "./../utils/enums";
import { formOptionDefaultValues } from "./../utils/defaults";
import * as R from "ramda";
import MuiAutoComplete from "../Form/MuiAutoComplete";

const FormEntry = (props) => {
  const { row, col, colNum, formOptions, colSize, margin, typesMap } = props;
 

  // Calculate which FormEntry to be rendered
  let index;
  if (row === 0) {
    index = row + col;
  } else {
    index = row * colNum + col;
  }

  if (formOptions[index]) {
    // Validate Schema for the provided Form Entry
    const { value, error, warning } = InputOptionsSchema.validate(
      formOptions[index]
    );

    // Merges Default Values with Input Configurations provided
    const inputFormOptions = R.merge(
      formOptionDefaultValues,
      formOptions[index]
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
      entryStyle,
      readOnly,
      margin: entryMargin
    } = inputFormOptions;

    const divSize = colSize * entrySize;
    const divMargin = entryMargin || margin;

    // Schema Validation Error
    if (error) {
      return (
        <Flex
          flexDirection="column"
          justifyContent={entryJustifyContent}
          alignItems={entryAlignItems}
          key={index}
          style={{ width: `${divSize}px`, margin: divMargin, ...entryStyle }}
        >
          <ErrorMessage>Invalid Schema</ErrorMessage>
          <ErrorMessage>{error.toString()}</ErrorMessage>
        </Flex>
      );
    }

    // If TypeMap has a valid Entry
    // TODO: Add schema validation for input on if
    if (typesMap.hasOwnProperty(entryType)) {
      const TypeComponent = typesMap[entryType].render;
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
            {typesMap[entryType].name !== "MuiAutoComplete" && (
              <TypeComponent inputFormOptions={inputFormOptions} />
              )}

           
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
