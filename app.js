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
            window.open('./pages/cashier/checkout/');
            window.close(); 
        } else {
            openPopup("Invalid Username/Password");
        }
    } else if (selectedOption === "admin") {
        if (checkAdminLogin(username, password)) {
            window.open('./pages/admin/customerOverview.html');
            window.close();  
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
