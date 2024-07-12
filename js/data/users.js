if (!localStorage.getItem('users')) { 
    let users = {
      admins :[{name:"testAdmin",username:"admin",password:"Admin"}],
      cashiers :[{name:"testCashier",username:"cashier",password:"Cashier"}]
    };
    let usersJson = JSON.stringify(users);
    localStorage.setItem('users', usersJson);
  }

function checkAdminLogin(username, password) {
    let storedUsersJson = localStorage.getItem('users');
    let storedUsers = JSON.parse(storedUsersJson);
    const admins = storedUsers.admins;
    for (let i = 0; i < admins.length; i++) {
        if (admins[i].username === username && admins[i].password === password) {
            let userJson = localStorage.getItem('signedUser'); 
            let user = JSON.parse(userJson);
            user.name = admins[i].name; 
            userJson = JSON.stringify(user);
            localStorage.setItem('signedUser', userJson);   
            return true;    
        }
    }
    return false;
}
function checkCashierLogin(username, password) {
    let storedUsersJson = localStorage.getItem('users');
    let storedUsers = JSON.parse(storedUsersJson);
    const cashiers = storedUsers.cashiers;
    for (let i = 0; i < cashiers.length; i++) {
        if (cashiers[i].username === username && cashiers[i].password === password) {
            let userJson = localStorage.getItem('signedUser'); 
            let user = JSON.parse(userJson);
            user.name = cashiers[i].name; 
            userJson = JSON.stringify(user);
            localStorage.setItem('signedUser', userJson); 
            return true;
        }
    }
    return false;
}
