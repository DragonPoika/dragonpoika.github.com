document.addEventListener("DOMContentLoaded", function () {
    const images = ["https://dragonpoika.github.io/images/toast/toast.png", "https://dragonpoika.github.io/images/toast/happy.png", "https://dragonpoika.github.io/images/toast/questioning.png", "https://dragonpoika.github.io/images/toast/uwu.png"];
    const randomImage = document.getElementById("toast-image");

    function getRandomIndex() {
        return Math.floor(Math.random() * images.length);
    }

    function changeImage() {
        const randomIndex = getRandomIndex();
        randomImage.src = images[randomIndex];
    }

    // Add click event listener directly to the image
    randomImage.addEventListener("click", changeImage);
});
