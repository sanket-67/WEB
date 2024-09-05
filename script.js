
// Toggle mobile menu visibility
const menuIcon = document.querySelector('.fa-bars');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Typewriter effect
function typeWriterLoop(strings, eraseDelay, typeDelay, elementId) {
    const speed = 100;
    const eraseSpeed = 50;
    const target = document.getElementById(elementId);
    let stringIndex = 0;
    let charIndex = 0;
    let isTyping = true;

    function type() {
        if (charIndex < strings[stringIndex].length && isTyping) {
            target.textContent += strings[stringIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, speed);
        } else {
            isTyping = false;
            setTimeout(erase, eraseDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            target.textContent = strings[stringIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, eraseSpeed);
        } else {
            isTyping = true;
            stringIndex = (stringIndex + 1) % strings.length;
            setTimeout(type, typeDelay);
        }
    }

    type();
}

const stringsToType = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer'
];

typeWriterLoop(stringsToType, 2000, 100, 'developer-role');

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate hero section
gsap.from(".hero h1", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.7 });
gsap.from(".hero .btn", { opacity: 0, y: 50, duration: 1, delay: 0.9 });

// Animate skills items
gsap.from(".skill-item", {
    scrollTrigger: {
        trigger: "#skills",
        start: "top center"
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1
});

// Animate project items
gsap.from(".project-item", {
    scrollTrigger: {
        trigger: "#projects",
        start: "top center"
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1
});

// Animate contact form
gsap.from(".contact-form", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top center"
    },
    opacity: 0,
    y: 50,
    duration: 1
});

// Navbar color change on scroll
gsap.to(".navbar", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=100",
        scrub: true
    },
    backgroundColor: "#1a252f",
    duration: 0.5
});


const gradients = [
"linear-gradient(to right, #3498db, #2ecc71)",  // Blue to Green
"linear-gradient(to right, #ff7e5f, #feb47b)",  // Orange to Peach
"linear-gradient(to right, #6a11cb, #2575fc)",  // Purple to Blue
"linear-gradient(to right, #ff512f, #dd2476)",  // Red to Pink
];

let currentIndex = 0;

function changeBackground() {
const heroSection = document.querySelector('.hero');
const currentGradient = gradients[currentIndex];

heroSection.style.backgroundImage = `${currentGradient}, url('./pexels-wild-dog-dingo92-1470589.jpg')`;

// Update index and loop back to the start if needed
currentIndex = (currentIndex + 1) % gradients.length;
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);
