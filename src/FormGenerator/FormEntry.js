import React, { useContext } from 'react';
import FormContext from './../FormGenerator/context';
import { InputOptionsSchema } from "./../utils/schemas";
import { Flex } from "./../Grid";
import ErrorMessage from "./../Form/ErrorMessage";

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

      // TODO: Improve code bellow
      // Extract few properties, otherwise the defaults
      const entrySize = formCtx.formOptions[index].cols || 1;
      const divSize = formCtx.colSize * entrySize;
      const entryJustifyContent = formCtx.formOptions[index].alignX || "center";
      const entryAlignItems = formCtx.formOptions[index].alignY || "center";
      const divMargin = formCtx.formOptions[index].margin || formCtx.margin;
      const entryType = formCtx.formOptions[index].inputType;
      const entryId = formCtx.formOptions[index].id || index + 1;
      const entryInputProps = formCtx.formOptions[index].inputProps || {};
      const entryValidation = formCtx.formOptions[index].validation || {
        required: "Required",
      };
      const entryInputLabel = formCtx.formOptions[index].inputLabel; //|| uuid()
      const entryDependencies = formCtx.formOptions[index].dependencies || [];
      const entryShowValidation = formCtx.formOptions[index].showValidation || true;

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
      if (formCtx.typesMap[entryType]) {
        // const ref = createRef();
        const TypeComponent = formCtx.typesMap[entryType];
        return (
          <Flex
            flexDirection="column"
            justifyContent={entryJustifyContent}
            alignItems={entryAlignItems}
            key={index}
            style={{ width: `${divSize}px`, margin: divMargin }}
          >
            <TypeComponent
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
            <ErrorMessage>{`Undefined 'type' for FormComponent ID: ${entryId}`}</ErrorMessage>
          </Flex>
        );
      }
    } else {
      return null;
    }
  };

  export default FormEntry;