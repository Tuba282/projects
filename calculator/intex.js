var ShowInput = document.getElementById("ShowInput")

function append(userInput) {
    ShowInput.value += userInput
}
function deleteLast() {
    // ShowInput.value = ShowInput.value.slice(0, -1)
    ShowInput.value = ShowInput.value.substring(0, ShowInput.value.length - 1)
}

function clearOutput() {
    ShowInput.value = ""
}
function calculate() {
    try {
        ShowInput.value = eval(ShowInput.value)
    } catch (error) {

        ShowInput.value = "Error"
        clearOutput()
    }
}