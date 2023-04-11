const URI = 'api/data';
const name_room = document.getElementById('id_name_room');
const password_room = document.getElementById('id_password_room');
const buttonClick = document.getElementById('add_private');

buttonClick.addEventListener('click',() =>{
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    const postData = {
        password: password_room.value,
        name:name_room.value,
    };

    const myRequest = new Request(URI,{
        method: 'POST',
        headers: headers,
        body: postData,
    });

    fetch(myRequest)
     .then(response=>{
        if(response.ok){
            console.log(response.body);
        }else{
            console.error(response.status);
        }
     });
})