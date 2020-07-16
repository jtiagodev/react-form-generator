import React, { useState } from 'react';
import { Flex } from './../Form/Grid';
import FormGeneratorRenderInputSimple from "./../FormGenerator/FormGeneratorRenderInputSimple";
import { computeInputsForSection } from "./../utils/form";

const FormGeneratorSection = (props) => {
    const { sectionSettings, formOptions, rowNum, colNum } = props;
    const [sectionInputs, setSectionInputs] = useState(computeInputsForSection(sectionSettings.id, formOptions));

    console.log(sectionInputs);

    return (
      
        <Flex flexDirection="column" style={{ width: '100%', height: '100%' }}>
                <Flex flexDirection="column">
                {sectionSettings.displayLabel && (
                <>
                <span>{sectionSettings.label}</span>
                <span>----------------------</span>
                </>
                )}
</Flex>
<Flex flexDirection="column">
                {sectionInputs.map((sectionInput, i) => (

                            <FormGeneratorRenderInputSimple inputSettings={sectionInput} {...props} />
                       
                ))}
                
                </Flex>
            
        </Flex>
   
    );
};

export default FormGeneratorSection;