const portfolio = [
  { 
    "title": "botsMessagesMonitoring",
    "hrefSite": "https://klevtsovaelena.github.io/OnlineShop2/site/client/",
    "hrefRepository": "https://github.com/KlevtsovaElena/OnlineShop2.git",
    "description": "Мониторинг сообщений ботов Telegram. Серверная часть написана на Go. Фронт реализован в 3 видах: <a href='https://klevtsovaelena.github.io/OnlineShop2/site/client/'>на чистом JS</a>, c использованием <a href=''>Vue3</a> и с использованием <a href=''>React</a>. Внимание: для рабты используется Docker!",
    "image": "url('img/works/bot.png')"
  },
  { 
    "title": "laravel",
    "hrefSite": "https://klevtsovaelena.github.io/LaravelProject/my-project/public/",
    "hrefRepository": "https://github.com/KlevtsovaElena/LaravelProject.git",
    "description": "SPA-приложение с каталогом новостей с использованием фреймворка Laravel. Внимание: для рабты используется Docker!",
    "image": "url('img/works/laravel.png')"
  },
  { 
      "title": "onlineShop",
      "hrefSite": "https://klevtsovaelena.github.io/OnlineShop2/site/client/",
      "hrefRepository": "https://github.com/KlevtsovaElena/OnlineShop2.git",
      "description": "В РАБОТЕ!!! Совместный проект! Интернет-магазин с авторизацией, личным кабинетом, отправкой заказа из корзины и админ-панелью. Серверная часть написана на PHP с использованием классов. Отправка GET и POST http-запросов. База данных - MySQL. Внимание: для рабты используется Docker!",
      "image": "url('img/works/onlineShop.png')"
  },
  { 
      "title": "messenger",
      "hrefSite": "https://klevtsovaelena.github.io/ChinaTelegramV2_0/",
      "hrefRepository": "https://github.com/KlevtsovaElena/ChinaTelegramV2_0.git",
      "description": "Совместный проект! Создание чата для нескольких пользователей, <br> отправка GET-запросов, обработка их PHP <br>с использованием веб-сервиса Replit.",
      "image": "url('img/works/chinaTelegram2.png')"
  },
  { 
      "title": "taskBoard",
      "hrefSite": "https://klevtsovaelena.github.io/TaskBoard/",
      "hrefRepository": "https://github.com/KlevtsovaElena/TaskBoard.git",
      "description": "Создание Taskboard на JS для записи задач. <br>Рассылка уведомлений с помощью Телеграм-бота, <br>смена фона, сохранение пользовательских настроек в localStorage.",
      "image": "url('img/works/taskBoard.png')"
  },
  { 
      "title": "SPA",
      "hrefSite": "https://klevtsovaelena.github.io/SPAwithAPI/",
      "hrefRepository": "https://github.com/KlevtsovaElena/SPAwithAPI.git",
      "description": "Отрисовка каталога Интернет-магазина, карточки товара и <br>доп страниц с помощью шаблонов HTML <br>и использования их в js.",
      "image": "url('img/works/SPA.png')"
  },
  { 
      "title": "usingAPI",
      "hrefSite": "https://klevtsovaelena.github.io/UsingAPI/",
      "hrefRepository": "https://github.com/KlevtsovaElena/UsingAPI.git",
      "description": "Отрисовка каталога Интернет-магазина<br> в js при помощи обратных ``<br>с использованием API.",
      "image": "url('img/works/usingAPI.png')"
  }, 
  { 
      "title": "js-demo",
      "hrefSite": "https://klevtsovaelena.github.io/JSChangeCSSProperty",
      "hrefRepository": "https://github.com/KlevtsovaElena/JSChangeCSSProperty.git",
      "description": "Демонстарция возможностей JavaScript.<br> Изменений свойств CSS и HTML.",
      "image": "url('img/works/JSdemo.png')"
  }, 
  { 
      "title": "responsiveBootstrap",
      "hrefSite": "https://klevtsovaelena.github.io/responsive-bootstrap",
      "hrefRepository": "https://github.com/KlevtsovaElena/responsive-bootstrap.git",
      "description": "Использование возможностей bootstrap.<br> Bootstrap-карусель.",
      "image": "url('img/works/responsive-bootstrap.png')"
  }, 
  { 
      "title": "responsiveBootstrap",
      "hrefSite": "https://klevtsovaelena.github.io/animation-demo",
      "hrefRepository": "https://github.com/KlevtsovaElena/animation-demo.git",
      "description": "Сайт-слайдер. Использование анимаций.<br> Затемнение элементов и трансформация hover.",
      "image": "url('img/works/animation-demo.png')"
  }, 
  { 
      "title": "wallpaper",
      "hrefSite": "https://klevtsovaelena.github.io/wallpaper/",
      "hrefRepository": "https://github.com/KlevtsovaElena/wallpaper.git",
      "description": "Сайт с обоями для рабочего стола 1920Х1080.<br> Смена цвета при наведении.<br> Открытие ссылок в новом окне.",
      "image": "url('img/works/wallpaper.png')"
  }
]

const tmplWorkItem = document.getElementById("tmpl-work-item").innerHTML;
const containerWork = document.getElementById("container-works");



renderPortfolio();

//отрисовка работ
function renderPortfolio(){

  console.log("количество элементов " + portfolio.length)

  for(let i = 0; i < portfolio.length; i++) {
    containerWork.innerHTML += tmplWorkItem .replace('${hrefSite}', portfolio[i].hrefSite)
                                            .replace('${hrefRepository}',  portfolio[i].hrefRepository)
                                            .replace('${description}',  portfolio[i].description)
                                            .replace('${image}',  portfolio[i].image);
  }
}

//отправка сообщения
function sendMessage(){
    //предотвратить дефолтные действия, отмена отправки формы
    event.preventDefault(); 

    //найти все инпуты и получить данные из каждого
    let mail = event.target.closest('.forma').querySelectorAll('input')[1];
    let text = event.target.closest('.forma').querySelector('textarea');
    let info = event.target.closest('.forma').querySelector('.info');
    info.innerHTML = "";

    if (text.value == ""){
      info.innerHTML = "Введите сообщение";
      return};

    let message = 'mail ' + mail.value + '%0D%0A оставил сообщение %0D%0A' + text.value;

    let requestObj = new XMLHttpRequest();
    requestObj.open('GET', 'https://api.telegram.org/bot5762215975:AAFTUVjFrf4pwSEQakOTE-RpYusGBWNZe5U/sendMessage?chat_id=1752911328&text=' + message, false);
    requestObj.send();
console.log(requestObj.responseText);

mail.value = "";
text.value = "";

}
