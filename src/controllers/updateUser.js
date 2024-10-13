export default function updateUser(novasenha) {
  var myHeaders = new Headers();
  myHeaders.append("Accept", "*/*");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "filter": {
      "documento": 70460827154
    },
    "newValue": {
      "nome": "JEAN"
    },
    "newPassorwd": {
      "passorwd": novasenha
    }
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://20.226.73.46:57601/api/user/update_user", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}




