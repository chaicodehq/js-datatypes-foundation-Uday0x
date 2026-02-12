let fares = ["ac",-Infinity,"ii"]

if(fares.length == 0){
    console.log("galat hai ji")
  }
  for(let i=0;i<fares.length;i++){
      if(typeof(fares[i])!=="number" || !Number.isInteger(fares[i])){
        console.log("fun hai ji")
      } 
  }