import React from 'react';
import { Flex } from './Grid';
import PropTypes from 'prop-types';
import Button from "./Form/Button";
import TextInput from "./Form/TextInput";

const formEntries = [
    {
        id: 1,
        inputType: 'button',
        text: 'Send SMS'
    },
    {
        id: 2,
        inputType: 'textInput',
        dependencies: 1
    }
];

const defaultTypesMap = {
    button: Button,
    textInput: TextInput
};

const FormGenerator = (props) => {
    const { typesMap = defaultTypesMap, colSize = 200, rowNum = 3, colNum = 1, entries = formEntries, margin = '5px' } = props;
    const rows = [];
    const cols = [];
    for(var i = 0; i < rowNum; i++){
        rows.push(i);
    }
    for(var i = 0; i < colNum; i++){
        cols.push(i);
    }

    const renderTypeComponent = (type, entryId, entryInputProps) => {
        if (typesMap[type]) {
            const TypeComponent = typesMap[type];
            return <TypeComponent {...entryInputProps} />
        } else {
            return <span style={{ fontSize: '10px', color: 'red' }}>{`Undefined 'type' for FormComponent ID: ${entryId}`}</span>
        }
    };

    const FormEntry = ({ row, col }) => {
        // Calculate which FormEntry to be rendered
        let index;
        if (row === 0) {
            index = row + col;
        } else {
            index = (row * colNum) + col;
        }

        if (entries[index]) {
            const entrySize = entries[index].cols || 1;
            const divSize = colSize * entrySize;
            const divMargin = entries[index].margin || margin;
            const entryType = entries[index].inputType;
            const entryId = entries[index].id || index + 1;
            const entryInputProps = entries[index].inputProps || {};
            const entryJustifyContent = entries[index].alignX || 'center';
            const entryAlignItems = entries[index].alignY || 'center';

            return (
                <Flex justifyContent={entryJustifyContent} alignItems={entryAlignItems} key={index} style={{ width: `${divSize}px`, margin: divMargin }}>
                {renderTypeComponent(entryType, entryId, entryInputProps)}
                </Flex>
        
            );
        } else {
            return null;
        }
        
    };

    return (
        <>
          <Flex flexDirection="column" >
                {rows.map((row, i) => (
               <Flex flexWrap="wrap" flexDirection="row" key={i}>
                    {cols.map((col, j) => (
                        <FormEntry row={i} col={j} />
                    ))}
              </Flex>
                ))}
            </Flex>
        </>
    );
                    };


export default FormGenerator;