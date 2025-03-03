//menu button for responsiveness
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

//Flip Logo
document.getElementById('logo').addEventListener('click', function(){
    const logo = this;

    logo.classList.remove('spin');

    void logo.offsetHeight
    
    logo.classList.toggle('spin');
});

document.getElementById('logo').addEventListener('animationend', function() {
    this.classList.remove('spin');
});

//Home image switch

document.getElementById('hoverImage').addEventListener('mouseover', function() {
    this.src = 'img/Home2.png'; 
});

document.getElementById('hoverImage').addEventListener('mouseout', function() {
    this.src = 'img/Home1.png'; 
});

//for setting gear
document.getElementById('settings-icon').addEventListener('click', function(event) {
    event.stopPropagation(); 
    const settingsMenu = document.getElementById('settings-menu');
    const settingsIcon = document.getElementById('settings-icon');

    settingsMenu.classList.toggle('active');
    settingsIcon.classList.toggle('clicked');
});

// Close the settings menu if clicked outside
window.addEventListener('click', function() {
    const settingsMenu = document.getElementById('settings-menu');
    const settingsIcon = document.getElementById('settings-icon');

    if (settingsMenu.classList.contains('active')) {
        settingsMenu.classList.remove('active');
        settingsIcon.classList.remove('clicked');
    }
});

//Light-dark Mode
document.querySelector('.light-dark').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click from bubbling up
    toggleLightDarkMode();
});

function toggleLightDarkMode() {
    const body = document.body;
    const lightDarkIcon = document.getElementById('light-dark-icon');

    // Toggle the light-mode class on the body
    body.classList.toggle('light-mode');

    // Change the icon based on the current mode
    if (body.classList.contains('light-mode')) {
        lightDarkIcon.classList.remove('bx-moon');
        lightDarkIcon.classList.add('bx-sun');
    } else {
        lightDarkIcon.classList.remove('bx-sun');
        lightDarkIcon.classList.add('bx-moon');
    }
}

//select sections on scroll and click
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                const matchingLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (matchingLink) {
                    matchingLink.classList.add('active');
                }
            });
        }
    });
};

// Automation for aspirations section in home description
var typed = new Typed(".typing-text",{
    strings: ["Software Developer", "Web Developer", "Coder"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay:1000,
    loop: true
});

//Accordian button education
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.courseaccord .coursetentbx');

    accordionItems.forEach(item => {
        const label = item.querySelector('.courselabel');

        label.addEventListener('click', function () {
            // Toggle active class when clicking the label
            item.classList.toggle('active');
        });
    });
});

//Accordian Slider education
const slider = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 320}px)`;
    close_model();
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

// Enlarged image modal
function full_view(imgElement) {
    const src = imgElement.src;
    document.querySelector("#full-image").src = src;
    document.querySelector("#img-viewer").style.display = "block";
}

function close_model() {
    document.querySelector("#img-viewer").style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slide img');
    const modal = document.querySelector('#img-viewer');

    // Open modal on image click
    images.forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation(); 
            full_view(img);
        });
    });

    // Close modal on clicking the darkened background
    modal.addEventListener('click', () => {
        close_model();
    });
});

//Skill accordian
document.querySelectorAll('.skillordian-item .skillordlabel').forEach(label => {
    label.addEventListener('click', () => {
        label.parentElement.classList.toggle('active');
    });
});