
class Admin {
    username;
    password;
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
}

class Cashier {
    username;
    password;
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
}


const admins = [new Admin("admin", "Admin")];
const cashiers = [new Cashier("cashier", "cashierp")];

function checkAdminLogin(username, password) {
    for (let i = 0; i < admins.length; i++) {
        if (admins[i].getUsername() === username && admins[i].getPassword() === password) {
            return true;
        }
    }
    return false;
}
