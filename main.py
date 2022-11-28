distancia = 0

def on_forever():
    global distancia
    distancia = sonar.ping(DigitalPin.P2, DigitalPin.P1, PingUnit.CENTIMETERS)
    basic.pause(1500)
    I2C_LCD1602.lcd_init(39)
    I2C_LCD1602.show_string("DISTANCIA", 3, 0)
    I2C_LCD1602.show_number(distancia, 5, 1)
    basic.pause(2000)
    I2C_LCD1602.clear()
    basic.pause(1000)
    if distancia > 30:
        I2C_LCD1602.show_string("Normal", 4, 0)
        I2C_LCD1602.show_string(":)", 8, 1)
    elif distancia < 30:
        I2C_LCD1602.show_string("Peligro", 4, 0)
        I2C_LCD1602.show_string("X", 8, 1)
        music.play_melody("A G A G A G A G ", 150)
        images.icon_image(IconNames.NO).show_image(0)
basic.forever(on_forever)
