
function UpdateProfile(){
    var newName = document.getElementById("name").value;
    var newAddress = document.getElementById("address").value;
    var newEmail = document.getElementById("email").value;
    var newPhone = document.getElementById("phone").value;
    var newDOB = document.getElementById("dob").value;
    console.log(newEmail);
    alert(newName + newAddress + newEmail + newPhone + newDOB);
    // return newEmail;
}