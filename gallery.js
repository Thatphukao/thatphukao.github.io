const images = document.querySelectorAll(".gallery-image");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const caption = document.querySelector(".caption");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// Open modal when clicking on image
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        openModal(index);
    });
});

function openModal(index) {
    currentIndex = index;
    modal.style.display = "block";
    modalImg.src = images[currentIndex].src;
    caption.innerText = images[currentIndex].alt;
}

function closeModal() {
    modal.style.display = "none";
}

function showPrevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    openModal(currentIndex);
}

function showNextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    openModal(currentIndex);
}

// Event listeners for closing the modal
closeBtn.addEventListener("click", closeModal);
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});

// Event listeners for navigating images
prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        showPrevImage();
    } else if (e.key === "ArrowRight") {
        showNextImage();
    }
});
