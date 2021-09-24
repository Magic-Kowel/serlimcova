const form = document.querySelector('#form');
const buttonMail = document.querySelector('#mailGo');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(this); +
    console.log(formData.get('nombre'));
    buttonMail.setAttribute('href',
        `mailto:a20170094@utem.edu.mx?subject=${formData.get('nombre')}${formData.get('apellido')}&body=Estoy interesado en sus servicios este es mi numero ${formData.get('numero')} `);
    buttonMail.click();
}