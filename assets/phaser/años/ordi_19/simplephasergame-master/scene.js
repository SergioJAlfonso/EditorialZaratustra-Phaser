import Player from './player.js'
import Platform from './platform.js'
import Bola from './bola.js';

export default class Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'scene' });
  }

  create() {
    this.stars = 10;
    this.gorpe = this.sound.add("gorpe");
    this.bases = this.add.group();
    this.player = new Player(this, 50, 400);
    this.colisionesLeft = 6;

    new Bola(this, 200, 200, this.colisionesLeft, this.player);

    this.wall1 = new Platform(this, this.player, 500, 250, true);
    this.tiempo = 1500;
    this.timer = 1;
    this.label = this.add.text(10, 10);;

    this.time.addEvent({
      delay: this.timer,                // ms
      callback: () => {
        this.tiempo--,
        this.label.text = 'Time: ' + this.tiempo
      },
      loop: true
    });
  }

  update(){

    if(this.tiempo < 0){
      this.scene.start("SceneA")
      this.scene.pause();
    }
    else if(this.colisionesLeft <=0){
      this.scene.start("SceneB")
      this.scene.pause();
    }
  }

  subtractColl(){
    this.colisionesLeft--;
  }
}