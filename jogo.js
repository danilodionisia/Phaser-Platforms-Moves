var game = new Phaser.Game
(800, 600, Phaser.AUTO, '', 
{ 
	preload: preload, 
	create: create, 
	update: update 
});


var platforms;
var plataforma1;
var plataforma2;
var plataforma3;
var ground;
var stars;


function preload() {
    game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('blocks', 'assets/tijolo.png');	
	game.load.image('star', 'assets/star.png');
}

function create() {
		
	game.physics.startSystem(Phaser.Physics.ARCADE);		
    game.add.sprite(0, 0, 'sky');

	
    platforms = game.add.group();
    platforms.enableBody = true;
	
    ground = platforms.create(0, game.world.height - 64, 'ground');
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;
    
	plataforma1 = platforms.create(0, 100, 'blocks');
    plataforma1.body.immovable = true;
	
	plataforma2 = platforms.create(550, 250, 'blocks');
    plataforma2.body.immovable = true;
	
	plataforma3 = platforms.create(150, 400, 'blocks');
    plataforma3.body.immovable = true;
		
	createStars('star');
}


function update() {
	
	game.physics.arcade.collide(stars, plataforma1);
	game.physics.arcade.collide(stars, plataforma2);
	game.physics.arcade.collide(stars, plataforma3);
	game.physics.arcade.collide(stars, ground);	
	
	if(plataforma1.position.x <= 600){ plataforma1.body.velocity.x = 50;}else{plataforma1.position.x = 0;}
	if(plataforma2.position.x >= 0){ plataforma2.body.velocity.x = -50;}else{plataforma2.position.x = 600;}
	if(plataforma3.position.x <= 600){ plataforma3.body.velocity.x = 50;}else{plataforma3.position.x = 0;}
	
}


function createStars(sprite){
	
	stars = game.add.group();
    stars.enableBody = true;
	
    for (var i = 1; i < 12; i++)
    {
        var star = stars.create(i * 100, 0, sprite);
        star.body.gravity.y = 300;
        star.body.bounce.y = 0.5 + Math.random() * 0.2;
    }
}





