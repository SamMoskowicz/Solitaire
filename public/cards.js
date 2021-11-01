const cards = [
]

const makeCard = (x, y, color, name, n) => ({
    x,
    y,
    xPos: 0,
    yPos: 0,
    color,
    name,
    n
})

const names = ['spades', 'clubs', 'hearts', 'diamonds']

for (let i = 99.5; i <= 99.5 * 4; i += 99.5) {
    for (let j = 0; j < 66 * 13; j += 66) {
        let color = i < 200 ? 'black' : 'red'
        const name = names[(i / 99.5) - 1]
        const n = j / 66
        cards.push(makeCard(j, i, color, name, n))
    }
}

export default cards

