var inp="".toString();
	if(inp == "undefined")
		{inp=document.getElementsByName("inp")[0].value.toString();}
function getValue(id) {
	// body...
	var butID=document.getElementById(id).value;
	console.log(id);

	
	var exp= "".toString();
	exp=exp+butID.toString();
		
	inp=inp+exp;
	document.getElementsByName("inp")[0].value= inp;
	//console.log(inp);
	res(inp);
}
function clearExp() {
	
	inp =document.getElementsByName("inp")[0].value="";
	document.getElementsByName("result")[0].value=""
	console.log("Cleared");
}
function res(inp) {
	
	var re=eval(inp);
	document.getElementsByName("result")[0].value=re;
	console.log(re);
}