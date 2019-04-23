const math = require('../src/math');

// test('Hello World',()=>{

// })

// test('This test should fail',()=>{
//     throw new Error('Oops! an error detected');
// })

/*
test('Should calculate total amount along with tip',()=>{
   const total= math.calculateTip(10,0.3);
    expect(total).toBe(13);
//    if(total !== 13)
//    throw new Error('Total tip should be 13, got '+total);

});

test('Should calculate total amount with default tip percentage',()=>{
    const total=math.calculateTip(10);
    expect(total).toBe(12.5);
})
*/

// test('Should calculate temperature from celsius to farenhite',()=>{
//     const celsiusTemp=math.celsiusToFahrenheit(38);
//      expect(celsiusTemp).toBe(101.4);
//     //  We can write only one expect().toBe() in test
//     // expect(celsiusTemp).toBeLessThan(101);
// });

// test('Should calculate temperature from farenhite to Celsius',()=>{
//     // Human body temperature is 38 C
//     // expect(math.fahrenheitToCelsius(100.4)).toBe(38);
//     // Let's use expect(). not.toBe()
//     // The below will surely satisfy following conditions
//     expect(math.fahrenheitToCelsius(100.4)).not.toBe(39);
// });

// test('async code testing', (done) => {
//     // Below even the the result is wrong, it'll print test successful
//     // To avoid it, we need to add parameter in => function above
//     // And call it after expect
//     setTimeout(() => {
//         expect(1).toBe(2);
//         done();
//     }, 2000);

// });

test('Should add two numbers', (done) => {
    math.add(5, 7).then((sum) => {
        expect(sum).toBe(12)
        done();
    })
})

test('Should add two numbers',async()=>{
    const sum=await math.add(15,17);
    expect(sum).toBe(32);
});