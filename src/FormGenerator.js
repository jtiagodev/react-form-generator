import React, { createRef, useRef, useEffect, useState } from "react";
import { Flex } from "./Grid";
import PropTypes from "prop-types";
import { testFormOptions, defaultTypesMap } from "./utils/defaults";
import { useForm, useWatch } from "react-hook-form";
import { Paper, FormGroup, TextField } from "@material-ui/core";
import { computeDependencies, computeFormValues } from "./utils/misc";
import { InputOptionsSchema } from "./utils/schemas";
import ErrorMessage from "./Form/ErrorMessage";
import { defaultProps } from 'recompose';


const FormGenerator = (props) => {
  const {
    typesMap,
    colSize,
    rowNum,
    colNum,
    formOptions,
    margin
  } = props;
  const [dependenciesMapping, setDependenciesMapping] = useState(
    computeDependencies(formOptions)
  );
  // const [formValues, setFormValues] = useState(computeFormValues(formOptions));
  const {
    watch,
    handleSubmit,
    register,
    errors,
    control,
    setValue,
  } = useForm();
  // const { dirty, isSubmitting, touched, submitCount } = formState;
  // const fieldsWatch = watch();

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

  const rows = [];
  const cols = [];
  for (var i = 0; i < rowNum; i++) {
    rows.push(i);
  }
  for (var i = 0; i < colNum; i++) {
    cols.push(i);
  }

  const FormEntry = ({ row, col }) => {
    
    // Calculate which FormEntry to be rendered
    let index;
    if (row === 0) {
      index = row + col;
    } else {
      index = row * colNum + col;
    }

  
    if (formOptions[index]) {
        const { value, error, warning } = InputOptionsSchema.validate(formOptions[index]);

        const entrySize = formOptions[index].cols || 1;
        const divSize = colSize * entrySize;
        const entryJustifyContent = formOptions[index].alignX || "center";
        const entryAlignItems = formOptions[index].alignY || "center";
        const divMargin = formOptions[index].margin || margin;
        const entryType = formOptions[index].inputType;
        const entryId = formOptions[index].id || index + 1;
        const entryInputProps = formOptions[index].inputProps || {};
        const entryValidation = formOptions[index].validation || {
          required: "Required",
        };
        const entryInputLabel = formOptions[index].inputLabel; //|| uuid()
        const entryDependencies = formOptions[index].dependencies || [];
        const entryShowValidation = formOptions[index].showValidation || true;
        
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
        )
    };

      


      if (typesMap[entryType]) {
        // const ref = createRef();
        const TypeComponent = typesMap[entryType];
        return (
          <Flex
            flexDirection="column"
            justifyContent={entryJustifyContent}
            alignItems={entryAlignItems}
            key={index}
            style={{ width: `${divSize}px`, margin: divMargin }}
          >
            <TypeComponent
              onChange={handleChange}
              inputRef={register({ ...entryValidation })}
              inputLabel={entryInputLabel}
              inputProps={entryInputProps}
              control={control}
            />
            {entryShowValidation &&
              errors[entryInputLabel] &&
              errors[entryInputLabel].message}
          </Flex>
        );
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDirection="column">
        {rows.map((row, i) => (
          <Flex flexWrap="wrap" flexDirection="row" key={i}>
            {cols.map((col, j) => (
              <FormEntry row={i} col={j} />
            ))}
          </Flex>
        ))}
      </Flex>
    </form>
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
    formOptions: testFormOptions
});

export default withDefaultProps(FormGenerator);
