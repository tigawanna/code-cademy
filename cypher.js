function rot13(str) {
    let filtered =[]
    const cypher="NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"
    const alpha=  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    console.log(cypher[7])
    const stuff= str.replace(/[A-Z]/gi, c =>filtered.push(c))
    console.log("stuff ==== ",filtered)
    let reversed =[];
    filtered.forEach((item)=>{
      console.log(alpha.indexOf(item))  
      reversed.push(cypher[alpha.indexOf(item)])
      
      
    })
    console.log(reversed)
    let final=""
    reversed.forEach((item)=>final+=item)
    return final
  }

 console.log(rot13("HEY")) 

 
