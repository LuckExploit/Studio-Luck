// script.js
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);
                
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Ajuste para compensar o menu fixo
                    behavior: "smooth"
                });
            }
        });
    });
});
