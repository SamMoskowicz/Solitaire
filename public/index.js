const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
import cards from './cards'

console.log(cards)

canvas.height = 600
canvas.width = 600

const selectedCards = {
    origin: {
        x,
        y
    },
    target: {
        x,
        y
    },
    curr: {
        x,
        y
    },
    deck: []
}

const cardSettings = {
    width,
    height
}

const frame = timestamp => {
    console.log(timestamp)
    window.requestAnimationFrame(frame)
}

frame()