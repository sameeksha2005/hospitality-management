let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
// function performGetRequest1() {
//     var resultElement = document.getElementById('getResult1');
//     resultElement.innerHTML = '';
   
//     axios.get('http://jsonplaceholder.typicode.com/todos')
//       .then(function (response) {
//         resultElement.innerHTML = generateSuccessHTMLOutput(response);
//       })
//       .catch(function (error) {
//         resultElement.innerHTML = generateErrorHTMLOutput(error);
//       });  
//   }
//   function generateSuccessHTMLOutput(response) {
//     return  '<h4>Result</h4>' +
//             '<h5>Status:</h5> ' +
//             '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
//             '<h5>Headers:</h5>' +
//             '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' +
//             '<h5>Data:</h5>' +
//             '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';
//   }
//   function generateErrorHTMLOutput(error) {
//     return  '<h4>Result</h4>' +
//             '<h5>Message:</h5> ' +
//             '<pre>' + error.message + '</pre>' +
//             '<h5>Status:</h5> ' +
//             '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
//             '<h5>Headers:</h5>' +
//             '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
//             '<h5>Data:</h5>' +
//             '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';
//   }
function submitForm(){
    // let axiosConfig = {
    //     headers: {
    //         'Content-Type': 'application/json;charset=UTF-8',
    //         "Access-Control-Allow-Origin": "*",
    //     }
    //   };
    console.log("tessssssst")
    alert("afsdssdgsdg")
    var name = document.getElementById('u-name').value;
    var no = document.getElementById('u-no').value;
    var email = document.getElementById('u-email').value;
    var date = document.getElementById('u-date').value;
    console.log(name)
    console.log(no)
    console.log(email)
    console.log(date)
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://65.2.186.83:8080/api/users", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        name: name,
        email: email,
        contact: String(no),
        birth_date : String(date)
     }));
    xhr.onload = function() {
        var data = JSON.parse(this.responseText);
        console.log(data);
    };
  }