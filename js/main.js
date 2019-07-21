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
[374,310] ,
[928,310] ,
[660,688] ,
[736,120] ,
[798,443] ,
[320,606] ,
[221,443] ,
[240,64 ] ,
[328,273] ,
[660,17 ] ];

//Descripcion y titulo de cada region
var regiontxt = ["La Arena de Bonta es un coliseo construido antiguamente para la celebracion de combates deportivos entre gladiadores. Actualmente se usa en todo tipo de eventos deportivos y es uno de los edificios mas emblematicos de la ciudad blanca.",
"El banco central de bonta es uno de los bancos mas grandes del continente. Administrado por el gobierno de la ciudad, el banco sirve de almacen tanto monetario como de posesiones personales.",
"El Cementerio de Heroes es una region al exterior de los muros de la ciudad. Este cementerio se dice embrujado, pues los cuerpos de los guerreros que dieron su vida por la ciudad durante la Guerra de la Aurora Purpura descansan aqui.",
"El barrio de ganaderos de Bonta esta compuesto de cercados publicos, disponibles para todos los ciudadanos, con la intencion de motivar la ganaderia y criar las monturas necesarias para la caballeria de la ciudad.",
"La milicia Bontariana es uno de los edificios mas prominentes de la ciudad blanca. Compueta de una seccion publica con avisos de reclutamiento, un cuartel y una prision, este edificio es un simbolo de la fortaleza militar de la ciudad.",
"Tres puertas gigantes en madera separan el interior de la muralla bontariana con las planicies de Cania al exterior.",
"Tres puertas gigantes en madera separan el interior de la muralla bontariana con las planicies de Cania al exterior.",
"Cuatro posadas cubren los cuatro barrios principales de la ciudad de bonta, ofreciendo tanto una prueba de gastronomia local como alojamiento para viajeros.",
"Cuatro posadas cubren los cuatro barrios principales de la ciudad de bonta, ofreciendo tanto una prueba de gastronomia local como alojamiento para viajeros.",
"Cuatro posadas cubren los cuatro barrios principales de la ciudad de bonta, ofreciendo tanto una prueba de gastronomia local como alojamiento para viajeros.",
"Cuatro posadas cubren los cuatro barrios principales de la ciudad de bonta, ofreciendo tanto una prueba de gastronomia local como alojamiento para viajeros.",
"El Palacio de la Ciudad de Bonta es la edificacion mas notoria de la ciudad. En este castillo con vista al mar se hospeda La Familia Real y se llevan a cabo la mayoria de decisiones de gobierno.",
"La Torre de las Ordenes es el lugar de reunion del consejo de la ciudad. Accesible al publico general, alli se llevan a cabo juicios, almacenamiento de documentos oficiales, entre otras tareas.",
"Tres puertas gigantes en madera separan el interior de la muralla bontariana con las planicies de Cania al exterior."];

var regiontitle = ["La Arena", "Banco", "Cementerio de Heroes", "Cercado", "Milicia", "Puerta Este", "Puerta Sur", "Posada Feubuk", "Posada Almenú", "Posada Jarradepalo", "Posada Bagruta", "Palacio del Rey", "Torre de Ordenes", "Puerta Norte"];

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
		cnv.load.image("milicia","imagenes/map/milicia.webp");
		cnv.load.image("puerta","imagenes/map/zaap.webp");
		cnv.load.image("posada","imagenes/map/taberna.webp");
		cnv.load.image("torre","imagenes/map/torreOrdenes.webp");

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
		region[4] = cnv.add.sprite(pos[4][0], pos[4][1], "milicia");
		region[5] = cnv.add.sprite(pos[5][0], pos[5][1], "puerta");
		region[6] = cnv.add.sprite(pos[6][0], pos[6][1], "puerta");
		region[7] = cnv.add.sprite(pos[7][0], pos[7][1], "posada");
		region[8] = cnv.add.sprite(pos[8][0], pos[8][1], "posada");
		region[9] = cnv.add.sprite(pos[9][0], pos[9][1], "posada");
		region[10] = cnv.add.sprite(pos[10][0], pos[10][1], "posada");
		region[11] = cnv.add.sprite(pos[11][0], pos[11][1], "torre");
		region[12] = cnv.add.sprite(pos[12][0], pos[12][1], "torre");
		region[13] = cnv.add.sprite(pos[13][0], pos[13][1], "puerta");

		//Habilitar la seleccion con mouse o telefono de cada uno de los sprites
		for (var i = 0; i < region.length; i++) {
			region[i].inputEnabled = true;
		}

		//Variables para modificar el texto y titulo de la caja de informacion				
		title = cnv.add.text(1000,220,"",{fill: "#ffffff",font: "50px Helvetica", backgroundColor: "#a8b900", wordWrap: true, wordWrapWidth: 600});
		txt = cnv.add.text(1050,310,"",{fill: "#ffffff",font: "30px Helvetica", backgroundColor: "#a8b900", wordWrap: true, wordWrapWidth: 500});


	},

	update: function(){

		for (var i = 0; i < region.length; i++) {
		//Recorrer cada sprite para verificar si el puntero, mouse o telefono, esta encima
			//Se regresan los sprite a su escala normal
			region[i].scale.setTo(1,1);
			if (region[i].input.pointerOver()){
				//Se incrementa la escala del sprite seleccionado
				region[i].scale.setTo(1.5,1.5);
				//Modificar el texto en pantalla segun el sprite seleccionado
				txt.text = regiontxt[i];
				title.text = regiontitle[i] + ":";
				break;
			}
		}
		

	}

}
//Inicializar el estado del canvas 
cnv.state.add("map", state);
cnv.state.start("map");
