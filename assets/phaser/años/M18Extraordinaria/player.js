export default class Player extends Phaser.Physics.Matter.Sprite{
    constructor(scene,x,y,speed){
        super(scene.matter.world,x,y,'player',0);
        scene.add.existing(this);
        this.setFixedRotation();
        this.setScale(3);
        this.speed = speed;
        this.isJumping = false;

        //Sensor de suelo para salto
        this.floorSensor = Phaser.Physics.Matter.Matter.Bodies.rectangle(
            x,y+this.displayHeight/2+8,this.displayWidth/2,6,{isSensor:true});
        let compoundBody = Phaser.Physics.Matter.Matter.Body.create({
            parts: [this.body,this.floorSensor]
        });
        this.setExistingBody(compoundBody);
        //scene.matter.add.constraint(this.body,this.floorSensor);

        this.scene.matter.world.on('collisionstart', 
        (evento, cuerpo1, cuerpo2) => {;if(cuerpo1 === this.floorSensor || cuerpo2 === this.floorSensor){
            this.isJumping = false;
        }},this);

        this.cursors = scene.input.keyboard.createCursorKeys();
        this.setUpAnimations.apply(this);
    }

    setUpAnimations(){
        this.scene.anims.create({
            key: 'PlayerRight',
            frames: this.scene.anims.generateFrameNumbers('player', { start: 5, end: 6 }),
            defaultTextureKey: null,
            frameRate: 10,
            delay: 0,
            repeat: -1,
            repeatDelay: 0
        });
    
        this.scene.anims.create({
            key: 'PlayerLeft',
            //frames: this.scene.anims.generateFrameNumbers('player', { start: 7, end: 8 }),
            frames: [{key:'player',frame:7},{key:'player',frame:7}],
            defaultTextureKey: null,
            frameRate: 10,
             delay: 0,
            repeat: -1,
            repeatDelay: 0
        });
        this.cursors.left.on('down', event => {this.scene.player.anims.play('PlayerLeft',true)});
        this.cursors.right.on('down', event => {this.scene.player.anims.play('PlayerRight',true)});
    }

    preUpdate(t,dt){
        this.setAngle(0);
        if(this.cursors.left.isDown){
            this.setVelocityX(-this.speed);
        }else if(this.cursors.right.isDown){
            this.setVelocityX(this.speed);
        }else{
            this.setVelocityX(0);
            this.setFrame(0);
        }

        if(this.cursors.up.isDown && !this.isJumping){
            //this.thrustLeft(this.speed/50);
            this.setVelocityY(-this.speed*5.5);
            this.isJumping = true;
        }
    }
}