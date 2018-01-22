function validateForm() {
    var a = document.myForm.username.value.length;
    var b = document.myForm.password.value.length;
    var c = document.myForm.name.value;
    var d = document.myForm.zip.value;
    var radio = document.myForm.radio.value;
    var check1 = document.myForm.english.checked;
    var check2 = document.myForm.other.checked;

    if (a >= 5 && a <=12) {
    } else {
      document.myForm.username.value = "";
      document.getElementById("username").placeholder = "required, 5-12 characters";
      var kl = document.getElementById("username");
      kl.classList.add( "red");
    }

    if (b >= 7 && a <=12 ) {
    } else {
      document.myForm.password.value = "";
      document.getElementById("password").placeholder = "required, 7-12 characters";
      var kl2 = document.getElementById("password");
      kl2.classList.add( "red");
    }

    if (/^[a-zA-Z]+$/.test(c)) {
    } else {
      document.myForm.name.value = "";
      document.getElementById("name").placeholder = "required, letters only";
      var kl3 = document.getElementById("name");
      kl3.classList.add( "red");
    }

    if (/^\d+$/.test(d)) {
    } else {
      document.myForm.zip.value = "";
      document.getElementById("zip").placeholder = "required, numbers only";
      var kl4 = document.getElementById("zip");
      kl4.classList.add( "red");
    }

    if (radio) {
      var kl5 = document.getElementById("required");
      kl5.classList.remove( "red");
    } else {
      var kl5 = document.getElementById("required");
      kl5.classList.add( "red");
    }

    if (check1 || check2) {
      var kl6 = document.getElementById("required2");
      kl6.classList.remove( "red");
    } else {
      var kl6 = document.getElementById("required2");
      kl6.classList.add( "red");
    }
}




// daryt formos button ne submit o button!!!
