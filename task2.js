var myform=document.getElementById('form')
myform.addEventListener('submit',onsubmit)
function onsubmit(e){
   let obj={
    name:document.getElementById('nameInput').value,
     email:document.getElementById('emailInput').value,
     phoneNumber:document.getElementById('phoneInput').value
   }
   let user=JSON.stringify(obj)
   localStorage.setItem(obj.phoneNumber,user)
}
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get form input values
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const phone = document.getElementById("phoneInput").value;
  
    // Create an HTML string with the form content
    const formContent = `
      <h3>Form Contents:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>PhoneNumber:</strong> ${phone}</li>
      </ul>
    `;
  
    // Display the form content in the "display" div
    const displayDiv = document.getElementById("display");
    displayDiv.innerHTML = formContent;
  });



