// content
const sectionAll = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const loginMenu = document.querySelector('.login-menu');
const allItemsArr = [...sectionAll,footer];

// vars
const btnLogin = document.querySelector('.login'); 
const signupSpan = document.querySelector('.signup-span');
const signIn = document.querySelector('.signin-btn');
const signUp = document.querySelector('.signup-btn');
const generatePass = document.querySelector('.generate');
const labelSignup = document.querySelector('.login__right-top');
const loginFormTitle = document.querySelector('.login__form-title');
const forgotPass = document.getElementById('forgot-input');

// forms
const formLogin = document.getElementById('signin-form');
const formSignup = document.getElementById('signup-form');
const forgotForm = document.getElementById('forgot-form');

// inputs sign up
const nameInputSignup = document.getElementById('username-input');
const emailInputSignup = document.getElementById('email-input');
const passwordInputSignup = document.getElementById('password-input');

//forgot password vars
const enterPass = document.getElementById('signin-password-1');
const verifyPass = document.getElementById('signin-password-2');
const changePass = document.getElementById('change-btn');

//input sign in
const nameInputSignin = document.getElementById('signin-name');
const passwordInputSignin = document.getElementById('signin-password');


// check localStorage 

if(localStorage.getItem('auth') != null){
    labelSignup.innerHTML = `
        <p>You are already registered!</p>
    `
}

// Clear content 

btnLogin.addEventListener('click',() => {
    allItemsArr.forEach(item => {
        item.classList.add('hidden');
    });
    loginMenu.style.display = 'grid';
    btnLogin.style.display = 'none';
})

//Sign in

signIn.addEventListener('click',(event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem('auth'));
    
    if(nameInputSignin.value && passwordInputSignin){
        const currentUser = {
            name: nameInputSignin.value,
            password: passwordInputSignin.value
        }

        if(currentUser.name === user.name && currentUser.password === user.password){
           setTimeout(() => {
            formLogin.reset();
            allItemsArr.forEach(item => {
                item.classList.remove('hidden');
            });
            loginMenu.style.display = 'none';   
           },200)
        }
        if(currentUser.name !== user.name){
            nameInputSignin.classList.add('error');
        }
        if(currentUser.password !== user.password){
            passwordInputSignin.classList.add('error');
        }
        if(currentUser.name === user.name){
            nameInputSignin.classList.add('correct');
        }
        if(currentUser.password === user.password){
            passwordInputSignin.classList.add('correct');
        }

        
    }

    
});

// forgot password

forgotPass.addEventListener('click',() => {
    if(localStorage.getItem('auth') != null){
        formLogin.style.display = 'none';
        forgotForm.style.display = 'flex';
    }
});

changePass.addEventListener('click',(event) => {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem('auth'));

    if(enterPass.value && verifyPass.value){
        const newUser = {
            newpass: enterPass.value,
            verifypass:verifyPass.value
        }
        const changeUser = {
            password: enterPass.value,
            email: user.email,
            name: user.name
        }
        
    
        if(newUser.newpass === newUser.verifypass){
            localStorage.removeItem('auth');

            localStorage.setItem('auth',JSON.stringify(changeUser));

            enterPass.classList.add('correct');
            verifyPass.classList.add('correct');


            setTimeout(() => {
                forgotForm.style.display = 'none';
                formLogin.style.display = 'flex';
                formLogin.reset();
            },200)
        }
        if(enterPass.value !== verifyPass.value){
            enterPass.classList.add('error');
            verifyPass.classList.add('error');
        }
    }
})


//Sign up
signupSpan.addEventListener('click',() => {
    formLogin.style.display = 'none';
    formSignup.style.display = 'flex';

    labelSignup.style.display = 'none';
})

generatePass.addEventListener('click',() => {
    generatePassword(16);
});

// generate password
const generatePassword = (length) => {
    let password = '';
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz._ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);

    for(let i = 0; i < length;i++){
        password += chars[array[i] % chars.length];
    }
    passwordInputSignup.value = password;
    return password;
};

signUp.addEventListener('click',(event) => {
    event.preventDefault();

    if(nameInputSignup.value && emailInputSignup.value && passwordInputSignup.value){
        const user = {
            name: nameInputSignup.value,
            email: emailInputSignup.value,
            password: passwordInputSignup.value
        }
        
        if(localStorage.getItem('auth') === null){
            localStorage.setItem('auth',JSON.stringify(user));
        }
        formSignup.reset();
        

        setTimeout(() =>{
            allItemsArr.forEach(item => {
                item.classList.remove('hidden');
            });
            loginMenu.style.display = 'none';
        },200)
    }
})




