function check() {
    const firstName = document.getElementById ("firstName");
    const lastName = document.getElementById ("lastName");
    const date = document.getElementById ("date");
    const email = document.getElementById ("email");
    const password = document.getElementById ("password");
    const password2 = document.getElementById ("password2");

    document.getElementById("errorMessage")
        .innerHTML = "";

    if (firstName.value == "") {
        document.getElementById("errorMessage")
        .innerHTML += "Вы не ввели имя<br>";
    }

    if (lastName.value == "") {
        document.getElementById("errorMessage")
        .innerHTML += "Вы не ввели фамилию<br>";
    }

    if (date.value == "") {
        document.getElementById("errorMessage")
        .innerHTML += "Вы не ввели дату рождения<br>";
    }

    if (email.value == "") {
        document.getElementById("errorMessage")
        .innerHTML += "Вы не ввели email<br>";
    }

    if (password.value == "") {
        document.getElementById("errorMessage")
        .innerHTML += "Вы не ввели пароль<br>";
    }

    if (password2.value == "") {
        document.getElementById("errorMessage")
        .innerHTML += "Вы не подтвердили пароль<br>";
    }

    if (password.value != password2.value) {
        document.getElementById("errorMessage")
        .innerHTML += "Пароли не совпадают!<br>";
    }

    if (firstName.value !== "" && lastName.value !== "" && email.value !== "" && password.value !== "" && password.value == password2.value) {
        document.getElementById("done")
        .innerHTML += `Добро пожаловать, ${firstName.value}!`;
        document.getElementById('firstName').value = "";
        document.getElementById('lastName').value = "";
        document.getElementById('date').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        document.getElementById('password2').value = "";
    }
}