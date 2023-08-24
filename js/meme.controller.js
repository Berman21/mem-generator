let gElCanvas
let gCtx
let gCurrMeme
let gLines = []

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
    gCurrMeme = getMeme()
    const lines = gCurrMeme.lines
    const txtSpace = 25
    coverCanvasWithImg(memeImg)

    lines.forEach((line, idx) => {
        console.log('line:', line);
        console.log('idx:', idx);
        line.x = gElCanvas.width / 2
        line.y = (idx + 1) * (line.size + txtSpace)
        drawText(line.txt, line.color, line.size, line.x, line.y)
    })
}

function onSwitch() {
    const currIdx = gCurrMeme.selectedLineIdx
    const lines = gCurrMeme.lines
    if(currIdx > lines.length+1)currIdx = 0
    const {txt, color, size, x, y} = lines[currIdx]
    renderMeme()
    drawBorder(x,y,x ,y )
    

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
    // console.log(gCtx);
    console.log(x-text.length, y);
}

function drawBorder(x, y, xEnd = 100, yEnd = 100) {
    gCtx.strokeStyle = 'white'
    gCtx.strokeRect(x, y, xEnd, yEnd)
}

function downloadCanvas(elLink) {
    const dataUrl = gElCanvas.toDataURL()
    console.log('dataUrl', dataUrl)

    elLink.href = dataUrl
    // Set a name for the downloaded file
    elLink.download = 'my-img'
}