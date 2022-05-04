const reverseString = (string) => {
    let split = string.split("");

    let reverseArray = split.reverse();

    let output = reverseArray.join("");

    return output;
};

export default reverseString;