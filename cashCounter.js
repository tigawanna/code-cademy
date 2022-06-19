//name,value,index
const moneyValueObj={
    "PENNY":["PENNY",0.01,0],
    "NICKEL":["NICKEL",0.05,1],
    "DIME":["DIME",0.1,2],
    "QUARTER":["QUATER",0.25,3],
    "ONE":["ONE",1,4],
    "FIVE":["FIVE",5,5],
    "TEN":["TEN",10,6],
    "TWENTY":["TWENTY",20,7],
    "ONE HUNDRED":["ONE HUNDRED",100,8]
}


const moneyValueArr = [
    ["PENNY",0.01],
    ["NICKEL",0.05],
    ["DIME",0.1],
    ["QUARTER",0.25],
    ["ONE",1],
    ["FIVE", 5],
    ["TEN:",10],
    ["TWENTY",20],
    ["ONE HUNDRED",100],
]

function checkCashRegister(price, cash, cid) {


const sanitizevalues = (amt) => Math.round(amt * 100) / 100;
const cashInDrawaer = (_cid) =>_cid.reduce((total, [unit, amt]) => total + amt, 0);
const changeOwed=sanitizevalues(cash-price);
let change={};
let cidObj={}
let totalcid=0;

const toTens=(num)=>{
return tensOwed =parseInt(num.toString().split(""))*10
}
cid.reverse().map(([unit,amt])=>{
totalcid+=amt;
cidObj[unit]=amt;
})

// console.log("spliced array === ",cid.splice(2,1,["KSH",1000]))
// console.log("cid after splice ",cid)

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
    

// console.log("cid analysis total ===",sanitizevalues(totalcid))
// console.log("cid analysis obj ===  ",cidObj)
// console.log("cid plain ===  ",cid)
// console.log("change owed ===  ",changeOwed)

const cidsum = sanitizevalues(totalcid);
const forkedcid=[...cid]
const eligableArr=[];
let chunks=changeOwed;
let chunkArr=[]
let moreArr=[]

console.log("change changeOwed====",changeOwed)    

forkedcid.map((cashArr)=>{
const value = sanitizevalues(moneyValueObj[cashArr[0]][1]) 
const index = moneyValueObj[cashArr[0]][2]
const amount =sanitizevalues(cashArr[1]) 
const comb = sanitizevalues(value*amount) 



if(value === changeOwed){
console.log("cash value ",value)
console.log("cash amount ",amount)
console.log("change owed ===  ",changeOwed)
forkedcid.splice(index,1,cashArr)
console.log("new arr ===",forkedcid)
change = {status: "OPEN", change:forkedcid}    
}

if(value<changeOwed){

console.log("val amount combined === ",value,amount,comb)
console.log("==========================")

if(comb>=changeOwed){
// console.log("comb === ",comb) 
console.log("arrs ==",cashArr[0])
const copy = [...cashArr]

if(changeOwed%value===0){
console.log("those who made it == ",copy)   
copy[1]=changeOwed
eligableArr.push(copy)
change = { status: 'OPEN', change:eligableArr}

}

if(changeOwed%value!==0){

console.log("tens of owed ===",toTens(changeOwed))
do{
chunk=toTens(changeOwed)-cashArr[1]
console.log("CHUNK TAKEN OUT %%%$%$%$%$ ====",chunk) 
}while(toTens(changeOwed)%value===0)    

   



chunkArr.push(cashArr)
eligableArr.push(cashArr)
}


}

if(comb<changeOwed){

chunkArr.push(cashArr)
}

// console.log("eligible arr === ",eligableArr)
// console.log("chunk arr === ",chunkArr)

}

console.log("=========================")
})
// moneyValueArr.map((cashArr)=>{
//     console.log("cash arr === ",cashArr)

// })


console.log("CHUNK TAKEN OUT %%%$%$%$%$ ====",chunk) 



return change;
  }
  


//   console.log(
//     '\n--------First test--------\n',
//     checkCashRegister(19.5, 20, [
//       ['PENNY', 1.01],
//       ['NICKEL', 2.05],
//       ['DIME', 3.1],
//       ['QUARTER', 4.25],
//       ['ONE', 90],
//       ['FIVE', 55],
//       ['TEN', 20],
//       ['TWENTY', 60],
//       ['ONE HUNDRED', 100],
//     ])
//     )
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
  
