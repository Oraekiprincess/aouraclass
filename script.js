let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}




// EMAIL JS
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')
const sendEmail = (e) =>{
e.preventDefault()
// serviceId - templateId - publickey
emailjs.sendForm('service_lxp1tib', 'template_ionn5y2', '#contact-form', '76-dkYLlEIoUD-j4d')
    .then(() =>{

        contactMessage.textContent = 'Message sent successfully ✅'
    // remove mesage after 2secs
    setTimeout(() =>{
        contactMessage.textContent = ''
    }, 1000)
    // clear input fields
    contactForm.reset()
    }, () =>{
        // show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}
contactForm.addEventListener('submit' , sendEmail)
