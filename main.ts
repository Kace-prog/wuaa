let distancia = 0
basic.forever(function on_forever() {
    
    distancia = sonar.ping(DigitalPin.P2, DigitalPin.P1, PingUnit.Centimeters)
    basic.pause(1500)
    I2C_LCD1602.LcdInit(39)
    I2C_LCD1602.ShowString("DISTANCIA", 3, 0)
    I2C_LCD1602.ShowNumber(distancia, 5, 1)
    basic.pause(2000)
    I2C_LCD1602.clear()
    basic.pause(1000)
    if (distancia > 30) {
        I2C_LCD1602.ShowString("Normal", 4, 0)
        I2C_LCD1602.ShowString(":)", 8, 1)
    } else if (distancia < 30) {
        I2C_LCD1602.ShowString("Peligro", 4, 0)
        I2C_LCD1602.ShowString("X", 8, 1)
        music.playMelody("A G A G A G A G ", 150)
        images.iconImage(IconNames.No).showImage(0)
    }
    
})
