Promise.all([
  fetch('https://fakestoreapi.com/products/1').then(res => res.json()),
  fetch('https://fakestoreapi.com/products/4').then(res => res.json()),
  fetch('https://fakestoreapi.com/products/3').then(res => res.json())
])
.then(([p1, p4, p3]) => {
  let total = (3 * p1.price) + (4 * p4.price) + (5 * p3.price);
  console.log("The total price is", total);
})
.catch(err => console.error("Error:", err));
