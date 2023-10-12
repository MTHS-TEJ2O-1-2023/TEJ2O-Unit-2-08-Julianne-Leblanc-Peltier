"""
Created by: Julianne Leblanc-Peltier
Created on: Sep 2023
This module is a Micro:bit MicroPython program that displays colours using an RBG LED
"""

from microbit import *

display.clear()
display.show(Image.HAPPY)
pin8.write_digital(0)
pin12.write_digital(0)
pin16.write_digital(0)

while True:
    if button_a.is_pressed():
        pin8.write_digital(1)
        pin12.write_digital(1)
        pin16.write_digital(1)
        display.scroll("White")
        pin8.write_digital(0)
        pin12.write_digital(0)
        pin16.write_digital(0)

        pin8.write_digital(1)
        display.scroll("Red")
        pin8.write_digital(0)

        pin12.write_digital(1)
        display.scroll("Green")
        pin12.write_digital(0)

        pin16.write_digital(1)
        display.scroll("Blue")
        pin16.write_digital(0)

        pin8.write_digital(1)
        pin12.write_digital(1)
        display.scroll("Yellow")
        pin8.write_digital(0)
        pin12.write_digital(0)

        pin8.write_digital(1)
        pin16.write_digital(1)
        display.scroll("Magenta")
        pin8.write_digital(0)
        pin16.write_digital(0)

        pin12.write_digital(1)
        pin16.write_digital(1)
        display.scroll("Cyan")
        pin12.write_digital(0)
        pin16.write_digital(0)
