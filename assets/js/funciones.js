const form = document.getElementById('contactForm');
const inputName = document.getElementById('InputName');
const inputEmail = document.getElementById('InputEmail');
const textarea = document.getElementById('Textarea');


const nameError = document.getElementById('nameHelp');

const emailError = document.getElementById('emailHelp');
const textareaError = document.getElementById('textTareaHelp');

form.addEventListener('submit', (e) =>{
    let isValid = true;

    //Validar nombre
    if(inputName.value.trim() === ''){
        nameError.textContent = 'Este campo es requerido';
        nameError.classList.remove('d-none');
        isValid = false;
    } else if(inputName.value.length <3){
        nameError.textContent = 'Nombre debe contener al menos 3 letras'
        nameError.classList.remove('d-none');
        isValid= false
    } else {
        nameError.classList.add('d-none');
    }

    // validar email
    if(inputEmail.value.trim() === ''){
        emailError.textContent = 'Este campo es requerido';
        emailError.classList.remove('d-none');
        isValid = false;
    }else{
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(!emailPattern.test(inputEmail.value)){
            emailError.textContent = "ingrese una cuenta de correo valida.";
            emailError.classList.remove('d-none');
            isValid = false;
        }else{
            emailError.classList.add('d-none');
        }
    };

    //Validar mensaje
    if(textarea.value.trim() === ''){
        textareaError.textContent = 'Este campo es requerido';
        textareaError.classList.remove('d-none')
        isValid = false;
    }else{
        textareaError.classList.add('d-none');
    }

    if(!isValid){
        e.preventDefault()
    }



});