const rapid = (str) => {
    let aux = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u") {
            aux = aux + str[i]
        }
    } 
    return aux.toUpperCase();
};
// From this line up Do not change code below
let str = "John";
console.log(rapid(str));