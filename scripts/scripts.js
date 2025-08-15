
// Hide the radio buttons on site load
// document.querySelectorAll('.item-form').forEach(radioBtn => radioBtn.style.display = 'none');

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