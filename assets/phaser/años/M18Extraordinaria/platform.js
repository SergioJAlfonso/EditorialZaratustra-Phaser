export default class Platform extends Phaser.GameObjects.Rectangle{
    constructor(scene,x,y,w,h){
        super(scene,x,y,w,h,"0xFF0000");
        scene.add.existing(this);
        let collider = scene.matter.add.rectangle(x,y,w,h);
        scene.matter.add.gameObject(this,collider);
        this.setStatic(true);
    }
}