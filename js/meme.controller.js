let gElCanvas
let gCtx
let gCurrMeme
let gCurrLineIdx

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    createLine()
}

function renderMeme() {
    const memeImg = getImg()
    gCurrMeme = getMeme()
    gCurrLineIdx = gCurrMeme.selectedLineIdx
    const lines = gCurrMeme.lines
    const txtSpace = 25
    coverCanvasWithImg(memeImg)

    lines.forEach((line, idx) => {
        let { txt, color, size, x, y, align, font } = line

        x = gElCanvas.width / 2
        y = (idx + 1) * (size + txtSpace)

        drawText(txt, color, size, x, y, align, font)
        const txtLength = gCtx.measureText(txt)

        const padding = 10
        line.borderStartX = x - txtLength.width / 2 - padding
        line.borderStartY = y - size / 2 - padding
        line.borderWidth = txtLength.width + padding * 2
        line.borderHeight = size + padding * 2
        drawText(txt, color, size, x, y, align, font)
    })
}


function onSetLineTxt(val) {
    setLineTxt(val, gCurrLineIdx)
    renderMeme()
}

function onSetLineColor(val) {
    console.log(val);
    setLineColor(val, gCurrLineIdx)
    renderMeme()
}

function onIncreaseFontSize() {
    increaseFontSize(gCurrLineIdx)
    renderMeme()
}

function onDecreaseFontSize() {
    decreaseFontSize(gCurrLineIdx)
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

function onFlexible() {
    // console.log('hi');
    flexible()
    // onImgSelect(elImg)
    // renderMeme()
}

function onUpload() {
    uploadImg()
}

function onDownloadCanvas(elLink) {
    downloadCanvas(elLink)
}

function onShare() {
    uploadImg()
}

function onAlignLeft() {
    alignLeft(gCurrLineIdx)
    renderMeme()
}

function onAlignCenter() {
    alignCenter(gCurrLineIdx)
    renderMeme()
}

function onAlignRight() {
    alignRight(gCurrLineIdx)
    renderMeme()
}

// function onSelectFont() {
//     const elFont = document.getElementById('font')
//     const font = elFont.value
//     console.log(font);
//     onSelectFont(font, gCurrLineIdx)
//     renderMeme()
// }

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
        gCurrLineIdx = clickedLine
        const { txt, borderStartX, borderStartY, borderWidth, borderHeight } = lines[clickedLine]
        elInput.value = txt
        drawBorder(borderStartX, borderStartY, borderWidth, borderHeight)
    }
}

function drawText(text, color, size, x, y, align, font) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = `${color}`
    gCtx.font = `${size}px ${font}`
    gCtx.textAlign = align
    gCtx.textBaseline = 'middle'


    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    // console.log(x - text.length, y);
}

function drawBorder(x, y, xEnd, yEnd) {
    gCtx.strokeStyle = 'white'
    gCtx.strokeRect(x, y, xEnd, yEnd)
}

