import * as R from 'ramda';
import { formOptionDefaultValues } from "./defaults";

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

export const findAllFieldsWhereInputIsADepedency = (inputLabel, formOptions = []) => {
    let result = [];
    formOptions.forEach((inputOption) => {
        if (inputOption.disableWhileNotFilled.includes(inputLabel)) {
            result.push(inputOption.inputLabel)
        }
    });

    return result;
}

export const checkIfAllDisableDependenciesAreSatisfied = (disableWhileNotFilled, getValues) => {
    let dirtyCounter = 0;

    disableWhileNotFilled.forEach((dependency) => {
        if (getValues(dependency) && getValues(dependency) !== "") {
            dirtyCounter++;
        }
    });

   
    if (dirtyCounter === disableWhileNotFilled.length) {
        return true;
    } else {
        return false;
    }
};

export const computeInputsForSection = (section, formOptions) => {
    const formOptionsWithDefaults = formOptions.map((option, i) => {
            // Merges Default Values with Input Configurations provided
            return R.merge(
                formOptionDefaultValues,
                option
              );
    });
    const res = R.filter(option => option.section === section, formOptionsWithDefaults);
    return res;
};


export const computeArray = (count) => {
    const res = [];
    for (var i = 0; i < count; i++) {
      res.push(i);
    }
    return res;
  };