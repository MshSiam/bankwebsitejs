document.getElementById('login-submit').addEventListener('click', function(){

    // get email
    const emailField = document.getElementById('user-email')
    const userEmail = emailField.value
    

    // get password
    const emailPassword = document.getElementById('user-password')
    const userPassword = emailPassword.value
    

    // check email & redirect
    if(userEmail == '@gmail.com' && userPassword == 'password'){
        window.location.href = 'bank.html'
    }else{
        console.log('Invalid User')
    }
})



