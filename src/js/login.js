<<<<<<< HEAD
const form = {
  email: document.getElementById('email'),
  password: document.getElementById('password'),
  button: document.querySelector('.btn'),
}

function checkForm() {
  const email = form.email.getElementsByTagName('input')[0].value;
  const password = form.password.getElementsByTagName('input')[0].value;

  if (email && password) {
    form.button.classList.remove('disable');
  } else {
    form.button.classList.add('disable');
  }
}

function handleInput(e, name) {
  const { value } = e.target;

  if (value) {
    form[name].classList.add('filed');  
  } else {
    form[name].classList.remove('filed');
  }

  checkForm();
};

form.email.oninput = (e) => handleInput(e, 'email');
form.password.oninput = (e) => handleInput(e, 'password');
form.button.onclick = () => alert('вы вошли');
=======
const form = {
  email: document.getElementById('email'),
  password: document.getElementById('password'),
  button: document.querySelector('.btn'),
}

function checkForm() {
  const email = form.email.getElementsByTagName('input')[0].value;
  const password = form.password.getElementsByTagName('input')[0].value;

  if (email && password) {
    form.button.classList.remove('disable');
  } else {
    form.button.classList.add('disable');
  }
}

function handleInput(e, name) {
  const { value } = e.target;

  if (value) {
    form[name].classList.add('filed');  
  } else {
    form[name].classList.remove('filed');
  }

  checkForm();
};

form.email.oninput = (e) => handleInput(e, 'email');
form.password.oninput = (e) => handleInput(e, 'password');
form.button.onclick = () => alert('вы вошли');

//абракадабра
>>>>>>> 390e0bdfda92a692ed2ed14db1811261f1fe1e58
