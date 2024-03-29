// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

const oddOrEven = (num) => {
    if (!num) {
        throw Error("Expected a non-empty value.");
    }
    if (num % 2 === 0) return `even`;
    if (num % 2 !== 0) return `odd`;
};

export default oddOrEven