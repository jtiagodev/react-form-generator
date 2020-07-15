import React, { useContext, useState } from "react";
import { Flex } from "../Form/Grid";
import FormGeneratorRenderInput from "./FormGeneratorRenderInput";
import MuiButton from "./../Form/MuiButton";
import MuiAutoComplete from "./../Form/MuiAutoComplete";
import FormContext from "./context";
import { useWhyDidYouUpdate } from "./../utils/react";

const FormGeneratorRender = (props) => {
  const {
    typesMap,
    colSize,
    rowNum,
    colNum,
    formOptions,
    margin,
    enableFooter,
    enableFooterButtons,
    readOnlyMode,
    styleFormWrapper,
    styleFormBody,
    styleFormFooter,
    children,
    handleSubmit,
  } = props;

  const computeArray = (count) => {
    const res = [];
    for (var i = 0; i < count; i++) {
      res.push(i);
    }
    return res;
  };

  // Aux Row and Cols for Cell Builder with .map
  const [rows, setRows] = useState(computeArray(rowNum));
  const [cols, setCols] = useState(computeArray(colNum));
  const onSubmitHandler = (data) => alert(JSON.stringify(data));

  useWhyDidYouUpdate("FormGeneratorRender", props);

  return (
    <Flex style={styleFormWrapper}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Flex style={styleFormBody} flexDirection="column">
          {rows.map((row, i) => (
            <Flex flexWrap="wrap" flexDirection="row" key={i}>
              {cols.map((col, j) => (
                <FormGeneratorRenderInput row={i} col={j} {...props} />
              ))}
            </Flex>
          ))}
        </Flex>
        {!enableFooter && <input style={{ display: "none" }} type="submit" />}
        {enableFooter && (
          <Flex
            style={styleFormFooter}
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            {enableFooterButtons && (
              <>
                <MuiButton
                  onClick={handleSubmit(onSubmitHandler)}
                  text="Submit"
                />
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
