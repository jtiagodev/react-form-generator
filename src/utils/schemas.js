import Joi from "@hapi/joi";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export const MuiAutoCompletePropsSchema = Joi.object().keys({});
export const MuiButtonPropsSchema = Joi.object().keys({});
export const MuiCheckboxPropsSchema = Joi.object().keys({});
export const MuiDatePickerPropsSchema = Joi.object().keys({});
export const MuiRadioGroupPropsSchema = Joi.object().keys({});
export const MuiSliderPropsSchema = Joi.object().keys({});
export const MuiSwitchPropsSchema = Joi.object().keys({});
export const MuiTextInputPropsSchema = Joi.object().keys({
    labelDisplay: Joi.bool(),
    labelText: Joi.string()
});
export const MuiTimePickerTextInputPropsSchema = Joi.object().keys({});
export const ReactDatePickerPropsSchema = Joi.object().keys({});
export const ReactNumberFormatPropsSchema = Joi.object().keys({});

export const MuiSelectPropsSchema = Joi.object().keys({
    // Styles to be passed down to the MUI Component
    muiStyles: Joi.any(),
    // Options to populate Select
    options: Joi.array().items(Joi.object().keys({
        label: Joi.string().required(),
        value: Joi.alternatives(Joi.string(),Joi.number()).required()
    }))
});

// TODO: Test this
export const InputRegistrySchema = Joi.object().keys({
    // Name Identifier
    id: Joi.object().valid("muiButton", "muiInputText"),
    // Schema for the specific Input Props (that extend input functionality further)
    inputPropsSchema: Joi.object(),
    // Component to Render
    // TODO: Joi validation for React.Comp
    render: Joi.any()
});

export const ValidationSchema = Joi.object().keys({
    // Validating functions
    validate: Joi.alternatives(Joi.func())
});

export const SectionSchema = Joi.object({
    // TODO: Add more customization such as label component
    // ID for the Section Schema, where Inputs will be added to (defaults to "main")
    id: Joi.string(),
    // Label for the Title
    label: Joi.string(),
    // Display Label
    displayLabel: Joi.bool(),
    // Display Separator above
    displaySeparator: Joi.bool()
});

export const InputOptionsSchema = Joi.object({
    // Label to Identify Value Field within Form
    inputLabel: Joi.string()
        .alphanum()
        .min(3)
        .max(100)
        .default(uuidv4())
        .required(),
    // Input type to render the Component (must be mapped in typesMapper)
    inputType: Joi.string().default("button").required(),
    // Disables the Input until the following Input IDs are filled/touched
    disableWhileNotFilled: Joi.array().items(Joi.string()).required(),
    // TODO: Change to resetWith
    // List of inputLabel dependencies, which are resetted to "resetValue" when value of the input is changed
    dependencies: Joi.array().items(Joi.string()).required(),
    // Default Value for the input
    defaultValue: Joi.alternatives(Joi.string().allow('',null),Joi.bool(),Joi.number()).required(),
    // Value to reset to, as a dependency of another input that changed value
    resetValue: Joi.alternatives(Joi.string().allow('', null),Joi.bool(),Joi.number()).required(),
    // Props to spread in the underlying Input Component
    inputProps: Joi.object(),
    // Margin for the cell that spawns the Input
    margin: Joi.string(),
    // Display Error Validation Messages
    showValidation: Joi.boolean(),
    // Validation options
    validation: ValidationSchema,
    // Number of cells to spawn the Input
    cols: Joi.number(),
    // Should display label on the input form
    labelDisplay: Joi.bool(),
    // Position for the Input Label (either Left or Top)
    labelPosition: Joi.string().valid("row","column"),
    // Text to be applied to the Input Label
    labelText: Joi.string(),
    // Margin Right to be applied to the Input Label
    labelMarginRight: Joi.string(),
    // Style to be applied to the Input Label
    labelStyle: Joi.object(),
    // Ref Data to be fetched on Input load
    useRefDataLoader: Joi.bool(),
    refDataMethod: Joi.string(),
    refDataURL: Joi.string(),
    refDataPayload: Joi.object(),
    refDataLensPath: Joi.array().items(Joi.string()),
    // Styles to be spread to the Flex wrapping the Input Form
    entryStyle: Joi.object(),
    // If the component should be readOnly and assume read-only styles
    readOnly: Joi.bool(),
    // Styles to be applied to the Input Component when it's in read only mode
    readOnlyStyles: Joi.object(),
    // Which section the Input should be added to
    section: Joi.string(),
    // The amount of grid cols to spawn the input in (ranges from 1-12)
    gridCols: Joi.number()
});

export const formGeneratorPropTypesSchema = {
    /**
     * Maximum Width of the Form Container
     */
    maxWidth: PropTypes.string,
    /**
     * Maximum Height of the Form Container
     */
    maxHeight: PropTypes.string,
    /**
     * (Advanced usage) Mapping the supported types of Form Inputs provided to the Form Generator
     */
    typesMap: PropTypes.object,
    /**
     * Size for a column (in pixels)
     */
    colSize: PropTypes.number,
    /**
     * Amount of Rows on the form
     */
    rowNum: PropTypes.number,
    /**
     * Amount fo Columns on the form
     */
    colNum: PropTypes.number,
    /**
     * Form elements definition
     */
    formOptions: PropTypes.array,
    /**
     * Default magins applied to each cell
     */
    margin: PropTypes.number,
    /**
     * Enable Form Footer
     */
    enableFooter: PropTypes.bool,
    /**
     * Enable Default Footer Buttons
     */
    enableFooterButtons: PropTypes.bool,
    /**
     * Styles to be spread to the Form Wrapper Flex
     */
    styleFormWrapper: PropTypes.object,
    /**
     * Styles to be spread to the Form Body Flex
     */
    styleFormBody: PropTypes.object,
    /**
     * Styles to be spread to the Form Footer Flex
     */
    styleFormFooter: PropTypes.object,
    /**
     * Override all Input Form to behave as Read Only (eg. when you want to use the form as a info table)
     */
    readOnlyMode: PropTypes.bool,
    /**
     * Sections
     */
    sections: PropTypes.array,
    /**
     * If the Form should use sections or ignore them and spawn all Inputs in the Array order through the col/rows defined
     */
    useSections: PropTypes.bool
  };