export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'spritecosa');
    this.score = 0;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();
    this.speed = 300;
    this.jumpSpeed = -5 * 64;
    this.displayHeight = 64;
    this.displayWidth = 64
    this.label = this.scene.add.text(10, 10);
    this.states = "corriendo";

    this.scene.input.keyboard.on("keydown", () => {
      if (this.body.onFloor()) {
        this.scene.donglas.play();
        this.body.setVelocityY(this.jumpSpeed);
      }
    });
    this.updateScore();
    this.scene.anims.create({
      key: 'mover',
      frames: this.scene.anims.generateFrameNumbers('spritecosa', { start: 0, end: 5 }),
      frameRate: 8,
      repeat: -1
    });
  }
  point() {
    this.score++;
    this.updateScore();
  }

  updateScore() {
    this.label.text = 'Score: ' + this.score;
  }
  preUpdate(t, d) {
    super.preUpdate(t, d);
    this.anims.play('mover', true);
  }

}