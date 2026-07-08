window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";

    } else {

        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";

    }

});