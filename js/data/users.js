if (!localStorage.getItem('users')) { 
    let users = {
      admins :[{name:"testAdmin",username:"admin",password:"Admin"}],
      cashiers :[{name:"testCashier",username:"cashier",password:"Cashier"}],
      signedUser: null
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
            storedUsers.signedUser = admins[i].name;
            storedUsersJson = JSON.stringify(storedUsers);
            localStorage.setItem('users', storedUsersJson);   
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
            storedUsers.signedUser = cashiers[i].name;
            storedUsersJson = JSON.stringify(storedUsers);
            localStorage.setItem('users', storedUsersJson);  
            return true;
        }
    }
    return false;
}
