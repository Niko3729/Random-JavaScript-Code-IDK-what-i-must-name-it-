function sum(...karep) {
    return karep;
}

let a = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
for (let index in a) {
    console.log(`Index : ${index}`);
    let hasil = a.reduce((acc, curr) => {
        return acc + curr * index;
    }, 0);
    console.log(`Loop Total : ${hasil}`)
}