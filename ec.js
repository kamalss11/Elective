// Navbar toggler

const navtoggle = document.querySelector(".navbar-toggle");
const navmenu = document.querySelector(".menu");
const clsbtn = document.querySelector(".closebtn");

// opening navbar

navtoggle.addEventListener("click",navtoggleclick);

function navtoggleclick(){
	navtoggle.classList.toggle("open-navbar-toggle");
    navmenu.classList.toggle("open");	
}

//closing navbar

clsbtn.addEventListener("click",clsbtnclick);

function clsbtnclick(){
	navmenu.classList.remove("open");
    navtoggle.classList.remove("open-navbar-toggle");
}

//password 

const password = document.querySelector('#password');
const togglePassword = document.querySelector('#togglePassword');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

