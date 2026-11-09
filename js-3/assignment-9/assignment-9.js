function even(number){
    const result = [];
    for (let i = 0; i < number.length; i++){
        if (number[i] % 2 === 0){
            result.push(number[i])
        }
    }
    return result
}

const original = [2,7,4];
const evens = even(original)

console.log(original);
console.log(evens);