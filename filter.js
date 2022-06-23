function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 23, 45, 32, 54, 69, 2, 8];

console.log(filtraPares(meuArray));