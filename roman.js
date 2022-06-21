function convertToRoman(num) {
    const  romanArr = [
       ["M",1000],
       [ "CM",900],
       [ "D", 500],
       [ "CD", 400],
        ["C",100],
        ["XC", 90],
        ["L" ,50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];


  
    let accumulator = '';

    // for(i=0 ; i<romanArr.length; i++){
    //     const romanValue = romanArr[i][0]
    //     const arabicEquiv =romanArr[i][1]

    // while (arabicEquiv <= num) {
    //     num -= arabicEquiv;
    //     accumulator += romanValue;

    //     console.log("num === ",num)
    //     console.log("roman value === ",romanValue)
    //     console.log("accumulator === ",accumulator)
    //   }
    // }
   romanArr.forEach(([romanValue,arabicEquiv])=>{
  
        while (arabicEquiv <= num) {
        num -= arabicEquiv;
        accumulator += romanValue;
       }

  })



    return accumulator;
  }
  

  console.log(`Roman for number 312`,convertToRoman(44));


// for(i=0;i<10;i++){
// console.log(`Roman for number ${i}`,convertToRoman(i));
// }

// for(i=10;i<100;i+=10){
// console.log(`Roman for number ${i}`,convertToRoman(i));
// }
  