import React from "react";
import { Flex } from "./../Grid";
import FormEntry from "./FormEntry";
import MuiButton from "./../Form/MuiButton";

const FormGeneratorRender = (props) => {
  const {
    onSubmit,
    onReset,
    rows,
    cols,
    enableFooter,
    enableFooterButtons,
  } = props;

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
      <input style={{ display: "none" }} type="submit" />
      {enableFooter && (
        <Flex flexDirection="row" alignItems="center" justifyContent="flex-end">
          {enableFooterButtons && (
            <>
              <MuiButton onClick={onSubmit} text="Submit" />
              <MuiButton onClick={() => onReset()} text="Clear" />
            </>
          )}
        </Flex>
      )}
    </form>
  );
};

export default FormGeneratorRender;
