const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// 1. Declare an array of image objects
const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" }
];

// 2. Loop through the images and add them to the thumbnail bar
const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

for (const image of images) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", baseURL + image.filename);
  newImage.setAttribute("alt", image.alt);
  
  // Make the image focusable via the keyboard
  newImage.setAttribute("tabindex", "0");
  
  thumbBar.appendChild(newImage);

  // Add click event handler to update the main image
  newImage.addEventListener("click", updateDisplayedImage);
  
  // NOTE: Task 8 (Enter/Return key stretch goal) is intentionally skipped as per assignment instructions.
}

// 3. Create the updateDisplayedImage() function
function updateDisplayedImage(e) {
  // e.target refers to the specific thumbnail image that was clicked
  displayedImage.setAttribute("src", e.target.getAttribute("src"));
  displayedImage.setAttribute("alt", e.target.getAttribute("alt"));
}

// 4. Wire up the Darken/Lighten button
btn.addEventListener("click", () => {
  if (btn.classList.contains("dark")) {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }
  
  // Stretch goal: toggle the dark class using a single line of code after the conditional
  btn.classList.toggle("dark");
});