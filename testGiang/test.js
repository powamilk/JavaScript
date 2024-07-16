function Update() {
    var username = document.getElementById("username").value;
    var currentpassword = document.getElementById("currentpassword").value;
    var newpassword = document.getElementById("newpassword").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    var nationality = document.getElementById("nationality").value;
    var gender = document.getElementById("gender").value;
    var hobbies = document.querySelectorAll("input[name='hobbies']:checked, input[name='reading']:checked, input[name='gaming']:checked, input[name='cocking']:checked");

    var isValid = true; 
    if(username === ""){
        document.getElementById('username-error').textContent = "username ko được để trống";
        document.getElementById("username-error").style.color = "red";
        isValid = false;   
    } else {
        document.getElementById('username-error').textContent = "";
    }

    if(currentpassword === ""){
        document.getElementById('currentpassword-error').textContent = "currentpassword ko được để trống"; 
        document.getElementById("currentpassword-error").style.color = "red";
        isValid = false;
    } else {
        document.getElementById('currentpassword-error').textContent = "";
    }

    if(newpassword === ""){
        document.getElementById('newpassword-error').textContent = "newpassword ko được để trống";
        document.getElementById("newpassword-error").style.color = "red";
        isValid = false;
    } else {
        document.getElementById('newpassword-error').textContent = "";
    }

    if(confirmpassword === ""){
        document.getElementById('confirmpassword-error').textContent = "confirmpasswword ko được để trống";
        document.getElementById("confirmpassword-error").style.color = "red";
        isValid = false;
    } else {
        document.getElementById('confirmpassword-error').textContent = ""
    }

    if(!nationality.checked){
        document.getElementById('nationality-error').textContent = "nation ko được để trống"
        document.getElementById("nationality-error").style.color = "red";
        isValid = false;
    } else {
        document.getElementById('nationality-error').textContent.color = "red"
    }

    if(!gender.checked){
        document.getElementById('gender-error').textContent = "gender ko được để trống"
        document.getElementById("gender-error").style.color = "red"
        isValid = false;
    } else {
        document.getElementById('gender-error').textContent = ""
    }

    if (hobbies.length === 0) {
        document.getElementById('hobbies-error').textContent = "hobbies phải chọn ít nhất 1 sở thích";
        document.getElementById("hobbies-error").style.color = "red";
        isValid = false;
    } else {
        document.getElementById('hobbies-error').textContent = "";
    }

    if (!isValid) {
        return false;
    } else {
        alert("Update !");
        return true;
    }
}

