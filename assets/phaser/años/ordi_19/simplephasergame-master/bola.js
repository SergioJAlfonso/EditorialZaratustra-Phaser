export default class Bola extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, vidas, jogatore) {
        super(scene, x, y, 'player');
        this.scene = scene;
        this.vidas = vidas;
        this.jogatore = jogatore;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.allowGravity = false;
        this.body.setCollideWorldBounds();
        this.body.setBounce(1);

        this.scene.physics.add.collider(this, this.jogatore, () => {
            this.divide();
        })
        this.speed = [-300, 300];
        this.label = this.scene.add.text(10, 10);
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.setTint("0x71CA1E");

        this.velY = this.getRndInteger(0, 1)
        this.velX = this.getRndInteger(0, 1)
        this.body.setVelocity(this.speed[this.velX], this.speed[this.velY]);
    }

    preUpdate() {

    }
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    divide() {
        this.scene.gorpe.play();
        if (this.vidas > 0) {
            this.vidas--;
            
            new Bola(this.scene, this.x, this.y, this.vidas - 1, this.jogatore);
            this.setActive(false);
            this.scene.time.delayedCall(2000, ()=>{
                this.setActive(true);
            })
            
        }
        else {
            this.destroy();
        }
        console.log(this.vidas);
    }
}
