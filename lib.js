// module.exports.absolute = function (num) {
//   if (num < 0) return -num;
//   if (num > 0) return num;
//   return 0;
// };

//str
// module.exports.str = function (st) {
//   return `welcome ${st}`;
// };

//arr

// module.exports.arr = function () {
//   return ['USD', 'EUR', 'AUD'];
// };

//Obj

// module.exports.obj = function (prodId) {
//   return { id: prodId, price: 10,cat:'q' };
// };

//function with expection
// module.exports.objEx = function (username) {
//   if (!username) throw new Error('error username must');
//   return { id: Math.floor(Math.random() * 10), username: username };
// };


//fizz buzz
module.exports.fizzBuzz=function(input){
    if(typeof input!=='number'){
         throw new Error('Not anumber')
    }
    if((input %3 ===0)&&(input %5===0)){
        return 'FizzBuzz'
    }
    if((input %3 ===0)){
        return 'fuzz'
    }
    if((input %5 ===0)){
        return 'buzz'
    }
return input 
}