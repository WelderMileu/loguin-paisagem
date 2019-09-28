(function(){
	const $ = (e) =>  document.querySelector(e);

	// USAR O CLASSLIST.ADD PARA INSERIR OS STILOS

	$("#submit").addEventListener("click", (event) => {
		if($("#user").value == "" || $("#pass").value == ""){
			event.preventDefault();
			$(".warning").style.transform = "translate(-20%, 300%)";
			$(".warning").style.opacity = "1";
			$(".warning").style.border = "1px solid var(--vermelho)";
			$(".warning").style.background = "var(--vermelhoClaro)";
			$(".warning").style.textShadow = "1px 1px var(--vermelho)"
			$(".warning").innerHTML = "Usuario ou Senha Vazios";
			if ($("#user").value == "") {
				$(".fa-user-o").style.color = "var(--vermelho)";
				$(".fa-user-o").style.textShadow = "1px 5px 5px var(--vermelhoClaro)";
			}else{
				$(".fa-user-o").style.color = "var(--azul)";
				$(".fa-user-o").style.textShadow = "none";
			}

			if ($("#pass").value == "") {
				$(".fa-key").style.color = "var(--vermelho)";
				$(".fa-key").style.textShadow = "1px 5px 5px var(--vermelhoClaro)";
			}else{
				$(".fa-key").style.color = "var(--azul)";
				$(".fa-key").style.textShadow = "none";
			}
		}else{
			event.preventDefault();
			$(".warning").style.transform = "translate(-20%, 300%)";
			$(".warning").style.opacity = "1";
			$(".warning").innerHTML = "Loguin efetuado com sucesso";
			$(".warning").style.border = "1px solid var(--branco)";
			$(".warning").style.background = "var(--verde)";
			$(".warning").style.textShadow = "1px 1px var(--verdelight)";
		}
	})
})();