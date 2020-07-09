import React from 'react';
import { Flex } from "./../Grid";
import FormEntry from "./FormEntry";

const FormGeneratorRender = (props) => {
    const { onSubmit, rows, cols } = props;

   return (
    <form onSubmit={onSubmit}>
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
   ) 
};

export default FormGeneratorRender;