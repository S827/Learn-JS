// Create an Export Fallback with export default
// examples:

export default function add(x, y){   //named default function
    return x + y;    //single default export is allowed in a module.
}

/*
export default function(x, y) {      //Anonymous default function
    return x - y;
}
/*
Since export default is used to declare a fallback value for a module or file, you can only 
have one value be a default export in each module or file. Additionally, you cannot use 
export default with var, let, or const
*/