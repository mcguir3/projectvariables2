let team1_wins = 0
let tie = 0
let team2_wins = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Mom")
    team1_wins += 1
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Tie!")
    tie += 1
    basic.showString("" + (tie))
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Dad")
    team2_wins += 1
    basic.showString("" + (team2_wins))
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Mom")
    basic.showString("" + (team1_wins))
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Dad")
    basic.showString("" + (team2_wins))
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Ties")
    basic.showString("" + (tie))
    basic.pause(1000)
    basic.clearScreen()
})
basic.forever(function () {
	
})
