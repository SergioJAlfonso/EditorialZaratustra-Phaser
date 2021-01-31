import Enemy from './enemy.js';
import Player from './player.js'

export default class Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'scene' });
  }

  create() {
    this.bg = this.add.tileSprite(0, 0, this.game.config.width,this.game.config.height, 'fonso').setOrigin(0,0);
    this.points = 0;
    this.bases = this.add.group();
    this.player = new Player(this, 50, 300);

    this.donglas = this.sound.add('erDanies');
    this.spawnTime = false
    this.time.delayedCall(this.getRndInteger(2000, 4000), () => {
      this.spawnTime = true;
    })

  }
  update() {
    this.bg.tilePositionX++;

    if (this.spawnTime) {
      this.spawnTime = false;
      new Enemy(this, 1000, 500, this.player);
      this.time.delayedCall(this.getRndInteger(2000, 4000), () => {
        this.spawnTime = true;
      })
    }

    if(this.player.score >= 5){
      this.scene.launch('end');
      this.scene.pause();
    }
  }
  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}