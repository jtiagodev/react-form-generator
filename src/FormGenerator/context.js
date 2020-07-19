import React, { useRef, createRef } from 'react';

// INTERNAL CONTEXT
export const FormInternalContext = React.createContext();
export const FormInternalContextProvider = FormInternalContext.Provider;
export const FormInternalContextConsumer = FormInternalContext.Consumer;

// EXTERNAL CONTEXT
export const FormGlobalContext = React.createContext();
export const FormGlobalContextProvider = FormGlobalContext.Provider;
export const FormGlobalContextConsumer = FormGlobalContext.Consumer;
