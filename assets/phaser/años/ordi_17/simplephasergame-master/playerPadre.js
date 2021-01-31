
export default class PlayerPadre extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, vidas) {
    super(scene, x, y, 'player');
    this.score = 0;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();
    this.body.setBounce(0.6);
    this.speed = 300;
    this.jumpSpeed = -400;
    this.label = this.scene.add.text(10, 10);
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.updateScore();
    this.vidas = vidas;
  }
  point() {
    this.score++;
    this.updateScore();
  }

  updateScore() {
    this.label.text = 'Score: ' + this.score;
  }
  loseLife() {
    this.vidas--;
  }
  bounce(){
    
  }
}
