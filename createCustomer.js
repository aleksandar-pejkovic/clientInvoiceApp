
document.getElementById("createCustomerBtn").onclick = function () {

    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let zip = document.getElementById("zip").value
    let city = document.getElementById("city").value
    let pib = document.getElementById("pib").value
    let mb = document.getElementById("mb").value
    let phone = document.getElementById("phone").value
    let bankAccount = document.getElementById("bankAccount").value
    let email = document.getElementById("email").value

    fetch("http://localhost:8080/customers/create",{
        method: 'POST',
        body:JSON.stringify({
            name:name,
            address:address,
            zip:zip,
            city:city,
            pib:pib,
            mb:mb,
            phone:phone,
            bankAccount:bankAccount,
            email:email
        }),
        headers:{
            "Content-Type":"application/json; charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json
    })
    
    .then(function(data){
        console.log(data)
        let result = document.getElementById('result')
        result.innerHTML = `<p>The customer ${data.name} is saved</p>`
    })

}
