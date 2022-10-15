/**
 * Problem: Convert a string to spinal case. Spinal case is all-lowercase-
 * words-joined-by-dashes.
 */


function formatStr(str){
    const x = str.split(/(?=[A-Z])|_|\s/);
    const y = x.join('-');
    const z = y.toLowerCase();
    return z;
}
console.log(formatStr('this is_going To be Okay'));
formatStr("thisIsSpinalTap");
formatStr("The_Andy_Griffith_Show");
formatStr("Teletubbies say Eh-oh");
formatStr("AllThe-small Things");