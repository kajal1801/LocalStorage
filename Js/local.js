function store(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var phonenum = document.getElementById("phonenum").value;

    let data = [
        first = {
            firstname: "Kajal",
            lastname: "Jaiswal",
            email: "Kj@gmail.com",
            address: "Howrah, WestBengal",
            phonenum: 9876543210
        },
        second = {
            firstname: "Prachi",
            lastname: "Kumari",
            email: "Pk@gmail.com",
            address: "Ranchi, Jharkhand",
            phonenum: 8765432109
        },
        third = {
            firstname: "Vibhu",
            lastname: "Pandey",
            email: "Vp@gmail.com",
            address: "Patna, Bihar",
            phonenum: 7654321098
        },
        fourth = {
            firstname: "Manish",
            lastname: "Barnwal",
            email: "Mb@gmail.com",
            address: "Barrackpore, WestBengal",
            phonenum: 6543210987
        },
        fifth = {
            firstname: "Shubham",
            lastname: "Tribedi",
            email: "St@gmail.com",
            address: "Sauporji, WestBengal",
            phonenum: 5432109876
        },
        sixth = {
            firstname: "Isha",
            lastname: "Khanna",
            email: "Ik@gmail.com",
            address: "Kestopur, WestBengal",
            phonenum: 4321098765
        },
        seventh = {
            firstname: "Pawan",
            lastname: "Kumar",
            email: "Pak@gmail.com",
            address: "Begusarai, Bihar",
            phonenum: 3210987654
        },
        eigth = {
            firstname: "Sagnik",
            lastname: "Mitra",
            email: "Sm@gmail.com",
            address: "Burdwan, WestBengal",
            phonenum: 2109876543
        },
        nineth = {
            firstname: "Sanmoy",
            lastname: "Dam",
            email: "Sd@gmail.com",
            address: "Circus, WestBengal",
            phonenum: 1098765432
        },
        tenth = {
            firstname: "Shubham",
            lastname: "Kumar",
            email: "Sk@gmail.com",
            address: "Patna, Bihar",
            phonenum: 9876504321
        },
    ];

    localStorage.setItem("firstname",firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("email", email);
    localStorage.setItem("address",address);
    localStorage.setItem("phonenum", phonenum);

    data.forEach(element => {
        if(localStorage.email === element.email){
            document.getElementById("result").innerHTML = element;
            return element;
        }
    });
}
