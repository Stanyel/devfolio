---
title: Raspberry Pi GPIO Protection Hat
date: '2022-11-8T12:00:00.00Z'
description: 'Building a protection circuit for the Raspberry Pi GPIO'
---

After damaging multiple Raspberry Pi's from shorting pins to other, less friendly, contacts I decided that it would be a good idea to create a circuit that would protects those inputs from ESD, overvotlage and overcurrent. This board would need to work for all data rates from the Pi and protect the power pins of the Pi.

This board takes the 20x2 pinout from the Pi and translates it an identical but protected output on the right side of the board.
![Solo1](./Solo1.jpg)

## Components
To protect the GPIO, a bidirectional level shifter was used as a buffer. The TXS0108E from TI was chosen as it's A side ports accept the 3.3V  voltage level from the Pi and its B side ports range from 1.65V to 5.5V, allowing the user to decide the votlage level of their outputs from 3.3V or 5V. This chip can transmit at 50Mbps which is plenty enough for a Raspberry Pi.

3 Chips were used so that all GPIO would be protected, each chip has 8 inputs however which leaves 2 pins as unconnected to the protected output (GPIO 19 & 26).
The power pins of the Pi are connected through zeners and polyfuses such that any shorts or voltage mismatches on the protected side won't effect the Pi. Power to the level shifters are drawn from off board, isolated from the power pins of the Pi.
0.1uF decoupling capacitors are placed next to all power ports.	
![schematic](./schematic.png)

## Design
The board itself is only 2 layers with a signal/ground and ground plane. Via stitching is done throughout the board and all copper islands are grounded so that switching EMI is reduced and current return paths dont cause any issues (not much of a concern given the clock speed of the Pi but why not :).

JLCPCB fabricated the PCB and components are from various vendors. The boards themselves turned out very well except for a lack of solder mask between the TXS0108E pins but I guess that is what you get from a $22 PCB. All components were hand soldered.
The board dimensions are 1840mil  x  2725mil with a total of 31 components.

![WithPi](./WithPi.jpg)

