export default class Wall extends Phaser.GameObjects.Rectangle{
    constructor(scene,x,y,w,h,player){
        super(scene,x,y,w,h,'0x0000FF');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this,true);
        this.scene.physics.add.collider(this,player);
    }
}