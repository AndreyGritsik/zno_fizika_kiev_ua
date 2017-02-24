//инициализация тестов по испанскому языку
function testInit(testName)
{
	testOficialTitle=testName;
	/*обнуление всех текущих счетчиков*/
	answerCounter=0;
	correctAnswerCounter=0;
	passCounter =0;
	currentTaskCounter=0;
	timeCounter=0;
	testTime=0;
	testLength=0;
	/*Обнуление массива заданий*/
	taskArray=new Array();
	/*Массив правильных ответов*/
	var answerArray=new Array();
	/*Массив типов вопросов теста*/
	var taskTypeArray=new Array();
	/*Массив баллов за правильные ответы*/
	var taskMarkArray=new Array();
	
	/*Оценки за задания тестов*/
	/*Инициализация тестов в зависимости от названия теста*/
/*************************************************************/
//Тесты по испанскому языку	
/*************************************************************/	
/*ЗНО-2010 испанский язык. Основной тест.*/
	if(testName=="ЗНО-2010 Испанский язык. Основной тест.")
	{
		testLength=51;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/esp\/img\/test2010main1\/';
		fullTextWindowHorizontalOffset=-225;
		fullTextWindowVerticalOffset=-75;

		var Tarea1='1-(….)\nNo es un espejismo. En medio del desierto hay una sombrilla. Tres mujeres en bañador juegan debajo a las cartas. Unos pasos más y se alcanza la cima del cerro de arena. Edgard, un trabajador ecuatoriano, lo escala y anuncia a sus hijos: “Hasta aquí llegaba el año pasado el agua”. Es el pantano de San Juan, o lo que queda de él este caluroso verano en que las aguas se han retirado para regar los campos de patatas de Toledo y dar de beber a los habitantes del centro peninsular.\n\n2-(….)\nApartamentos desde 60.000 euros, listos para entrar a vivir. Es la otra cara de la crisis. En Valencia, los descuentos por debajo del 30% han dejado de ser tabú. En Baleares se presenta la oportunidad de hacerse con un apartamento por 100.000 euros. En Cataluña por esa cantidad se puede comprar un apartamento en la Costa Dorada, y por algo menos en Rosas, en plena Costa Brava. En la Costa del Sol andaluza las rebajas oscilan entre el 5% y el 45%, según las zonas y las promociones.\n\n3-(….)\nSi usted vive en Madrid y vuelve de sus vacaciones es más que probable que se tope con una calle cortada. Calzadas y aceras “ocupadas”, según la terminología municipal, por máquinas, obreros, vallas y cartelones. “Disculpen las molestias”, parecen suplicar los grandes carteles. La obra por excelencia de este año es la que ocupa la arteria comercial de Serrano, que además de boquetes y mucho polvo ha provocado la ira de vecinos y tenderos e incluso algún pique entre Ayuntamiento y Comunidad.\n\n4-(….)\nEn poco tiempo Eneko Atxa se ha convertido en uno de los profesionales más prometedores de la culinaria vizcaína contemporánea. A sus 28 años acaba de iniciar una aventura arriesgada como responsable de Azurmendi, nuevo restaurante en Bilbao. Si Atxa ha saltado al escenario de la denominada “cocina tecnoemocional” es gracias a su revolucionaria aportación al mundo de los extractos de carnes y pescados que se convierten en esencias tras un proceso de evaporación a fuego lento.\n\n5-(….)\nBocaditos de marisco, guiso de pescado y arroz con leche, café o té. Y todo por un euro. Difícilmente se podría encontrar un precio más bajo para un almuerzo más completo. Cada día una treintena de jubilados hacen cola en el centro social del barrio de San Xoán. Allí está ubicado el primer comedor para mayores del municipio, una iniciativa pionera en Lugo que arrancó hace un año con un doble objetivo: ofrecer una dieta sana a precios simbólicos para las personas mayores con rentas bajas y romper el aislamiento social de este colectivo creando lazos de amistad en la mesa.';
		var Tarea2='   Los serenos\n\n   ¿Quién era el sereno y qué hacía? Pues, el sereno siempre trabajaba de noche. A eso de las once de la noche se cerraban los portales de los edificios de las ciudades españolas y salía a trabajar el sereno con su chuzo (palo armado con un pincho de hierro). Él vigilaba por la calle durante la noche. Iba vestido con una bata gris y tocado con una gorra. También llevaba las llaves de los portales de todos los edificios de la calle o de la manzana que él tenía asignada. No podía salir de ésta, a menos que existieran circunstancias de especial urgencia y habiéndose asegurado de antemano un sustituto. Durante su horario laboral no debía mantener conversaciones ni sentarse y, por supuesto, tenía que mantenerse siempre en estado de alerta.\n   Cuando un vecino regresaba a casa después de las once de la noche, daba palmadas al llegar al portal de su casa. Al oír las palmadas, el sereno daba unos golpes con su chuzo. Cuando el vecino los oía, sabía que el sereno iba a llegar dentro de unos momentos. Y así era. Casi en seguida el sereno aparecía de la oscuridad con su chuzo y el gran llavero en la mano. Como el sereno conocía a todos los vecinos, siempre les saludaba cuando volvían a casa. Mientras les abría el portal, les decía: “Buenas noches y gracias”. ¿Por qué les daba las gracias? Los vecinos siempre sacaban de su bolsillo una moneda de cinco pesetas y se la daban al sereno. Los serenos no gozaron nunca de garantía social ni contrato de trabajo. Vivían fundamentalmente de las propinas de los vecinos de su manzana.\n   Antiguamente el sereno hacía más que vigilar la calle y abrir los portales. Uno de sus cometidos consistía en cantar las horas a intervalos de quince minutos. Después de dar las horas él añadía el estado del tiempo: “¡Las doce y cuarto y sereno!” o “¡Las tres y media y lloviendo!” Algunos serenos especialmente comunicativos hacían referencia al fulgor de las estrellas o cualquier otra circunstancia que les pareciera apropiada. A veces, también eran los primeros en detectar un incendio y alertar al cuerpo de bomberos.\n   Hoy en día no hay más serenos. La gente tiene que llevar las llaves para abrir los portales de sus casas. Cuando había serenos los vecinos se quejaban un poco, porque creían que el sereno sabía demasiado de su vida. Hoy lamentan la desaparición de estos “ángeles nocturnos”. Dicen que sin su vigilancia hay más crímenes en las calles.';
		var Tarea4='   En la estación\n\n  - Oiga, por favor, ¿para ir al centro de la ciudad, qué tengo que hacer?\n  - ¿Va usted en taxi o en autobús?\n  - En autobús. Habrá, supongo, autobuses que _____(17). ¿No?\n  - Sí, pero con todas estas maletas que veo que lleva, yo le aconsejo que _____(18). No va a costarle mucho.\n  - Sí, puede que _____(19).\n  - Para la parada de taxis tiene que salir por esta salida de la izquierda y para el autobús por allá, al fondo. Yo, en todo caso, le recomendaría más el taxi.\n  - Oiga, ya que usted es tan amable, ¿podría indicarme un hotel que _____(20)?\n  - Pues para eso no sé que decirle. Sabe, he vivido toda la vida en Madrid. Yo le aconsejaría que _____(21). Aquí mismo en la estación hay una.\n  - Muchas gracias por todo. Ha sido usted muy amable.\n  - De nada, hombre. ¡Que _____(22)! ¡Adiós!';
		var Tarea5='   La gripe\n\n  Nuria: Me encuentro fatal. No puedo ni moverme. Creo que tengo cuarenta de _________(23).\n  Juan: ¿Estás enferma? Pepe, tráele a tu madre el termómetro. Nuri, me estás preocupando, ¿quieres que llame al médico?\n  Pepe: Mamá, estás más _________(24) que un tomate y tienes una voz muy rara. ¿Qué te ocurre?\n  Nuria: Me duele la cabeza, la garganta, los oídos. _________(25) de haber pillado una gripe. Juan, pásame el teléfono, por favor. Voy a llamar al trabajo para decir que no puedo ir.\n  Pepe: Pero, papá, ¿por qué te pones los guantes de _________(26) los platos para coger el teléfono?\n  Juan: Cualquier _________(27) es poca para que no nos contagiemos del virus de tu madre. Pepe, mañana puedes ser tú el siguiente que está en la cama inmovilizado por el virus, o yo.\n  Nuria: Juan, dejas de hacer _________(28). No creo que los guantes vayan a _________(29) que te contagie la gripe. En cualquier caso, lo que te podrías poner es una mascarilla que te _________(30) la boca y la nariz.\n  Pepe: Mamá, ¿tú crees que ya me has contagiado? Porque si es así, ya que vas a llamar a tu trabajo, de _________(31) llama a mi profesora para decir que tengo la gripe y que no puedo ir a la escuela.\n  Nuria: Pepe, cariño, tú no tienes _________(32) síntoma de gripe; entonces, ¿cómo te vas a quedar en casa?\n  Pepe: Mamá, si me contagias, mejor que mejor. _________(33) no tengo que hacer los deberes del cole y puedo ver todo el día la televisión.\n  Nuria: Juan, ¿qué te pasa? ¿Por qué llevas este pañuelo negro hasta los ojos? Pareces un terrorista.\n  Juan: Nuri, me he puesto este pañuelo para protegerme del virus. Alguien tiene que trabajar en esta casa para pagar las cuentas y las facturas. ¡Imagínate qué _________(34) si los tres caemos enfermos! ';
		var Tarea6_1='  Texto 1\n\n	El hombre es una curiosa especie que no _____(35) mantiene una dieta variada, sino que le gusta preparar los alimentos, cocinarlos. _____(36) pocos alimentos que se tomen crudos, fuera de las frutas y las verduras, y no todas. El verdadero placer de preparar los alimentos se encuentra _____(37) la intención de satisfacer el gusto de (al menos) otra persona. _____(38) realmente una satisfacción ver comer con agrado a las personas que uno aprecia. Por eso la invitación amistosa pasa por compartir mesa, y más _____(39) si es el anfitrión quien la ha preparado. Bien es verdad que muchas personas cocinan por obligación, _____(40) en la familia o en los restaurantes o equivalentes.';
		var Tarea6_2='  Texto 2\n\n	Muchos españoles a lo largo de su vida celebran cualquier acontecimiento que a ellos _____(41) importante y así comparten la felicidad o el éxito con otras personas.\n  Cuando _____(42) compra una vivienda es normal que _____(43) una fiesta de inauguración, en la que, además de invitar a los amigos o a los familiares a comer o a tomar _____(44), se aprovecha la ocasión para mostrar la vivienda a los invitados.\n  Bastantes españoles _____(45) que conseguir su primer empleo también es motivo de celebración. Lo mismo ocurre si uno _____(46) un ascenso de categoría importante en su empresa.';
		var Tarea_1='   Al entrar en el museo fuimos a la taquilla para sacar las entradas. Como soy estudiante universitaria, pedí que me hicieran el descuento del cincuenta por ___________(47). La señora de la taquilla me pidió que mostrara el carnet de estudiante. Lo había olvidado en casa. ___________(48) vi obligada a pagar la tarifa entera. ¡Mala suerte!\n	De repente el conserje, mientras yo estaba hablando, se ___________(49) cuenta de que Luis llevaba la cámara en bandolera.\n  - ¿Sabe usted que no se pueden hacer fotos?\n  - No, no lo sabía. ¿Hay que dejar la cámara en el guardarropa?\n  - No, no hace ___________(50). Basta con que no haga fotos.';
		answer47Array=new Array("ciento");
		answer48Array=new Array("me","Me");
		answer49Array=new Array("dio");
		answer50Array=new Array("falta");
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","103.5","108.0","111.0","114.5","122.0","124.0","126.0","127.0","128.0","129.0","129.0","131.5","132.0","133.0","133.5","134.5","134.5","135.5","136.5","137.0","137.5","139.5","140.0","140.5","140.5","141.5","142.0","142.0","142.5","143.0","144.0","144.5","144.5","145.0","146.5","147.0","148.0","149.0","151.0","151.0","152.5","154.0","154.0","154.5","155.0","155.0","156.5","157.5","158.0","158.0","158.0","159.0","160.5","162.0","163.0","164.5","165.5","168.0","168.5","170.0","171.5","172.0","176.0","177.5","178.0","180.0","184.5","186.5","186.5","190.5","190.5","194.0","196.5","200.0");
		answerArray=new Array("a","f","c","d","b","a","b","d","d","b","c","e","a","c","h","f","h","f","g","c","a","b","d","d","a","c","a","b","b","c","b","a","d","c","e","g","a","h","f","i","h","c","f","a","i","g",answer47Array,answer48Array,answer49Array,answer50Array," ");
		taskTypeArray=new Array("textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","test","test","test","test","test","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textual","textual","textual","textual","tvir");
		textAnalysisArray=new Array(Tarea1,Tarea1,Tarea1,Tarea1,Tarea1,Tarea2,Tarea2,Tarea2,Tarea2,Tarea2,Tarea2,"test","test","test","test","test",Tarea4,Tarea4,Tarea4,Tarea4,Tarea4,Tarea4,Tarea5,Tarea5,Tarea5,Tarea5,Tarea5,Tarea5,Tarea5,Tarea5,Tarea5,Tarea5,Tarea5,Tarea5,Tarea6_1,Tarea6_1,Tarea6_1,Tarea6_1,Tarea6_1,Tarea6_1,Tarea6_2,Tarea6_2,Tarea6_2,Tarea6_2,Tarea6_2,Tarea6_2,Tarea_1,Tarea_1,Tarea_1,Tarea_1,"tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,24);
		variantNumberArray=new Array(8,8,8,8,8,4,4,4,4,4,4,8,8,8,8,8,8,8,8,8,8,8,4,4,4,4,4,4,4,4,4,4,4,4,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
	
		}		
	}
/*ЗНО-2011 испанский язык. Основной тест.*/
	if(testName=="ЗНО-2011 Испанский язык. Основной тест.")
	{
		testLength=46;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/esp\/img\/test2011main1\/';
		fullTextWindowHorizontalOffset=-225;
		fullTextWindowVerticalOffset=-75;
		var Tarea1_2011='1 - (…..)\nLa renovacion del espacio medioambiental para todos los publicos ?Toca, Toca! en el Museo de la Ciencia en Madrid, ha  creado un espacio interactivo que permite al visitante conocer diferentes habitats y las especies que en ellos viven. Alli no solo podra ver los animales, sino que tambien podra tocar serpientes, tortugas, estrellas o pepinos de mar. Algunos de los animales que se pueden encontrar en este espacio son tortugas de espolones y dragones barbudos.\n\n2 - (…..)\nLa ultima costa virgen protegida de Murcia lleva nueve anos esperando que el Tribunal Constitucional resuelva un recurso contra una macrourbanizacion. El mayor complejo urbanistico previsto en el Mediterraneo ocupara un parque natural en la costa virgen de la autonomia gracias a una ley de 2001. Un portavoz del Constitucional explica que el tribunal sigue sin fecha para decidir sobre el parrafo de la Ley del Suelo de Murcia que permitia la urbanizacion y que recurrio el PSOE.\n\n3 - (…..)\nLos documentales medioambientales estan de moda. Titulos como Tierra y Home compiten con el cine de Hollywood en las listas de los DVD mas vendidos. Tierra, el espectacular largometraje sobre nuestro planeta de la BBC, ocupo varias semanas el primer puesto en las listas de ventas nacionales de la FNAC en formato Blu-ray. La proxima gran produccion en este genero promete ser Oceans, el documental con mayor presupuesto de la historia: 50 millones de euros.\n\n4 - (…..)\nTras meses en los que los constructores no se han cansado de repetir que los precios de los pisos ya han bajado todo lo que tienen que bajar y que no lo van a hacer mas, un paseo por el Salon Inmobiliario de Madrid (SIMA), deparaba ofertas como la siguiente: “Dos dormitorios, 72 metros cuadrados utiles en Getafe. Desde 300.000 euros”. Sin embargo, los expertos no lo dudan: los precios tienen que bajar mucho mas.\n\n5 - (…..)\nEl mochilero es un personaje peculiar de la vida contemporanea. El mochilero es un joven que con poco dinero y mucha habilidad se lanza a viajar por el mundo solo, gastando lo menos posible (conoce todos los alojamientos interesantes de media estrella, e incluso de ninguna) y disfrutando al maximo porque lo que vale no tiene precio. El mochilero es un maestro en el arte de vivir a fondo mientras atraviesa cualquier lugar del mundo, sea Tailandia, Galicia o Argentina.';
		var Tarea2_2011='Buscamos una casa rural\n\n Los espanoles nos hemos vuelto cada vez mas previsores y reservamos nuestros lugares de vacaciones con una antelacion impensable hace unos anos. Si no lo cree, pruebe a buscar una casa rural para la proxima Nochevieja con menos de dos meses de antelacion. Le resultara mision imposible. Y eso que la oferta de alojamiento rural en Espana se ha disparado. \n\n Si desea alquilar una casa rural, para empezar hay que tener en cuenta que unas casas se alquilan por habitaciones, y otras, enteras. En las primeras, lo normal es que los duenos vivan en ellas y funcione como una explotacion agropecuaria. Permiten disfrutar del espiritu original con el que nacieron estos alojamientos: vivir de cerca las faenas agricolas mientras se facilita a los propietarios unos ingresos extra. A veces huele a vaca o hay que compartir el bano con los duenos. En ocasiones, los propietarios organizan actividades de agroturismo: como ordenar vacas, buscar setas o cocer pan en sus hornos. \n\n Sin embargo, cada vez se rehabilitan mas casas para alquiler completo. En este caso, compruebe que el precio incluye sabanas, mantas, toallas y gastos de calefaccion. \n\n Existe para los precios gran amplitud de oferta. En cualquier caso, mas que por el precio, dejese tentar por la calidad. No es lo mismo pagar una cantidad por una vivienda con doscientos anos de historia primorosamente decorada con muebles antiguos y rodeada por un paisaje de ensueno que abonar casi lo mismo por una casa de paredes blancas donde el dueno ha acumulado todos los muebles viejos que no le cabian en la suya. Las guias especializadas sobre casas rurales y las paginas de Internet pueden ayudarle a decidir de antemano si la vivienda elegida esta decorada con gusto o es un almacen de trastos viejos. \n\n Las necesidades de mercado han llevado a los propietarios de alojamientos rurales a asociarse en centrales de reservas, muy comodas para el usuario porque permiten contratar un alojamiento sin sobreprecio y facilitan la busqueda de otra vivienda en la misma zona si la elegida esta ocupada. A la hora de elegir el lugar para sus vacaciones, valore tambien la belleza del entorno, la cercania de carreteras o zonas industriales que provoquen ruidos, la posibilidad de dar paseos por los alrededores y la oferta de actividades culturales o en la naturaleza que le ofrezca la propia casa o empresas cercanas.';
		var Tarea3_2011='Alejandro Amenábar regresa a las pantallas con “Ágora”, un drama histórico que centra su atención en la figura de Hipatia de Alejandría. Amenábar charla sobre su última producción, así como de su carrera cinematográfica.\n\n11 – Hola, Alejandro. ?Por que has tardado tanto tiempo en hacer una pelicula desde “Mar adentro”? \n– (.....) \n\n12 – Cincuenta millones de euros para hacer una pelicula en medio de una crisis economica. ?Lo has pensado bien? \n– (.....) \n\n13 – ?Como conociste a Hipatia? ?Te intereso primero el personaje o investigaste porque tenias la idea de una produccion ambientada en el mundo clasico? \n– (.....) \n\n14 – A proposito, Alejandro, ?que opinas de la “pirateria” audiovisual? \n– (.....) \n\n15 – ?Que le recomendarias a un guionista novel como yo que quiere dedicarse al cine? \n– (.....)';
		var Tarea4_2011='– ?Que periodico quieres? \n– Me da lo mismo, el que (16)_____. \n\n– Bueno, ?que os parece la paella? \n– Que (17)_____. \n\n– ?Que me contais de Jose? \n– Pues desde que sale con esa chica tan guapa, (18)_____. \n\n– Es dificil hablar con Micaela. \n– Tienes razon. Me molesta que ella nunca (19)_____ con nadie. \n\n– Hoy es mi primer dia de trabajo. \n– ?Pues que (20)_____! \n\n– Mira, como estan las plantas. Te dije que tenias que regarlas todos los dias... \n– Bueno, no te pongas asi, no (21)_____.';
		var Tarea5_2011='Kung Fu Panda  \n\nMarta y Paco quieren ir a ver una pelicula. Los dos estan mirando en el periodico la cartelera actual de cine. \n\nMarta: ?Que te parece esta, Paco? \nPaco: ?Cual? ?“La princesa del bosque”? Mama, por favor, que no tengo cinco anos. ?Desde cuando veo yo ese tipo de peliculas de ninas? Que yo (22)_____, nunca. \nMarta: Bueno, vale. Era solo una (23)_____. ?Y la de Harry Potter? \nPaco: Ya la he visto dos veces. \nMarta: ?Uff!, mira que es dificil (24)_____ una pelicula contigo. Dime tu, ?cual quieres ver? \nPaco: Esta. “La aventura espacial”. \nMarta: A ver... Paco, (25)_____ el dedo del texto, que quiero ver lo que pone. ?Ah, no, no! ?Es una pelicula para mayores de 18 anos! Tiene escenas violentas. Asi que, jovencito, puedes buscar otra que (26)_____ a tu edad. \nPaco: Vaya rollo. Pues Oscar ya la ha visto. \nMarta: Lo que haya visto Oscar o no, es cosa de Oscar y sus padres. Yo tengo bastante con ocuparme de tu educacion. Asi que esa pelicula no es para tu edad, ?vale? Y ahora, (27)_____ buscando. \nPaco: A mi me (28)_____ igual. Me voy a jugar con el ordenador. Escoge tu misma. \nMarta: Voy a preguntar a tu padre si quiere ir al cine con nosotros. A lo (29)_____ el tiene alguna idea... ?Gabrieeel! \nGabriel: ?Que pasa? \nMarta: Oye, ?no querias ir al cine la semana pasada? \nGabriel: Si. Pero (30)_____ hacia mal tiempo, todo el mundo penso en ir al cine y no (31)_____ entradas. \nMarta: Y, ?que pelicula querias ver? Quiza podriamos ir hoy los tres a verla. \nGabriel: Hmmm, si. Pero no se si a ti te gustaria. Es de artes marciales. \nMarta: ?Por que no? ?Cual es? \nGabriel: “Kung Fu Panda”. \nMarta: Pero, ?no es una pelicula para ninos? Gabriel, me (32)_____. A mi me encantaria ir a verla. Y seguro que a Paco tambien le (33)_____ a gustar.';
		var Tarea6_1_2011='  Texto 1\n\nLa Oroya, un pueblo minero en los Andes del Peru, figura (34)_____ las diez ciudades mas contaminadas del mundo. (35)_____ las investigaciones del Instituto Blacksmith, el noventa (36)_____ ciento de los ninos de La Oroya tienen altos niveles de plomo y zinc en la sangre, contaminacion que resulta de la intensa fundicion de metales pesados en el area (37)_____ los anos veinte del siglo pasado. El promedio de plomo en la sangre de esos ninos era el triple del limite aceptable establecido por la Organizacion Mundial (38)_____ la Salud. Los cientificos afirman que, aun cuando las fabricas vayan (39)_____ disminuir las  emisiones, el nivel de la contaminacion por el plomo puede permanecer en la tierra durante muchos siglos.';
		var Tarea6_2_2011='  Texto 2\n\n Los espanoles (40)_____ orgullosos de preservar con fervor la figura de sus reyes como jefes absolutos del Estado. Para muchos, la Familia Real constituye el modelo ideal de vida en familia. Ademas, los espanoles se interesan por conocer la vida cotidiana de los reyes, del principe y de las infantas, como si (41)_____ celebridades del espectaculo.\n\n Los espanoles (42)_____ un especial gusto por conocer la vida privada de otros personajes destacados de la sociedad. Este interes (43)_____ paso a una importante industria editorial dedicada exclusivamente a explorar la vida y costumbres de los personajes de moda. Puede que el producto mas emblematico de todos (44)_____ la publicacion “?Hola!”, revista que (45)_____ investigar los detalles mas privados de las celebridades y la nobleza espanola.';	
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","103.5","108.0","111.0","114.5","122.0","124.0","126.0","127.0","128.0","129.0","129.0","131.5","132.0","133.0","133.5","134.5","134.5","135.5","136.5","137.0","137.5","139.5","140.0","140.5","140.5","141.5","142.0","142.0","142.5","143.0","144.0","144.5","144.5","145.0","146.5","147.0","148.0","149.0","151.0","151.0","152.5","154.0","154.0","154.5","155.0","155.0","156.5","157.5","158.0","158.0","158.0","159.0","160.5","162.0","163.0","164.5","165.5","168.0","168.5","170.0","171.5","172.0","176.0","177.5","178.0","180.0","184.5","186.5","186.5","190.5","190.5","194.0","196.5","200.0");
		answerArray=new Array("c","d","h","f","b","a","c","b","c","d","h","f","e","g","d","e","a","b","c","f","g","c","a","c","c","b","b","d","a","a","d","b","d","c","e","a","d","h","i","b","a","e","i","c","g"," ");
		taskTypeArray=new Array("textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","tvir");
		textAnalysisArray=new Array(Tarea1_2011,Tarea1_2011,Tarea1_2011,Tarea1_2011,Tarea1_2011,Tarea2_2011,Tarea2_2011,Tarea2_2011,Tarea2_2011,Tarea2_2011,Tarea3_2011,Tarea3_2011,Tarea3_2011,Tarea3_2011,Tarea3_2011,Tarea4_2011,Tarea4_2011,Tarea4_2011,Tarea4_2011,Tarea4_2011,Tarea4_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea6_1_2011,Tarea6_1_2011,Tarea6_1_2011,Tarea6_1_2011,Tarea6_1_2011,Tarea6_1_2011,Tarea6_2_2011,Tarea6_2_2011,Tarea6_2_2011,Tarea6_2_2011,Tarea6_2_2011,Tarea6_2_2011,"tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,24);
		variantNumberArray=new Array(9,9,9,9,9,4,4,4,4,4,8,8,8,8,8,8,8,8,8,8,8,4,4,4,4,4,4,4,4,4,4,4,4,9,9,9,9,9,9,9,9,9,9,9,9,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
	
		}		
	}
	/*Завершение инициализации тестов*/
/*Заполнение поля дано ответов*/

		buildTestTable(testName,testDirectory);
		document.getElementById("ZnoGivenAnswers").innerHTML='Осталось заданий: <!-- Счетчик ответов --><span class="GivenAnswersView" name="GivenAnswers" id="GivenAnswers"></span>';
		taskLoader(taskArray[currentTaskCounter]);
		isTestingFlag=1;
		document.getElementById("ResumeTest").innerHTML='<input type="button" value="Подтвердить ответ" name="ResumeTestButton" id="ResumeTestButton" onClick="nextTask()" />';
		/*установка счетчика времени*/
		isTestingFlag=1;
		timing();
}
