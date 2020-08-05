const canvas = document.getElementById('canvas')
canvas.width = 600
canvas.height = 600
const ctx = canvas.getContext('2d')
import deck from './cards'

console.log(deck)

const card = new Image()
card.src = '/images/cards.png'

ctx.fillRect(0, 0, canvas.width, canvas.height)

const mouse = {
}

const cardDeck = []

const cards = {
    height: 97,
    width: 65
}

let currCard = deck[0]

const frame = timeStamp => {
    if (mouse.down && mouse.x >= currCard.xPos && mouse.x <= currCard.xPos + cards.width && mouse.y >= currCard.yPos && mouse.y <= currCard.yPos + cards.height) {
        console.log(currCard.x + cards.width, currCard.y + cards.height)
        console.log('hello testing')
        currCard.xPos = mouse.x - 49
        currCard.yPos = mouse.y - 33
    } else {
        currCard.xPos = 0
        currCard.yPos = 0
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'red'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(card, currCard.x, currCard.y, cards.width, cards.height, currCard.xPos, currCard.yPos + 5, cards.width, cards.height)
    window.requestAnimationFrame(frame)
}

canvas.addEventListener('mousemove', evt => {
    if (!mouse.down) return
    mouse.x = evt.clientX
    mouse.y = evt.clientY
})

canvas.addEventListener('mousedown', evt => {
    mouse.down = true
    mouse.x = evt.clientX
    mouse.y = evt.clientY
})

canvas.addEventListener('mouseup', evt => {
    mouse.down = false
})

window.addEventListener('keydown', evt => {
    const cardIndex = deck.indexOf(currCard)
    if (evt.key === 'ArrowUp') currCard = deck[cardIndex + 1] || deck[deck.length - 1]
    if (evt.key === 'ArrowDown') currCard = deck[cardIndex - 1] || deck[0]
})

frame()
