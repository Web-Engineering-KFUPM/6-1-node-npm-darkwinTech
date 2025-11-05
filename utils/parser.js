import _ from "lodash";

export function parseNumbers(input) {
    const nums = _.map(input, (s) => Number(s));
    return _.filter(nums, Number.isFinite);
}

export function isValidOperation(operation) {
    const validOps = ["add", "subtract", "multiply", "divide"];
    return _.includes(validOps, operation);
}

