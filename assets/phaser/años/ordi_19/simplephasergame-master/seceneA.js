export default class SceneA extends Phaser.Scene {
    constructor() {
        super({ key: 'SceneA' });
    }

    create() {

        this.label = this.add.text(500, 250);
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA")

        this.key = this.input.keyboard.addKey('w');
        this.label.text = 'Perdiste wachin';
    }

    update() {
        if (this.key.isDown) {
            //this.scene.pause();
            this.scene.start("scene")
            this.scene.sleep();
        }

    }
}