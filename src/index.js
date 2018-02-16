import 'phaser';

import pkg from '../package.json';

// This is the entry point of your game.

const width = 800;
const height = 600;

const config = {
  width,
  height,
  type: Phaser.AUTO,
  transparent: false,
  antialias: true,
  scene: { preload, create },
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('study', 'assets/img/study.png');
}

function create() {
  const centerX = width / 2;
  const centerY = height / 2;
  const welcomeMessage = `Welcome to Phaser ${pkg.dependencies.phaser.substr(1)}`;

  this.add.image(centerX, centerY * 1.2, 'study');

  this.add
    .text(centerX, centerY * 0.8, welcomeMessage, { font: "bold 19px Arial", fill: "#fff" })
    .setOrigin(0.5, 0.5);
}
