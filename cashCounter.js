const moneyMap = {
  'ONE HUNDRED': 100,
  TWENTY: 20,
  TEN: 10,
  FIVE: 5,
  ONE: 1,
  QUARTER: 0.25,
  DIME: 0.1,
  NICKEL: 0.05,
  PENNY: 0.01,
};

function checkCashRegister(price, cash, cid) {

  let totalcid=0;

const sanitizevalues = (amt) => Math.round(amt * 100) / 100;
const cashInDrawaer =
  (_cid) =>_cid.reduce((total, [unit, amt]) => total + amt, 0);
let changeOwed=sanitizevalues(cash-price);

const change=[]

const toTens=(num)=>{
return tensOwed =parseInt(num.toString().split(""))*10}

  
cid.map(([unit,amt])=>{totalcid+=amt;})



if (totalcid<changeOwed){
console.log("INSUFFICIENT FUNDS")
return {status: "INSUFFICIENT_FUNDS", change: []}
}

if (totalcid === changeOwed){
//    const one = [...cid].filter((cashArr)=>cashArr[1]===changeOwed)
console.log("break even ,zero balance")
return {
status: "CLOSED",
change: [...cid]}
}
    

const cidsum = sanitizevalues(totalcid);
const forkedcid=[...cid].reverse()

  forkedcid.forEach(([unit, amount]) => {
    const unitValue = moneyMap[unit];

    if (unitValue > changeOwed) {
      return;
    }

    let unitsTaken = 0;

    while (changeOwed >= unitValue && amount > 0) {
      changeOwed = sanitizevalues(changeOwed - unitValue);
      amount = sanitizevalues(amount - unitValue);
      unitsTaken++;
    }

    change.push([unit, unitsTaken * unitValue]);
    
  });






  

}
  


  console.log(
    '\n--------First test--------\n',
    checkCashRegister(19.5, 20, [
      ['PENNY', 1.01],
      ['NICKEL', 2.05],
      ['DIME', 3.1],
      ['QUARTER', 4.25],
      ['ONE', 90],
      ['FIVE', 55],
      ['TEN', 20],
      ['TWENTY', 60],
      ['ONE HUNDRED', 100],
    ])
    )
    // expected{
    //   status: 'OPEN',
    //   change: [['QUARTER', 0.5]],
    // },
  

    '\n--------Second test--------\n',
    checkCashRegister(3.26, 100, [
      ['PENNY', 1.01],
      ['NICKEL', 2.05],
      ['DIME', 3.1],
      ['QUARTER', 4.25],
      ['ONE', 90],
      ['FIVE', 55],
      ['TEN', 20],
      ['TWENTY', 60],
      ['ONE HUNDRED', 100],
    ])
    // {
    //   status: 'OPEN',
    //   change: [
    //     ['TWENTY', 60],
    //     ['TEN', 20],
    //     ['FIVE', 15],
    //     ['ONE', 1],
    //     ['QUARTER', 0.5],
    //     ['DIME', 0.2],
    //     ['PENNY', 0.04],
    //   ],
    // },
  
//     '\n--------Third test--------\n',
//     checkCashRegister(19.5, 20, [
//       ['PENNY', 0.01],
//       ['NICKEL', 0],
//       ['DIME', 0],
//       ['QUARTER', 0],
//       ['ONE', 0],
//       ['FIVE', 0],
//       ['TEN', 0],
//       ['TWENTY', 0],
//       ['ONE HUNDRED', 0],
//     ]),
//     { status: 'INSUFFICIENT_FUNDS', change: [] },
  
//     '\n--------Fourth test--------\n',
//     checkCashRegister(19.5, 20, [
//       ['PENNY', 0.01],
//       ['NICKEL', 0],
//       ['DIME', 0],
//       ['QUARTER', 0],
//       ['ONE', 1],
//       ['FIVE', 0],
//       ['TEN', 0],
//       ['TWENTY', 0],
//       ['ONE HUNDRED', 0],
//     ]),
//     { status: 'INSUFFICIENT_FUNDS', change: [] },
  
//     '\n--------Fifth test--------\n',
//     checkCashRegister(19.5, 20, [
//       ['PENNY', 0.5],
//       ['NICKEL', 0],
//       ['DIME', 0],
//       ['QUARTER', 0],
//       ['ONE', 0],
//       ['FIVE', 0],
//       ['TEN', 0],
//       ['TWENTY', 0],
//       ['ONE HUNDRED', 0],
//     ]),
//     {
//       status: 'CLOSED',
//       change: [
//         ['PENNY', 0.5],
//         ['NICKEL', 0],
//         ['DIME', 0],
//         ['QUARTER', 0],
//         ['ONE', 0],
//         ['FIVE', 0],
//         ['TEN', 0],
//         ['TWENTY', 0],
//         ['ONE HUNDRED', 0],
//       ],
//     }
//   );
  
