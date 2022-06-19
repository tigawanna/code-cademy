function rot13(str) {
    let filtered =[]
    const cypher="NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"
    const alpha=  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const spcChar=[" ","?","!","#","$","%","."]

    const stuff= str.replace(/[A-Z]|\s+|!|\?|\./gi, c =>filtered.push(c))
    console.log("stuff ==== ",filtered)
    let reversed =[];
    filtered.forEach((item)=>{
    const specialIndex=spcChar.findIndex((x)=>x===item)
    if(specialIndex!==-1){
        reversed.push(spcChar[specialIndex])
      } else{
        reversed.push(cypher[alpha.indexOf(item)])
      } 
   })

    console.log("reversed ==== ",reversed)
    let final=""
    reversed.forEach((item)=>final+=item)
    return final
  }

 console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")) 

 
