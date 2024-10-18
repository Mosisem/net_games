var user = window.document.getElementById("nome").value
var email = window.document.getElementById("email").value
var telefone = window.document.getElementById("telefone").value
var senha = window.document.getElementById("senha").value
var senha2 = window.document.getElementById("senha2").value

var form = window.document.getElementById("form_id").value

function verificador(){
   var user = window.document.getElementById("nome").value
   var email = window.document.getElementById("email").value
   var telefone = window.document.getElementById("telefone").value
   var senha = window.document.getElementById("senha").value
   var senha2 = window.document.getElementById("senha2").value

   if(senha == senha2){
      //  alert(`[Formulário aprovado]:Bem vindo ${user}.`)
        window.location.href="doc_pg_1.html"
        var conta = window.document.getElementById("conta")
        conta.innerText=`${user}`
    } else{
        alert(`[ERRO]: Verifique o campo de confirmação de senha.`)
      }
}

 


