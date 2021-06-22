function valider(form) {

    //========================= Validering navn =========================
    if(form.navn.value == '') {
        document.querySelector('#navn').placeholder = 'Udfyld navn!';
        form.navn.focus();
        form.navn.style.backgroundColor = 'var(--errorColor)';
        return false;
    } else {
        if(onlyNumberSymbolValidate(form.navn.value)) {
            document.querySelector('#navn').placeholder = 'Må kun indeholde bogstaver!';
            form.navn.focus();
            form.navn.style.backgroundColor = 'var(--errorColor)';
            document.querySelector('#navn').value = '';
            return false;
        } else {
            form.navn.style.backgroundColor = 'var(--inputBackground)';
        };    
    };
    
    //========================= Validering email =========================
    if (form.email.value == '') {
        document.querySelector('#email').placeholder = 'Udfyld email!';
        form.email.focus();
        form.email.style.backgroundColor = 'var(--errorColor)';
        return false;
    } else {
        if (validateEmail(form.email.value)) {
            form.email.style.backgroundColor = 'var(--inputBackground)';
            // document.querySelector('#email').value = '';
            return false;
        } else {
            document.querySelector('#email').placeholder = 'Forkert email!';
            form.email.focus();
            form.email.style.backgroundColor = 'var(--errorColor)';
            document.querySelector('#email').value = '';
        };
    };
    
    return false;
}; // function Valider ends


//========================= Validation functions =========================
function onlyLetterValidate(text) {
return (/^[a-zA-Z]+$/g).test(text);
};

function onlyNumberSymbolValidate(text) {
return (/^[0-9_!"#%&+*/]*$/).test(text);
};

function letterAndNumberValidate(text) {
    return (/[^A-Za-z0-9]+/).test(text);
}

function validateEmail(email) {
    let re = /(.+)@(.+){2,}\.(.+){2,}$/;
    return re.test(String(email).toLowerCase());
};