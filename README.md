# Battleship

This is a [Battleship game](https://www.theodinproject.com/lessons/node-path-javascript-battleship) project from [The Odin Project](https://www.theodinproject.com) curriculum with the use of vanilla JavaScript.

Test-Driven Development was used in developing this game.

Drag and Drop: <img width="1680" alt="Screen Shot 2022-07-27 at 12 18 12 AM" src="https://user-images.githubusercontent.com/84443588/181067324-fbccccda-8a21-4ffc-acb4-b638f2ae2312.png">
Attacks and Misses: <img width="1680" alt="Screen Shot 2022-07-27 at 1 06 54 AM" src="https://user-images.githubusercontent.com/84443588/181067914-91527727-bec6-4e94-9625-74e01e40341f.png">
Mobile View: <img width="348" alt="Screen Shot 2022-07-27 at 1 04 55 AM" src="https://user-images.githubusercontent.com/84443588/181067483-ef65bcda-c35a-4d75-9572-e6af4b4a2047.png">

## Demo

> - [Check me out!](https://denzelgranadoz.github.io/battleship/)

## Built With

- HTML
- CSS
- JavaScript
- Jest
- Webpack

## Getting Started

To get this project up and running locally, follow the steps below:

1. Clone repository:
   `git clone https://github.com/DenzelGranadoz/battleship.git`

2. Change directory into the cloned repository:
   `cd battleship`

3. Once you have cloned this project, you can install the required dependencies by using:
   `npm install`

4. Distribution files can be produced using:
   `npm run build`

## Features

- Drag and Drop ship placement, Tiles around ship placed is marked as reserved and highlighted red, prevents ship placement.
- How to play Popup menu containing guidelines with sliding animation.
- Supports Mobile Devices.
- A hit on the enemy ship is marked as a bullseye.
- A missed attack on the enemy board is marked as a gray dot.
- Sinking enemy fleet will show a pop-up winner message.

## Usage

- Ships can be Dragged and Dropped but Random ship placement is available with the Random Board Button.
- Board can be cleared during placement with the Reset Board Button.
- A Start Button will appear once the ships has been placed.
- Game would start after Start button has been pressed.
- A how to play button can be found on the upper right corner of the screen.
- Pressing on a tile or coordinate will order an attack in that spot.
- The tile with the cursor on is highlighted.

## Improvements

Features that can be added or improved on.

- Improved AI
- Better UI Design
- 2 player mode
