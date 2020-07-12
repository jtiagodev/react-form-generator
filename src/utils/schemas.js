import Joi from "@hapi/joi";
import { v4 as uuidv4 } from 'uuid';


export const MuiSelectSchema = Joi.object().keys({
    // Options to populate Select
    options: Joi.array().items(Joi.object().keys({
        label: Joi.string().required(),
        value: Joi.alternatives(Joi.string(),Joi.number()).required()
    }))
});

export const ValidationSchema = Joi.object().keys({
    // Validating functions
    validate: Joi.alternatives(Joi.func())
});

export const InputOptionsSchema = Joi.object({
    // TODO: Add refData source, for populating onLoad
    // Identifier
    id: Joi.alternatives(Joi.string(), Joi.number())
        .required(),
    // Label to Identify Value Field within Form
    inputLabel: Joi.string()
        .alphanum()
        .min(3)
        .max(100)
        .default(uuidv4())
        .required(),
    // Input type to render the Component (must be mapped in typesMapper)
    inputType: Joi.string().default("button").required(),
    // TODO: Change to resetWith and add disableWith , rather with dependencies
    // List of inputLabel dependencies, which are resetted to "resetValue" when value of the input is changed
    dependencies: Joi.array().items(Joi.string()).required(),
    // Default Value for the input
    defaultValue: Joi.alternatives(Joi.string(),Joi.bool(),Joi.number()).required(),
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
    // Position for the Input Label (either Left or Top)
    labelPosition: Joi.string().valid("row","column"),
    // Text to be applied to the Input Label
    labelText: Joi.string(),
    // Margin Right to be applied to the Input Label
    labelMarginRight: Joi.string(),
    // Style to be applied to the Input Label
    labelStyle: Joi.object()
});
