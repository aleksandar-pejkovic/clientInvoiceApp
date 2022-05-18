
window.onload = function () {

    sendRequest()

}

const sendRequest = function () {
    let url
    var path = window.location.pathname;
    var page = path.split("/").pop();


    let invoicePage = page.localeCompare("invoices.html")
    let customersPage = page.localeCompare("customers.html")
    let productsPage = page.localeCompare("products.html")
    let itemsPage = page.localeCompare("showInvoice.html")

    if (invoicePage == 0) {
        url = 'http://localhost:8080/invoices/listAll'
    } else if (customersPage == 0) {
        url = 'http://localhost:8080/customers/listAll'
    } else if (productsPage == 0) {
        url = 'http://localhost:8080/products/listAll'
    } else {
        let invoiceName = prompt("Enter invoice name:")
        url = 'http://localhost:8080/items/list/' + invoiceName
    }

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState != 4) return;

        if (this.status == 200) {
            let obj = JSON.parse(this.responseText);
            console.table(obj)
            createTable(obj)
        }
    };

    xhr.open('GET', url, true);
    xhr.send();
}




const createTable = function (obj) {
    const table = document.createElement("table");
    table.setAttribute('id', 'tbl')
    const header = document.createElement("tr");
    const keys = Object.keys(obj[0])
    console.log(keys)
    for (const key of keys) {
        const th = document.createElement("th");
        th.appendChild(document.createTextNode(key));
        header.appendChild(th);
    }
    table.appendChild(header);
    const len = obj.length
    for (const row of obj) {
        const tr = document.createElement("tr");
        for (const key of keys) {
            const td = document.createElement("td");
            const content = row[key] || ''
            td.appendChild(document.createTextNode(content));
            tr.appendChild(td);
            delete row[key]
        }
        for (const key in row) {
            const th = document.createElement("th");
            th.appendChild(document.createTextNode(key))
            keys.push(key)
            header.appendChild(th);
            const td = document.createElement("td");
            const content = row[key] || ''
            td.appendChild(document.createTextNode(content));
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.getElementById("tblContainer").appendChild(table);
}