
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

    console.log(dependenciesMap);
    return dependenciesMap;
};

export const computeDefaultValues = (formOptions = []) => {
    let  values = {};

    // keys reset values within array (onChange)
    formOptions.forEach((formOption) => {
        const formOptionLabel = formOption.inputLabel;
        values[formOptionLabel] = formOption.default || "default";
    });

    console.log(values);
    return values;
};
