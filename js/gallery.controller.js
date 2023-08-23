
function renderGallery() {
    var images = getImages()
    const elEditor = document.querySelector('.editor-container')
    const elGallery = document.querySelector('.gallery-container')
    if (!images.length) {
        elGallery.innerHTML = `<span data-trans="memes-not-found" class="memes-not-found"> No Memes found </span> `
    } else {
        var strHtmls = images.map(img =>`
        <div class="image">
        <img src=${img.url} class="meme-img" onclick="onImgSelect(this)">
        </div>
        `)

        elGallery.innerHTML = strHtmls.join('')
    }
    elEditor.classList.add('hidden')
    elGallery.classList.remove('hidden')
    resizeCanvas()
}

function onImgSelect(elImg) {
    setImg(elImg)
    renderMeme()
    const elEditor = document.querySelector('.editor-container')
    const elGallery = document.querySelector('.gallery-container')
    elEditor.classList.remove('hidden')
    elGallery.classList.add('hidden')
    
}