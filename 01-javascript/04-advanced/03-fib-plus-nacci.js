function fib() {
    let prev = 0;
    let curr = 1;
   
    function nacci() {
        const temp = prev;
        prev = curr;
        console.log(curr);
        curr = curr + temp;
    }
    return nacci
}
const fibCounter = fib();
fibCounter() 
fibCounter() 
fibCounter() 
fibCounter() 
fibCounter() 
fibCounter() 