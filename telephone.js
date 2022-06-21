

function telephoneCheck(str) {

const conditions=[
// 555 555 5555 or 555-555-5555 or 5555555555
/^\d{3} \d{3} \d{4}$|^\d{3}-\d{3}-\d{4}$|^\d{10}$/,

// 1 555-555-5555 or 1 (555) 555-5555
/^1 \d{3}-\d{3}-\d{4}$|^1 \(\d{3}\) \d{3}-\d{4}$/,

// (555)555-5555 or (555) 555-5555 or 1(555)555-5555 or 1(555)555-5555
/^\(\d{3}\)\d{3}-\d{4}$|^\(\d{3}\) \d{3}-\d{4}$|1\(\d{3}\)\d{3}-\d{4}|^1 \d{3} \d{3} \d{4}$/,

]
return conditions.some((pattern) => 
{
return pattern.test(str)
});

}

  

const tests=[
"555-555-5555",
"(555)555-5555",
"(555) 555-5555",
"555 555 5555",
"5555555555",
"1 555 555 5555"
]

tests.map((item)=>{
console.log("testing case "+item+" ==",  telephoneCheck(item))
})

