
const moneyRef={
  "PENNY":["PENNY",0.01],
  "NICKEL":["NICKEL",0.05],
  "DIME":["DIME",0.1],
  "QUARTER":["QUATER",0.25],
  "ONE":["ONE",1],
  "FIVE":["FIVE",5],
  "TEN":["TEN",10],
  "TWENTY":["TWENTY",20],
  "ONE HUNDRED":["ONE HUNDRED",100]
}


const format = (amt) => Math.round(amt * 100) / 100;

const getcidSum =(_cid)=>{
  return _cid.reduce((accu,arr) => accu + arr[1], 0)
}


  
function checkCashRegister(price, cash, cid) {
console.log("total===",getcidSum(cid))

const totalcid = getcidSum(cid)

const changeArr = [];
let changeOwed = format(cash - price);



if (changeOwed > totalcid) {
  return {
    status: 'INSUFFICIENT_FUNDS',
    change: [],
  };
}

// exact change left id drawer, broke even
if (changeOwed === totalcid) {
  return {
    status: 'CLOSED',
    change: cid,
  };
}
const forkedcid=[...cid].reverse()


forkedcid.forEach((cashArr)=>{

const cash_unit = cashArr[0]
let cash_amount = cashArr[1]
const cash_value  = moneyRef[cash_unit][1]

console.log("cash arr === ",cash_unit,cash_amount)



let whilesum = 0

while(changeOwed >= cash_value && cash_amount > 0 ){

changeOwed = format(changeOwed - cash_value);
cash_amount = cash_amount - cash_value;
whilesum++;

}

if(whilesum>0){
  changeArr.push([cash_unit, whilesum * cash_value]);
}


})

if (changeOwed > 0) {
  return {
    status: 'INSUFFICIENT_FUNDS',
    change: [],
  };
}

return  {
  status: 'OPEN',
  change:changeArr,
};

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
  ]),
  {
    status: 'OPEN',
    change: [['QUARTER', 0.5]],
  })

  

console.log(
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
  ]),
  {
    status: 'OPEN',
    change: [
      ['TWENTY', 60],
      ['TEN', 20],
      ['FIVE', 15],
      ['ONE', 1],
      ['QUARTER', 0.5],
      ['DIME', 0.2],
      ['PENNY', 0.04],
    ],
  },
  )


  console.log(
  '\n--------Third test--------\n',
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ]),
  { status: 'INSUFFICIENT_FUNDS', change: [] },
  )


  console.log(
  '\n--------Fourth test--------\n',
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 1],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ]),
  { status: 'INSUFFICIENT_FUNDS', change: [] },
  )




  console.log(
  '\n--------Fifth test--------\n',
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ]),
  {
    status: 'CLOSED',
    change: [
      ['PENNY', 0.5],
      ['NICKEL', 0],
      ['DIME', 0],
      ['QUARTER', 0],
      ['ONE', 0],
      ['FIVE', 0],
      ['TEN', 0],
      ['TWENTY', 0],
      ['ONE HUNDRED', 0],
    ],
  }
);
