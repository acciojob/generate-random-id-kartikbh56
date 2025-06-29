function makeid(l) {
  // write your code here
	let res = ""
	let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
	for(let i=0;i<l;i++){
		res += chars.charAt(Math.floor(Math.random()*chars.length))
	}
	return res
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l)); 
