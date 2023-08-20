var myform=document.getElementById('form')
myform.addEventListener('submit',onsubmit)
var cl=document.getElementById('button2')
function onsubmit(e){
  e.preventDefault();
   let obj={
    name:document.getElementById('nameInput').value,
     email:document.getElementById('emailInput').value,
     phoneNumber:document.getElementById('phoneInput').value
   }
  axios.post('https://crudcrud.com/api/7f418295da724d9585c14efe06ed68d6/appointmentdata',obj)
  .then(response=>{
    displayUserDetails(response.data);
  })
  .catch(err=>console.log(err));
}
cl.addEventListener('click',getdata);
function getdata(e){
  e.preventDefault();
  axios.get('https://crudcrud.com/api/7f418295da724d9585c14efe06ed68d6/appointmentdata')
  .then(dt=>{
    let len=dt.data.length
    for(let i=0;i<len;i++){
      displayUserDetails(dt.data[i]);
     }
  })
  .catch(err=>console.log(err));
}
function displayUserDetails(obj){
  var parent=document.getElementById('ulid')
  var child=document.createElement('li');
  child.textContent=`${obj.name} - ${obj.email} - ${obj.phoneNumber}`;
  var deletebtn=document.createElement('input')
   deletebtn.type='button'
   deletebtn.value='delete'
   var editbtn=document.createElement('button')
   editbtn.textContent="Edit"
   child.appendChild(deletebtn)
   child.appendChild(editbtn)
  parent.appendChild(child)
  deletebtn.onclick=() =>{
    localStorage.removeItem(obj.phoneNumber)
    parent.removeChild(child)
  }
  editbtn.onclick=() =>{
    localStorage.removeItem(obj.phoneNumber)
    var nameid=document.getElementById('nameInput');
    var emailid=document.getElementById('emailInput');
    var phoneid=document.getElementById('phoneInput');
    nameid.value=obj.name;
    emailid.value=obj.email;
    phoneid.value=obj.phoneNumber
  }
}
