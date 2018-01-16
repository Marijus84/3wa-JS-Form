function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        document.getElementById("username").placeholder = "required, 5-12 character";
        return false;
    }
}




daryt formos button ne submit o button!!!
