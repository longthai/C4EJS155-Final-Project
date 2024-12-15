const btnLogin = document.getElementById("btn-login-submit");
const userEmail = document.getElementById("lg-email");
const userPwd = document.getElementById("lg-pwd");

const checkLogin = (e) => {
    e.preventDefault();

    const storedInfo = JSON.parse(localStorage.getItem('userList'));
    const email = userEmail.value.trim();
    const password = userPwd.value.trim();
    let loginSuccessful = false;

    if (email == '' || password == '') {
        window.alert('Please fill the form')
    } else {
        for (let i = 0; i < storedInfo.length; i++) {
            if (email === storedInfo[i].email && password === storedInfo[i].password) {
                loginSuccessful = true;
                break;
            }
        }
    
        if (loginSuccessful) {
            window.location.href = "index.html";
        } else {
            alert('Incorrect email or password.');
        }
    }

    localStorage.setItem('userAuthentication', 'true');
};

btnLogin.addEventListener('click', checkLogin);