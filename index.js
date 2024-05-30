const screenEl = document.querySelector('.screen')

const appendToDisplay = (text) => {
    if (screenEl.value.length == 31) {
        alert('Maximum number of characters exceeded!')
        return
    }
    screenEl.value += text
}

const compute = () => {
    try {
        const inputValues = screenEl.value
        const result = eval(inputValues)
        screenEl.value = result
    } catch (error) {
        screenEl.value = "Error"
    }
}
const deleteNumber = () => {
    screenEl.value = screenEl.value.toString().slice(0, -1)
}
const clearAll = () => {
    screenEl.value = ''
}