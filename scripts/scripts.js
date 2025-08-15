
// Hide the radio buttons on site load

// Radio buttons slide up on hover
const radioBtn = document.getElementsByName('item-color');
radioBtn.forEach(function (radio) {
    radio.addEventListener('change', function(e) {
        const target = e.currentTarget;
        const color = target.value;

        const gridItem = target.closest('.grid-item');
        const gridImg = gridItem.querySelector('img');

        gridImg.src = this.dataset.img;

    })
})

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