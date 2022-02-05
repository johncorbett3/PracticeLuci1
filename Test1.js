
// This grabs the input from the text boxes and prints them to console
function testFunction() {
    var nameInput = document.getElementById('name');
    var pwInput = document.getElementById('password');

    document.querySelector('form.pure-form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log(nameInput.value);    
    console.log(pwInput.value);
});
}