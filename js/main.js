
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