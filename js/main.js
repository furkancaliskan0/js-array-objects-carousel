/*Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.*/

/*Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.*/

/*Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se l’img attiva è la prima e l’utente clicca la freccia prev, l’img che deve attivarsi sarà l’ultima e viceversa per l’ultima img se l’utente clicca la freccia next.*/



const Btnnext = document.querySelector('.btn-next');
const Btnprev = document.querySelector('.btn-prev');
const carousel = document.querySelector('.carousel');

const arrImages = [
	'img/01.webp',
	'img/02.webp',
	'img/03.webp',
	'img/04.webp',
	'img/05.webp',
];

for (let i = 0; i < arrImages.length; i++) {
	const Img = document.createElement('img');
	Img.src = arrImages[i];
	Img.classList.add('carousel-img');

	if (i === 0) {
		Img.classList.add('active');
	}

	carousel.append(Img);
}

const listImg = document.querySelectorAll('.carousel-img'); 

let activeItem = 0;

   Btnprev.addEventListener('click', 
   
   function () {
	
	listImg[activeItem].classList.remove('active');

	activeItem++;

	listImg[activeItem].classList.add('active');

	   Btnnext.classList.remove('hidden');
	if (activeItem === listImg.length - 1) {
		Btnprev.classList.add('hidden');
	}
});

    Btnnext.addEventListener('click', 
    
    function () {

	listImg[activeItem].classList.remove('active');

	activeItem--;

	listImg[activeItem].classList.add('active');

	 Btnprev.classList.remove('hidden');
	if (activeItem === 0) {
		Btnnext.classList.add('hidden');
	}
});