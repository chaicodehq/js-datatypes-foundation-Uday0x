export function removeRationCard(registry, cardId) {
  // Your code here
      if(typeof(registry)!=="object" || registry==null){
    return false
  }

  if(typeof(cardId)!=="string"){
    return false
  }

   let bool = registry.hasOwnProperty(cardId)

   if(bool){
    let bool1=delete registry.cardId
    return bool1
  }
   else{
      return false
    }

}

let obj={
  uday:"krishna",
  uday2:"krishna",
  uday3:"krishna"
}
console.log(removeRationCard(obj,"uday3"))
// console.log(obj[uday2])