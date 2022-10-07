// how tocreate 2D array

function arr(m, n){
    let a = [];
    let b = [];

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            b.push(0);
        }
        a.push(b);
        b=[];
    }
    return a;
}
console.log(arr(3,2));
console.log(arr(4,3));

