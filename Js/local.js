let data = [];
function store(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var phonenum = document.getElementById("phonenum").value;

    localStorage.setItem("firstname",firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("email", email);
    localStorage.setItem("address",address);
    localStorage.setItem("phonenum", phonenum);

    data.push(
        {
            firstname: firstname,
            lastname: lastname,
            email: email,
            address: address,
            phonenum: phonenum
        }
    );
}

function retrieve(){
    let email = document.getElementById(email);
    data.forEach(element => {
        if(element.email === email){
            document.getElementById("result").innerHTML = element;
        }
    });
}