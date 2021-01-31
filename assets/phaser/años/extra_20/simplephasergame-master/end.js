

export default class End extends Phaser.Scene {
  constructor() {
    super({ key: 'end' });
  }
  preload() {
    this.time.delayedCall(2000, () =>{
      this.scene.start('scene')
    })
  }

  create() {
    this.add.text(10, 10, 'Se acabó!');
  }
}