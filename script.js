//your JS code here. If required.

var promise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve([1, 2, 3, 4])
	},3000)
})
promise
.then((result)=>{
	return result.filter(ele)=>ele % 2 == 0;	
})
.then((result)=>{
	 var mul = result.filter(ele)=>ele % 2 == 0;
	retuen mul * 2;
})

.then((result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = mul;
  })

//document.getElementById('output').innerText = mul;




