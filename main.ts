let sender_id = 0
radio.setGroup(42)
basic.forever(function () {
    sender_id = 0
    radio.sendNumber(sender_id)
    basic.showNumber(sender_id)
})
