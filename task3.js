function saveUserDetails(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Create an object to store user details
    const userDetails = {
        name: name,
        email: email,
        phone: phone
    };

    // Save user details to local storage
    const savedUserDetails = localStorage.getItem("userDetails");
    let users = [];
    if (savedUserDetails) {
        users = JSON.parse(savedUserDetails);
    }
    users.push(userDetails);
    localStorage.setItem("userDetails", JSON.stringify(users));

    // Display the user details on the page
    displayUserDetails();
}

function displayUserDetails() {
    const savedUserDetails = localStorage.getItem("userDetails");
    const userListElement = document.getElementById("userList");

    if (savedUserDetails) {
        const users = JSON.parse(savedUserDetails);
        userListElement.innerHTML = '';
        users.forEach((user, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `Name: ${user.name}, Email: ${user.email}, Phone: ${user.phone}`;
            
            // Create a delete button for each user detail
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => deleteUserDetail(index));

            // Append the delete button to the list item
            listItem.appendChild(deleteButton);

            // Append the list item to the user list
            userListElement.appendChild(listItem);
        });
    }
}

function deleteUserDetail(index) {
    const savedUserDetails = localStorage.getItem("userDetails");
    if (savedUserDetails) {
        let users = JSON.parse(savedUserDetails);
        if (index >= 0 && index < users.length) {
            // Remove the user detail at the specified index
            users.splice(index, 1);
            // Update local storage with the updated user details
            localStorage.setItem("userDetails", JSON.stringify(users));
            // Display the updated user details on the page
            displayUserDetails();
        }
    }
}

// Display the saved user details on page load
displayUserDetails();