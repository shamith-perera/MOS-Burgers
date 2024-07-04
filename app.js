
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
        alert(`Selected option: cashier`);
    } else if (selectedOption === "admin") {
        console.log(checkAdminLogin(username, password));
        if (checkAdminLogin(username, password)) {
            alert(`Successfull admin login`);
        } else {
            alert(`admin login failed`);
        }
    } else {
        alert(`please select a user type`);
    }


}
