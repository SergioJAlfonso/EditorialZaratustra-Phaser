import Platform from './platform.js'
import Coin from './coin.js'
import Player from './player.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
    this.load.spritesheet('coin','Coins-sheet.png',{frameHeight:45,frameWidth:45});
    this.load.spritesheet('player','Player-sheet.png',{frameHeight:32,frameWidth:20});
    this.load.audio('point','laser.mp3');
  }

  create() {
    this.matter.world.setBounds();
    this.cameras.main.setBackgroundColor("0xFFFFFF");
    this.points = 0;
    this.uiText = this.add.text(0,0,"Puntos: "+this.points).setFontSize(40).setColor("#000000");
    this.pointAudio = this.sound.add('point');

    let floor = new Platform(this,700,650,1400,300);
    let plats = [];
    plats.push(new Platform(this,700,200,250,50));
    plats.push(new Platform(this,300,300,250,50));
    plats.push(new Platform(this,1100,300,250,50));

    this.createCoinAnimation();
    for(let i = 0; i < plats.length; i++){
      let coin = new Coin(this,plats[i].x,plats[i].y-55);
    }

    this.matter.world.on('collisionstart', 
        (evento, cuerpo1, cuerpo2) => {if(cuerpo1.gameObject != null && cuerpo2.gameObject != null && cuerpo1.gameObject.isCoin || cuerpo2.gameObject.isCoin){
            let coin = (cuerpo1.gameObject.isCoin) ? cuerpo1.gameObject : cuerpo2.gameObject;
            coin.destroy();
            this.points++;
            this.updateuitext();
            this.pointAudio.play();
        }},this);

    this.player = new Player(this,700,300,10);
  }

  updateuitext(){
    this.uiText.setText("Puntos: "+this.points);
  }

  createCoinAnimation(){
    this.anims.create({
      key: 'coinAnim',
      frames: this.anims.generateFrameNames('coin'),
      defaultTextureKey: null,
      frameRate: 10,
      delay: 0,
      repeat: -1,
      repeatDelay: 0
  })
  }

  update(time, delta) {    
  }
}