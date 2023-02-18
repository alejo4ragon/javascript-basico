const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const id_main = document.getElementById('main');

h1.innerHTML = 'Johan <br> Aragón';
// h1.innerText = 'Johan <br> Aragón';
let data_h1 = h1.getAttribute('data-h1');
h1.setAttribute('data-h1', 'asd');
data_h1 = h1.getAttribute('data-h1');
console.log(data_h1);

h1.classList.add('red');
h1.classList.add('verde');
h1.classList.remove('verde');

input.value = "johan";

const img = document.createElement('img');
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png');

id_main.append(img);