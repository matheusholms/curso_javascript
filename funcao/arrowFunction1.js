/*let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}
*/
dobro = (a) => 2 * a; // return implicito

console.log(dobro(2));

ola = () => `Olá ${dobro(2)}`;
console.log(ola())
