// //your JS code here. If required.
// document.getElementById('output').innerText = "jnkln";
// var promise = new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		resolve([1, 2, 3, 4])
// 	},3000)
// })
// promise
// .then((result)=>{
// 	return result.filter(ele)=>ele % 2 == 0;	
// })
// .then((result)=>{
// 	 var mul = result.filter(ele)=>ele % 2 == 0;
// 	retuen mul * 2;
// })

// .then((result) => {
//     const outputDiv = document.getElementById('output');
//     outputDiv.textContent = mul;
//   })



const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(numbersArray);
  }, 3000);
});

promise
  .then(numbersArray => {
    const filteredArray = numbersArray.filter(num => num % 2 === 0);
    return filteredArray;
  })
  .then(filteredArray => {
    const multipliedArray = filteredArray.map(num => num * 2);
    return multipliedArray;
  })
  .then(finalArray => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = finalArray.join(', ');
  })
  .catch(error => {
    console.error(error);
  });







