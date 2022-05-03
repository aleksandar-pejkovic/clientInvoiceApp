
document.getElementById("createCustomerBtn").onclick = function () {
    $.ajax({
        type: "POST",
        url: "https://localhost:8080/customers/create",
        data: `{
      "name": "asfa",
      "pib": "1515323",
    }`,
        success: function (result) {
            console.log(result);
        },
        dataType: "json"
    });
}
