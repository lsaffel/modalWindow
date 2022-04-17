'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// a function expression

const openModal = function () {
  //   console.log('Button clicked');
  modal.classList.remove('hidden'); // use the class name hidden, not .hidden
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

// we also want the window to close when we click outside the
// modal window, i.e. when we click on the overlay:
overlay.addEventListener('click', closeModal);

// note - use closeModal, not closeModal()
// That's because closeModal() would immediately call the function
// as soon as JavaScript executes that line. We want the closeModal to
// be executed only as soon as the click event happens on the closeModal button

// addEventListener will trigger events that happen everywhere on the page
// function(e)  e here stands for event
document.addEventListener('keydown', function (e) {
  //   console.log(e.key);

  // if the key pressed is Escape and (&&) the modal window is NOT hidden,
  // i.e. ! is for not, then close the modal window
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(); // here, we do need to call this function with ()
  }
});
