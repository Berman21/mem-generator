var gImgs = [
    { id: 1, url: 'images/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'images/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'images/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'images/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'images/5.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'images/6.jpg', keywords: ['funny', 'cat'] },
    { id: 7, url: 'images/7.jpg', keywords: ['funny', 'cat'] },
    { id: 8, url: 'images/8.jpg', keywords: ['funny', 'cat'] },
    { id: 9, url: 'images/9.jpg', keywords: ['funny', 'cat'] },
    { id: 10, url: 'images/10.jpg', keywords: ['funny', 'cat'] },
    { id: 11, url: 'images/11.jpg', keywords: ['funny', 'cat'] },
    { id: 12, url: 'images/12.jpg', keywords: ['funny', 'cat'] },
    { id: 13, url: 'images/13.jpg', keywords: ['funny', 'cat'] },
    { id: 14, url: 'images/14.jpg', keywords: ['funny', 'cat'] },
    { id: 15, url: 'images/15.jpg', keywords: ['funny', 'cat'] },
    { id: 16, url: 'images/16.jpg', keywords: ['funny', 'cat'] },
    { id: 17, url: 'images/17.jpg', keywords: ['funny', 'cat'] },
    { id: 18, url: 'images/18.jpg', keywords: ['funny', 'cat'] },
    { id: 19, url: 'images/19.jpg', keywords: ['funny', 'cat'] },
    { id: 20, url: 'images/Ancient-Aliens.jpg', keywords: ['funny', 'cat'] },
    { id: 21, url: 'images/drevil.jpg', keywords: ['funny', 'cat'] },
    { id: 22, url: 'images/img2.jpg', keywords: ['funny', 'cat'] },
    { id: 23, url: 'images/img4.jpg', keywords: ['funny', 'cat'] },
    { id: 24, url: 'images/img5.jpg', keywords: ['funny', 'cat'] },
    { id: 25, url: 'images/img6.jpg', keywords: ['funny', 'cat'] },
    { id: 26, url: 'images/img11.jpg', keywords: ['funny', 'cat'] },
    { id: 27, url: 'images/img12.jpg', keywords: ['funny', 'cat'] },
    { id: 28, url: 'images/leo.jpg', keywords: ['funny', 'cat'] },
    { id: 29, url: 'images/meme1.jpg', keywords: ['funny', 'cat'] },
    { id: 30, url: 'images/One-Does-Not-Simply.jpg', keywords: ['funny', 'cat'] },
    { id: 31, url: 'images/Oprah-You-Get-A.jpg', keywords: ['funny', 'cat'] },
    { id: 32, url: 'images/patrick.jpg', keywords: ['funny', 'cat'] },
    { id: 33, url: 'images/putin.jpg', keywords: ['funny', 'cat'] },
    { id: 34, url: 'images/X-Everywhere.jpg', keywords: ['funny', 'cat'] },
    { id: 35, url: 'images/003.jpg', keywords: ['funny', 'cat'] },
    { id: 36, url: 'images/dogs-square.jpg', keywords: ['funny', 'cat'] },
    { id: 37, url: 'images/005.jpg', keywords: ['funny', 'cat'] },
    { id: 38, url: 'images/006.jpg', keywords: ['funny', 'cat'] },
    { id: 39, url: 'images/what-you-would-do.jpg', keywords: ['funny', 'cat'] },
    { id: 40, url: 'images/yes-kid.jpg', keywords: ['funny', 'cat'] },
    { id: 41, url: 'images/laughing-midgert.jpg', keywords: ['funny', 'cat'] },
    { id: 42, url: 'images/charley.jpg', keywords: ['funny', 'cat'] },
    { id: 43, url: 'images/dogs.jpg', keywords: ['funny', 'cat'] }
]

var gLines = ['aaaa','bbbb','ccccc','dddddd']

var gImg

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        // {
        //     txt: 'a',
        //     size: 50,
        //     color: 'white',
        // }
    ]
}

function flexible(){
    let randIdx = getRandomIntInclusive(0,gImgs.length)
    gImg = gImgs[randIdx].url
    randIdx = getRandomIntInclusive(0,gLines.length)
    const randLine = gLines[randIdx]
    createLine(randLine)
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

function setLineTxt(txt, idx) {
    gMeme.lines[idx].txt = txt
    // console.log('Service gMeme text:', gMeme.lines[0].txt);
}

function setLineColor(val, idx) {
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

function createLine(txt = 'NEW LINE') {
    gMeme.lines.push({
        txt,
        size: 50,
        color: 'white',
    })
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    // console.log('created new line', gMeme.lines);
}

function deleteLine(idx){
    gMeme.lines.splice(idx,1)
    gMeme.selectedLineIdx--
}

function switchLIne() {
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++
}