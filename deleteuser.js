var myform=document.getElementById('form')
myform.addEventListener('submit',onsubmit)
function onsubmit(e){
  e.preventDefault();
   let obj={
    name:document.getElementById('nameInput').value,
     email:document.getElementById('emailInput').value,
     phoneNumber:document.getElementById('phoneInput').value
   }
   let user=JSON.stringify(obj)
   localStorage.setItem(obj.phoneNumber,user)
   displayUserDetails(obj)
}
function displayUserDetails(obj){
  var parent=document.getElementById('ulid')
  var child=document.createElement('li');
  child.textContent=`${obj.name} - ${obj.email} - ${obj.phoneNumber}`;
  var deletebtn=document.createElement('input')
   deletebtn.type='button'
   deletebtn.value='delete'
   child.appendChild(deletebtn)
  parent.appendChild(child)
  deletebtn.onclick=() =>{
    localStorage.removeItem(obj.phoneNumber)
    parent.removeChild(child)
  }
}
