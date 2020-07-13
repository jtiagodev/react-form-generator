import * as R from 'ramda';

export const computeDependencies = (formOptions = []) => {
    let dependenciesMap = {};

    // keys reset values within array (onChange)
    formOptions.forEach((formOption) => {
        const formOptionDependencies = formOption.dependencies;
        const entryInputLabel = formOption.inputLabel;

        formOptionDependencies.forEach((dependency) => {
            let dependencies = [];
            let dependenciesResult = [];
            if (dependenciesMap[dependency]) {
                dependencies = [...dependenciesMap[dependency]];
            } 
            dependencies.push(entryInputLabel);
            const dependenciesSet = new Set(dependencies);
            dependenciesResult = Array.from(dependenciesSet);
            dependenciesMap = { ...dependenciesMap, [dependency]: dependenciesResult };
        })                
    });

    return dependenciesMap;
};

export const computeDefaultValues = (formOptions = []) => {
    let  values = {};

    // keys reset values within array (onChange)
    formOptions.forEach((formOption) => {
        const formOptionLabel = formOption.inputLabel;
        values[formOptionLabel] = formOption.default || "default";
    });

    return values;
};

export const computeDisableWhile = (formOptions = []) => {
    let disableWhileNotFilledMap = {};

    // keys reset values within array (onChange)
    formOptions.forEach((formOption) => {
        const formOptionDependencies = formOption.disableWhileNotFilled;
        const entryInputLabel = formOption.inputLabel;

        formOptionDependencies.forEach((disabledWhileNotFilledDependency) => {
            let disableWhileNotFilled = [];
            let disableWhileNotFilledResult = [];
            if (disableWhileNotFilledMap[disabledWhileNotFilledDependency]) {
                disableWhileNotFilled = [...disableWhileNotFilledMap[disabledWhileNotFilledDependency]];
            } 
            disableWhileNotFilled.push(entryInputLabel);
            const disableWhileNotFilledSet = new Set(disableWhileNotFilled);
            disableWhileNotFilledResult = Array.from(disableWhileNotFilledSet);
            disableWhileNotFilledMap = { ...disableWhileNotFilledMap, [disabledWhileNotFilledDependency]: disableWhileNotFilledResult };
        })                
    });

    return disableWhileNotFilledMap;
};

// Computes disabled items on startup
export const computeDisabledItems = (formOptions = []) => {
    let  values = [];

    formOptions.forEach((formOption) => {
        const disableWhileNotFilleDependencies = formOption.disableWhileNotFilled;
        if (disableWhileNotFilleDependencies.length > 0) { // found dependencies
            values.push(formOption.inputLabel);
        }
    });

    return values;
};

export const filterFormOptionsEntryByLabel = (formOptions = [], label) => {
    const filteredEntries = R.filter((entry) => entry.inputLabel.toLowerCase() === label.toLowerCase(), formOptions);
    return filteredEntries[0];
}