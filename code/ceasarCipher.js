let ceasar = (string, k) => {
    k = ((k % 26) + 26) % 26;
    let array = [];
    for (let char of string) {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90){
            code = code - 64;
            code = (code + k) % 26;
            let Cchar = String.fromCharCode(code + 64);
            array.push(Cchar);
        }
        else if (code >= 97 && code <= 122){
            code = code - 96;
            code = (code + k) % 26;
            let Cchar = String.fromCharCode(code + 96);
            array.push(Cchar);
        }
        else {
            array.push(char);
        }
    }
    let output = array.join("");
    return output;
};

export default ceasar;