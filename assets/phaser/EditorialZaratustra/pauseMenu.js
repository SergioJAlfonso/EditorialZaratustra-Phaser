import { pauseConst } from "./constants.js";

class PauseMenu extends Phaser.Scene {

    constructor(data) {
        super({ key: 'pause' });
    }

    init(data) {
        this.musics = data.music;
        this.musicActive = data.isPlaying;
        this.originSceneKey = data.key;
        this.actualLevel = data.level;
        this.levelManager = data.levelManager;
        this.scene.bringToTop();
    }

    create() {
        console.log("EN PAUSA");
        this.menu = this.add.image(this.game.config.width / pauseConst.middlePos, this.game.config.height / pauseConst.middlePos, 'menu');
        this.menu.setInteractive();
        this.menu.setDepth(pauseConst.depth);

        //Imágenes de los botones
        this.volume = this.add.image(this.game.config.width / pauseConst.volumePos, this.game.config.height / pauseConst.volumePos, 'volume');
        this.volumeBold = this.add.image(this.game.config.width / pauseConst.volumePos, this.game.config.height / pauseConst.volumePos, 'volume2');
        this.noVolume = this.add.image(this.game.config.width / pauseConst.volumePos, this.game.config.height / pauseConst.volumePos, 'noVolume');
        this.noVolumeBold = this.add.image(this.game.config.width / pauseConst.volumePos, this.game.config.height / pauseConst.volumePos, 'noVolume2');

        this.volume.setInteractive();
        this.volumeBold.setInteractive();
        this.noVolume.setInteractive();
        this.noVolumeBold.setInteractive();
        this.volume.setScale(pauseConst.volumeScale);
        this.volumeBold.setScale(pauseConst.volumeScale);
        this.noVolume.setScale(pauseConst.volumeScale);
        this.noVolumeBold.setScale(pauseConst.volumeScale);

        this.volume.visible = this.musicActive;
        this.volumeBold.visible = false;
        this.noVolume.visible = !this.musicActive;
        this.noVolumeBold.visible = false;

        this.continue = this.add.image(this.game.config.width / pauseConst.middlePos, this.game.config.height / pauseConst.buttonPos, 'continue');
        this.continueBold = this.add.image(this.game.config.width / pauseConst.middlePos, this.game.config.height / pauseConst.buttonPos, 'continue2');
        this.exit = this.add.image(this.game.config.width / pauseConst.middlePos, this.game.config.height - this.game.config.height / pauseConst.buttonPos, 'exit');
        this.exitBold = this.add.image(this.game.config.width / pauseConst.middlePos, this.game.config.height - this.game.config.height / pauseConst.buttonPos, 'exit2');

        this.continue.setDepth(pauseConst.depth);
        this.continueBold.setDepth(pauseConst.depth);
        this.exit.setDepth(pauseConst.depth);
        this.exitBold.setDepth(pauseConst.depth);

        this.continue.setInteractive();
        this.continueBold.setInteractive();
        this.exit.setInteractive();
        this.exitBold.setInteractive();

        this.continueBold.visible = false;
        this.exitBold.visible = false;

        this.keyEsc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

        //Botones highliteados
        this.volume.on('pointerover', pointer => {
            this.volumeBold.visible = true;
        });

        this.volumeBold.on('pointerout', pointer => {
            this.volumeBold.visible = false;
        });

        this.noVolume.on('pointerover', pointer => {
            this.noVolumeBold.visible = true;
        });

        this.noVolumeBold.on('pointerout', pointer => {
            this.noVolumeBold.visible = false;
        });


        this.continue.on('pointerover', pointer => {
            this.continueBold.visible = true;
        });

        this.continueBold.on('pointerout', pointer => {
            this.continueBold.visible = false;
        });

        this.exit.on('pointerover', pointer => {
            this.exitBold.visible = true;
        });

        this.exitBold.on('pointerout', pointer => {
            this.exitBold.visible = false;
        });

        this.events.on('wake', function () { console.log("WAKEPAUSE") });

        //Continuar
        this.continueBold.on("pointerdown", pointer => {
            if (pointer.leftButtonDown()) {
                this.scene.run(this.originSceneKey);
                this.scene.remove('pause');
            }
        })

        //Volver al menú
        this.exitBold.on("pointerdown", pointer => {
            this.exitBold.visible = true;
            if (pointer.leftButtonDown()) {
                this.musics.stop();
                this.scene.run('titleScene');
                this.scene.remove(this.originSceneKey);
                this.scene.remove('pause');
            }
        })

        //Quitar música
        this.volumeBold.on("pointerdown", pointer => {
            if (pointer.leftButtonDown()) {
                this.noVolume.visible = true;
                this.volume.visible = false;
                this.volumeBold.visible = false;

                this.musics.stop();
                this.scene.get(this.originSceneKey).isPlaying = false;
            }
        })

        //Poner música
        this.noVolumeBold.on("pointerdown", pointer => {
            if (pointer.leftButtonDown()) {
                this.noVolume.visible = false;
                this.noVolumeBold.visible = false;
                this.volume.visible = true;

                this.musics.play();
                this.scene.get(this.originSceneKey).isPlaying = true;
            }
        })
    }

    update() {
        //Reanuda la escena al presionar esc
        if (this.keyEsc.isDown) {
            this.keyEsc.reset();
            this.scene.run(this.originSceneKey);
            this.scene.remove('pause');
        }
    }

}

export default PauseMenu;