export default class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, jogatore) {
    super(scene, x, y, 'player');
    this.score = 0;
    this.scene = scene;
    this.jokatoire = jogatore;
    this.setTint('0xCA7E1E')
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.allowGravity = false
    this.scene.physics.add.collider(this, this.jokatoire, ()=>{
      this.scene.scene.launch('end')
      this.scene.scene.pause();
    })

    this.speed = -300;
    this.body.setVelocityX(this.speed);
  }

  preUpdate() {

    if (this.x <= 0){
      this.jokatoire.point();
      this.destroy();
    }
  }
}