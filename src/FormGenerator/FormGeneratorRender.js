import React from "react";
import { Flex } from "../Form/Grid";
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
    styleFormWrapper,
    styleFormBody,
    styleFormFooter
  } = props;

  return (
    <Flex style={styleFormWrapper}>
    <form onSubmit={onSubmit}>
      <Flex style={styleFormBody} flexDirection="column">
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
        <Flex style={styleFormFooter} flexDirection="row" alignItems="center" justifyContent="flex-end">
          {enableFooterButtons && (
            <>
              <MuiButton onClick={onSubmit} text="Submit" />
              <MuiButton onClick={() => onReset()} text="Clear" />
            </>
          )}
        </Flex>
      )}
    </form>
    </Flex>
  );
};

export default FormGeneratorRender;
