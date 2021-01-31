export default class Ball extends Phaser.GameObjects.Ellipse{
    constructor(scene,x,y,w,h,speed,walls,player,remaining){
        super(scene,x,y,w,h,'0x00FF00');
        this.scene.add.existing(this);

        this.scene.physics.add.existing(this);
        this.body.setCircle(w/2);
        this.addCollisions(walls);
        this.scene.physics.add.collider(this,player);
        this.body.setImmovable();

        this.speedX = speed;
        this.speedY = speed;
        this.remaining = remaining;
    }

    addCollisions(walls){
        for(let i = 0; i < walls.length; i++){
            this.scene.physics.add.collider(this,walls[i],this.wallCollided);
        }
    }

    preUpdate(t,dt){
        this.body.setVelocity(this.speedX,this.speedY);
    }

    wallCollided(ball){
        if(ball.body.touching.up || ball.body.touching.down) ball.speedY = -ball.speedY;
        if(ball.body.touching.left || ball.body.touching.right) ball.speedX = -ball.speedX;
    }
}