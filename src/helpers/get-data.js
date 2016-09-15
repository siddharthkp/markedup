let getData = (data, variable) => {
    if (!variable) return data;
    let variableParts = variable.split('.');
    let value = data;
    for (let part of variableParts) {
        value = value[part];
    }
    return value;
};

module.exports = getData;
