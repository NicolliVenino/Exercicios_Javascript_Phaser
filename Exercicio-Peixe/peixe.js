var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
console.log(resposta);
var game = new Phaser.Game(config);
var peixinho;
var caranguejos;

function preload() {
    this.load.image('baiacu', 'assets/bg_azul-claro.png');
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('peixe', 'assets/peixes/baiacu.png');
    this.load.image('caranguejo', 'assets/peixes/caranguejo.png');
    this.load.image('praia', 'assets/praia.jpg');
}

function create() {

    this.add.image(400,300,'baiacu');
    this.add.image(400, 525, 'logo').setScale(0.5);
    this.add.image(200, 50, 'praia').setScale(1.3, 0.5);

    caranguejos = this.add.image(50,100,'caranguejo').setScale(0.2);
    caranguejos.setFlip(true, false);

    peixinho = this.add.image(400, 300, 'peixe');
    peixinho.setFlip(true, false);
}

function update() {

    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

    caranguejos.x = this.input.x;
}