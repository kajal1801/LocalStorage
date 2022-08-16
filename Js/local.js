function store(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var address = document.getElementById("address").value;
    var phonenum = document.getElementById("phonenum").value;

    localStorage.setItem("firstname",firstname);

    localStorage.setItem("lastname", lastname);
    localStorage.setItem("address",address);
    localStorage.setItem("PhoneNumber", phonenum);
}
