const validate = new window.JustValidate('#form');
let sendButton = document.getElementById('buttons').firstChild.nextElementSibling;
sendButton.addEventListener('click', function (event) {
  event.preventDefault();
}
);