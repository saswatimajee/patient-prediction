function validateForm() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var symptoms = document.getElementById('symptoms').value;
    var testResults = document.getElementById('testResults').value;

    if (name === '' || age === '' || gender === '' || symptoms === '' || testResults === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // Additional validation or processing logic can be added here

    return true;
}
