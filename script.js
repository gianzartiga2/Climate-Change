// Keep in-page navigation smooth in browsers that need explicit handling.
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        var target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
