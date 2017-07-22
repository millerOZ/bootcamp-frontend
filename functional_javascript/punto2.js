function repeat(operation, num){
	return function operation(){
		return num;
	}
}
module.exports = repeat;