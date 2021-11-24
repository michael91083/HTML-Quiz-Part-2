function buttonFunction() {
	document.getElementById("text11").innerHTML = "Answer: 16";
	document.getElementById("red").innerHTML = "Answer: Red";
	document.getElementsByClassName("paragraph")[2].innerHTML = "Answer: Michael.";
	document.getElementsByClassName("paragraph")[3].innerHTML = "Answer: Math"
	
	 
	let x = 0

	
	
	let textBox = document.getElementById("text1").value;
	console.log(textBox);

	let checkbox1 = document.querySelector("#red1").checked;
	console.log(checkbox1);
	
	
	let radio1 = document.querySelector("#age3").checked;
	console.log(radio1);
	
	let textBox2 = document.getElementById("question2").value;
	console.log(textBox2);
	 
	if (textBox == ("Michael")) {
		x = x + 1
	}
	if (textBox2 == ("math")) {
		x = x + 1
	}
	if (checkbox1) {
		x = x + 1
	}

	if (radio1) {
		x = x + 1
	}
	
	console.log(x)
	document.getElementsByClassName("paragraph")[0].innerHTML = x.toString()+"/4"
	

	
	
	if (x == 2) {
		document.getElementsByClassName("paragraph")[1].innerHTML = "You could do better"
		
	}
	
	if (x == 0) {
		document.getElementsByClassName("paragraph")[1].innerHTML = "You failed"

	}
	if (x == 1) {
		document.getElementsByClassName("paragraph")[1].innerHTML = "Better luck next time"

	}
	if (x == 3) {
		document.getElementsByClassName("paragraph")[1].innerHTML = "almost there"

	}
	if (x == 4) {
		document.getElementsByClassName("paragraph")[1].innerHTML = "Good job!"

	}


}



