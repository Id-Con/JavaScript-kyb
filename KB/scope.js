'use strict'

let foo = () => {
    console.log('a');
}

function bar() {
    let foo = () => {
        console.log('b');
    }
    foo();
}

bar();
