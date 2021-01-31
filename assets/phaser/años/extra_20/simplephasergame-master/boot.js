export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'boot' });
  }
  preload() {
    this.load.image('platform', 'platform.png');
    this.load.image('base', 'base.png');
    this.load.image('star', 'star.png');
    this.load.image('player', 'player.png');
    this.load.image('fonso', 'fondo.jpg');
    this.load.audio('erDanies','asda.mp3')
    this.load.spritesheet('spritecosa', 'spritestrip.png', {frameWidth: 256, frameHeight: 256})
  }

  create() {
    this.scene.start('scene');
  }
}