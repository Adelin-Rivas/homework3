function load()
  {

	submitButton=document.getElementById("submit");
	setText=document.getElementById("correct");
	pass=document.getElementById("password");


	submitButton.addEventListener("click",passWordHandler)
	 function passWordHandler()

	 { 
	 	console.log(setText.value)
	 	if(pass.value==="12345678")
	 		setText.innerHTML="You can Login";
	 	else{
	 		alert("try again")
	 	}
	}

  }
window.onload=load;