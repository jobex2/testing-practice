const analyzeArray = (array) => {
    let output = {};
    output['length'] = array.length;
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;
    let avg = 0;
    array.forEach(number => {
        max = Math.max(number, max);
        min = Math.min(number, min);
        avg += number;
    });

    output['average'] = avg/array.length;
    output['min'] = min;
    output['max'] = max;
    return output;
};

export default analyzeArray;