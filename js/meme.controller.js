let gElCanvas
let gCtx
let gCurrMeme

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    createLine()
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

        console.log(txtLength);

        line.x = gElCanvas.width / 2
        line.y = (idx + 1) * (line.size + txtSpace)
        // console.log(line);
        // console.log(line.x);
        const padding = 10
        line.borderStartX = line.x - txtLength.width / 2
        line.borderStartY = line.y - size / 2 - padding
        line.borderWidth = txtLength.width
        line.borderHeight = size + padding * 2
        drawText(line.txt, line.color, line.size, line.x, line.y)
    })
}

// function onFlexible(){
//     flexible()

// }

function onShare(){
    onUploadImg()
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

function onDeleteLine() {
    deleteLine(gCurrMeme.selectedLineIdx)
    renderMeme()
}

function onSwitchLine() {
    const elInput = document.querySelector('.meme-text-input')
    switchLIne()
    renderMeme()
    const lines = gCurrMeme.lines
    const { txt, borderStartX, borderStartY, borderWidth, borderHeight } = lines[gCurrMeme.selectedLineIdx]
    elInput.value = txt
    drawBorder(borderStartX, borderStartY, borderWidth, borderHeight)
}

function onLeftALign() {
    alignLeft()
}

function onCenterALign() {
    alignCenter()
}

function onRightALign() {
    alignRight()
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
        const { txt, borderStartX, borderStartY, borderWidth, borderHeight } = lines[clickedLine]
        elInput.value = txt
        drawBorder(borderStartX, borderStartY, borderWidth, borderHeight)
    }
}

function drawText(text, color, size, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = `${color}`
    gCtx.fillStyle = 'black'
    gCtx.font = `${size}px Impact`
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