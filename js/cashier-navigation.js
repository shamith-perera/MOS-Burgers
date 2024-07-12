let userJson = localStorage.getItem('signedUser'); 
let user = JSON.parse(userJson);
if(user.name===null){
    window.location.assign('../../index.html');
}

document.getElementById('loggedUser').innerText = user.name;


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
    let userJson = localStorage.getItem('signedUser'); 
    let user = JSON.parse(userJson);
    user.name = null; 
    userJson = JSON.stringify(user);
    localStorage.setItem('signedUser', userJson);
    window.location.assign('../../index.html')
}

