const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    const formData = {
    }

    if (email.value != '' && password.value != '') {
        formData.email = email.value;
        formData.password = password.value;
    } else {
        alert('WARNING!!! There cannot be empty fields! Please fill in all the fields!')
    }
    console.log(formData);
    event.currentTarget.reset();
}