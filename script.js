function fibonacci(num) {
// your code here
	let first = 0;
	let second = 1;

	if(num == 1){
		console.log(first);
	}
	else if(num == 2){
		console.log(second)
	}
	else{
		for(let i=3;i<=num;i++){
			let third = first + second;
			first = second;
			second = third;
			console.log(third);
		}
	}
}

module.exports = fibonacci;
