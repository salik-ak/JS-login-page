let usernameInput = document.getElementById('username');
let passwordInput = document.querySelector('#password');
let usernameMsg =document.getElementById('usernameMsg');
let passwordMsg = document.getElementById('passwordMsg');

let usernameOk = false;
let passwordOk = false;



function usernameHandler(){
    let userValue = event.target.value;
    if (userValue.length < 5 ){
        usernameMsg.innerHTML = 'atleast 5 characters are requerd';
    }else{
        usernameMsg.innerHTML = '';
        usernameOk = true;
    }
}
function passwordHandler(){
    let passwordValue = event.target.value;
    if (passwordValue.length < 8){
        passwordMsg.innerHTML = 'atleast 8 charcters must have';
    }else{
        passwordMsg.innerHTML= '';
        passwordOk =true;
    }
    console.log(event.target.value)
}
function submitHandler(){
    event.preventDefault(); 
    if (usernameOk && passwordOk){
        usernameInput.style.border = '3px solid green';
        passwordInput.style.border = '3px solid green';
    }else{
        usernameInput.style.border = '3px solid red';
        passwordInput.style.border = '3px solid red';
    }
}
















// let usernameInput = document.getElementById('username');
// let passwordInput = document.getElementById('password');
// let usernameMsg = document.getElementById('username-msg');
// let passwordMsg = document.getElementById('password-msg');

// let usernameOk = false;
// let passwordOk = false;

// function usernameHandler() {
//     let userValue = event.target.value;
//     if (userValue.length < 5) {
//         usernameMsg.innerHTML = 'Atleast 5 characters are required';
//     } else {
//         usernameOk = true;
//         usernameMsg.innerHTML = '';
//     }
// }

// function passwordHandler() {
//     let passValue = event.target.value;
//     if (passValue.length < 8) {
//         passwordMsg.innerHTML = 'Atleast 8 characters are required';
//     } else {
//         passwordOk = true;
//         passwordMsg.innerHTML = '';
//     }
// }

// function submitHandler() {
//     event.preventDefault();
//     if (usernameOk && passwordOk) {
//         usernameInput.style.border = '2px solid green';
//         passwordInput.style.border = '2px solid green'
//     } else {
//         usernameInput.style.border = '2px solid red';
//         passwordInput.style.border = '2px solid red'
//     }
// }