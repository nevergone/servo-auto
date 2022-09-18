EM_IR.OnPressEvent(function (message) {
    if (message == 64) {
        basic.showArrow(ArrowNames.North)
        // előre
        pins.servoWritePin(AnalogPin.P14, 180)
        pins.servoWritePin(AnalogPin.P15, 0)
    } else if (message == 25) {
        basic.showArrow(ArrowNames.South)
        // hátra
        pins.servoWritePin(AnalogPin.P14, 0)
        pins.servoWritePin(AnalogPin.P15, 180)
    } else if (message == 21) {
        basic.showIcon(IconNames.No)
        // megáll
        pins.servoWritePin(AnalogPin.P14, 90)
        pins.servoWritePin(AnalogPin.P15, 90)
    } else if (message == 7) {
        basic.showArrow(ArrowNames.East)
        // balra
        pins.servoWritePin(AnalogPin.P14, 100)
        pins.servoWritePin(AnalogPin.P15, 0)
    } else if (message == 9) {
        basic.showArrow(ArrowNames.West)
        // jobbra
        pins.servoWritePin(AnalogPin.P14, 180)
        pins.servoWritePin(AnalogPin.P15, 80)
    }
})
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()
EM_IR.IrRemote_init(IrPins.P5)
basic.forever(function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    basic.pause(1000)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(1000)
})
