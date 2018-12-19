function recfact(start, n) {
    let i;
    if (n <= 16) { 
        let result = start;
        for (let i = start + 1; i < start + n; i++) {
            result *= i;
        }
        return result;
    }
    i = n / 2;
    return recfact(start, i) * recfact(start + i, n - i);
}
 
function factorial(n){
    return recfact(1,n);
}

const arg = process.argv[2];
console.log(factorial(arg))