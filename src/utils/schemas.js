import Joi from "@hapi/joi";

export const ValidationSchema = Joi.object({
    // Validating functions
    validate: Joi.alternatives(Joi.func())
});

export const InputOptionsSchema = Joi.object({
    // Identifier
    id: Joi.alternatives(Joi.string(), Joi.number())
        .required(),
    // Label to Identify Value Field within Form
    inputLabel: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    // Input type to render the Component (must be mapped in typesMapper)
    inputType: Joi.string().required(),
    // List of inputLabel dependencies, which are resetted to "resetValue" when value of the input is changed
    dependencies: Joi.array().items(Joi.string()).required(),
    // Default Value for the input
    defaultValue: Joi.alternatives(Joi.string(),Joi.bool(),Joi.number()).required(),
    // Value to reset to, as a dependency of another input that changed value
    resetValue: Joi.alternatives(Joi.string().allow('', null),Joi.bool(),Joi.number()).required(),
    // InputProps for the underlying Input Component
    inputProps: Joi.object(),
    // Margin for the cell that spawns the Input
    margin: Joi.string(),
    // Display Error Validation Messages
    showValidation: Joi.boolean(),
    // Validation options
    validation: Joi.object(),
    // Number of cells to spawn the Input
    cols: Joi.number()
});
