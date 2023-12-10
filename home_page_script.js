document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "https://dragonpoika.github.io/images/toast/toast.png",
        "https://dragonpoika.github.io/images/toast/happy.png",
        "https://dragonpoika.github.io/images/toast/questioning.png",
        "https://dragonpoika.github.io/images/toast/uwu.png"
    ];

    const randomImage = document.getElementById("toast-image");
    let lastIndex = -1; // Initialize with an invalid index

    function getRandomIndex() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * images.length);
        } while (newIndex === lastIndex); // Keep generating a new index until it's different from the previous one
        lastIndex = newIndex;
        return newIndex;
    }

    function changeImage() {
        const randomIndex = getRandomIndex();
        randomImage.src = images[randomIndex];

        // Add a class to trigger the transition
        randomImage.classList.add("expanded");

        // Remove the class after the transition duration to return to the original size
        setTimeout(() => {
            randomImage.classList.remove("expanded");
        }, 300);
    }

    // Add click event listener directly to the image
    randomImage.addEventListener("click", changeImage);
});
