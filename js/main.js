//Variables de las imagenes
var sizeX = 1620;
var sizeY = 778;
var background; 
var region = [];

//Variable Principal de phaser
var cnv = new Phaser.Game(sizeX, sizeY, Phaser.CANVAS, "map");

//Limites de las cajas de colision de cada region
var pos = [[451,240] ,
[506,399] ,
[1298,103] ,
[130,310] ,
[0,0] ,
[0,0] ,
[0,0] ,
[0,0] ];

//Descripcion y titulo de cada region
var regiontxt = ["La Arena de Bonta es un coliseo construido antiguamente para la celebracion de combates deportivos entre gladiadores. Actualmente se usa en todo tipo de eventos deportivos y es uno de los edificios mas emblematicos de la ciudad blanca.",
"El banco central de bonta es uno de los bancos mas grandes del continente. Administrado por el gobierno de la ciudad, el banco sirve de almacen tanto monetario como de posesiones personales.",
"El Cementerio de Heroes es una region al exterior de los muros de la ciudad. Este cementerio se dice embrujado por las almas de los guerreros que dieron su vida por la ciudad durante la Guerra de la Aurora Purpura, cuyos cuerpos descansan aqui.",
"El barrio de ganaderos de Bonta esta compuesto de cercados publicos, disponibles para todos los ciudadanos, con la intencion de motivar la ganaderia y criar las monturas necesarias para la caballeria de la ciudad.",
"La región de Kinki (近畿 地方, Kinki Chihō), también conocida comúnmente como Kansai (関 西, literalmente 'al oeste de la frontera') abarca la llanura de Kinki y consta de siete prefecturas. Solía ser el centro político y cultural de Japón durante muchos siglos e incluye las ciudades de Kyoto, Osaka, Nara y Kobe.",
"La región de Chugoku (中国 地方, Chūgoku Chihō, literalmente 'país central') constituye la parte occidental de la isla principal de Japón, Honshu. Por lo general, se subdivide en Sanyo Regional, altamente urbanizada e industrializada, en la costa del Mar Interior de Seto y en la mucho más rural Región de Sanin a lo largo de la costa del Mar de Japón.",
"Shikoku (四 国, literalmente 'cuatro países') es la cuarta isla más grande de Japón, al suroeste de la isla principal de Japón, Honshu. Fiel a su nombre, Shikoku se divide en cuatro prefecturas.",
"Kyushu (九州, Kyūshū, literalmente 'nueve provincias') es la tercera isla más grande de Japón, ubicada al suroeste de la isla principal de Honshu. Un centro temprano de la civilización japonesa, Kyushu ofrece muchos tesoros históricos, ciudades modernas y belleza natural."];

var regiontitle = ["La Arena","Banco","Cementerio de Heroes","Cercado","Kinki","Chugoku","Shikoku","Kyushu"];

//Variables que muestran el texto y titulo
var txt;
var title;

var state = {
	
	preload: function() {
		
		//Escalar el canvas para que se vea siempre completo
		cnv.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		//Carga de imagenes a utilizar
		cnv.load.image("background","imagenes/map/mapBase.png");
		cnv.load.image("arena","imagenes/map/arena.webp");
		cnv.load.image("banco","imagenes/map/banco.webp");
		cnv.load.image("cementerio","imagenes/map/cementerio.webp");
		cnv.load.image("cercado","imagenes/map/cercado.webp");
/* 		cnv.load.image("box","imagenes/map/box.png");
		
		
		cnv.load.image("m2","imagenes/map/m2.png");
		cnv.load.image("m3","imagenes/map/m3.png");
		cnv.load.image("m4","imagenes/map/m4.png");
		cnv.load.image("m5","imagenes/map/m5.png");
		cnv.load.image("m6","imagenes/map/m6.png");
		cnv.load.image("m7","imagenes/map/m7.png");
		cnv.load.image("m8","imagenes/map/m8.png");

		cnv.load.image("s1","imagenes/map/s1.png");
		cnv.load.image("s2","imagenes/map/s2.png");
		cnv.load.image("s3","imagenes/map/s3.png");
		cnv.load.image("s4","imagenes/map/s4.png");
		cnv.load.image("s5","imagenes/map/s5.png");
		cnv.load.image("s6","imagenes/map/s6.png");
		cnv.load.image("s7","imagenes/map/s7.png");
		cnv.load.image("s8","imagenes/map/s8.png"); */




	},

	create: function() {
		background = cnv.add.sprite(0, 0, "background");
		//Extender la imagen del background para que ocupe todo el canvas
		background.width = sizeX;
		background.height = sizeY;
		
		//Crear cada imagen en el canvas
		region[0] = cnv.add.sprite(pos[0][0], pos[0][1], "arena");
		region[1] = cnv.add.sprite(pos[1][0], pos[1][1], "banco");
		region[2] = cnv.add.sprite(pos[2][0], pos[2][1], "cementerio");
		region[3] = cnv.add.sprite(pos[3][0], pos[3][1], "cercado");

		for (var i = 0; i < region.length; i++) {
			region[i].inputEnabled = true;
		}
/* 		region[1] = cnv.add.tileSprite(0, 0, sizeX, sizeY, "m2");		
		region[2] = cnv.add.tileSprite(0, 0, sizeX, sizeY, "m3");
		region[3] = cnv.add.tileSprite(0, 0, sizeX, sizeY, "m4");
		region[4] = cnv.add.tileSprite(0, 0, sizeX, sizeY, "m5");
		region[5] = cnv.add.tileSprite(0, 0, sizeX, sizeY, "m6");
		region[6] = cnv.add.tileSprite(0, 0, sizeX, sizeY, "m7");
		region[7] = cnv.add.tileSprite(0, 0, sizeX, sizeY, "m8"); */

		//Variable para modificar el texto y titulo de la caja de informacion				
		title = cnv.add.text(1000,220,"",{fill: "#ffffff",font: "50px Helvetica",  wordWrap: true, wordWrapWidth: 600});
		txt = cnv.add.text(1050,310,"",{fill: "#ffffff",font: "30px Helvetica", wordWrap: true, wordWrapWidth: 500});


	},

	update: function(){

		for (var i = 0; i < region.length; i++) {
		//Recorrer cada region para verificar si el puntero, mouse o celular, esta encima
			if (region[i].input.pointerOver()){
				//Modificar el texto en pantalla segun la region seleccionada
				txt.text = regiontxt[i];
				title.text = regiontitle[i];
				break;
			}
		}
		

	}

}
//Inicializar el estado del canvas 
cnv.state.add("map", state);
cnv.state.start("map");
