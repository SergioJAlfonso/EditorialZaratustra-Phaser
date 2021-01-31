export default class Player extends Phaser.Physics.Matter.Sprite{
    constructor(scene,x,y,speed,keys,life){
        super(scene.matter.world,x,y,'player',0);
        scene.add.existing(this);
        this.setFixedRotation();
        this.setScale(3);
        this.setBounce(0.8);

        this.speed = speed;
        this.health = life;

        this.up = scene.input.keyboard.addKey(keys.up);
        this.left = scene.input.keyboard.addKey(keys.left);
        this.right = scene.input.keyboard.addKey(keys.right);
    }

    preUpdate(t, dt){
        this.setAngle(0);

        if(this.left.isDown){
            this.setVelocityX(-this.speed);
        }else if(this.right.isDown){
            this.setVelocityX(this.speed);
        }else{
            this.setVelocityX(0);
        }

        if(this.up.isDown){
            this.setVelocityY(-this.speed*5);
        }
    }
}