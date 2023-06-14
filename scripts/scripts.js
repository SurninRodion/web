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

  // Открытие формы авторизации
  add_button.addEventListener('click', function () {
    autorizationForm.style.display = 'block';
    overlay.style.display = 'block';
  });
  // Обработка кнопки "крестик" ПОЧЕМУ ТО РЕФРЕШИТ СТРАНИЦУ ПРИ НАЖАТИИ НА ЭТУ КНОПКУ...upd  event.preventDefault(); решило проблему
  autorizationExitButton.addEventListener('click', function () {
    event.preventDefault();
    autorizationForm.style.display = 'none';
    overlay.style.display = 'none';
  });
// переход из формы авторизации в форму входа
  autorizationButtonToLogin.addEventListener('click', function () {
    event.preventDefault();
    autorizationForm.style.display = 'none';
    overlay.style.display = 'block';
    loginForm.style.display = 'block';
  });
// переход из формы авторизации в форму регистрации
  autorizationButtonToRegistration.addEventListener('click', function () {
    event.preventDefault();
    autorizationForm.style.display = 'none';
    overlay.style.display = 'block';
    registrationForm.style.display = 'block';
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
    loginForm.style.display = 'none';
    overlay.style.display = 'block';
    registrationForm.style.display = 'block';
  });
  // Если есть аккаунт - переход на форму входа
  HaveAccount.addEventListener('click', function () {
    event.preventDefault();
    registrationForm.style.display = 'none';
    overlay.style.display = 'block';
    loginForm.style.display = 'block';
  });
  // Кнопка входа в шапке сайта
  header__login_button.addEventListener('click', function () {
    loginForm.style.display = 'block';
    overlay.style.display = 'block';
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
    // Открытие формы входа при нажатии на кнопку "войти" в первой секции сайта
    topBlock_loginButton.addEventListener('click', function () {
      loginForm.style.display = 'block';
      overlay.style.display = 'block';
    });
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

// валидация полей
var signupButton = document.getElementById('signupButton');
// обработчик события на кнопку регистрации
signupButton.addEventListener('click', function(event) {
  event.preventDefault();

  var inputName = document.getElementById('inputName').value;
  var inputLogin = document.getElementById('inputLogin').value;
  var registrationPassword = document.getElementById('registrationPassword').value;
  var registrationPasswordConfirm = document.getElementById('registrationPasswordConfirm').value;

  // проверка на пустой логин, пароль и подтверждение пароля
  if (!inputName || !inputLogin || !registrationPassword ||!registrationPasswordConfirm) {
    alert('Введите имя, логин, пароль и подтверждение пароля');
    return;
  }

  // проверка длины пароля
  if (registrationPassword.length < 8) {
    alert('Пароль должен содержать не менее 8 символов');
    return;
  }

  // проверка на совпадение паролей
  if (registrationPassword !== registrationPasswordConfirm) {
    alert('Пароли не совпадают');
    return;
  }

  // // проверка на существование логина
  // if (checkUsernameExists(inputLogin)) {
  //   alert('Логин уже существует');
  //   return;
  // }

// сохраняем данные формы в куки
// document.cookie = 'name=' + inputName + '; expires=' + new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString();
// document.cookie = 'login=' + inputLogin + '; expires=' + new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString();
// document.cookie = 'password=' + registrationPassword + '; expires=' + new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString();

// // получаем данные из куки
// var name = getCookie('name');
// var login = getCookie('login');
// var password = getCookie('password');

// // заполняем поля формы значениями из куки
// document.getElementById('inputName').value = name;
// document.getElementById('inputLogin').value = login;
// document.getElementById('registrationPassword').value = password;
// document.getElementById('registrationPasswordConfirm').value = password;
  // отправка формы
  registrationForm.submit();
});

  })
