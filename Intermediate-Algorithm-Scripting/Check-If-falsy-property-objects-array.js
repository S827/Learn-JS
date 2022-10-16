// Check-If-falsy-property-objects-array.js
function truthCheck(collection, pre) {
    const x = [...collection];
    // console.log(x[0]['isBot']);
    // console.log(x[1]);
    for(let i = 0; i < x.length; i++){
      // console.log(x[i][pre]);
      // console.log(Boolean(x[i][pre]));
      if(!Boolean(x[i][pre])){
        return false
      } else if(Boolean(x[i][pre]) && i === x.length-1){
        // console.log(x)
        return true;
      } else {
        continue;
      }
    }
  }
  
  console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));
  console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role"));
  console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"));