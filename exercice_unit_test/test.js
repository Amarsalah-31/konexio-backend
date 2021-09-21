// const add = require("./add.js");
const isEven = require("./isEven.js");
const isEvenBonus = require("./isEvenBonus.js");
const formatDate = require("./fromatDate.js");
const formatDateBonus = require("./formatDateBonus.js");
// isEven
test('if it number is pair === true', () => {
    const result = isEven(1);
    expect(result).toBeTrue();
    
});
test('if it number is impair === false', () => {
    const result = isEven(2);
    expect(result).toBeFalse();
});

//isEven bonus
 test('if it element contais only number', () => {
     const result = "12";
     expect(result).toMatch(/^[0-9]*$/);
     
 })
 
//  formatDate
test('if it date au format yyyy-mm-dd', () => {
    const formatDate = ("2020/05/30")
    expect(result).toMatch(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i)
    
});

// formatDate Bonus

test('if it parmamter in String is date return null', () => {
    const result = formatDateBonus("12/12/2020");
    expect(result).not.toBeNull();
});



