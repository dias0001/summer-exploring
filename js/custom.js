
/* ///////////// funções /////////////////////////////////////////// */
const aviso = (msg) => {
    alert(msg)
}





/* ----------------------------funções------------------------------------- */






/* //////////////////////// eventos e execuções automaticas /////  */

//document.getElementById('nome').addEventListener('click', aviso)
aviso('Tenha um bom dia Dave')




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