window.onload = rotate;

let index = 1;

function rotate() {
    const SRC = `./assets/images/hallinone/${index}.png`;
    document.getElementById("hallinone").src = SRC;

    // for next image
    index++;
    // reset to first image to cycle
    if (index == 10) {
        index = 1;
    }

    setTimeout(rotate, 3000);
}