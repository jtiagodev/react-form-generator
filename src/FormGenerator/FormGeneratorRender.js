import React, { useContext, useState } from "react";
import { Flex } from "../Form/Grid";
import FormGeneratorRenderInput from "./FormGeneratorRenderInput";
import MuiButton from "./../Form/MuiButton";
import MuiAutoComplete from "./../Form/MuiAutoComplete";
import FormContext from "./context";
import { useWhyDidYouUpdate } from "./../utils/react";
import FormGeneratorSection from "./FormGeneratorSection";
import { computeArray } from "./../utils/form";

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
    sections,
    useSections
  } = props;

  // Aux Row and Cols for Cell Builder with .map
  const [rows, setRows] = useState(computeArray(rowNum));
  const [cols, setCols] = useState(computeArray(colNum));
  const onSubmitHandler = (data) => alert(JSON.stringify(data));

  useWhyDidYouUpdate("FormGeneratorRender", props);

  return (
    <Flex style={styleFormWrapper}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Flex style={styleFormBody} flexDirection="column">
          {useSections && sections.map((sectionSettings, i) => (
            <FormGeneratorSection {...props} sectionSettings={sectionSettings} />
          ))}
          {!useSections && rows.map((row, i) => (
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
