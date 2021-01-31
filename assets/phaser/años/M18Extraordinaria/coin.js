export default class Coin extends Phaser.Physics.Matter.Sprite{
    constructor(scene,x,y){
        super(scene.matter.world,x,y,'coin',0);
        scene.add.existing(this);
        this.setStatic(true);
        this.setSensor(true);
        this.isCoin = true;

        scene.anims.play('coinAnim',this);
    }
}