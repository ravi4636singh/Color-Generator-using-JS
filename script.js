const getColorsBtn = document.querySelector('#get_colors')
const colorContainers = document.querySelectorAll('div')
const hexChars = '0123456789ABCDEF'

const colorGenerator = () => {
    colorContainers.forEach((colorContainer) => {
        let hexColor = '#'

        for(let i = 0; i < 6; i++){
            hexColor += hexChars[Math.floor(Math.random() * hexChars.length)]
        }

        colorContainer.style.backgroundColor = hexColor
        colorContainer.textContent = hexColor
    })
}

window.onload = colorGenerator()

getColorsBtn.addEventListener('click', () => {
    colorGenerator()    
})

colorContainers.forEach((colorContainer) => {
    colorContainer.addEventListener('click', () => {
        let colorCode = colorContainer.textContent
        navigator.clipboard.writeText(colorCode)
        alert(`Color Copied : ${colorCode}`)
    })
})