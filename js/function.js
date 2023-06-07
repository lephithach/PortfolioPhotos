const modalElement = document.querySelector(".modal");
const modalImage = modalElement.querySelector("img");
const galeryElement = document.querySelector(".galery");
const galeryImage = galeryElement.querySelectorAll("img");

// Show image modal
galeryImage.forEach((image) => {
  image.addEventListener("click", () => {
    // Lock scroll
    document.querySelector("body").style.overflow = "hidden";
    // Show modal
    modalElement.classList.add("show");

    // Add url img
    let getUrl = image.getAttribute("src");
    modalImage.setAttribute("src", getUrl);
  });
});

// Remove modal
// modalElement.addEventListener("click", () => {
//   modalElement.classList.remove("show");
//   document.querySelector("body").style.overflow = "";
// });

modalElement
  .querySelector(".btn-function .btn-close")
  .addEventListener("click", () => {
    modalElement.classList.remove("show");
    document.querySelector("body").style.overflow = "";
  });

async function render() {}
