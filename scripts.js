// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    let scrollPosition = window.pageYOffset;

    hero.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
});

// Scroll Animations
const animatedElements = document.querySelectorAll('.animated');

const checkScroll = () => {
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('fadeIn');
        }
    });
};

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitBtn = form.querySelector("input[type='submit']");
    const menuItems = document.querySelectorAll(".menu-items li a");
    const menuToggle = document.querySelector(".navbar-container input[type='checkbox']");

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menuToggle.checked = false;
        });
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        submitBtn.value = "Please wait...";
        submitBtn.disabled = true;

        // Create a new form element to submit in a new tab
        const newForm = document.createElement("form");
        newForm.method = "POST";
        newForm.action = form.action;
        newForm.target = "_blank"; // Open in a new tab

        // Copy all form inputs into the new form
        new FormData(form).forEach((value, key) => {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = value;
            newForm.appendChild(input);
        });

        document.body.appendChild(newForm);
        newForm.submit();
        document.body.removeChild(newForm); // Clean up

        // Reset button after delay
        setTimeout(() => {
            submitBtn.value = "Send";
            submitBtn.disabled = false;
        }, 3000);
    });
});

