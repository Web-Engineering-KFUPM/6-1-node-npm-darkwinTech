export function add(numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}

export function subtract(numbers) {
    if (numbers.length === 0) return 0;
    return numbers.slice(1).reduce((acc, n) => acc - n, numbers[0]);
}

export function multiply(numbers) {
    if (numbers.length === 0) return 0;
    return numbers.reduce((acc, n) => acc * n, 1);

}

export function divide(numbers) {
    if (numbers.length === 0) return NaN;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === 0) throw new Error("Division by zero");
    }
    return numbers.slice(1).reduce((acc, n) => acc / n, numbers[0]);
}

