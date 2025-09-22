const button = document.querySelector('button')

button.addEventListener("click", (e)=> {
  e.preventDefault()
  let x = document.forms["patientForm"];
  let fname = x['fName'].value;
  let lname = x['lName'].value;
  let dob = x['dob'].value;
  let year = new Date().getFullYear();
  let months = new Date().getMonth();
  let day = new Date().getDate();
  let today = `${year}-0${months+1}-${day}`

  console.log(today)
  if (fname == "" || lname == "" || (dob == today )) {
    alert("Important fields must be filled out");
  }else{
    alert("Form submitted successfully!");
  }
});


