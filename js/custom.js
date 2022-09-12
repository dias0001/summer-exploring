
/* ///////////// funções /////////////////////////////////////////// */
const aviso = (msg) => {
    alert(msg)
}

const mostraidade = () => {
    let span = document.getElementById('txt-idade')
    let campoidade = document.getElementById('idade')
    span.innerText = campoidade.value    
}





/* ----------------------------funções------------------------------------- */






/* //////////////////////// eventos e execuções automaticas /////  */

/*document.getElementById('nome').addEventListener('click', aviso)
aviso('Tenha um bom dia Dave')
document.getElementById('nome').addEventListener('click' , function(){
    aviso('olá mundo !!! Este é o planeta terra')
}) */ 

mostraidade()
document.getElementById('idade').addEventListener('change', mostraidade)





//inicializada animações scrool do AOS
AOS.init();

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()