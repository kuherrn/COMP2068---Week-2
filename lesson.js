function parent() {
    let message = 'Hello World!'
    function innerfunc() {
        console.log(message);
    }
    return innerfunc
}

/*
let child = parent();
child();
*/

function counter() {
    let counter = 1;
    function child() {
        console.log(counter);
        counter++;
    }
    
    return child;
}

let child2 = counter();

child2()
child2()