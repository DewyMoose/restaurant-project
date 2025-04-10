let galleryContentDiv = document.createElement("div");
galleryContentDiv.className = "gallery-content-div";

let galleryImageContainer = document.createElement("div");
galleryImageContainer.className = "gallery-image-container";

import img1 from "./gallery-img-1.jpg";
import img2 from "./gallery-img-2.jpg";
import img3 from "./gallery-img-3.jpg";
import img4 from "./gallery-img-4.jpg";

function showGallery() {
  galleryImageContainer.innerHTML = "";
  let bbqImage1 = document.createElement("img");
  bbqImage1.src = img1;
  bbqImage1.alt = "BBQ Picture 1";
  let bbqImage2 = document.createElement("img");
  bbqImage2.src = img2;
  bbqImage2.alt = "BBQ Picture 2";
  let bbqImage3 = document.createElement("img");
  bbqImage3.src = img3;
  bbqImage3.alt = "BBQ Picture 3";
  let bbqImage4 = document.createElement("img");
  bbqImage4.src = img4;
  bbqImage4.alt = "BBQ Picture 4";

  galleryImageContainer.append(bbqImage1, bbqImage2, bbqImage3, bbqImage4);
  galleryContentDiv.append(galleryImageContainer);
}

export { galleryContentDiv, showGallery };
