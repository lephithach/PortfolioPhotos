export const data = [
  {
    url: "IMG_9041_Phi_Thach.jpg",
    type: "",
    date: "2023-06-01",
  },
  {
    url: "IMG_9049_Phi_Thach.jpg",
    type: "",
    date: "2023-06-01",
  },
  {
    url: "IMG_9105_Phi_Thach.jpg",
    type: "",
    date: "2023-06-01",
  },
  {
    url: "IMG_9122_Phi_Thach.jpg",
    type: "",
    date: "2023-06-01",
  },
  {
    url: "IMG_9137_Phi_Thach.jpg",
    type: "",
    date: "2023-06-01",
  },
  {
    url: "IMG_9144_Phi_Thach.jpg",
    type: "",
    date: "2023-06-01",
  },
  {
    url: "IMG_9152_Phi_Thach.jpg",
    type: "",
    date: "2023-06-01",
  },
  {
    url: "IMG_9159_Phi_Thach.jpg",
    type: "",
    date: "2023-06-01",
  },
  {
    url: "IMG_9252_Phi_Thach.jpg",
    type: "",
    date: "2023-06-01",
  },
  {
    url: "IMG_9262_Phi_Thach.jpg",
    type: "",
    date: "2023-06-01",
  },
  {
    url: "IMG_9286_Phi_Thach.jpg",
    type: "",
    date: "2023-06-01",
  },
];

let html = "";
// Render data
data.forEach((item) => {
  html += `
        <img
            src="./images/${item.url}"
            alt="picture"
            class="image"
        />
    `;
});

const galeryElement = document.querySelector(".galery");

galeryElement.innerHTML = html;
