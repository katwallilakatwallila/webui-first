function showMessage(){
    alert("Thank you for choosing Malai Cafe! ☕");
}// Welcome message
window.onload = function () {
    alert("Welcome to our Cafe!");
};

// Menu button interaction
const menuItems = document.querySelectorAll(".item");

menuItems.forEach(item => {
    item.addEventListener("click", function () {
        alert("You selected: " + this.querySelector("h3").innerText);
    });
});

// Change header color on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.backgroundColor = "#4b2e1f";
    } else {
        header.style.backgroundColor = "#6f4e37";
    }
});