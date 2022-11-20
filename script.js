// Actividad 1 - Practica 2

const fechaHtml = document.querySelector('#fecha');

const body = document.querySelector('body');
const p = document.querySelectorAll('p');
const a = document.querySelectorAll('i > a');

const column1 = document.getElementById('column1');
const column2 = document.getElementById('column2');
const column3 = document.getElementById('column3');

const fila1 = document.querySelector('#fila1');
const fila2 = document.querySelector('#fila2');
const fila3 = document.querySelector('#fila3');
const fila4 = document.querySelector('#fila4');
const fila5 = document.querySelector('#fila5');

const elementosFila1 = fila1.querySelectorAll('td');
const elementosFila2 = fila2.querySelectorAll('td');
const elementosFila3 = fila3.querySelectorAll('td');
const elementosFila4 = fila4.querySelectorAll('td');
const elementosFila5 = fila5.querySelectorAll('td');


const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const reloj = () => {
    let hoy = new Date();

    let fecha = hoy.toLocaleDateString();
    let hora = hoy.toLocaleTimeString();

    fechaHtml.innerHTML = `${fecha} : ${hora}`;

    let fondoColor = document.querySelector('#fondoColor').value;
    let textoColor = document.querySelector('#textoColor').value;
    let enlaceColor = document.querySelector('#enlaceColor').value;

    body.style.backgroundColor = fondoColor;
    p.forEach(x => {
        x.style.color = textoColor;
    });
    
    a.forEach(x => {
        x.style.color = enlaceColor;
    });
}

setInterval(reloj, 1000);

column1.addEventListener('click', () => {
    column1.style.display = 'none';

    elementosFila1[0].style.display = 'none';
    elementosFila2[0].style.display = 'none';
    elementosFila3[0].style.display = 'none';
    elementosFila4[0].style.display = 'none';
    elementosFila5[0].style.display = 'none';
});

column2.addEventListener('click', () => {
    column2.style.display = 'none';

    elementosFila1[1].style.display = 'none';
    elementosFila2[1].style.display = 'none';
    elementosFila3[1].style.display = 'none';
    elementosFila4[1].style.display = 'none';
    elementosFila5[1].style.display = 'none';
});

column3.addEventListener('click', () => {
    column3.style.display = 'none';

    elementosFila1[2].style.display = 'none';
    elementosFila2[2].style.display = 'none';
    elementosFila3[2].style.display = 'none';
    elementosFila4[2].style.display = 'none';
    elementosFila5[2].style.display = 'none';
});