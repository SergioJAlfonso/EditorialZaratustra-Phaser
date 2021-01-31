import Wall from './Wall.js'
import Player from './Player.js'
import Ball from './Ball.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() { 
    this.load.image('player','Player.png');
  }

  create() {
    this.cameras.main.setBackgroundColor('#FFFFFF');

    //Player
    this.player = new Player(this,700,400,300);
    //Walls
    let wallUp = new Wall(this,700,25,1400,50,this.player);
    let wallDown = new Wall(this,700,775,1400,50,this.player);
    let wallLeft = new Wall(this,25,400,50,1400,this.player);
    let wallRight = new Wall(this,1375,400,50,1400,this.player);
    this.walls = [wallUp,wallDown,wallLeft,wallRight];
    //Ball
    this.createBall(1,400,400,100,3);
    //UI
    this.collisions = 15;
    this.timeToPlay = 30;//secs
    this.gameRunning = true;

    let string = "Quedan " + this.collisions + " colisiones y " + this.timeToPlay + " segundos";
    this.UIText = this.add.text(75,75,string).setColor('#000000').setFontSize(30);

    this.timer = this.time.addEvent({
      delay: 1000,                // ms
      callback: this.updateUI,
      args: [true],
      callbackScope: this,
      loop: true
  });

    this.spacebar = this.input.keyboard.addKey('SPACE');
  }

  update(time, delta) {
    if(this.timeToPlay == 0 || this.collisions == 0){
      this.physics.pause();
      if(this.timeToPlay == 0)
        {this.add.text(500,400,"HAS PERDIDO").setColor('#FF0000').setFontSize(60);}
      else
        {this.add.text(500,400,"HAS GANADO").setColor('#00FF00').setFontSize(60);}
      this.add.text(350,500,"Pulsa espacio para reiniciar").setColor('#000000').setFontSize(40);
      this.gameRunning = false;
    }

    if(this.spacebar.isDown && !this.gameRunning)
      this.scene.restart();
  }

  createBall(amount,x,y,radius,remaining){
    for(let i = 0; i < amount; i++){
      let speed = 100;
      if(i%2==0) speed *= -1;
      let ball = new Ball(this,x,y,radius,radius,speed,this.walls,this.player,remaining);
      this.physics.add.collider(ball,this.player,this.ballCollided);
    }
  }

  ballCollided(ball,player){
    let scene = ball.scene
    if(ball.remaining > 0)
      {scene.createBall(2,ball.x,ball.y,ball.width/2,ball.remaining-1);}
    scene.collisions--;
    scene.updateUI(false);
    ball.removeAllListeners();
    ball.destroy();
  }

  updateUI(secondPassed){
    if(secondPassed)this.timeToPlay--;
    let string = "Quedan " + this.collisions + " colisiones y " + this.timeToPlay + " segundos";   
    this.UIText.setText(string);
  }
}