const board = document.querySelector('#board')
const SQUARE_COUNT = 500
const addColorInput = document.querySelector('#addColor')
const addColorBtn = document.querySelector('#addColorBtn')

let colors = ['#A13326', '#E85314', '#5E1A29']


addColorInput.addEventListener('input', (event) => {
    if(event.target.value) {
        const cl = event.target.value
        addColorInput.style.border = `3px solid ${cl}`;

        return
    }
    addColorInput.style.border = `1px solid #444`
})

addColorBtn.addEventListener('click', (event) => {
    event.preventDefault()

    colors.forEach(color => {
        if (addColorInput.value === color) {
            alert('Такой цвет уже вы присутствует')
            return
        }
        colors.push(addColorInput.value)
    })

   

    colors = colors.filter((item, i, arr) => arr.indexOf(item) === i)


    addColorInput.value = ''
    addColorInput.style.border = 'none'
   

   
})





for (let i = 0; i < SQUARE_COUNT; i++) {
    const square = document.createElement('div')

    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        changeColor(square, 'set')
    })
    square.addEventListener('mouseleave', () => {
        changeColor(square, 'remove')
    })
    
    board.append(square)  
}


function changeColor(el, type) {
    if (type === 'set') {
        const color = getColor()
        el.style.backgroundColor = color
        el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
        return
    }

    if (type === 'remove') {
        el.style.backgroundColor = '#666'
        el.style.boxShadow = '0 0 2px #444'
        return
    }
}

function getColor() {
    const idx = Math.floor(Math.random() * colors.length)
    return colors[idx]
}

