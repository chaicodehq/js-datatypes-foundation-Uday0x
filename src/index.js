export function getDataType(value) {
  // Your code here
  let newValue = typeof(value)

  if((newValue ==null) === "object"){
    return "null"
  }else if((newValue =="[]")==="array"){
    return "array"
  }
  else{
    return typeof(value)
  }
}

console.log(getDataType(null))

// console.log(typeof(null))