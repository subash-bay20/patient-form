const button = document.querySelector('button');

button.addEventListener('click', () => {
  let required = document.querySelectorAll('input[required]');
  let selects = document.querySelectorAll('select[required]');

  // for input required field
  required.forEach(input => {
    let errorEl = input.parentElement.querySelector('.error');
    if (input.value == '') {
      errorEl.innerHTML = 'Enter all required fields';
    } else{
      errorEl.innerHTML = '';
    }
  });

  // for select required field
  selects.forEach(select => {
    let errorEl = select.parentElement.querySelector('.error');
    if (select.value == 'Please select') {
      errorEl.innerHTML = 'Enter all required fields';
    } else {
      errorEl.innerHTML = '';
    }
  });

  // For Date-of-Birth
  let dob = document.querySelector('input[type="date"]');
    let year = new Date().getFullYear();
    let months = new Date().getMonth();
    let month = (months < 10) ? `0${months + 1}` : `${months}+1`;
    let days = new Date().getDate();
    let day = (days < 10) ? `0${days}` : `${days}`;
    let today = `${year}-${month}-${day}`;
  if (dob.value > today) {
       dob.nextElementSibling.innerHTML = `Enter correct DOB please`;
  }
  
  // for contact valdation from regex
  function isValidPhoneNumber(phone) {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  }

  let contacts = document.querySelectorAll('input[type="tel"]');
  contacts.forEach(contact => {
    if(contact.value){
      if (isValidPhoneNumber(contact.value) == true){
        contact.nextElementSibling.innerHTML='';
    }else{
    contact.nextElementSibling.innerHTML='Invalid contact';
    }
  }
  });
  

  // For Email validation from regex
  let email = document.querySelector('input[type="email"]');
  if(email.value){
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email.value)) {
      email.nextElementSibling.innerHTML = `Invalid Email`
    }
  }
      
});