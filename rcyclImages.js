window.onload = rotate;

let index = 1;

function rotate() {
    const SRC = `./assets/images/rcycl/${index}.png`;
    document.getElementById("rcycl").src = SRC;

    // for next image
    index++;
    // reset to first image to cycle
    if (index == 5) {
        index = 1;
    }

    setTimeout(rotate, 3000);
}