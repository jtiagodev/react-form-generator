import React from "react";
import { Flex } from "../Form/Grid";
import ErrorDisplay from "./ErrorDisplay";

const FormEntry = (props) => {
      const { typesMap, inputSettings } = props;

      const InputTypeComponent = typesMap[inputSettings.inputType].render;

      return (
        <section>
          <Flex
            flexDirection={inputSettings.labelPosition}
            justifyContent={inputSettings.alignX}
            alignItems={inputSettings.alignY}
            style={{ width: "300px" }}
          >
            {inputSettings.showLabel && (
              <Flex style={{ marginRight: inputSettings.labelMargin }}>
                <label style={inputSettings.labelStyle}>
                  {inputSettings.labelText}
                </label>
              </Flex>
            )}
            {typesMap[inputSettings.inputType].name !==
              "MuiAutoComplete" && (
                <>
              <InputTypeComponent
                inputFormOptions={inputSettings}
                name={inputSettings.inputLabel}
              />
              <ErrorDisplay name={inputSettings.inputLabel} showValidation={inputSettings.showValidation} />
              </>
            )}
          </Flex>
        </section>
      );

};

export default FormEntry;
