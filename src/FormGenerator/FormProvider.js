import React, { useState } from 'react';
import { FormGlobalContextProvider } from "./context";

const FormProvider = (props) => {
    const [registeredForms, setRegisteredForms] = useState(undefined);

    return (
        <FormGlobalContextProvider 
        value={{
            registeredForms,
            setRegisteredForms
        }}
        >
            {props.children}
        </FormGlobalContextProvider>
    )
};

export default FormProvider;