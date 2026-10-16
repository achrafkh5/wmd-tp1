document.addEventListener("DOMContentLoaded", function () {
    var mobileToggle = document.getElementById("mobileToggle");
    var navLinks = document.getElementById("navLinks");

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener("click", function () {
            navLinks.classList.toggle("open");
        });

        var links = navLinks.querySelectorAll("a");
        links.forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
            });
        });
    }

    var tabButtons = document.querySelectorAll(".tab-btn");
    var tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            var targetTab = this.getAttribute("data-tab");

            tabButtons.forEach(function (b) {
                b.classList.remove("active");
            });
            tabContents.forEach(function (c) {
                c.classList.remove("active");
            });

            this.classList.add("active");
            var targetElement = document.getElementById(targetTab);
            if (targetElement) {
                targetElement.classList.add("active");
            }
        });
    });

    var contactForm = document.getElementById("contactForm");
    var formStatus = document.getElementById("formStatus");

    if (contactForm && formStatus) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            formStatus.className = "form-status success";
            formStatus.textContent = "Thank you! Your message has been sent successfully.";
            contactForm.reset();
        });
    }
});
