var myform=document.getElementById('form')
myform.addEventListener('submit',onsubmit)
function onsubmit(e){
    var name=document.getElementById('nameInput')
    var email=document.getElementById('emailInput')
    localStorage.setItem(name.value,email.value);
}