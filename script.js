let myInput = document.getElementById('my-input');

myInput.addEventListener('click', function () {
  this.setSelectionRange(0, this.value.length);
})