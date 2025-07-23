function * fibonacci() {
    let x = 0; 
    let y = 1; 
    while (true) {
        yield x;       
        let z=x+y;
        x = y;       
        y = z;      
    }
}
let it = fibonacci();
for (let i = 0; i < 10; i++) {
    console.log(it.next().value);
}
