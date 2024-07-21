class Customer {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }

    getDetailsAsDiv() {
        let div = document.createElement('div');
        div.className = 'customer-details-card';
        div.id = `customer-${this.number}`;
        div.innerHTML = `<div id="card-number-${this.number}" class=in-card-number></div>`
        div.innerHTML += `<div class="card-details"><div id="name-${this.number}" class="in-card-detail" >${this.name}</div><div id="phoneNumber-${this.number}" class="in-card-detail">${this.number}</div></div>`;
        let button = document.createElement('button');
        button.innerHTML = 'View';
        button.className = `in-card-view-btn`;
        button.addEventListener('click', () => {
            this.showDetailsPopup();
        });
        div.appendChild(button);
        return div;
    }

    showDetailsPopup() {
        let overlay = document.createElement('div');
        overlay.className = 'overlay'
        let popup = document.createElement('div');
        popup.className = 'popup';
        popup.id = 'details-popup';

        let nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.value = this.name;
        nameInput.id = 'edit-name';

        let numberInput = document.createElement('input');
        numberInput.type = 'text';
        numberInput.value = this.number;
        numberInput.id = 'edit-number';
        numberInput.disabled = true;

        let saveButton = document.createElement('button');
        saveButton.innerHTML = 'Save';
        saveButton.addEventListener('click', () => {
            let newName = nameInput.value;
            let newNumber = numberInput.value;
            this.updateDetails(newName, newNumber);
            overlay.style.display = 'none';
            openMsgPopup("Sucess","Contact Updated Successfully !!!!")

        });

        let closeButton = document.createElement('button');
        closeButton.innerHTML = 'Close';
        closeButton.addEventListener('click', () => {
            overlay.style.display = 'none';
        });

        let deleteButton = document.createElement('button')
        deleteButton.innerHTML = 'Delete';
        deleteButton.addEventListener('click', () => {
            overlay.style.display = 'none';
            openMsgPopup("Sucess","Contact Deleted Successfully !!!!")
            document.getElementById('search-bar').value = '';
            this.deleteCustomer();
            displayAllCustomers();
        });
        popup.appendChild(nameInput);
        popup.appendChild(numberInput);
        popup.appendChild(saveButton);
        popup.appendChild(closeButton);
        popup.appendChild(deleteButton);
        overlay.appendChild(popup);
        document.body.appendChild(overlay);
        overlay.style.display = 'flex';
    }

    deleteCustomer() {
        let div = document.getElementById(`customer-${this.number}`);
        div.remove();
        let cutomersJson = localStorage.getItem('cutomers');
        let cutomers = JSON.parse(cutomersJson);
        let storedCustomers = cutomers.map(customer => new Customer(customer.name, customer.number));
        let customersIndex = storedCustomers.findIndex(user => user.name === this.name && user.number === this.number);
        storedCustomers.splice(customersIndex, 1);
        localStorage.setItem('cutomers', JSON.stringify(storedCustomers));
    }

    updateDetails(newName, newNumber) {
        document.getElementById(`name-${this.number}`).innerHTML = `${newName}`;
        document.getElementById(`phoneNumber-${this.number}`).innerHTML = `${newNumber}`;
        let cutomersJson = localStorage.getItem('cutomers');
        let cutomers = JSON.parse(cutomersJson);
        let storedCustomers = cutomers.map(customer => new Customer(customer.name, customer.number));
        let customersIndex = storedCustomers.findIndex(user => user.name === this.name && user.number === this.number);
        if (customersIndex !== -1) {
            this.name = newName;
            this.number = newNumber;
            storedCustomers[customersIndex] = this;
        }
        localStorage.setItem('cutomers', JSON.stringify(storedCustomers));
    }
}

if (!localStorage.getItem('cutomers')) {
    let cutomers = [new Customer("Shamith", "0772045471", new Customer("Jehan", "0775863625")), new Customer("Perera", "0342252024"), new Customer("Kulitha", "0716859077"), new Customer("Emindu", "0772528231")];
    let cutomersJson = JSON.stringify(cutomers);
    localStorage.setItem('cutomers', cutomersJson);
}






function displayAllCustomers() {
    document.getElementById("customer-scroll-content").replaceChildren();
    let cutomersJson = localStorage.getItem('cutomers');
    let storedCustomersData = JSON.parse(cutomersJson);
    let storedCustomers = storedCustomersData.map(customer => new Customer(customer.name, customer.number));
    let count = 0;
    storedCustomers.forEach(customer => {
        let customerDiv = customer.getDetailsAsDiv();
        document.getElementById("customer-scroll-content").appendChild(customerDiv);
        count++;
        document.getElementById(`card-number-${customer.number}`).innerHTML = `${count}`; 
    });

}

document.getElementById('search-bar').addEventListener('input', function (event) {
    searchCustomer();
});

function searchCustomer() {
    
    document.getElementById("customer-scroll-content").replaceChildren();
    let searchValue = document.getElementById('search-bar').value;
    if (!searchValue) {
        displayAllCustomers();
    } else {
        getSearchResultsFor(searchValue);
    }
}

function getSearchResultsFor(searchValue) {
    let cutomersJson = localStorage.getItem('cutomers');
    let storedCustomersData = JSON.parse(cutomersJson);
    let storedCustomers = storedCustomersData.map(customer => new Customer(customer.name, customer.number));
    let resultsCount = 0;
    storedCustomers.forEach(customer => {
        if (customer.name.toLowerCase().includes(searchValue.toLowerCase()) || customer.number.toLowerCase().includes(searchValue.toLowerCase())) {
            let customerDiv = customer.getDetailsAsDiv();
            document.getElementById("customer-scroll-content").appendChild(customerDiv);
            resultsCount++;
            document.getElementById(`card-number-${customer.number}`).innerHTML = `${resultsCount}`;    
        }

    });
    if (resultsCount === 0) {
        let h2 = document.createElement('h2');
        h2.textContent = 'No matches Found';
        document.getElementById("customer-scroll-content").appendChild(h2);
    }

}

displayAllCustomers();



const addCustomerBtn = document.getElementById('add-newcustomer-btn');
const overlay = document.getElementById('overlay');
const saveCustomerBtn = document.getElementById('save-customer-btn');
const cancelBtn = document.getElementById('cancel-btn');
const customerScrollContent = document.getElementById('customer-scroll-content');


addCustomerBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
});


cancelBtn.addEventListener('click', () => {
    document.getElementById('customer-name').value = '';
    document.getElementById('customer-phone').value = '';
    document.getElementById('display-details').innerHTML = ``;
    overlay.style.display = 'none';
});


saveCustomerBtn.addEventListener('click', () => {
    const name = document.getElementById('customer-name').value;
    const phone = document.getElementById('customer-phone').value;
    if(name === ''){
        document.getElementById('display-details').innerHTML = `Name Can not be Empty`;
    }else if(isNumberNotValid(phone)){
        document.getElementById('display-details').innerHTML = `Number not Valid`;
    }else if(isNumberExist(phone)){
        document.getElementById('display-details').innerHTML = `Number Already Exist`;
    }else{
        let cutomersJson = localStorage.getItem('cutomers');
        let cutomers = JSON.parse(cutomersJson);
        let storedCustomers = cutomers.map(customer => new Customer(customer.name, customer.number));
        storedCustomers.push(new Customer(name,phone));
        localStorage.setItem('cutomers', JSON.stringify(storedCustomers));
         document.getElementById('search-bar').value = '';
        displayAllCustomers();
        document.getElementById('customer-name').value = '';
        document.getElementById('customer-phone').value = '';
        overlay.style.display = 'none';
        openMsgPopup("Success","Customer Added Succesfully !!!!")
    }
   
});


function isNumberExist(phone){
    let cutomersJson = localStorage.getItem('cutomers');
    let storedCustomersData = JSON.parse(cutomersJson);
    let storedCustomers = storedCustomersData.map(customer => new Customer(customer.name, customer.number));
    for (let customer of storedCustomers) {
        if (customer.number === phone) {
          return true;
        }
      }
    return false;
}

function isNumberNotValid(number) {
    if (number.length !== 10) {
        return true;
    }
    if (!/^\d+$/.test(number)) {
        return true;
    }
    return false;
}


function openMsgPopup(title,msg) {
    document.getElementById('msg-title').innerText = title;
    document.getElementById('popup-msg').innerText = msg;
    document.getElementById('msg-overlay').style.display = 'flex';
}

function closeMsgPopup() {
    document.getElementById('msg-overlay').style.display = 'none';
}








