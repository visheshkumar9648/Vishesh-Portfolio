// Function to handle download resume button click
document.getElementById("downloadBtn").addEventListener("click", function() {
    // Replace the URL with the actual path to your resume file
    var resumeUrl = "file\\Resume.pdf";
    // Open the resume file in a new tab for download
    window.open(resumeUrl, "_blank");
});

// Function to handle GitHub button click
document.getElementById("githubBtn").addEventListener("click", function() {
    // Replace the URL with your GitHub profile URL
    var githubUrl = "https://github.com";
    // Open GitHub profile in a new tab
    window.open(githubUrl, "_blank");
});



document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Function to add or remove active class
    const changeActiveClass = (link) => {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        link.classList.add('active');
    };

    // Function to handle smooth scrolling
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                behavior: 'smooth',
                top: section.offsetTop
            });
        }
    };

    // Highlight active section on scroll
    window.addEventListener('scroll', () => {
        let current = 'section1';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            if (link.href.includes(current)) {
                changeActiveClass(link);
            }
        });
    });

    // Smooth scroll to section on click
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
            changeActiveClass(link);
        });
    });
});


// Dark mode 

document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for saved user preference, if any, on load of the website
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }

    // Listen for toggle switch change
    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});

// Whatsapp data send Code
function sendToWhatsApp(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var phoneNumber = "910101010101"; // Your WhatsApp number (with country code)

    var whatsappMessage = `New Contact Form Submission%0A
    Name: ${name}%0A
    Email: ${email}%0A
    Subject: ${subject}%0A
    Message: ${message}`;

    var whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
}

// PWA Menubar button code
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('ServiceWorker registered with scope: ', registration.scope);
      }).catch((error) => {
        console.log('ServiceWorker registration failed: ', error);
      });
    });
  }
  
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('install-btn').style.display = 'block';
  
    document.getElementById('install-btn').addEventListener('click', () => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
    });
  });