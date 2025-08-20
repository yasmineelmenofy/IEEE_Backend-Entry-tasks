function delay(mess, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(mess);
      resolve(); 
    }, time);
  });
}
delay("Hey there!", 5000)
  .then(() => delay("This code will help you understand", 3000))
  .then(() => delay("Asynchronous Programming", 2000))
  .then(() => delay("What The Callback Hell!!!", 3000))
  .then(() => delay("I AM STUCK", 1000));

async function runMessages() {
  await delay("Hey there!", 5000);
  await delay("This code will help you understand", 3000);
  await delay("Asynchronous Programming", 2000);
  await delay("What The Callback Hell!!!", 3000);
  await delay("I AM STUCK", 1000);
}

runMessages();
