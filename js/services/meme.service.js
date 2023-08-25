var gImgs = [
    { id: 1, url: 'images/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'images/2.jpg', keywords: ['funny', 'cat'] },
    { id: 1, url: 'images/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'images/2.jpg', keywords: ['funny', 'cat'] },
    { id: 1, url: 'images/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'images/2.jpg', keywords: ['funny', 'cat'] },
    { id: 1, url: 'images/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'images/2.jpg', keywords: ['funny', 'cat'] },
    { id: 1, url: 'images/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'images/2.jpg', keywords: ['funny', 'cat'] }
]

var gImg

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'red',
        }
    ]
}



function setImg(img) {
    gImg = img
}

function getImg() {
    return gImg
}

function getImages() {
    return gImgs
}

function getMeme() {

    return gMeme
}

function setLineTxt(txt,idx) {
    gMeme.lines[idx].txt = txt
    // console.log('Service gMeme text:', gMeme.lines[0].txt);
}

function setLineColor(val,idx) {
    gMeme.lines[idx].color = val
}

function increaseFontSize(idx) {
    gMeme.lines[idx].size++
    // console.log('Service gMeme size:', gMeme.lines[0].size);
}

function decreaseFontSize(idx) {
    gMeme.lines[idx].size--
    // console.log('Service gMeme size:', gMeme.lines[0].size);
}

function createLine() {
    gMeme.lines.push({
        txt: 'NEW LINE',
        size: 20,
        color: 'blue',
    })
    gMeme.selectedLineIdx = gMeme.lines.length-1
    // console.log('created new line', gMeme.lines);
}

function switchLIne() {
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++
}