export function countVowels(message) {
  // Your code here
  if(typeof(message)!="string"){
    return 0
  }
  if(message===""){
    return 0
  }
  let foundArray = message.match(/[aeiouAEIOU]/g)

   if(foundArray==null){
    return 0
  }
  if(foundArray.length!=0){
    return foundArray.length
  }
 
}

console.log(countVowels("12345"))