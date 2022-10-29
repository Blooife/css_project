let btn = document.querySelector('#btn');
btn.setAttribute('disabled',true);
    function validate_form ( )
{    
   // let btn = document.querySelector('#btn');
    let username = document.querySelector('#username'); 
    let data = document.querySelector('#date'); 
    let email = document.querySelector('#email'); 
    let table = document.querySelector('#number');
     if(username.value.length < 1 || email.value.length <1 || data.value.length<1 || table.selectedIndex < 1){
      btn.setAttribute('disabled',true);
    } else{
      btn.removeAttribute('disabled');
    }
}

let modal1 = document.querySelector('#modal-1');
let closeButton = document.querySelector('#modal-close');
btn.onclick = function () {
  modal1.classList.add('modal_active');
  //console.log('Клик!');
}

closeButton.onclick = function () {
  modal1.classList.remove('modal_active');
  //console.log('Клик2!');
  location.reload();
} 