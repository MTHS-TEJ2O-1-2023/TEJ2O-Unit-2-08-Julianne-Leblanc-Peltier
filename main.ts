/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Julianne Leblanc-Peltier
 * Created on: Sep 2023
 * This program shows all the colours of the LED
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P16, 0)

input.onButtonPressed(Button.A, function () {
  pins.digitalWritePin(DigitalPin.P8, 1)
  pins.digitalWritePin(DigitalPin.P12, 1)
  pins.digitalWritePin(DigitalPin.P16, 1)
  basic.showString('White')
  pins.digitalWritePin(DigitalPin.P8, 0)
  pins.digitalWritePin(DigitalPin.P12, 0)
  pins.digitalWritePin(DigitalPin.P16, 0)

  pins.digitalWritePin(DigitalPin.P8, 1)
  basic.showString('Red')
  pins.digitalWritePin(DigitalPin.P8, 0)

  pins.digitalWritePin(DigitalPin.P12, 1)
  basic.showString('Green')
  pins.digitalWritePin(DigitalPin.P12, 0)

  pins.digitalWritePin(DigitalPin.P16, 1)
  basic.showString('Blue')
  pins.digitalWritePin(DigitalPin.P16, 0)

  pins.digitalWritePin(DigitalPin.P8, 1)
  pins.digitalWritePin(DigitalPin.P12, 1)
  basic.showString('Yellow')
  pins.digitalWritePin(DigitalPin.P8, 0)
  pins.digitalWritePin(DigitalPin.P12, 0)

  pins.digitalWritePin(DigitalPin.P8, 1)
  pins.digitalWritePin(DigitalPin.P16, 1)
  basic.showString('Magenta')
  pins.digitalWritePin(DigitalPin.P8, 0)
  pins.digitalWritePin(DigitalPin.P16, 0)

  pins.digitalWritePin(DigitalPin.P12, 1)
  pins.digitalWritePin(DigitalPin.P16, 1)
  basic.showString('Cyan')
  pins.digitalWritePin(DigitalPin.P12, 0)
  pins.digitalWritePin(DigitalPin.P16, 0)
})
