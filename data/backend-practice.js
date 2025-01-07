//step - 1 Request created 
const xhr = new XMLHttpRequest();
//step - 2 Setup Request

//Middle Step  to Get the response
xhr.addEventListener('load',() => {
    console.log(xhr.response);
})

xhr.open('GET','https://supersimplebackend.dev');
// step - 3 Send the request
xhr.send();