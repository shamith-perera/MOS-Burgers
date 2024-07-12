if (!localStorage.getItem('signedUser')) { 
    let user = {name:null};
    let userJson = JSON.stringify(user);
    localStorage.setItem('signedUser', userJson);
}

let userJson = localStorage.getItem('signedUser'); 
let user = JSON.parse(userJson);
user.name = null; 
userJson = JSON.stringify(user);
localStorage.setItem('signedUser', userJson);

document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        validateLogin();
    }
});

function validateLogin() {
    const radioButtons = document.querySelectorAll('input[name="userSelect"]');

    let selectedOption = '';
    radioButtons.forEach(radioButton => {
        if (radioButton.checked) {
            selectedOption = radioButton.value;
        }
    });
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (selectedOption === "cashier") {
        if (checkCashierLogin(username, password)) {
           window.location.assign('./pages/cashier/checkout.html');
        } else {
            openPopup("Invalid Username/Password");
        }
    } else if (selectedOption === "admin") {
        if (checkAdminLogin(username, password)) {
            window.location.assign('./pages/admin/customerOverview.html');
        } else {
            openPopup("Invalid Username/Password");
        }
    } else {
        openPopup("Plese select a user type");
    }


}

function openPopup(msg) {
    document.getElementById('erMsg').innerText = msg
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}
