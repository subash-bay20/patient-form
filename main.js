const button = document.querySelector('button')

button.addEventListener("click", (e) => {
  e.preventDefault()
  let x = document.forms["patientForm"];
  let fname = x['fName'].value;
  let lname = x['lName'].value;
  let dob = x['dob'].value;
  let year = new Date().getFullYear();
  let months = new Date().getMonth();
  let day = new Date().getDate();
  let today = `${year}-0${months + 1}-${day}`
  let contact = x['contact'].value;
  let email = x['email'].value;
  let emergencyFirst = x['emergencyFirst'].value;
  let emergencyLast = x['emergencyLast'].value;
  let emergencyContact = x['emergencyContact'].value;
  if (fname == "" || lname == "" || dob == today || contact == '' || email == "" || emergencyContact == '' || emergencyFirst == '' || emergencyLast == '') {
    alert("Important fields must be filled out");
  } else {
    alert("Form submitted successfully!");
  }
});


