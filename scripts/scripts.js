const images =document.getElementsByClassName("image");


for (let i = 0; i < images.length; i++) {
    const imageNames= document.getElementsByTagName("h5");
    const picture= document.getElementsByTagName("img");
  images[i].addEventListener("mouseover", function() {
    // imageNames[i].style.textDecoration = "underline";
    picture[i].style.opacity = "0.5";

  });

  images[i].addEventListener("mouseout", function() {
    // imageNames[i].style.textDecoration = "none";
    picture[i].style.opacity = "1";
  });
}