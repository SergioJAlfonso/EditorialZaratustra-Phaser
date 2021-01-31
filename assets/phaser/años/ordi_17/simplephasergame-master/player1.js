import PlayerPadre from './PlayerPadre.js'

export default class Player extends PlayerPadre {
    constructor(scene, x, y, input, vidas) {
        super(scene, x, y, vidas);
        this.keys = {
            keyup: scene.input.keyboard.addKey(input.up),
            keyLeft: scene.input.keyboard.addKey(input.left),
            keyRight: scene.input.keyboard.addKey(input.right)
        }
    }
    preUpdate() {

        if (this.vidas <= 0) {
            this.setActive(false);
            this.visible = false;
          }

        if (this.keys.keyup.isDown && this.body.onFloor()) {
            this.body.setVelocityY(this.jumpSpeed);
        }
        if (this.keys.keyLeft.isDown) {
            this.body.setVelocityX(-this.speed);
        }
        else if (this.keys.keyRight.isDown) {
            this.body.setVelocityX(this.speed);

        }
        else {
            this.body.setVelocityX(0);

        }
    }
}