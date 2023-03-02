
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


/*
let form = document.getElementById("form1");
form.addEventListener("submit", handleFormSubmit);
console.log(form.ELEMENT_NODE);

//
function handleFormSubmit(event){
    //просим форму пока не отправлять данные
    event.preventDefault();
    console.log('отправка');
    serializeForm(form)
}
//

function serializeForm(formNode) {
    const {elements} = formNode;
    const data = new FormData();
    Array.from(elements).forEach((Element) =>{
        const {name, value} = Element;
        data.append(name, value);
        console.log({name, value});
    })
    return data;
   
  }

  async function sendData(data){
    return await fetch('/api/apply', {
        method: 'GET',
        Headers: {'Content-type': 'multipart/form-data'},
        body: data,
    })
    }
  async function handleFormSubmit(event){
 
    event.preventDefault();
    const data = serializeForm(event.target);
    const response = await sendData(data);

  }
function onSuccess(formNode){
    alert('Ваша заявка отправлена');
    
}
*/