var printNumTwo;
        for(var i = 0; i < 3; i++) {
            if(i === 2) {
                printNumTwo = function() {
                    return i;
                }
            }
        }
        console.log(printNumTwo());

        var printNumThree;
        for(let j = 0; j < 3; j++) {
            if(j===2){
                printNumThree = function(){
                    return j;
                }
            }
        }
        console.log(printNumThree());
        console.log(j);