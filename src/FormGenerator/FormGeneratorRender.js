import React, { useContext } from "react";
import { Flex } from "../Form/Grid";
import FormEntry from "./FormEntry";
import MuiButton from "./../Form/MuiButton";
import MuiAutoComplete from "./../Form/MuiAutoComplete";
import FormContext from "./context";


const FormGeneratorRender = (props) => {

  const formCtx = useContext(FormContext);


  return (
    <Flex style={formCtx.styleFormWrapper}>
    <form onSubmit={formCtx.handleSubmit(formCtx.onSubmit)}>

      <Flex style={formCtx.styleFormBody} flexDirection="column">
        {formCtx.rows.map((row, i) => (
          <Flex flexWrap="wrap" flexDirection="row" key={i}>
            {formCtx.cols.map((col, j) => (
              <FormEntry row={i} col={j} />
            ))}
          </Flex>
        ))}
      </Flex>
      <input style={{ display: "none" }} type="submit" />
      {formCtx.enableFooter && (
        <Flex style={formCtx.styleFormFooter} flexDirection="row" alignItems="center" justifyContent="flex-end">
          {formCtx.enableFooterButtons && (
            <>
              <MuiButton onClick={() => alert("SUBMIT")} text="Submit" />
              <MuiButton onClick={() => alert("RESET")} text="Clear" />
            </>
          )}
        </Flex>
      )}
    </form>
    </Flex>
  );
};

export default FormGeneratorRender;

FormGeneratorRender.whyDidYouRender = true;

