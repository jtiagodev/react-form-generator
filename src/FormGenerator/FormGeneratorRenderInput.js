import React, { useContext } from "react";
import FormContext from "./context";
import { InputOptionsSchema } from "../utils/schemas";
import { Flex } from "../Form/Grid";
import ErrorMessage from "../Form/ErrorMessage";
import { LabelPositionEnum } from "../utils/enums";
import { formOptionDefaultValues } from "../utils/defaults";
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

    const divSize = colSize * inputFormOptions.cols;
    const divMargin = inputFormOptions.margin || margin;

    // Schema Validation Error
    if (error) {
      return (
        <Flex
          flexDirection="column"
          justifyContent={inputFormOptions.alignX}
          alignItems={inputFormOptions.alignY}
          key={index}
          style={{
            width: `${divSize}px`,
            margin: divMargin,
            ...inputFormOptions.entryStyle,
          }}
        >
          <ErrorMessage>Invalid Schema</ErrorMessage>
          <ErrorMessage>{error.toString()}</ErrorMessage>
        </Flex>
      );
    }

    // If TypeMap has a valid Entry
    if (typesMap.hasOwnProperty(inputFormOptions.inputType)) {
      const InputTypeComponent = typesMap[inputFormOptions.inputType].render;
      return (
        <section>
          <Flex
            flexDirection={inputFormOptions.labelPosition}
            justifyContent={inputFormOptions.alignX}
            alignItems={inputFormOptions.alignY}
            key={index}
            style={{ width: `${divSize}px`, margin: divMargin }}
          >
            {inputFormOptions.showLabel && (
              <Flex style={{ marginRight: inputFormOptions.labelMargin }}>
                <label style={inputFormOptions.labelStyle}>
                  {inputFormOptions.labelText}
                </label>
              </Flex>
            )}
            {typesMap[inputFormOptions.inputType].name !==
              "MuiAutoComplete" && (
              <InputTypeComponent
                inputFormOptions={inputFormOptions}
                name={inputFormOptions.inputLabel}
                
              />
            )}
          </Flex>
        </section>
      );
      // If TypeMap is not a valid Entry
    } else {
      return (
        <Flex
          justifyContent={inputFormOptions.alignX}
          alignItems={inputFormOptions.alignY}
          key={index}
          style={{ width: `${divSize}px`, margin: divMargin }}
        >
          <ErrorMessage>{`Undefined 'type' for FormComponent ${inputFormOptions.inputLabel}`}</ErrorMessage>
        </Flex>
      );
    }
  } else {
    return null;
  }
};

export default FormEntry;
