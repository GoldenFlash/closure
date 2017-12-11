var fn = [];
for(var i= 0;i<10;i++){

	fn[i] = (function(i){
		return function(){
			console.log(i)
		}
	})(i)
}
fn[1]
// var fn = [];
for(var i= 0;i<10;i++){
	(function(i){
		fn[i] = function(i){
			console.log(i)
		}
	})(i)
	
}