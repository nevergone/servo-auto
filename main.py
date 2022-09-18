def on_press_event(message):
    pass
EM_IR.on_press_event(on_press_event)

strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()

def on_forever():
    EM_IR.IrRemote_init(IrPins.P5)
basic.forever(on_forever)
