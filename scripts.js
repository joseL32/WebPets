function hola() {
	alert("hola mundo!!!");
	console.log("hola mundo en consola");
	// body...
}

function saludar(){
	let fecha=new date();
	console.log(fecha);
	let hora=fecha.getHours();
	console.log(hora);
	if(hora>0 && hora<12){
		alert("buenos dias son: "+hora);
	}else if (hora>=12 && hora<=18){
		alert("buenas tardes son: "+hora);
	}else{
		alert("buenas noches son: "+hora);
	}
}

function areaTriangulo(){
	let base=document.getElementById("base").value;
	let altura=document.getElementById("altura").value;
	area=(base*altura)/2;
	//alert("el area del triangulo es: "+area);
	msg="el area del triangulo es: "+area+" m2";
	document.getElementById("resultado1").innerHTML=msg;
}

function areaCircular(){
	let pi="3-14";
	let radio=document.getElementById("radio").value;
	area=pi*(radio*radio);
	msg="el area del círculo es: "+area+" cm2";
	document.getElementById("resultado2").innerHTML=msg;
}