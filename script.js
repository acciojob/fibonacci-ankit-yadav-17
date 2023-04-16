function fibonacci(num) {
// your code here
	var first = 0;
	var second = 1;
	var third =0;

	if(num == 1){
		console.log(first);
	}
	else if(num == 2){
		console.log(second)
	}
	else{
		for(let i=3;i<=num;i++){
			third = first + second;
			first = second;
			second = third;
			
		}
		console.log(third);
	}
}

module.exports = fibonacci;
