window.alert("Welcome to Group 127 's Project Page. Hope you enjoy!");
function validate() {
    var input = document.createElement('input');
    input.type='email';
    input.value=document.getElementById('email').value;
      
    if (input.checkValidity()) {
        document.getElementById('error').style.display = 'none';
    } else {
        document.getElementById('error').style.display = 'block';
    }
      
    return false;
  }
