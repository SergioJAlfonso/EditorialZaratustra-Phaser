import Box from './Box.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
    this.load.audio('laser','laser.mp3');
    this.load.audio('noise','powerUpSound.ogg');
  }

  create() {
    this.cameras.main.setBackgroundColor("#FFFFFF");

    this.matter.world.setBounds();

    this.boxSize = {min:50,max:100};
    this.boxSpeed = {min:0.05,max:0.15};
    this.boxes = [];
    this.selectedBox = {object:undefined,position:undefined};

    this.laserSound = this.sound.add('laser');
    this.noise = this.sound.add('noise');

    this.pushForce = 0.1;
    this.setUpInput()
  }

  createRandomBox(){
    let x = Math.floor(Math.random()*this.game.config.width);
    let y = Math.floor(Math.random()*this.game.config.height);
    let size = Math.floor(Math.random()*(this.boxSize.max-this.boxSize.min)+this.boxSize.min);
    this.boxes.push(new Box(this,x,y,size,this.boxSpeed));
    this.selectBox(this.boxes.length-1);
    this.laserSound.play();
  }

  selectBox(position){
    if(this.selectedBox.object != undefined) this.selectedBox.object.fillColor = '0x0000FF';
    this.selectedBox.object = this.boxes[position];
    this.selectedBox.position = position;
    this.selectedBox.object.fillColor = '0x00FF00';
    this.noise.play();
  }

  deleteBox(){
    if(this.selectedBox.object != undefined){
      this.laserSound.play();
      this.selectedBox.object.body.destroy();
      this.selectedBox.object.destroy();
      this.selectedBox.object = undefined;
      this.boxes.splice(this.selectedBox.position,1);
      if(this.boxes.length > 0){
      this.selectBox(Math.floor(Math.random()*this.boxes.length));
      }
    }
  }

  setUpInput(){
    this.dKey = this.input.keyboard.addKey("D");
    this.dKey.on('down',this.deleteBox,this);
    this.sKey = this.input.keyboard.addKey("S");
    this.spacebar = this.input.keyboard.addKey("SPACE");
    this.spacebar.on('down',this.createRandomBox,this);
    this.up = this.input.keyboard.addKey("I");
    this.up.on('down',f=>{this.selectedBox.object.applyForce({x:0,y:-this.pushForce});this.laserSound.play();},this);
    this.left = this.input.keyboard.addKey("J");
    this.left.on('down',f=>{this.selectedBox.object.applyForce({x:-this.pushForce,y:0});this.laserSound.play();},this);
    this.down = this.input.keyboard.addKey("K");
    this.down.on('down',f=>{this.selectedBox.object.applyForce({x:0,y:this.pushForce});this.laserSound.play();},this);
    this.right = this.input.keyboard.addKey("L");
    this.right.on('down',f=>{this.selectedBox.object.applyForce({x:this.pushForce,y:0});this.laserSound.play();},this);
  }

  update(time, delta) {
    if(this.sKey.isDown){
      let angle = (this.selectedBox.object.angle >= 180) ? -180 : this.selectedBox.object.angle+10;
      this.selectedBox.object.setAngle(angle);
    }
  }
}