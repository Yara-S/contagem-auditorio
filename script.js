var botao_clicado = document.getElementById('contar');
var contaTela = document.getElementById('N_contagem');
var alerta = document.getElementById('alerta_contagem');
var btn_retirar_aluno = document.getElementById('retirar_aluno');
var zerar = document.getElementById('reset');
var alert_box = document.getElementById('alert_box');
var contagemAuditorio = 0;




btn_retirar_aluno.disabled = "true";



botao_clicado.onclick = function(){

	btn_retirar_aluno.removeAttribute("disabled");
	contagemAuditorio += 1;
	contaTela.innerText = contagemAuditorio;

	if (contagemAuditorio >= 30 && contagemAuditorio < 40){
		alerta.style.color = "green";
	}
	else if (contagemAuditorio >= 40 && contagemAuditorio < 50 ){
		alerta.style.color = "red";
	}
	else if (contagemAuditorio == 50){
		botao_clicado.disabled = "true";
		window.alert("Limite atingido. Alunos precisam sair para outros entrarem");
		alert_box.removeAttribute("hidden");

	}

}

btn_retirar_aluno.onclick = function(){
	if (contagemAuditorio == 50){
		botao_clicado.removeAttribute("disabled");
		alert_box.hidden = "true";
	}

	contagemAuditorio -= 1;
	contaTela.innerText = contagemAuditorio;
	if (contagemAuditorio == 0){
	btn_retirar_aluno.disabled = "true";
	}

	if (contagemAuditorio < 40 && contagemAuditorio >= 30){
		alerta.style.color = "green";
	}
	else if (contagemAuditorio < 30){
		alerta.style.color = "black";
	}
}

zerar.onclick = function(){
	contagemAuditorio = 0;
	contaTela.innerText = contagemAuditorio;
	botao_clicado.removeAttribute("disabled");
	btn_retirar_aluno.disabled = "true";
	alerta.style.color = "black";
}