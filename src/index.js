export function updatePrices(menu, increase) {
  // Your code here
  if(typeof(menu)!="object" || typeof(increase)!=="number"){
    return {}
  }

  let copyobj ={...menu}
  let entries = Object.entries(copyobj)
  


  let updated = entries.map(([item, price]) => {
  return [item, price + increase]
})

let finalObj = Object.fromEntries(updated)
return finalObj
}
console.log(updatePrices({meetha:30, saada:20}, 10))