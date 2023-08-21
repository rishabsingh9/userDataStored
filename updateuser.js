var myform=document.getElementById('form')
myform.addEventListener('submit',onsubmit)
var cl=document.getElementById('button2')
let isediting=false;
let edited=null
function onsubmit(e){
  e.preventDefault();
   let obj={
    name:document.getElementById('nameInput').value,
     email:document.getElementById('emailInput').value,
     phoneNumber:document.getElementById('phoneInput').value
   }
   if(!isediting){
  axios.post('https://crudcrud.com/api/9ceafb06998d4d7a9f2fd6d66ce2cf7e/appointmentdata',obj)
  .then(response=>{
    displayUserDetails(response.data);
  })
  .catch(err=>console.log(err));
}
else{
  axios.put(`https://crudcrud.com/api/9ceafb06998d4d7a9f2fd6d66ce2cf7e/appointmentdata/${edited}`,obj)
   .then(response=>console.log('done'))
   .catch(err=>console.log(err));
   isediting = false;
}
}
window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/9ceafb06998d4d7a9f2fd6d66ce2cf7e/appointmentdata')
  .then(dt=>{
    let len=dt.data.length
    for(let i=0;i<len;i++){
      displayUserDetails(dt.data[i]);
     }
  })
  .catch(err=>console.log(err));
})
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
    const deleted= obj._id;
    axios.delete(`https://crudcrud.com/api/9ceafb06998d4d7a9f2fd6d66ce2cf7e/appointmentdata/${deleted}`)
    .then(() => {
        parent.removeChild(child); // Remove from the frontend after successful deletion
      })
      .catch(err => console.log(err));
  }
  editbtn.onclick=() =>{
    edited= obj._id;
    var nameid=document.getElementById('nameInput');
    var emailid=document.getElementById('emailInput');
    var phoneid=document.getElementById('phoneInput');
    nameid.value=obj.name;
    emailid.value=obj.email;
    phoneid.value=obj.phoneNumber
    isediting=true;
  }
}