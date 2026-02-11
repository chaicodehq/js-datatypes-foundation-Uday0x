 function extractRangoliCenter(design, start, end) {
  // Your code here
  if(typeof(design) != "string") {
    return "null1"
  }
   if(start == "" || end == ""){
    return "null2"
   }
  return design.slice(start,end)
}

console.log(extractRangoliCenter("LOTUS***",3))


console.log(false == "")

