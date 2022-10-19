const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;


const showMsg = () => {
    if(pass.value.lenght > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special) ) {
        p.textContent = 'Masz bardxo dobre hasło ;D'
        p.style.color = 'Lime'
    }else if (pass.value.lenght > minValue && pass.value.match(letters) && pass.value.match(numbers)){
        p.textContent = 'Masz dobre hasło ;D'
        p.style.color = 'gold'
    }else{
        p.textContent = 'Masz słabe hasło ;D'
        p.style.color = 'red'
    }
}

const checkPassword = () => {
    if(pass.value !== '') {
        showMsg()
    }else{
        p.textContent = 'nie podałeś hasła ...'
        p.style.color = ''
    }
}

pass.addEventListener('keyup' ,checkPassword)