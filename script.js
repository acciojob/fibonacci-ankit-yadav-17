function fibonacci(num) {
// your code here
	var first = 0;
	var second = 1;

	if(num == 1){
		console.log(first);
	}
	else if(num == 2){
		console.log(second)
	}
	else{
		for(var i=3;i<=num;i++){
			var third = first + second;
			first = second;
			second = third;
			
		}
		console.log(third);
	}
}

module.exports = fibonacci;
