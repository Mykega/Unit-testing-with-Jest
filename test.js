test("One euro should be 1.206 dollars", function(){
   
    const { fromEuroToDollar } = require('./app.js')

   
    const dollars = fromEuroToDollar(3.5)

  
    const expected = 3.5 * 1.2; 
    
   
    expect(expected).toBe(dollars);
})

test("One dollar should be" , function(){
    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(5)

    const expected = 5 * 127.9;

    expect(expected).toBe(yen);
})

test("One yen should be 0.0068" , function(){
    const { fromYenToPound } = require('./app.js')

    const pound = fromYenToPound(2)

    const expected = 2 * 0.8;

    expect(expected).toBe(pound);
})