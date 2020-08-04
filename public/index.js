const canvas = document.getElementById('canvas')
canvas.width = 600
canvas.height = 600
const ctx = canvas.getContext('2d')

const card = new Image()
card.src = '/images/cards.png'

ctx.fillRect(0, 0, canvas.width, canvas.height)

const mouse = {
}

const frame = timeStamp => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'blue'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(card, 195, 200, 65, 95, mouse.x - 32, mouse.y - 47, 65, 95)
    window.requestAnimationFrame(frame)
}

canvas.addEventListener('mousemove', evt => {
    if (!mouse.down) return
    mouse.x = evt.clientX
    mouse.y = evt.clientY
})

canvas.addEventListener('mousedown', evt => {
    mouse.down = true
})

canvas.addEVentListener('mouseup', evt => {
    mouse.down = false
})

frame()