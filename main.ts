let lugar = ""
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        lugar = ["casa", "trabalho", "escola"]._pickRandom()
        basic.showString(lugar)
        if (lugar == "casa") {
            basic.showString("Bom descanso!")
        } else if (lugar == "escola" || lugar == "trabalho") {
            basic.showString("Ate mais tarde!")
        }
    }
})
