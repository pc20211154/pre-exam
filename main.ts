let x = 0
input.onButtonPressed(Button.A, function () {
    x = 1
    for (let index = 0; index < 10; index++) {
        basic.showNumber(x)
        x += 2
    }
})
input.onButtonPressed(Button.AB, function () {
    if (input.temperature() < 25) {
        basic.showString("Switch off Air Conditioner")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("20211154")
})
