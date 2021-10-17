const toggleBtn = document.getElementById("toggle");
const toggleLabel = document.getElementById("toggle_lable");

toggleBtn.addEventListener("click", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
	if(toggleLabel.innerHTML=="ON"){
		toggleLabel.innerHTML="OFF";
		toggleLabel.style.color = 'black';
	}else{
		toggleLabel.innerHTML="ON";
		toggleLabel.style.color = 'white';
	}
	
})