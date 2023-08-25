let gElCanvas
let gCtx
let gCurrMeme
let gLines = []

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
}

function renderMeme() {
    const memeImg = getImg()
    gCurrMeme = getMeme()
    console.log('on render gCurrMeme',gCurrMeme);
    const lines = gCurrMeme.lines
    const txtSpace = 25
    coverCanvasWithImg(memeImg)

    lines.forEach((line, idx) => {
        line.x = gElCanvas.width / 2
        line.y = (idx + 1) * (line.size + txtSpace)
        drawText(line.txt, line.color, line.size, line.x, line.y)
    })
}

function onSetLineTxt(val) {
    setLineTxt(val, gCurrMeme.selectedLineIdx)
    renderMeme()
}

function onSetLineColor(val) {
    setLineColor(val, gCurrMeme.selectedLineIdx)
    renderMeme()
}

function onIncreaseFontSize() {
    increaseFontSize(gCurrMeme.selectedLineIdx)
    renderMeme()
}

function onDecreaseFontSize() {
    decreaseFontSize(gCurrMeme.selectedLineIdx)
    renderMeme()
}

function onCreateLine() {
    createLine()
    renderMeme()

}


function onSwitchLine() {
    console.log('on onSwitch gCurrMeme',gCurrMeme);
    if (gCurrMeme.selectedLineIdx === gCurrMeme.lines.length - 1) gCurrMeme.selectedLineIdx = 0
    else gCurrMeme.selectedLineIdx++
    const lines = gCurrMeme.lines
    console.log('on onSwitch gCurrMeme',gCurrMeme);

    const { txt, color, size, x, y } = lines[gCurrMeme.selectedLineIdx]

    const txtLength = gCtx.measureText(txt)
    const padding = 10

    const borderStartX = x - txtLength.width / 2 - padding
    const borderStartY = y - size / 2 - padding
    const borderEndX = txtLength.width + padding * 2
    const borderEndY = size + padding * 2

    renderMeme()
    drawBorder(borderStartX, borderStartY, borderEndX, borderEndY)

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
    // console.log(x - text.length, y);
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