import Player from './Player.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
    this.load.spritesheet('player','Player-sheet.png',{frameWidth:20,frameHeight:32});
  }

  create() {
    this.matter.world.setBounds();

    this.player1 = new Player(this,400,300,10,{up:"W",left:"A",right:"D"},10);
    this.player2 = new Player(this,1100,300,10,{up:"I",left:"J",right:"L"},5);

    this.p1Text = this.add.text(0,0,"Jugador 1: " + this.player1.health).setFontSize(45);
    this.p2Text = this.add.text(800,0,"Jugador 2: " + this.player2.health).setFontSize(45);

    this.matter.world.on('collisionstart', 
        (evento, cuerpo1, cuerpo2) => {
          if(cuerpo1.gameObject === this.player1 && cuerpo2.gameObject === this.player2 
            || cuerpo2.gameObject === this.player1 && cuerpo1.gameObject === this.player2){
            this.player1.health--;
            this.player2.health--;
            this.updateUI();
        }},this);
  }

  updateUI(){
    this.p1Text.setText("Jugador 1: " + this.player1.health);
    this.p2Text.setText("Jugador 2: " + this.player2.health);
  }

  update(time, delta) {    
  }
}