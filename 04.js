var a=(function(){
	var a='内部变量'
	var fn1=function(){
		console.log('fn1'+a)
		console.log(this)
	}
	var fn2=function(){
		console.log('fn2'+a)
	}
	var fn3=function(){
		console.log('fn3'+a)
	}
	// return {
	// 	fn1:fn1,
	// 	fn2:fn2,
	// 	fn3:fn3,
	// }
	return fn1
})()
a()