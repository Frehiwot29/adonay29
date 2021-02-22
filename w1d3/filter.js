let age = [1, 2, 3, 4, 5, 6, 7];
let num = [];
for (let i = 0; i < age.length; i++) {
    if (age[i] > 4) {
        num.push(age[i]);
    }
}
console.log(num);