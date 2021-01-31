export default class Box extends Phaser.GameObjects.Rectangle{
    constructor(scene,x,y,size,speed){
        super(scene,x,y,size,size,'0x0000FF');
        scene.add.existing(this);
        let collider = scene.matter.add.rectangle(x,y,size,size);
        scene.matter.add.gameObject(this,collider);

        this.setAngle(Math.floor(Math.random()*360-180));
        this.setFriction(0,0,0);
        this.setBounce(1);
        this.thrust(Math.random()*(speed.max-speed.min)+speed.min);
        
    }
}