var myform=document.getElementById('form')
myform.addEventListener('submit',onsubmit)
function onsubmit(e){
   let obj={
    name:document.getElementById('nameInput').value,
     email:document.getElementById('emailInput').value
   }
   let obj_serialized=JSON.stringify(obj)
   localStorage.setItem("obj",obj_serialized)
}