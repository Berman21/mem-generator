let gElCanvas
let gCtx
let gTxt


function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    
}

function onSetLineTxt(val) {
    setLineTxt(val)
    renderMeme()
}

function renderMeme() {
    resizeCanvas()
    const memeImg = getImg()
    const { selectedImgId, selectedLineIdx, lines } = getMeme()
    gTxt = lines[selectedLineIdx].txt
    coverCanvasWithImg(memeImg)
    drawText(gTxt, gElCanvas.width / 2, gElCanvas.height / 2)
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