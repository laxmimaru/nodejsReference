function  greet(name){
    console.log(`Hello ${name}`)
}

function HigherOrderFunction(callback){
    const name = 'kyle';
    callback(name);
}

HigherOrderFunction(greet);