function validate_password() {
    var pass = document.getElementById('password').value;
    var confirmPass = document.getElementById('confirmPassword').value;
    if (pass != confirmPass) {
        document.getElementById('wrong_pass_alert').style.color = 'red';
        document.getElementById('wrong_pass_alert').innerHTML
            = 'Use same password';
    } else {
        document.getElementById('wrong_pass_alert').style.color = '#F7CAC9';
        document.getElementById('wrong_pass_alert').innerHTML = 'Password Matched';
    }
}

//Disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()