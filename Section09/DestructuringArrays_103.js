const arr = ["html", "css", "js", "php"];
let [a, b, c, d] = arr; 
console.log(a, b, c, d);

let [main, , secondary] = arr;
console.log(main, secondary);

let [e, , f, g] = arr;
console.log(e, f, g); 

let [h, ...rest] = arr;
console.log(h); 
console.log(rest); 
const nested = [2, 4, [5, 6]];
const [i, , j] = nested; 
console.log(i, j); 

const [k, , [l, m]] = nested; 
console.log(k, l, m);
console.log(p, q, r); 
