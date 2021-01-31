export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'boot' });
  }
  preload() {
    this.load.image('platform', 'platform.png');
    this.load.image('base', 'base.png');
    this.load.image('star', 'star.png');
    this.load.image('player', 'player.png');

    this.load.audio("gorpe", "FFXIV OST - Eden's Gate Titan's Theme.mp3")
  }

  create() {
    this.scene.start('scene');
  }
}