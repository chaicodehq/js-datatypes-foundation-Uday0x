  let order = "uday"
  
  if(typeof(order)!="string"){
    console.log("null1")
  }
  let trimmedOrder =order.trim()

  if(trimmedOrder == ""){
    console.log("null")
  }
console.log( 
    trimmedOrder.charAt(0) ,
    trimmedOrder.at(-1)
)
