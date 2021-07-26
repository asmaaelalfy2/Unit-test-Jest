const lib = require('../lib');

//num
// describe('absolute', () => {
//   it('numbers ', () => {
//     const res = lib.absolute(-12);
//     expect(res).toBe(12);
//   });
// });

//str
// describe('str test', () => {
//   it('str ', () => {
//     const res = lib.str('asmaa');
// expect(res).toMatch(/asmaa/);
//   });
// });

//arr
// describe('arr test', () => {
//   it('starrr ', () => {
//     const res = lib.arr();
//     expect(res).toEqual(expect.arrayContaining(['EUR', 'AUD', 'USD']));
//   });
// });

//obj
// describe('obj test', () => {
//   it('obj test ', () => {
//     const res = lib.obj(1);
//     //   expect(res).toEqual({id:1,price:10});
//     // expect(res).toMatchObject({id:1,price:10})
//     // expect(res).toHaveProperty('price',10)
//   });
// });

//function exception
// describe('func exception', () => {
//   it('worst senario ', () => {

//     // falsy values in js [undefined,null,0,false,nan,undefined]
//     const args = [undefined, NaN, '', 0, false, null];
//     args.forEach((a) => {
//       expect(() => {
//         lib.objEx(a).toThrow();
//       });
//     });
//   });

//   it('happy senario', () => {
//     expect(() => {
//       lib.objEx('alaa').toMatchObject({ username: 'alaa' });
//     });
//   });
// });

//fizz buzz test
// describe('fizz buzz  test', () => {
//   it('worest ', () => {
//     const args = [undefined,[], NaN, '', 0, false, null,' ',{ }];
//     args.forEach((a) => {
//       expect(() => {
//         lib.fizzBuzz(a).toThrow();
//       });
//     });



//   });
//   it('happy senario', () => {
//         expect(() => {
//           lib.fizzBuzz(15).toEqual('FizzBuzz');
//         });
//       });

//       it('happy senario', () => {
//         expect(() => {
//           lib.fizzBuzz(3).toEqual('fuzz');
//         });
//       });
//       it('happy senario', () => {
//         expect(() => {
//           lib.fizzBuzz(5).toEqual('buzz');
//         });
//       });
// });


