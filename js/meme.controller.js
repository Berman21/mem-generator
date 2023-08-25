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
    const lines = gCurrMeme.lines
    const txtSpace = 25
    coverCanvasWithImg(memeImg)

    lines.forEach((line, idx) => {
        const { txt, color, size } = line
        const txtLength = gCtx.measureText(txt)
        
        line.x = gElCanvas.width / 2
        line.y = (idx + 1) * (line.size + txtSpace)

        const padding = 10
        line.borderStartX = line.x - txtLength.width - padding
        line.borderStartY = line.y - size / 2 - padding
        line.borderWidth = padding + txtLength.width * 2 + padding
        line.borderHeight = size + padding * 2
        drawText(line.txt, line.color, line.size, line.x, line.y)
    })
}

function onSetLineTxt(val) {
    setLineTxt(val, gCurrMeme.selectedLineIdx)
    renderMeme()
}

function onSetLineColor(val) {
    console.log(val);
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
    const elInput = document.querySelector('.meme-text-input')
    switchLIne()
    renderMeme()
    const lines = gCurrMeme.lines
    const { txt,borderStartX, borderStartY, borderWidth, borderHeight } = lines[gCurrMeme.selectedLineIdx]
    elInput.value = txt
    drawBorder(borderStartX, borderStartY, borderWidth, borderHeight)
}

function onLineClick(ev) {
    const elInput = document.querySelector('.meme-text-input')
    const { offsetX, offsetY, clientX, clientY } = ev
    const lines = gCurrMeme.lines

    console.log(gCurrMeme.lines)
    const clickedLine = gCurrMeme.lines.findIndex(line => {
        return offsetX >= line.borderStartX && offsetX <= line.borderStartX + line.borderWidth
            && offsetY >= line.borderStartY && offsetY <= line.borderStartY + line.borderHeight
    })
    console.log(clickedLine);
    if (clickedLine === -1) {
        elInput.value = ''
        renderMeme()
    } else {
        renderMeme()
        gCurrMeme.selectedLineIdx = clickedLine
        const { txt,borderStartX, borderStartY, borderWidth, borderHeight } = lines[clickedLine]
        elInput.value = txt
        drawBorder(borderStartX, borderStartY, borderWidth, borderHeight)
    }
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

function drawBorder(x, y, xEnd, yEnd) {
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