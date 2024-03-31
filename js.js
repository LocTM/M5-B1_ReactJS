function test(x = 'hello'){
    console.log(x);
}
test('abc');
test('LocTranMinh');
test('Tran Minh Loc');

function test2(x = "default"){
    console.log(x);
}
test2("Test lan 2");

//arrow function
let test3 = (x = 3) => {
    console.log(x);
}
test3(6);

let test4 = (b = "six") => {
    console.log(b);
}
test4("seven");