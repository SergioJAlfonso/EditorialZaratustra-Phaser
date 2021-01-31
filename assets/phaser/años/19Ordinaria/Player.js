export default class Player extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,speed){
        super(scene,x,y,'player');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.setImmovable();
        this.body.collide = true;

        this.speed = speed;

        this.cursors = this.scene.input.keyboard.createCursorKeys();
    }

    preUpdate(t,dt){
        if(this.cursors.down.isDown)
            {this.body.setVelocityY(this.speed);}
        else if(this.cursors.up.isDown)
            {this.body.setVelocityY(-this.speed);}
        else{
            this.body.setVelocityY(0);
        }

        if(this.cursors.left.isDown){
            this.body.setVelocityX(-this.speed);
        }else if(this.cursors.right.isDown){
            this.body.setVelocityX(this.speed);
        }else{
            this.body.setVelocityX(0);
        }
    }
}