const form = document.getElementById('loginForm');
const login = document.getElementById('login-in');
const password = document.getElementById('password-in');
const error_div = document.getElementById('errorMessage');

//учимся делать новые ветки

form.addEventListener('submit', (e) => {

    let pair = new Object();  //собрать данные для отправки
    pair.login = login.value;
    pair.password = password.value;
    let jsonstr = JSON.stringify(pair)

    let jsonanswer = tempCheckLoginAndPassword(jsonstr);
    let answer = JSON.parse(jsonanswer); //ответ от сервера

    //let answer = checkLoginAndPassword(jsonstr); 

    alert(jsonanswer);
    if(answer.code === '0') { //если все хорошо
        sessionStorage.setItem('GlobalLogin', login.value);
        sessionStorage.setItem('GlobalLevel', answer.level);
        sessionStorage.setItem("GlobalRedirect", true);
        e.preventDefault();    
        if(answer.checked === 'false') {
            window.location.assign("rules-of-usage.html");
        }
        else{
            window.location.assign("data-from-user.html");
        }
        

    }
    else if (answer.code === '1'){
        error_div.innerText = "Неправильный логин";
        e.preventDefault();
    }
    else if (answer.code === '2'){
        error_div.innerText = "Неправильный пароль";
        e.preventDefault();
    }

})

const twoInputs = [login, password];

twoInputs.forEach(input => { //стереть сообщение об ошибке когда исправляют данные
    input.addEventListener('input', () => {
        error_div.innerText = '';
    })
})

async function checkLoginAndPassword(jsonstr){
    //alert(jsonstr); //вывод в браузер что передается

    url = sessionStorage.getItem("GlobalUrl");

    try {
        const response = await fetch(url, { //что тут происходит я сам не знаю
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: jsonstr,
        });
    
        if (!response.ok) {
          throw new Error(`Login failed with status: ${response.status}`);
        }
    
        let authData = await response.json();
        alert(response);
        alert('Authentication successful');
        return authData;
        
        
      } catch (error) {
        console.error('Login error:', error);
        alert("Error");
      }
}

function tempCheckLoginAndPassword(jsonstr){
    alert(jsonstr);
    return tempFunction(jsonstr);
}

function tempFunction(jsonstr) {
    let temp = JSON.parse(jsonstr);
    let obj = new Object();
    if (temp.login === '123' && temp.password === '123') {
        obj.code = '0';
        obj.level = '1';
        obj.checked = 'false';
    }
    else if (temp.login === '321' && temp.password === '321') {
        obj.code = '0';
        obj.level = '2';
        obj.checked = 'true';
    }
    else if (temp.login !== '321' && temp.login !== '123'){
        obj.code = '1';
        obj.level = '';
        obj.checked = '';
    }

    else if (temp.password !== '321' && temp.password !== '123'){
        obj.code = '2';
        obj.level = '';
        obj.checked = '';
    }

    return JSON.stringify(obj);
}
