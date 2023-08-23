let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    resizeCanvas()
}

function onSelectImg(elImg) {
    renderMeme(elImg)
}


function renderMeme(elImg) {
    coverCanvasWithImg(elImg)
    drawText('HI',gElCanvas.width/2,gElCanvas.height/2)
}


// Lets cover a fixed-width canvas using an img
// changing the canvas height
function coverCanvasWithImg(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function resizeCanvas() {   // Changing the canvas dimension clears the canvas
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
  }


function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'brown'
    gCtx.fillStyle = 'black'
    gCtx.font = '40px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
  
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
  }