if (!localStorage.getItem('users')) { 
    let users = {
      admins :[{username:"admin",password:"Admin"}],
      cashiers :[{username:"cashier",password:"Cashier"}]
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
            return true;
        }
    }
    return false;
}
