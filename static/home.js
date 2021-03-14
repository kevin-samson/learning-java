let num = 1

function Add1(){
    document.getElementById("here").innerHTML = num++
}

function Reset(){
    num=0
    Add1()
}

const passwordInput = document.getElementById('password-input');
const toggleButton = document.getElementById('toggle-password');

toggleButton.addEventListener('click',() => {
    console.log(passwordInput.type)
    if (passwordInput.type === 'password'){
        passwordInput.type = 'text';
    }else if (passwordInput.type === 'text'){
        passwordInput.type = 'password';
    }
});