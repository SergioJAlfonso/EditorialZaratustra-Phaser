//Input
this.keys = {
    up: scene.input.keyboard.addKey('w'),
    down: scene.input.keyboard.addKey('s'),
    right: scene.input.keyboard.addKey('d'),
    left: scene.input.keyboard.addKey('a')
};

//Control
preUpdate() {
    if (this.keys.up.isDown || this.cursors.up.isDown) {
        this.body.setVelocity(0, -this.speed);
    }
    else if (this.keys.left.isDown) {
        this.body.setVelocity(-this.speed, 0);
    }
    else if (this.keys.right.isDown) {
        this.body.setVelocity(this.speed, 0);

    }
    else if (this.keys.down.isDown) {
        this.body.setVelocity(0, this.speed);
    }
    else {
        this.body.setVelocity(0);
    }
}

//Cualquier Tecla
this.scene.input.keyboard.on("keydown", () => {
    if (this.body.onFloor()) {
        this.scene.donglas.play();
        this.body.setVelocityY(this.jumpSpeed);
    }
});

//Adding sprite
export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'spritecosa');
        this.score = 0;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.setCollideWorldBounds();
        this.speed = 300;
        this.jumpSpeed = -5 * 64;
    }
}

//Texto
updateScore() {
    this.label.text = 'Score: ' + this.score;
}

//collider size
this.body.setSize(this.noseke, this.nosecuantos)

//Colisiones
this.scene.physics.add.collider(this, this.jokatoire, () => {
    this.body.setImmovable();
    this.body.setVelocityX(2);
})
this.body.setBounce(1);

//Animaciones
//super.preUpdate(t,d)
this.scene.anims.create({
    key: 'mover',
    frames: this.scene.anims.generateFrameNumbers('spritecosa', { start: 0, end: 5 }),
    frameRate: 8,
    repeat: -1
});
this.anims.play('mover', true);
this.anims.stop('mover', true);

//Cambios escenas

this.scene.scene.launch('end')
this.scene.scene.pause();
//en escena
this.scene.restart()
this.scene.start()

//Escena
export default class End extends Phaser.Scene {
    constructor() {
        super({ key: 'end' });
    }
    preload() {
        this.time.delayedCall(2000, () => {
            this.scene.start('scene')
        })
    }

    create() {
        this.add.text(10, 10, 'Se acabó!');
    }
}

//Parallax
this.bg = this.add.tileSprite(0, 0, this.game.config.width, this.game.config.height, 'fonso').setOrigin(0, 0);
this.bg.tilePositionX++;

//Tilemapa
this.load.tilemapTiledJSON('map00', './assets/sprites/tilesets/map_00.json');
this.load.image('tiles', './assets/sprites/tilesets/slates_tileset.png');

//Boot
preload() {
    this.load.image('platform', 'platform.png');
    this.load.image('base', 'base.png');
    this.load.image('star', 'star.png');
    this.load.image('player', 'player.png');
    this.load.image('fonso', 'fondo.jpg');
    this.load.audio('erDanies', 'DanllesHijoPuta.mp3')
    this.load.spritesheet('spritecosa', 'spFritestrip.png', { frameWidth: 256, frameHeight: 256 })
}

create() {
    this.scene.start('scene');
}

//DelayedCall
new Enemy(this, 1000, 500, this.player);
this.time.delayedCall(this.getRndInteger(2000, 4000), () => {
    this.spawnTime = true;
})

//For guapo de esos
for (const objeto of this.map.getObjectLayer('objectLayer').objects) {
    // 'objeto.name' u 'objeto.type' nos llegan de las propiedades del
    // objeto en Tiled
    if (objeto.name === 'spawnPoint') {
        this.spawnpoint = objeto;
        let savedFaith;
        if (this.info !== undefined && this.info.obtainedFaith !== undefined) savedFaith = this.info.obtainedFaith;
        else savedFaith = 0;
        this.player = new Player(this.matter.world, objeto.x, objeto.y, objeto, savedFaith, 2.2);;
    }
}

//Timer
//Timer de phaser
let timer = scene.time.addEvent({
    delay: this.time,          // ms
    callback: () => {

    },
    repeat: -1
});

//Webfonts
//En el boot
preload(){
    // Codigo para usar webfonts
    this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
}

create() {
    // Webfonts que se van a utilizar
    WebFont.load({
        google: {
            families: ['Yeon Sung', 'Dancing Script', 'Barlow Condensed', 'Lobster']
        },
    });

    this.scene.start('titleScene');
}

//El texto
this.texto = scene.add.text(x + dialogueConst.offsetX, y + dialogueConst.offsetY, texto, { fontFamily: 'Yeon Sung' }).setStroke('#000000', 3); //Añadimos texto