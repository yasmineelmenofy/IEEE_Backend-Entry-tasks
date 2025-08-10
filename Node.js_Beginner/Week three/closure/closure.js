function outer(){
    let counter = 0;
    function increment(){
        counter++;
        return counter;
    }
    function decrement(){
        counter--;
        return counter;
    }
    function reset(){
        counter = 0;
        return counter;
    }
    return { increment, decrement, reset };
}

const counter = outer();

const display = document.getElementById("count");
const increase = document.getElementById("increment");
const decrease= document.getElementById("decrement");
const reset = document.getElementById("reset");

increase.addEventListener("click", function() {
    display.textContent = counter.increment();
});

decrease.addEventListener("click", function() {
    display.textContent = counter.decrement();
});

reset.addEventListener("click", function() {
    display.textContent = counter.reset();
});
