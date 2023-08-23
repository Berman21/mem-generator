function coverCanvasWithImg(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width // changing the canvas height
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height) // Lets cover a fixed-width canvas using an img
}

function resizeCanvas() {                                          // Changing the canvas dimension clears the canvas
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
  }