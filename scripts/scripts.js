// Отображает кнопку при прокрутке до конца страницы
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  var button = document.getElementById("scrollup-button");

  // Вычисляем высоту окна браузера и высоту всего документа
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;

  // Проверяем, находится ли пользователь в самом конце страницы
  if (windowHeight + window.pageYOffset >= documentHeight) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// Перемещает пользователя на верх страницы при нажатии на кнопку
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

}

// анимация шапки (фон хэдэра при скроле)
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  if (header) {
    let scrollpos = window.scrollY

    const scrollChange = header.clientHeight;

    const add_class_on_scroll = () => header.classList.add('header--bg')
    const remove_class_on_scroll = () => header.classList.remove('header--bg')

    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY;

      if (scrollpos >= scrollChange) { add_class_on_scroll() }
      else { remove_class_on_scroll() }
    })
  }
});

// покраска сердечка и счетчик
document.addEventListener('DOMContentLoaded', function () {
  const btnLike = document.querySelector('.button_fav');
  const outputLike = document.querySelector('.recipe-of-day__container-fav-text');

  if (btnLike && outputLike) {
    const handleClickLike = () => {
      let countLike = Number(outputLike.textContent);
      if (btnLike.classList.contains('pressed')) {
        outputLike.textContent = countLike - 1;
      } else {
        outputLike.textContent = countLike + 1;
      }

      btnLike.classList.toggle('pressed');
    }

    btnLike.addEventListener('click', handleClickLike);
  }

  // Открытие формы входа при нажатии кнопки "Войти" в шапке сайта
  // обращаемся по id к кнопкам и формам

  // кнопка добавить рецепт
  var add_button = document.getElementById('add_button');

  // форма регистрации
  var registrationForm = document.getElementById('registrationForm');

  // кнопка войти в хэдэре
  var header__login_button = document.getElementById('header__login_button');

  // форма входа
  var loginForm = document.getElementById('loginForm');

  // кнопка выхода из формы входа
  var loginButtonExit = document.getElementById('loginExit');

  // подложка(затемнение фона при открытии любой формы)
  var overlay = document.getElementById('overlay');

  // кнопка отмена на форме входа
  var loginButtonCancel = document.getElementById('loginButtonCancel');

  // кнопка у меня нет аккаунта, которая ведёт на форму регистрации
  var NoAccountButton = document.getElementById('NoAccountButton');

  // кнопка вход, которая ведёт на форму входа из окна авторизации 
  var autorizationButtonToLogin = document.getElementById('autorizationButtonToLogin');

  // кнопка регистрация, которая ведёт на форму регистрации из окна авторизации
  var autorizationButtonToRegistration = document.getElementById('autorizationButtonToRegistration');

  // кнопка выход на окне регистрации
  var registrationButtonExit = document.getElementById('registrationButtonExit');

  // кнопка отмена на окне регистрации
  var registrationButtonCancel = document.getElementById('registrationButtonCancel');

  // кнопка у меня уже есть аккаунт, которая ведёт на форму входа
  var HaveAccount = document.getElementById('HaveAccount');

  // кнопка войти на первой секции страницы, которая ведёт на форму входа
  var topBlock_loginButton = document.getElementById('topBlock_loginButton');

  var signupButton = document.getElementById('signupButton');

  // const addButton = document.querySelector('#add_button');
  
  
  
  // Открытие формы входа при нажатии на кнопку "войти" в первой секции сайта
    topBlock_loginButton.addEventListener('click', function () {
    const popup2 = document.querySelector('.login-window');
    popup2.classList.add('show-popup');
    loginForm.style.display = 'block';
    overlay.style.display = 'block';
    });

   // Кнопка входа в шапке сайта
   header__login_button.addEventListener('click', function () {
    const popup2 = document.querySelector('.login-window');
    popup2.classList.add('show-popup');
    loginForm.style.display = 'block';
    overlay.style.display = 'block';
  });
  // Открытие формы авторизации
  add_button.addEventListener('click', function () {
    const popup = document.querySelector('.authorization-window');
    popup.classList.add('show-popup');
    autorizationForm.style.display = 'block';
    overlay.style.display = 'block';
  });
  // Обработка кнопки "крестик" ПОЧЕМУ ТО РЕФРЕШИТ СТРАНИЦУ ПРИ НАЖАТИИ НА ЭТУ КНОПКУ...upd  event.preventDefault(); решило проблему
  autorizationExitButton.addEventListener('click', function () {
    event.preventDefault();
    autorizationForm.style.display = 'none';
    overlay.style.display = 'none';
    popup.classList.remove('show-popup');
  });
  // переход из формы авторизации в форму входа
  autorizationButtonToLogin.addEventListener('click', function () {
    event.preventDefault();
    autorizationForm.style.display = 'none';
    overlay.style.display = 'block';
    loginForm.style.display = 'block';
    popup.classList.remove('show-popup');
  });
  // переход из формы авторизации в форму регистрации
  autorizationButtonToRegistration.addEventListener('click', function () {
    const popup3 = document.querySelector('.registration-window');
    popup3.classList.add('show-popup');
    event.preventDefault();
    autorizationForm.style.display = 'none';
    overlay.style.display = 'block';
    registrationForm.style.display = 'block';
    popup.classList.remove('show-popup');
  });

   // Обработка кнопки "крестик"
   registrationButtonExit.addEventListener('click', function () {
    registrationForm.style.display = 'none';
    overlay.style.display = 'none';
  });
  // обработка кнопки "отмена"
  registrationButtonCancel.addEventListener('click', function () {
    registrationForm.style.display = 'none';
    overlay.style.display = 'none';
  });
  // Если еще нет аккаунта - переход на форму регистрации
  NoAccountButton.addEventListener('click', function () {
    event.preventDefault();
    const popup3 = document.querySelector('.registration-window');
    popup3.classList.add('show-popup');
    loginForm.style.display = 'none';
    overlay.style.display = 'block';
    registrationForm.style.display = 'block';
  });
  // Если есть аккаунт - переход на форму входа
  HaveAccount.addEventListener('click', function () {
    event.preventDefault();
    const popup2 = document.querySelector('.login-window');
    registrationForm.style.display = 'none';
    overlay.style.display = 'block';
    loginForm.style.display = 'block';
    popup2.classList.add('show-popup');
  });
 
  // Обработка кнопки "крестик"
    loginButtonExit.addEventListener('click', function () {
      loginForm.style.display = 'none';
      overlay.style.display = 'none';
    });
    // обработка кнопки "отмена"
    loginButtonCancel.addEventListener('click', function () {
      loginForm.style.display = 'none';
      overlay.style.display = 'none';
    });
    //////////////////////////////////////////////////////////////////////////
    
    
    // крестик или кнопка закрыть
    loginButtonExit.addEventListener('click', function () {
      loginForm.style.display = 'none';
      overlay.style.display = 'none';
    });

  // Обработка кнопки "крестик"
  loginButtonExit.addEventListener('click', function () {
    loginForm.style.display = 'none';
    overlay.style.display = 'none';
  });
  // обработка кнопки "отмена"
  loginButtonCancel.addEventListener('click', function () {
    loginForm.style.display = 'none';
    overlay.style.display = 'none';
  });

// Определяем элементы для отправки формы и валидации
const form = document.querySelector('#registrationForm');
const nameInput = document.getElementById('inputName');
const loginInput = document.getElementById('inputLogin');
const passwordInput = document.getElementById('registrationPassword');
const passwordConfirmInput = document.getElementById('registrationPasswordConfirm');

// Функция для установки куки
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Функция для сохранения формы в куки
function saveCookies() {
  setCookie('name', nameInput.value, 1);
  setCookie('login', loginInput.value, 1);
  setCookie('registrationPassword', passwordInput.value, 1);
  setCookie('registrationPasswordConfirm', passwordConfirmInput.value, 1);
}
// Функция для получения куки
function getCookie(name) {
  const nameEQ = name + "=";
  const cookiesArray = document.cookie.split(';');
  for (let i = 0; i < cookiesArray.length; i++) {
    let c = cookiesArray[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Функция для загрузки формы из куки
function loadCookies() {
  nameInput.value = getCookie('name') || '';
  loginInput.value = getCookie('login') || '';
  passwordInput.value = getCookie('password') || '';
  passwordConfirmInput.value = getCookie('passwordConfirm') || '';
}
// Вызываем функцию загрузки формы при загрузке страницы
window.addEventListener('DOMContentLoaded', loadCookies);

// Функция для валидации имени
function validateName() {
  if (!nameInput.value) {
  alert('Введите имя');
  return false;
  } else if (!/^[a-zA-Z]+$/.test(nameInput.value)) {
  alert('Имя должно содержать только буквы');
  return false;
  }
  return true;
  }

 // Функция для валидации логина
function validateLogin() {
  if (!loginInput.value) {
  alert('Введите логин');
  return false;
  } else if (!loginInput.value.includes('@')) {
  alert('Логин должен содержать символ @');
  return false;
  } else if (!/^[^@]+@[^@]+.[a-zA-Z]{2,}$/.test(loginInput.value)) {
  alert('Логин должен быть в формате example@domain.com');
  return false;
  }
  return true;
  }

 // Функция для валидации пароля
function validatePassword() {
if (passwordInput.value.length < 8) {
alert('Пароль должен содержать минимум 8 символов');
return false;
}
return true;
}

// Функция для валидации подтверждения пароля
function validatePasswordConfirm() {
if (passwordInput.value !== passwordConfirmInput.value) {
alert('Пароли не совпадают');
return false;
}
return true;
}

// Функция для вывода данных
function displayData() {
const data = {
name: nameInput.value,
login: loginInput.value,
};
// динамическое обновление содержимого
document.getElementById('registrationResult').innerHTML = `
  <h2>Результат регистрации</h2>
  <ul>
    <li><span>Имя:</span> ${data.name}</li>
    <li><span>Логин:</span> ${data.login}</li>
  </ul>
`;
}

// Функция для обработки отправки формы
function SubmitForm(event) {
  event.preventDefault();
  saveCookies();
  
  // Вызов всех функций валидации
  const isNameValid = validateName();
  const isLoginValid = validateLogin();
  const isPasswordValid = validatePassword();
  const isPasswordConfirmValid = validatePasswordConfirm();
  
  // Если все поля прошли валидацию, вывести данные о регистрации
  if (isNameValid && isLoginValid && isPasswordValid && isPasswordConfirmValid) {
  displayData();
  form.reset();
  }
  }
  // Вызываем функцию отправки формы 
  form.addEventListener('submit', SubmitForm);
})

