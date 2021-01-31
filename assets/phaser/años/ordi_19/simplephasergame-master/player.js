import Star from './star.js'

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player');
    this.score = 0;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.allowGravity = false;
    this.body.setCollideWorldBounds();
    this.body.setSize(64,64)
    this.body.x += 50
 
    this.speed = 200;
    this.jumpSpeed = -400;
    this.label = this.scene.add.text(10, 10);
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.updateScore();
    this.keys = {
      up: scene.input.keyboard.addKey('w'),
      down: scene.input.keyboard.addKey('s'),
      right: scene.input.keyboard.addKey('d'),
      left: scene.input.keyboard.addKey('a')
    };
  }
  point() {
    this.score++;
    this.updateScore();
  }
  
  updateScore() {
    this.label.text = 'Score: ' + this.score;
  }
  preUpdate() {
    if (this.keys.up.isDown || this.cursors.up.isDown) {
      this.body.setVelocity(0, -this.speed);
    }
    else if (this.keys.left.isDown) {
      this.body.setVelocity( -this.speed, 0);
    }
    else if (this.keys.right.isDown) {
      this.body.setVelocity(this.speed, 0);

    }
    else if(this.keys.down.isDown){
      this.body.setVelocity(0,this.speed);
    }
    else {
      this.body.setVelocity(0);
    }
  }
}
