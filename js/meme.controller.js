let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()

}

function onSetLineTxt(val) {
    setLineTxt(val)
    renderMeme()
}

function onSetLineColor(val) {
    console.log('color input value', val);
    setLineColor(val)
    renderMeme()
}

function onIncreaseFontSize() {
    increaseFontSize()
    renderMeme()
}

function onDecreaseFontSize() {
    decreaseFontSize()
    renderMeme()
}

function onCreateLine() {
    createLine()
    renderMeme()
}

function renderMeme() {
    const memeImg = getImg()
    const { selectedImgI, selectedLineIdx, lines } = getMeme()
    const { txt, size, color } = lines
    coverCanvasWithImg(memeImg)

    lines.forEach(lines => {
        const { txt, size, color } = lines
        drawText(txt, color, size, gElCanvas.width / 2, gElCanvas.height / 2)
    })
}

function onSwitch() {

}






function drawText(text, color, size, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = `${color}`
    gCtx.fillStyle = 'black'
    gCtx.font = `${size}px Arial`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    drawRect(x, y,size)
    console.log(x, y);
}

function drawRect(x, y,size) {
    gCtx.strokeStyle = 'white'
    gCtx.strokeRect(x, y, 150, size)
  }

function downloadCanvas(elLink) {
    const dataUrl = gElCanvas.toDataURL()
    console.log('dataUrl', dataUrl)

    elLink.href = dataUrl
    // Set a name for the downloaded file
    elLink.download = 'my-img'
}