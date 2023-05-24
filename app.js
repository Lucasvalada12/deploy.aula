document.getElementById('contact-forms').addEventListener('submit', function (e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mensage = document.getElementById('mensage').value;
    const data = {
        name: name,
        email: email,
        mensage: mensage
    }
    fetch('')


})
