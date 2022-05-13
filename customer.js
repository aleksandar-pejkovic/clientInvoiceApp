document.getElementById("createCustomerBtn").onclick = function () {s

    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let zip = document.getElementById("zip").value
    let city = document.getElementById("city").value
    let pib = document.getElementById("pib").value
    let mb = document.getElementById("mb").value
    let phone = document.getElementById("phone").value
    let bankAccount = document.getElementById("bankAccount").value
    let email = document.getElementById("email").value

    let customer = {
        name:name, 
        address:address,
        zip:zip,
        city:city,
        pib:pib,
        mb:mb,
        phone:phone,
        bankAccount:bankAccount,
        email:email
    }

    sendHttp(customer)

}

function sendHttp(customer) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/customers/create', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(
        
        customer

    ));
}