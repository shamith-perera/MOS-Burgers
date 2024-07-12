let storedUsersJson = localStorage.getItem('users');
let storedUsers = JSON.parse(storedUsersJson);
document.getElementById('loggedUser').innerText = storedUsers.signedUser;


function navigateToCheckout(){
    window.location.assign('../../pages/cashier/checkout.html');
}
function navigateToOrders(){
    window.location.assign('../../pages/cashier/orders.html');
}
function navigateToCustomers(){
    window.location.assign('../../pages/cashier/customers.html');
}
function navigateToItems(){
    window.location.assign('../../pages/cashier/items.html');
}
function navigateToInventory(){
    window.location.assign('../../pages/cashier/inventory.html');
}
function logOut(){
    storedUsers.signedUser = null; 
    storedUsersJson = JSON.stringify(storedUsers);
    localStorage.setItem('users', storedUsersJson);
    window.open('../../pages/login.html');
    window.close();
}

