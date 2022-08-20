let data = [];

const select = (selector) => document.querySelector(selector);

const firstname = select("#firstname");
const lastname = select("#lastname");
const email = select("#email");
const address = select("#address");
const phonenum = select("#phonenum");

function store() {
  const data = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    address: address.value,
    phonenum: phonenum.value
  };

  localStorage.setItem(data.email, JSON.stringify(data));

  window.location.replace("details.html");
}

function retrieve() {
  const data = localStorage.getItem(email.value);

  if (data) {
    select("#result").innerHTML = data;
  } else {
    alert("No data found for this email");
  }
}
