

console.log('Inicio de programa');

setTimeout( () => {
    console.log('Primer Timeout');
}, 3 );


setTimeout( () => {
    console.log('Segundo Timeout');
}, 1 );


setTimeout( () => {
    console.log('Tercer Timeout');
}, 0 );


console.log('Fin de programa');