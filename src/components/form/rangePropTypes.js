export function isNumber(value) {
    return typeof value === "number";
}
export function isObject(value) {
    return value !== null && typeof value === "object";
}
export function rangePropType(props) {
    const { maxValue, minValue } = props;

    if (!isNumber(minValue) || !isNumber(maxValue)) {
        return new Error('"minValue" and "maxValue" must be a number');
    }

    if (minValue >= maxValue) {
        return new Error('"minValue" must be smaller than "maxValue"');
    }
}

export function valuePropType(props, propName) {
    const { maxValue, minValue } = props;
    const value = props[propName];

    if (
        !isNumber(value) &&
        (!isObject(value) || !isNumber(value.min) || !isNumber(value.max))
    ) {
        return new Error(`"${propName}" must be a number or a range object`);
    }

    if (isNumber(value) && (value < minValue || value > maxValue)) {
        return new Error(
            `"${propName}" must be in between "minValue" and "maxValue"`
        );
    }

    if (
        isObject(value) &&
        (value.min < minValue ||
            value.min > maxValue ||
            value.max < minValue ||
            value.max > maxValue)
    ) {
        return new Error(
            `"${propName}" must be in between "minValue" and "maxValue"`
        );
    }
}
