//How to export to share a code block

// method 1:
export const add = (x, y) => {
    return x + y;
}

// method 2:
const mul = (x, y) => {
    return x * y;
}
export { mul };

// For muliptle exports:
const sub = (x, y) => {
    return x - y;
}
const div = (x, y) => {
    return x / y;
}

export { sub, div };


