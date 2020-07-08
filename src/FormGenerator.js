import React, { createRef, useRef, useEffect, useState } from 'react';
import { Flex } from './Grid';
import PropTypes from 'prop-types';
import Button from "./Form/Button";
import TextInput from "./Form/TextInput";
import testFormOptions from "./utils/testFormOptions";
import { useForm, useWatch } from "react-hook-form";
import { Paper, FormGroup, TextField } from '@material-ui/core'
import { computeDependencies, computeFormValues } from "./utils/misc";


const defaultTypesMap = {
    button: Button,
    textInput: TextInput
};


const FormGenerator = (props) => {


    const { typesMap = defaultTypesMap, colSize = 200, rowNum = 1, colNum = 3, formOptions = testFormOptions, margin = '5px' } = props;
    const [dependenciesMapping, setDependenciesMapping] = useState(computeDependencies(formOptions));
    // const [formValues, setFormValues] = useState(computeFormValues(formOptions));
    const { watch, handleSubmit, register, errors, control, setValue } = useForm();
    // const { dirty, isSubmitting, touched, submitCount } = formState;
    // const fieldsWatch = watch();

    const handleChange = (event) => {
        // setFormValues({...formValues, [event.target.id]: event.target.value });
        if (dependenciesMapping[event.target.id]) {
            const fieldsToResetFromDependency = dependenciesMapping[event.target.id];
            fieldsToResetFromDependency.forEach((fieldName) => { setValue(fieldName, "Resetted"); handleChange({ target: { id: fieldName }})});
        }
       
    };




    const onSubmit = values => console.log(values);


    const rows = [];
    const cols = [];
    for(var i = 0; i < rowNum; i++){
        rows.push(i);
    }
    for(var i = 0; i < colNum; i++){
        cols.push(i);
    }

  

    const FormEntry = ({ row, col }) => {

        // Calculate which FormEntry to be rendered
        let index;
        if (row === 0) {
            index = row + col;
        } else {
            index = (row * colNum) + col;
        }
        if (formOptions[index]) {

            const entrySize = formOptions[index].cols || 1;
            const divSize = colSize * entrySize;
            const divMargin = formOptions[index].margin || margin;
            const entryType = formOptions[index].inputType;
            const entryId = formOptions[index].id || index + 1;
            const entryInputProps = formOptions[index].inputProps || {};
            const entryJustifyContent = formOptions[index].alignX || 'center';
            const entryAlignItems = formOptions[index].alignY || 'center';
            const entryValidation = formOptions[index].validation || { required: "Required" };
            const entryInputLabel = formOptions[index].inputLabel; //|| uuid()
            const entryDependencies = formOptions[index].dependencies || [];
            
           


            if (typesMap[entryType]) {
                // const ref = createRef();
                const TypeComponent = typesMap[entryType];
                return (
                               <Flex flexDirection="column" justifyContent={entryJustifyContent} alignItems={entryAlignItems} key={index} style={{ width: `${divSize}px`, margin: divMargin }}>
                                <TypeComponent onChange={handleChange} inputRef={register({ ...entryValidation })} inputLabel={entryInputLabel} {...entryInputProps} />
                                {errors[entryInputLabel] && errors[entryInputLabel].message}
                               </Flex>
                );
            } else {
                return (
                    <Flex justifyContent={entryJustifyContent} alignItems={entryAlignItems} key={index} style={{ width: `${divSize}px`, margin: divMargin }}>
                                    <span style={{ fontSize: '10px', color: 'red' }}>{`Undefined 'type' for FormComponent ID: ${entryId}`}</span>
                    </Flex>
                    
                )
            }

        } else {
            return null;
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

          <Flex flexDirection="column" >
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


export default FormGenerator;