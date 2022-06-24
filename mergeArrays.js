const january=[
    {shopid:"G-01",shopname:"boy1",bill:2200},
    {shopid:"G-02",shopname:"boy2",bill:1200},
    {shopid:"G-03",shopname:"boy3",bill:600},
    {shopid:"G-04",shopname:"boy4",bill:8820},
    {shopid:"M1-01",shopname:"boy11",bill:2210},
    {shopid:"M1-02",shopname:"boy12",bill:728},
    {shopid:"M1-03",shopname:"boy13",bill:346},
    {shopid:"M1-04",shopname:"boy14",bill:1220},
    {shopid:"M1-05",shopname:"boy15",bill:2900},
]

const february=[
    {shopid:"G-01",shopname:"boy1",bill:2500},
    {shopid:"G-02",shopname:"boy2",bill:1300},
    {shopid:"G-03",shopname:"boy3",bill:1600},
    {shopid:"G-04",shopname:"boy4",bill:8920},
    {shopid:"M1-01",shopname:"boy11",bill:2300},
    {shopid:"M1-02",shopname:"boy12",bill:2728},
    {shopid:"M1-03",shopname:"boy13",bill:1346},
    {shopid:"M1-04",shopname:"boy14",bill:1520},
    {shopid:"M1-05",shopname:"boy15",bill:3920},
]



const januaryObject=[]

const newJanuary=january
.forEach((item)=>{
januaryObject[item.shopid]=item
})

console.log("jan obj = ",januaryObject)

const newFebraury=february.map((item)=>{
const prevBill=januaryObject[item.shopid].bill
item["prevbill"]=prevBill
return item

})

console.log("new february === ",newFebraury)


// expected output 

// new february ===  [
//     { shopid: 'G-01', shopname: 'boy1', bill: 2500, prevbill: 2200 },
//     { shopid: 'G-02', shopname: 'boy2', bill: 1300, prevbill: 1200 },
//     { shopid: 'G-03', shopname: 'boy3', bill: 1600, prevbill: 600 },
//     { shopid: 'G-04', shopname: 'boy4', bill: 8920, prevbill: 8820 },
//     { shopid: 'M1-01', shopname: 'boy11', bill: 2300, prevbill: 2210 },
//     { shopid: 'M1-02', shopname: 'boy12', bill: 2728, prevbill: 728 },
//     { shopid: 'M1-03', shopname: 'boy13', bill: 1346, prevbill: 346 },
//     { shopid: 'M1-04', shopname: 'boy14', bill: 1520, prevbill: 1220 },
//     { shopid: 'M1-05', shopname: 'boy15', bill: 3920, prevbill: 2900 }
//   ]
