
/*início do codigo para bloquear letras*/ 

function somenteNumeros(num) {
  var er = /[^0-9.]/;
  er.lastIndex = 0;
  var campo = num;
  if (er.test(campo.value)) {
    campo.value = "";
  }       
      /* <input onkeyup="somenteNumeros(this);" ng-model="numero.valor" /> CODIGO UTILIZADO PARA LINKAR NO INPUT */
}



/*final do codigo para bloquear letras*/ 

function lettersOnly(evt) {
evt = (evt) ? evt : event;
var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
  ((evt.which) ? evt.which : 0));
if (charCode > 31 && (charCode < 65 || charCode > 90) &&
  (charCode < 97 || charCode > 122)) {
  alert("Seu nome tem números?");
  return false;
}
return true;

/*início do codigo para bloquear Números*/ 

}

      /* <input onkeypress="return lettersOnly(event);"/> CODIGO UTILIZADO PARA LINKAR NO INPUT*/



/*final do codigo para bloquear Números*/ 



/*Código para o Dados aparecerem no final da Página */
/*Somente se Estiver faltado algo, se os dados Principais(required) estiverem preenchidos o site reseta para Outro Contato */

function enviar(){
  window.alert("Seus Dados foram Enviandos. Verifique se nada esta faltando logo abaixo.") /*Mensagem para Confirmar dados */
    

    var nome = document.getElementById('nome').value;               /*Var de Nome */
    var sobrenome = document.getElementById('sobrenome').value;     /*Var de Sobrenome */

    var email = document.getElementById('email').value;             /*Var de E-mail*/

    var cpf = document.getElementById('cpf').value;                 /*Var de CPF */
    var num = document.getElementById('num').value;                 /*Var de NUMero*/


    var mensagem = document.getElementById('mensagem').value;       /*Var de Mensagem */



    if(nome){
      document.getElementById('idnome').innerHTML = `Nome: ${nome}.`;                         /*Dado de Nome Completo */
    }else{
      document.getElementById('res').innerHTML  = "Campo vazio!!!";                           /*Dado de Nome Incompleto */
    }


    if(sobrenome){
      document.getElementById('idsobrenome').innerHTML = `Sobrenome: ${sobrenome}.`;          /*Dado de Sobrenome Completo */
    }else{
      document.getElementById('idsobrenome').innerHTML = "Campo vazio!!!";                     /*Dado de Sobrenome Incompleto */
    }
    

    if(email){
      document.getElementById('idemail').innerHTML = `E-mail: ${email}.`;                     /*Dado de E-mail Completo */
    }else{
      document.getElementById('idemail').innerHTML = "Campo vazio!!!";                          /*Dado de E-mail Incompleto */
    }
    

    if(cpf){
      document.getElementById('idcpf').innerHTML = `CPF: ${cpf}.`;                            /*Dado de CPF Completo */
    }else{
      document.getElementById('idcpf').innerHTML = "Campo vazio!!!";                            /*Dado de CPF Incompleto */
    }
    

    if(num){
      document.getElementById('idnum').innerHTML = `Numero de Telefone: ${num}.`;               /*Dado de Numero Completo */
    }else{
      document.getElementById('idnum').innerHTML = "Campo vazio!!!";                              /*Dado de Numero Incompleto */
    }
    
    

    if(mensagem){
      document.getElementById('idmensagem').innerHTML = `Mensagem para a gente: ${mensagem}.`;    /*Dado de Mensagem Completo */
    }else{
      document.getElementById('idmensagem').innerHTML = "Campo vazio!!!";                           /*Dado de Mensagem Incompleto */
      
    }
    


  }
