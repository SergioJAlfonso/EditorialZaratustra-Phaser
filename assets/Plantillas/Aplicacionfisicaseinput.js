
//Plantillas 
https://github.com/cleongh/phasertemplate.git (Plantilla sin nada)
https://github.com/cleongh/simplephasergame.git (Plantilla sencillita de señor que ya se mueve)
https://rexrainbow.github.io/phaser3-rex-notes (jesucristo)
https://phaser.io/tutorials/making-your-first-phaser-3-game-spanish

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

//Background bg color
this.cameras.main.setBackgroundColor('#FFFFFF');

//Grupos Físicos
this.walls = this.physics.add.staticGroup();

// eventos si pulsada
this.space.on('down', () => {
    this.scene.start('scene');
})

//Collider circulo
this.body.setCircle(radio);

//Cualquier Tecla
this.scene.input.keyboard.on("keydown", () => {
    if (this.body.onFloor()) {
        this.scene.donglas.play();
        this.body.setVelocityY(this.jumpSpeed);
    }
});

//Input solo una vez
Phaser.Input.Keyboard.JustDown(this.keycodeV);


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

//worldbounds
this.body.setCollideWorldBounds();

//Colisiones
this.scene.physics.add.collider(this, this.jokatoire, () => {
    this.body.setImmovable();
    this.body.setVelocityX(2);
})

//Overlape
this.scene.physics.add.overlap(this, this.jokatoire, () => {
    this.body.setImmovable();
    this.body.setVelocityX(2);
})


this.body.setBounce(1);

//Animaciones
//super.preUpdate(t,d)
this.scene.anims.create({ //En el create del boot
    key: 'mover',
    frames: this.scene.anims.generateFrameNumbers('spritecosa', { start: 0, end: 5 }),
    frameRate: 8,
    repeat: -1
});
this.anims.play('mover', true);
this.anims.stop('mover', true);

//cosa cuando termina la anim
this.boss.on('animationcomplete', function (anim, frame) {
    this.boss.emit('animationcomplete_' + anim.key, anim, frame);
}, this);
this.boss.on('animationcomplete_Boss_attk1', () => {
    this.boss.states.atacando = false;
    this.boss.states.idle = true;
});
this.on('animationrepeat', () => { //Cuando se repite cada vez
    console.log("uigvfeygurfhj");
})
this.on('animationcomplete-breakstar', () => {
    this.scene.addNewEnemies(this.x, this.y, this.scale, this.state, this);
})
this.on('animationcomplete-deadstar', () => {
    this.scene.removeEnemy(this);
})



//Cambios escenas
this.scene.sleep();
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

//Cargar fuente

this.load.bitmapFont('dialogue_font','src/assets/fonts/dialogue.png','src/assets/fonts/dialogue.xml');

//Input raton
this.on('pointerover',() => {
    console.log('Hola soy el chocu y estoy pasando por enicma');
  });

  this.on('pointerout',() => {
    console.log('Hola soy el chocu y he dejado de estar encima');
  });

  this.on('pointerdown',() => {
    console.log('Hola soy el chocu y he clickado');
  });

  this.on('pointerup',() => {
    console.log('Hola soy el chocu y he dejado de clickar');
  });



//Parallax
this.bg = this.add.tileSprite(0, 0, this.game.config.width, this.game.config.height, 'fonso').setOrigin(0, 0);
this.bg.tilePositionX++;

//Tilemapa cargar
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
    this.load.spritesheet('spritecosa', 'spFritestrip.png', /*frameConfig: */ { frameWidth: 256, frameHeight: 256 })
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
    delay: Phaser.Math.Between(this.min, this.max),          // ms
    callback: () => {
        this.time.delay = Phaser.Math.Between(this.min, this.max)
        
    },
    repeat: -1
});

//init en la escena 
init(datos){
 this.datadura = datos;
}

//Triggers
this.izqTrigger = this.add.zone(0, this.game.config.height/2).setSize(10, this.game.config.height);
    this.derTrigger = this.add.zone(this.game.config.width, this.game.config.height/2).setSize(10, this.game.config.height);
    this.physics.add.existing(this.izqTrigger);
    this.physics.add.existing(this.derTrigger);

    this.physics.add.overlap(this.izqTrigger, this.ball,()=> 
    {
      this.player.addPoint();
      this.ball.restorePos();

    });

    this.physics.add.overlap(this.derTrigger, this.ball,()=> {

      this.ball.restorePos();
      this.player2.addPoint();
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
