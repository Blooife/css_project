document.addEventListener('DOMContentLoaded', () => {
 
    // Кнопка по которой происходит клик
    let callBackButton = document.getElementById('reserve-button');
   
    // Модальное окно, которое необходимо открыть
    let modal1 = document.getElementById('modal-1');
   
    // Кнопка "закрыть" внутри модального окна
    let closeButton = modal1.getElementsByClassName('modal__close-button')[0];
   
    callBackButton.onclick = function () {
      modal1.classList.add('modal_active');
    }
   
    closeButton.onclick = function () {
      modal1.classList.remove('modal_active');
    }
  });