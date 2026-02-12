export function addToCart(cart, item) {
  // Your code here
  if(!Array.isArray(cart)){
    return -1
  }

  for(let i =0;i<cart.length;i++){
    if(typeof(cart[i])!=="string" || item == "") {
      return null
    }
  }
  return cart.push(item)
}

console.log(addToCart(["one","two"], "three"))