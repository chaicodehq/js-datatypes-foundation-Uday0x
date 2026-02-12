export function formatBill(items) {
  // Your code here
  if(!Array.isArray){
    return ""
  }


  

  let newArray = items.map((i)=>{
    return i.name
  })

  return newArray
  let finalArray = newArray.join("\n")
  return finalArray
}
console.log(formatBill(([{name:"Atta",price:40,qty:2}])))