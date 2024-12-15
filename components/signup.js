// Saving user input into local storage
const signupForm = document.getElementById('signup-form');
const signupName = document.getElementById('su-name');
const signupEmail = document.getElementById('su-email');
const signupPwd = document.getElementById('su-pwd');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let user = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPwd.value,
    };

    if (signupName.value === '' || signupEmail.value === '' || signupPwd.value === '') {
        window.alert('Fill the form');
    } else {
        let userList = JSON.parse(localStorage.getItem('userList')) || [];
        
        userList.push(user);
        localStorage.setItem('userList', JSON.stringify(userList));

        document.forms[0].reset();
        window.location.href = "index.html";
    }
    localStorage.setItem('userAuthentication', 'true');
});
