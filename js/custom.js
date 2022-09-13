
/* ///////////// funções /////////////////////////////////////////// */
const aviso = (msg) => {
    alert(msg)
}

const mostraidade = () => {
    let span = document.getElementById('txt-idade')
    let campoidade = document.getElementById('idade')
    span.innerText = campoidade.value
}

var dataAtual = new Date()
const mostraData = () => {
    let dia = dataAtual.getDay()
    let mes = dataAtual.getMonth() + 1
    let ano = dataAtual.getFullYear()
    let hora = dataAtual.getHours()
    let valor = dia + '/' + mes + '/' + ano + '-' + hora
    document.getElementById('dt-cadastro').value = valor
}

//Preenche o select "estado" com os estados da API do IBGE
//Preenche o select "estado" com os estados da API do IBGE
const getEstados = ()=>{
    let api = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    let select = document.getElementById('estado')
  
    //Lê a API através do fetch(), 1o then captura os dados, 2o then trata os dados
    fetch(api).then(resposta => resposta.json()).then(json => {
      let options = '<option>Selecione</option>'
  
      select.innerHTML = options
    })
  
  
  }

/* ---------------------------------------------------------------- */


/* //////////////////////// eventos e execuções automaticas /////  */

/*document.getElementById('nome').addEventListener('click', aviso)
aviso('Tenha um bom dia Dave')
document.getElementById('nome').addEventListener('click' , function(){
    aviso('olá mundo !!! Este é o planeta terra')
}) */

mostraidade()
document.getElementById('idade').addEventListener('change', mostraidade)

mostraData()

getEstados()










//inicializada animações scrool do AOS
AOS.init();

// Impede o envio do formulário quando os campos estão inválidos

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    //váriavel captura as tags <form> que contém a classe "nedds-validation"    
    const forms = document.querySelectorAll('.needs-validation')



    // Executa para cada formulário da variável forms
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            //Se houver campos inválidos, interrompe o SUBMIT
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()