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
    gImgs = img
}

function getImg() {
    return gImgs
}

function getImages() {
    return gImgs
}

function getMeme() {

    return gMeme
}



function setLineTxt(txt) {
    gMeme.lines[0].txt = txt
    console.log('Service gMeme text:', gMeme.lines[0].txt);
}

function setLineColor(val) {
    gMeme.lines[0].color = val
}

function increaseFontSize() {
    gMeme.lines[0].size++
    console.log('Service gMeme size:', gMeme.lines[0].size);
}

function decreaseFontSize() {
    gMeme.lines[0].size--
    console.log('Service gMeme size:', gMeme.lines[0].size);
}

function createLine() {
    gMeme.lines.push({
        txt: 'NEW LINE',
        size: 20,
        color: 'blue',
    })
    gMeme.selectedLineIdx++
    console.log('created new line', gMeme.lines);
}