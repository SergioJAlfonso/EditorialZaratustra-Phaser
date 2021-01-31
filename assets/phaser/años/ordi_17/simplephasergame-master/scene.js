import PlayerPadre from './playerPadre.js'
import Player from './player1.js'
import Platform from './platform.js';

export default class Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'scene' });
  }

  create() {
    this.vidas1 = 10;
    this.vidas2 = 5;


    this.keysP1 = {
      up: 'W',
      left: 'A',
      right: 'D'
    }
    this.keysP2 = {
      up: 'i',
      left: 'j',
      right: 'l'
    }

  
    this.lives1 = this.add.text(10, 20);
    this.lives2 = this.add.text(800, 20);
    this.stars = 10;
    this.bases = this.add.group();
    this.player = new Player(this, 200, 300, this.keysP1, this.vidas1);
    this.player2 = new Player(this, 800, 300, this.keysP2, this.vidas2);
    this.lives1.text = "Vidas: " + this.player.vidas; 
    this.lives2.text = "Vidas: " + this.player2.vidas;

    this.physics.add.collider(this.player, this.player2, ()=>{
      this.player.loseLife();
      this.player2.loseLife();
      this.updateLives();
    })

    new Platform(this, this.player, this.bases, 150, 350);
    new Platform(this, this.player, this.bases, 850, 350);
    new Platform(this, this.player, this.bases, 500, 200);
    new Platform(this, this.player, this.bases, 150, 100);
    new Platform(this, this.player, this.bases, 850, 100);
    this.spawn();
  }

  spawn(from = null) {
    Phaser.Math.RND.pick(from || this.bases.children.entries).spawn();
  }

  updateLives(){
    this.lives1.text = "Vidas: " + this.player.vidas; 
    this.lives2.text = "Vidas: " + this.player2.vidas; 
  }
}