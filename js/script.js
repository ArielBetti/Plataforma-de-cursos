window.addEventListener("load", () => {

	chamacad = document.getElementById("chamacadastro");
	cad = document.getElementById("cadastro");
	fechacad = document.getElementById("fecharcadastro");

	chamacad.addEventListener("click", (event) => {
		cad.classList.add("-action");
	});

	fechacad.addEventListener("click", (event) => {
		cad.classList.remove("-action")
	});

});