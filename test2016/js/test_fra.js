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
//Тесты по французскому языку	
/*************************************************************/		
if(testName=="ЗНО-2010 Французский язык. Основной тест.")
	{
		testLength=51;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/fra\/img\/test2010main1\/';
		fullTextWindowHorizontalOffset=-225;
		fullTextWindowVerticalOffset=-75;
		var Task1='À: Jacques.Lafavre@yaho.fr \n\nCopie: Nadia.Chikou@hitmail.com , Pierre.Arditi@laposte.fr, Alice.Newman@voila.fr, Georges.de.Durand@bmail.com\n\nObjet: petit mot de moi \n\nSalut chers frères et amis(ies), \nJ’étais occupé ces dernières 24 h à une mission urgente et trop importante pour la société où je travaille. Mais je n’ai pas oublié l’esprit d’amitié et d’entraide qui règne dans notre institut et surtout les traditions que nous gardons toujours dans nos coeurs. Je tiens à tous vous féliciter d’avoir exprimé des sentiments si chaleureux envers ceux qui ont réussi leurs examens, la gentillesse touche directement le coeur...';
		var Task2='Le 22 octobre 2008 Airbus A380 a soufflé sa première bougie. Le plus gros avion de voyageurs du monde (500 à 840 places selon ses aménagements) a transporté 700 000 passagers depuis son lancement, il y a un an. C’est le meilleur résultat de l’avion parmi tous les avions des compagnies aériennes.';
		var Task3='Quelques programmes spécifiques...\n\nLe Fonds francophone des inforoutes...\nfinance des projets qui favorisent l’appropriation et l’usage des inforoutes par la création de contenus d’expression française dans des domaines aussi variés que la jeunesse, la culture, l’enseignement, la recherche, l’économie, le droit, la presse, le tourisme ou les arts.\n\nhttp://www. francophonie.org/fonds';
		var Task4='Service d’accueil des Étudiants Étrangers \n39, av. Georges Bernanos\n75005 Paris \nTél.: 01 40 51 36 00 \n\nAttestation de bourse \n\nLe directeur du Centre Régional des OEuvres Universitaires et Scolaires de PARIS atteste que: \nMlle Oxana PETRENKO Dossier nº: 20005198 \nNé(e) le: 25/01/1987 \nPays de nationalité: UKRAINE \nAdresse: 20, rue Zhitomirska, apt.47 \n02345 Kyiv \nest titulaire d’une bourse du Gouvernement Français pour la période du 02/07/2005 au 28/07/2005 \n\nÀ Paris le 03/07/2005 \nLe Directeur du CROUS';
		var Task5='  ESPAGNE\n\nLes enfants du village espagnol de Noblejas (centre) seront désormais payés pour lire. La commune de 3 300 habitants «subventionnera les familles à hauteur d’un euro par heure passée à la bibliothèque» par leurs enfants scolarisés en primaire, a annoncé hier la mairie.\n\nAFP';
		var Task6='   En Belgique, il y a beaucoup de chaînes de télévision. Il est possible de les recevoir avec une antenne ou avec le câble. La plupart des Belges ont le câble. Il permet d\'avoir plus de chaînes de télévision. Les antennes satellites permettent de capter des chaînes du monde entier.\n  Il existe des magazines de télévision. Ils donnent les programmes et les articles sur les émissions. Le journal télévisé est présenté par des journalistes. Pour les autres émissions, ce sont des présentateurs. On dit aussi "animateurs" pour les jeux.';
		var Task7='   PASSEZ ENTRE LES GOUTTES\n\nLes averses sont nombreuses sur l’arc atlantique et le long des côtes de la Manche. Sur un large quart nord-est, de très belles éclaircies sont présentes. Au sud, le temps est perturbé et les précipitations sont soutenues en Corse.';
		var Task8='   Dernière minute\n\nTrop dur, je rentre de vacances. Une folie avec un pote (copain). On est parti tous les deux avec un vol trouvé à la dernière minute. Notre objectif c’était partir le plus loin possible, pour pas cher... On s’est retrouvé au fin fond de l’Inde. Superbe, merveilleux. On n’a rien dépensé, on a dormi dehors, rencontré des gens, mangé local... Je pense qu’on refera ça tous les ans. Ça, c’est la vraie découverte d’un pays et de ses habitants... Par contre le retour est... triste.';
		var Task9='   Pourquoi personne ne porte plus le caïman pour le mettre à l\'eau?\n\nDe Blaise Cendrars. \nPrix:13,50 euros Édition le Sorbier. \n\nParce qu’il n’est pas très gentil? Parce qu’il fait peur? Un peu des deux en fait. Un chasseur courageux peu méfiant porte secours à un caïman qui le supplie de l’aider. Le caïman, une fois sauvé se retourne contre le chasseur, et essaie de le dévorer. Mais un lièvre rusé passe par là. Beau conte africain.';
		var Task10='Pour la première fois depuis le début des années 1950, la capitale gagne des habitants. Selon le dernier recensement, compilé par l’Insee Ile-de-France et rendu public aujourd’hui, la ville comptait 2 181 400 habitants au 1er janvier 2006, soit 56 100 de plus qu’en 1999. Cette progression est uniquement due à un solde naturel plus important (+ 0,7% de croissance annuelle). Car le solde migratoire,lui, restenégatif(-0,4 %).';
		var Task11='  Chère Anita,\n\nJe te remercie pour tes belles photos. J’espère que tu as passé une bonne fin de séjour à Montpellier et un bon voyage de retour. T’es-tu remise pendant le mois d’août des gros efforts réalisés en juillet? Moi, j’ai passé quinze jours splendides en Corse, et maintenant la dure réalité frappe à nouveau à ma porte, les cours vont bientôt recommencer. Enfin, c’est la vie. J’espère continuer à avoir de tes nouvelles.\n\n     Je t’embrasse.\n          José';
		var Task12='  Les rayons solaires sont 8 fois plus puissants dans l’espace qu’une fois arrivés sur le sol terrestre. L’atmosphère protège ainsi la vie sur Terre. Cette puissance des rayons solaires intéresse les chercheurs depuis longtemps. Selon eux, une centrale placée en orbite autour de la Terre pourrait absorber l’énergie solaire et renvoyer beaucoup d’électricité propre sur notre planète, sous la forme d’ondes.\n  Problème important: envoyer du matériel dans l’espace dans une navette coûte actuellement près de 15 000 euros le kilo ...';
		var Task13='  Big Ben est-elle la plus grosse cloche du monde?\n\nContrairement à ce que pourrait laisser penser son nom, Big Ben n’est pas la plus grosse cloche du monde, elle est devancée par l’inutilisé «Tsar Kolokol III» du Kremlin à Moscou qui pèse 212 tonnes (soit plus de 10 fois plus lourde que la cloche anglaise). On estime aujourd’hui à plus de 200 000 le nombre de cloches réparties sur l’ensemble du territoire français.';
		var Task14='  Vous allez partir en France\n\nAvant de quitter votre pays vous devez:\n- retirer votre lettre de présentation à l’Ambassade,\n- vous assurer que l’Ambassade a bien prévenu le CNOUS de votre arrivée en France,\n- vous munir obligatoirement d’une somme de 100 € minimum,\n- vérifier que la validité de votre visa correspond bien à la durée du stage,\n- éviter d’arriver un samedi, un dimanche ou un jour chômé.\n\nNe venez pas en avance, votre hébergement ne pourra être assuré.';
		var Task15='  Leur histoire est liée aux loisirs ouvriers et aux «Dimanches au bord de l’Eau» pour y exercer des activités variées, très souvent liées à l’eau (régates, canotage, natation, joutes, pêche...), mais aussi pour se divertir avec des jeux de foire, de quilles, de boules et balançoires... On s’y attablait pour savourer une cuisine simple servie avec du vin blanc ou rouge: friture ou matelote de poisson, fricassée de lapin. Et puis on y dansait les danses populaires à l’époque: la valse, la polka et plus tard, la valse «Musette».\n  La première moitié du XXe siècle constitue l’âge d’or pour les guinguettes, alors que, au début des années 60, le goût pour les week-ends plus éloignés et de nouveaux types de musiques en annoncent le déclin. De nombreuses guinguettes ont été détruites. Actuellement, quatre d’entre elles sont toujours en activité dans le Val-de-Marne';
		var Task16='  Aussi haut que la dame de fer\n\nURBANISME. La Fondation d’entreprise de la Société de la tour Eiffel lance la première édition du concours d’architecture Eiffel 2008, réservé aux étudiants en architecture des écoles françaises. Individuellement ou en équipe pluridisciplinaire sont invités à concevoir un édifice de très grande hauteur, à distance, accolé ou à la place même de la tour Eiffel. Leurs projets devront tenir compte des réalités environnementales du site, urbaines, sociales, techniques et économiques. Ils devront, également, faire appel aux techniques et matériaux contemporains.\n\n    A.S\nInfos: www.fondationsocietetoureiffel.org';
		var Task17_22='   (22)... .\n\n(18) ... . Et la saison ne fait que commencer! À Dijon, les pompiers sont intervenus plus d’une cinquantaine de fois, principalement pour des inondations de caves, après un violent orage mardi soir. Près d’Avignon, la foudre a blessé six enfants de 11 à 12 ans qui jouaient sur un terrain de football. Météo France a placé 2 départements du sud-ouest en vigilance orange jusqu’à aujourd’hui, cela signifie qu’il y a de forts risques d’inondation dans ces zones.\n(19) ... , que faire en cas d’orage?\nDe façon générale, il faut éviter le plus possible les activités extérieures. Ce n’est pas le moment de sortir ton chien, finir ta partie de foot et encore moins de partir en randonnée. Si malgré tout tu te trouves dehors, quelques règles s’imposent. La première: se débarrasser et s’éloigner de tout objet métallique, ils attirent la foudre. (20) ... , tu ne t’abrites pas sous ton parapluie, tant pis si ça mouille, c’est moins dangereux. Il faut aussi s’éloigner des poteaux électriques et de tout autre objet plus haut que toi, pointu et pointé vers le ciel. Surtout, ne pas s’abriter sous un arbre, et encore moins s’il est isolé. L’idéal est de trouver rapidement un abri de pierre. Si tu n’en trouves pas, roule-toi en boule au sol et attends. Les orages durent rarement plus de trente minutes.\n\n    CÉLINE BOUSQUET';
		var Task23_34='(23)__________ du téléphone portable!\n\nFace aux manques de (24)__________ sur les risques des téléphones portables pour la santé, il faut rester prudent, surtout si tu as moins de douze ans. Voici quelques (25)__________.\n\nLes téléphones portables sont-ils (26)__________? C’est la question que se posent de nombreux scientifiques: (27)__________, nous n’avons pas de réponse définitive concernant leur influence (28)__________ la santé. Pourtant, de plus en plus d’études montrent qu’ils peuvent le (29)__________, surtout chez les enfants de moins de douze ans. En fait, à cet âge-là, tu es plus fragile que les adultes (30)__________ ton corps et tes organes sont en train de se développer.\n\nPour (31)__________ les risques de maladie, des cancérologues viennent de publier (32)__________ de conseils: par exemple, utilise au maximum un kit mains libres, un kit piéton, une oreillette ou un haut-parleur. D’autres gestes simples peuvent aussi être utiles: utilise plutôt les SMS que les appels et ne laisse pas ton portable (33)__________ sur ta table de nuit pendant que tu dors. Et comme dit cette phrase (34)__________ «mieux vaut prévenir que guérir»!\n\n    DELPHINE FABIUS\n\nhttp://www.lesclesjunior.com'
		var Task35_40='   Santé\n\nHalte au surpoids!\n\n«Parce qu’au début, ça ne se voit pas», des centaines de pédiatres (35)__________ ce samedi des informations pour détecter les problèmes de surpoids chez les enfants.\n\n1 enfant sur 6 est trop gros en France. Ce pourcentage (36)__________ très vite en l’espace de 20 ans. Aujourd’hui, il est si (37)__________ que dans une centaine de villes en France, des pédiatres organisent des animations, des conférences et des ateliers pour donner des conseils pour manger (38)__________: c’est la journée nationale de prévention et d’information sur l’obésité infantile. Ces pédiatres insistent aussi sur le dépistage et recommandent d’aller les voir au moins une fois par an. Car un enfant trop gros, cela se voit, peut-on penser. Inutile alors d’aller consulter un docteur. Or, justement, au début ça ne se voit pas… D’où l’importance de consulter un spécialiste. Celui-ci te pèsera et te mesurera. En fonction de ton poids et de ta taille, il (39)__________ en mesure de dire si tu «es juste comme il faut» ou déjà trop gros. Si tel est le cas, ne te vexe pas. Plus ce problème de santé (40)_________ tôt, plus il est facile à soigner. Selon les pédiatres, 9 cas d’obésité sur 10 sont évitables grâce à des règles simples. Pour savoir où rencontrer les pédiatres lors de cette journée nationale de prévention et d’information sur l’obésité infantile, visite le site de l’Association française de pédiatres ambulatoires: www.afpa.org.\n\n     http://www.lesclesjunior.com le 10 janvier 2009';
		var Task41_46='  Les macaques savent compter!\n\nLes hommes ne seraient pas les seuls à savoir compter. Les macaques aussi maîtrisent, comme (41)__________, l’addition.\n\nOn sait depuis longtemps que les singes sont capables de comparer des quantités: (42)___________ réussissent, sans se tromper, à montrer de la patte le pot où il y a le plus de billes. Aujourd’hui, des chercheurs viennent de montrer qu’ils ne savent (43)__________ seulement comparer des quantités. Les singes savent véritablement compter et maîtrisent parfaitement l’addition.\n\nPour montrer l’esprit matheux des singes, les chercheurs ont entraîné (44)__________ guenons (macaques femelles) à compter les sons qu’elles entendaient. Après un certain nombre de «biiiip», les guenons devaient choisir, sur (45)__________écran d’ordinateur, le dessin où apparaissait le même nombre de points. Bilan? 20/20 pour les guenons! Ensuite, les chercheurs ont légèrement compliqué l’exercice: en plus des «biiiip», ils ont ajouté des éclairs de lumière. Les guenons devaient alors additionner le nombre de «biiiip» et d’éclairs. Et, une fois encore, elles ont obtenu de très (46) __________ résultats. C’est prouvé: les macaques savent compter!\n\n       http://www.lesclesjunior.com, le 07 juillet 2008';
		var Task47_50='Akira Kurosawa - Dessinateur\n\nAkira Kurosawa n’était pas que le (47)__________ grand réalisateur japonais.\n\nC’était aussi un peintre et dessinateur d’exception, auquel le Petit Palais (48)__________ hommage en exposant près (49)__________ une centaine d’oeuvres rares, (50)__________ le Vieux meunier, au crayon, aquarelle et pastel. Jusqu’au 11 janvier 2010. \n(http://www.petitpalais.paris.fr).';
		answer47Array=new Array("plus");
		answer48Array=new Array("rend","a rendu","rendait");
		answer49Array=new Array("d'");
		answer50Array=new Array("dont","parmi lesquelles","y compris");
		gradeArray=new Array("100.0","100.5","100.5","101.5","102.0","103.0","106.5","110.5","114.0","116.5","120.5","124.0","127.0","129.5","133.0","135.5","138.0","140.0","141.5","143.0","144.5","145.5","147.0","148.0","149.0","150.0","151.0","152.0","153.0","154.0","154.5","155.0","155.5","156.5","157.5","158.0","158.5","159.5","160.5","161.5","162.0","163.0","164.0","164.5","165.5","166.5","167.5","168.5","169.5","170.5","171.0","172.5","173.5","174.5","175.5","176.5","177.0","178.5","179.5","181.5","182.5","184.0","186.5","187.5","190.0","192.0","193.0","194.5","195.5","197.0","197.5","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("c","d","d","a","d","a","b","c","a","b","b","b","c","a","c","a","d","b","b","c","c","b","c","b","d","c","a","c","d","b","c","b","c","d","h","f","a","g","d","b","d","f","b","g","i","a",answer47Array,answer48Array,answer49Array,answer50Array," ");
		taskTypeArray=new Array("textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textual","textual","textual","textual","tvir");
		textAnalysisArray=new Array(Task1,Task2,Task3,Task4,Task5,Task6,Task7,Task8,Task9,Task10,Task11,Task12,Task13,Task14,Task15,Task16,Task17_22,Task17_22,Task17_22,Task17_22,Task17_22,Task17_22,Task23_34,Task23_34,Task23_34,Task23_34,Task23_34,Task23_34,Task23_34,Task23_34,Task23_34,Task23_34,Task23_34,Task23_34,Task35_40,Task35_40,Task35_40,Task35_40,Task35_40,Task35_40,Task41_46,Task41_46,Task41_46,Task41_46,Task41_46,Task41_46,Task47_50,Task47_50,Task47_50,Task47_50,"tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,24);
		variantNumberArray=new Array(4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}			
	}
/*ЗНО-2011 французский язык. Основной тест.*/
	if(testName=="ЗНО-2011 Французский язык. Основной тест.")
	{
		testLength=46;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/fra\/img\/test2011main1\/';
		fullTextWindowHorizontalOffset=-225;
		fullTextWindowVerticalOffset=-75;
		var inet_annonce="Professionnels, vous n'avez pas ou plus de secretaire. Particuliers, vous ne savez pas (ou mal) taper sur un clavier... Je vous propose a distance des services individualises et de qualite. Exemples: compte-rendu, livre, these, bon de commande, facture de l'hotel en un mot l'enregistrement sur un ordinateur de tous documents ecrits a la main ou enregistres. Site: http://www.isa-tap.com Tel.: 03.26.70.52.05., isabelle.demianville@laposte.net";
		var tv_prog='   FRANCE 3\n20.55 Lit Grande Illusion Divertissement. Presente par Valerie Benain. \n\nApres Marseille et Paris,«La Grande Illusion» entreprend de perturber l\'espace-temps et le sens commun a La Rochelle. Pierre Palmade, piege par son complice de «Made in Palmade», vole au secours d\'une femme enceinte et bascule dans un monde sans repere. \n\n\n   TF1\n20.50 Josephine, ange gardien: Profession menteur Telefilm de Sylvie Ayme (Fr., 2006). 1 h 30. Avec Mimie Mathy, Bruno Debrandt.\n\nFrederic Duval a perdu son travail mais n\'en a rien dit a ses proches. Josephine intervient pour le ramener a la raison. Elle le pousse a cesser de vivre dans le mensonge. \n\n\n   FRANCE 2\n20.50 Cold Case, affaires classees   Serie.   «Reves   et desillusions». (USA, 2006). Avec Kathryn Morris, Danny  Pino,   Jeremy Ratcliford. \n\n1929: une femme est retrouvee morte le jour de Noel. 2006: l\'arriere-petite-fille de la defunte sollicite l\'aide de Lilly et de son equipe pour en savoir plus sur les circonstances de la mort de son aieule. \n\n\n   M6\n20.50 Kaamelott Serie. «Livre V, 2e partie». Avec Alexandre Astier; Guy Bedos, Patrick Bouchitey. \n\nKaamelott est sans Roi: l\'epee est a nouveau plantee dans le rocher Alors que les clans autonomes se multiplient,on etudie vainement les lois bretonnes afin de designer un chef d\' Etat. Arthur doit se mettre a la recherche de sa possible descendance.';
		var text3_2011='Creee en 1914, afin d\'expedier les hommes et tes materiaux necessaires a la construction du barrage d\'Artouste, situee a 2000 metres d\'attitude, cette ligne de chemin de fer, parmi les plus hautes d\'Europe fut maintenue puis modernisee, des 1932 a des fins touristiques. Sur 10 km de voie a cote de montagne vous decouvrirez des champs de plantes sauvages et vous vous laisserez surprendre par de paysages admirables. Fonctionne tous les jours.';
		var brest='Brest: le prefet interdit l\'alcool le jeudi soir sire la place de la Liberte \n\nPar arrete prefectoral, la consommation d\'alcool est interdite place de la Liberte, au centre-ville de Brest, ainsi que dans plusieurs rues voisines, entre 21 h et 6 h du matin. Cette mesure s\'appliquera dans un premier temps du 7 janvier 2010 au 8 avril 2010 compris. «La place de la Liberte a Brest connait regulierement des rassemblements de personnes alcoolisees qui generent des desordres frequemment signales par les riverains et les passants», explique la prefecture du Finistere.\n\n      www.ouest-france.fr';
		var en_france='En France \n\nMardi sera une journee de temps calme et anticyclonique sur tout le pays. Cependant, les hautes pressions n\'induiront pas partout un ciel limpide et ensoleille. Des nuages relatifs a l\'humidite residuelle des derniers jours seront en effet tres presents sur un bon quart nord-ouest, entre la Bretagne, les Pays de la Loire, le Bassin Parisien, la Normandie et le Nord-Pas-de-Calais. Le soleil s\'imposera progressivement sur les autres regions. Les temperatures remonteront un peu partout, sauf la region du Nord-ouest';
		var text8_2011='Le champion de toutes categories de la collecte et du recyclage des sapins de Noel n\'est pas une collectivite mois une entreprise privee: l\'enseigne lkea. [...]\n\nLa fameuse societe des magasins de meubles a mis en place en 2003 une operation appelee «Agir a la racine». \n\nChaque sapin achete 20 € en decembre peut etre echange i la jardinerie d\'lkea en janvier suivant contre un bon d\'achat de 19 €. Pour le consommateur qui en accepte le principe, le cout d\'un sapin ne se monte plus qu\'a 1 €, que l\'enseigne s\'engage a reverser a l\'Office national des forets. \n\nLes sapins recuperes sont recycles en compost. \n\n       La Voix du Nord';
		var text9_2011='EVOLUTION vous accueillera dans une ambiance chaleureuse tres conviviale. Notre equipe tres professionnelle, vous offrira une tasse de cafe et commencera le diagnostic de vos attentes afin de bien vous comprendre. \n\nPhilosophie: \nNous souhailons mettre en avant les bienfaits de l\'arrangement des cheveux sur le morale et sur le dynamique qu\'elle peut generer. \n\nService: \nMorphologie assistee par ordinateur, coupe moderne et classique, couleur, chignon, une tres large palette de services vous sera proposee. \n\nSpecialite: \nChignon marie etc., morphologie, extension \n\nMode de paiement: \nEspece, carte, cheque ';
		var text10_2011='Decus par les recettes du film Avatar projete en 2D a Vitre, les responsables du cinema L\'Aurore ont decide d\'investir dans un nouveau projecteur: «La ou le film est projete en 3D, Avatar fait un carton. Les salies sont encore pleines.» Vitre ne passera done pas a cote de cette revolution techologique: «Le cinema de L\'Aurore sera equipe des cet ete en materiel 3D. Les spectateurs seront equipes de lunettes speciales pour profiter pleinement du relief.» Le prix des billets sera un peu plus eleve (le montant n\'est pas arrete) mais pas suffisamment pour decourager les passionnes.\n\n           www.ouest-france.fr';
		var text12_2011='La police francaise a annonce jeudi l\'arrestation nocturne d\'un crocodile qui circulait tranquillement dans une rue de General Leclerc, une bourgade du departement du Cher (centre). \n\nLes policiers ont ete alertes vers 02h 00 du matin par un appel telephonique affirmant qu\'un crocodile se promenait dans la rue. \n\nEcartant l\'hypothese pourtant vraisemblable d\'une plaisanterie, tes policiers se sont rendus sur les lieux pour decouvrir l\'animal. Quelques heures plus tard, ils retrouvaient ses proprietaires: un petit cirque qui fait actuellement etape dans la ville.';
		var text13_2011='C\'est un document constitue par un ensemble de feuilles qui sont reliees entre elles et souvent protegees par une couverture. Il designe aussi le contenu, cree par un ecrivain et destine a etre lu par d\'autres. Il existe plusieurs types de ce document. On peut citer les documents, qui racontent une histoire, les ecrits documentaires et manuels, scolaires, ou sont reunis Les savoirs d\'un certain domaine, les documents illustres, qui contiennent des images, les bandes dessinees, qui racontent une histoire sous forme de dessins, les documents sous forme electronique diffuses par Internet, etc. Selon les specialistes ce document doit contenir cinquante pages an minimum.';
		var text14_2011='Payer les eleves pour aller a l\'ecole?! \n\nJe suis scandalisee! Moi aussi, je veux bien aller voir un match «gratos» au velodrome! Et si je seche, je ne peux pas y aller, moi, a Marseille. \n\nLes eleves ont avant tout des devoirs, et celui de venir i l\'ecole est incontournable, indiscutable. \n\nIl existe une loi qui prevoit de supprimer les allocations familiales aux familles dont les enfants sont trop absents. Dans les faits, je suis curieuse de savoir si cela existe vraiment et pour combien de demi-journees d\'absence. \n\nIl  faut trouver d\'autres  moyens,  la recompense de  venir a  l\'ecole, c\'est d\'Apprendre!!! \n\nN\'est-ce pas une merveilleuse recompense qu\'il faut valoriser, encourager. \n\nJe ne suis pas sure que donner l\'envie d\'apprendre, d\'apprendre a apprendre vienne avec des billets! \n\n     Le blog de Brun Junod, prof d\' Eps, titulaire volontaire dans un college de ZEP';
		var text15_2011='Les aurores boreales sont de fabuleux phenomenes qui se produisent dans le ciel nocturne. On peut les observer dans des regions proches du pole nord. Ce sont de grandes bandes lumineuses vertes, bleues ou rouges se deplacant plus ou moins vite dans le ciet nocturne polaire. E Iles se forment a une altitude comprise entre 100 et 500 kilometres et peuvent durer plusieurs dizaines de minutes. La cause de ce phenomene est due a notre astre: le soleil. Regulierement, il subit de violentes tempetes et rejette dans l\'espace ce que l\'on appelle des vents solaires. Ceux-ci viennent en contact avec le champ magnetique terrestre qui est une sorte de bouclier pour notre planete. C\'est lors de cette rencontre que se produit le magnifique spectacle des aurores boreales. Le phenomene n\'est pas sans consequence puisqu\'il perturbe les reseaux electriques. GPS et radios peuvent aussi etre perturbes et des vols peuvent etre annules en cas d\'activite importante.';
		var text16_21_2011='    (21)...\n\nI (l6)... A Clichy-so us-Bois, le centre de production de cette patisserie est en pleine essor.\n\nII Le rythme de production s\'est accelere depuis fin octobre pour fabriquer un maximum de gateaux avant Noel et hier encore c\'etait le coup de chaud dans les ateliers de la Romainville.\n\nIII Malgre la surcharge de travail, rien n\'est laisse au hasard dans la centrale de production de la patisserie, basee a Clichy-sous-Bois. Ici, chaque unite a sa specialite: tarte, galette des rois, bavarois... Autour du tapis roulant sur lequel sont mis ces douceurs, une quinzaine d\'employes s\'attaquent aux finitions: glacage, decoration, a chaque geste une fonction.\n\nIV Car si la production ressemble plus a des quantites industrielles qu\'artisanales, «tout est fait a la main (17) car aucune patisserie ne se ressemble exactement», souligne Julie fi loche, responsable qualite.\n\nV  A proximite, de grands bacs remplis de chocolat, de creme vanille feraient perdre conscience n\'importe quel gourmand. Un peu plus loin, les gateaux sont emballes et prets a etre livres dans les 22 magasins du groupe, principalement en region parisienne, mais aussi a Lyon.\n\nVI En cette veille de Noel, l\'entreprise devrait vendre 15 000 buches et gateaux. «Au plus fort de la journee, les clients feront la queue pendant deux heures et demie pour acheter leurs gateaux, sourit Etienne Ortega, directeur general de la Romainville. Depuis quelques annees, nous avons meme du engager des surveillants pendant les feles pour eviter toute mauvaise conduite des clients.» «En temps normal, dans la boutique de Clichy, nous avons deux ou trois vendeurs mais a Noel nous montons a 10 ou 15 et les cadres du groupe descendent des bureaux pour renforcer l\'equipe», explique Julie Filoche. Ils aident a vendre les milliers de buches.\n\nVII (18) Pourtant,  «depuis deux ou trois ans, on assiste a une baisse des ventes de ce type de produit», reconnait Etienne Ortega.. Alors, le laboratoire maison, avec ses 35 patissiers, tente cette annee de proposer autre chose. «Nous avons cree des gateaux relatifs au Noel, qui sont une alternative a la buche, analyse Philippe Gobinet, responsable de production. Nous en avons en forme de Pere Noel, de patinoire... Et ca marche plus tot bien puisque nous avons distribue 3 500 cette annee.»\n\n      Sebastien Thomas\n\n      www. lepurisieii.fr';
		var text22_33_2011='   J\'ai traverse l\'Atlantique a bord de l\'A380\n\n    Une nuit dans le train Rodez-Paris pour rallier lu plateforme de Roissy Charles-de-Gaulle qui accueille depuis quelques jours a peine la nouvelle star de l\'aviation civile, j\'ai nomme l\'A380. A l\'aeroport, precipitation sur la salle d\'embarquement pour etre dans les blocs a fin de decouvrir la bete. Derriere l\'immense baie vitree, (22)_____________de le manquer, on ne voit que lui.\n\n    Son (23)_____________qui nous Tait faee est enorme. Tout le monde se reunit et photographie le geant. Cote piste, un s\'affaire autour de lui, un le prepare pour sa traversee de l\'Atlantique jusqu\'a New York. Des que le top depart est donne puur l\'installation, les 538 passagers se precipitent. Heureusement, l\'embarquement est tres (24)_____________et se fait avec une rigueur militaire.\n\n    On prend place sur le pont inferieur, vers le fond de l\'avion, du cote droit, a peine assis, un sent et on voit la difference. Le hublot est a la taille de l\'appareil et l\'espace entre les rangees est plus(25)____________compare a un Boeing 747. Un ecran insere dans le siege de devant nous reserve un programme d\'une centaine de films, de series tele, et autant d\'albums de musique. Une prise USB permet de se connecter et un clavier d\'envoyer des mails ou de telephoner, a condition, bien sur, d\'inserer sa carte bancaire. Autre fonction tres interessante et (26) _____________ condition, la communication avec un autre siege.\n\n    En attendant, les (27)____________se ferment, le personnel est souriant et une hotesse se confie: c\'est une premiere pour les 24 membres de l\'equipage qui sont tres fiers de voler a bord de l\'A380.\n\n    Probleme: une heure apres, on est toujours colle (28)____________. On n\'arrive pas a decrocher les passerelles d\'embarquement. Certains (29)____________s\'impatientent. Un mot du commandant nous expliquant les (30)____________, et on roule enfin vers la piste. Derriere nous, ranges en file indienne les autres appareils laissent la priorite a la vedette.\n\n    Ca y est, on est (31)____________position, les reacteurs tournent a fond, le titan se transforme en oiseau leger. Ses ailes blanches, dont la taille atteint la largeur d\'un terrain de football, paraissent dans le ciel azur. Et (32)____________qui frappe des la premiere seconde du vol c\'est le silence. Un silence coupe par les bouchons (33)____________qui sautent. Un vol inaugural ca se fete.\n\n       Marie-Christine Bessou \n        www.ladepeche.fr';
		var text34_39_2011='A 7 ans il (34)___________une pelleteuse pour deblayer la neige\n\n   Un garcon de sept ans (35)___________par la police au volant d\'une pelleteuse en train de deblayer la neige sur une roule du nord de la France pour faire plaisir a son pere.\n\n   L\'enfant a explique que son papa avait dit que la route etait sale et qu\'il  «voulait aider». selon un communique de la police. «Voyant les cles sur la serrure de contact, il a saisi l\'occasion» et (36)___________au volant de l\'engin haut de 3,5 metres pour deblayer laneige sur la route.\n\n   Quand il a remarque la police, il a arrete aussitot Le moteur. «Il a ouvert la porte, (37)___________et a reconnu tout de suite ne pas avoir de permis de conduire», selon les agents.\n\n   Au montent ou la police l\'a decouvert, il (38)___________sa tache et voulait reconduire la machine sur le site de l\'entreprise familiale a Laval pres de Brest, ou il l\'(39)___________.\n\n   Les policiers ont remis l\'enfant a sa mere, avec les cles de la pelleteuse. A la place des parents on irait vite lui acheter pour Noel des grues et des engins de chantier... miniatures.\n\n      www.ouest-france.fr';
		var text40_45_2011='   Elle decouvre son frere soixante ans apres\n\n   Elle se croyait fille unique. Colette, une habitante de Suresnes, a appris (40)_________ elle avait un demi-frere allemand, aujourd\'hui age de plus de soixante ans.\n\n   (41)__________vie de Colette Guillard a bascule en une seconde. Ce jour ou, il y a quelques semaines, elle a rencontre son frere pour la premiere fois. Cinq jours plus tot, cette habitante de Suresnes se croyait encore fille unique.\n\n   Tout commence par un coup de fil et une voix d\'homme avec un (42)_________accent germanique qui lui pose des questions precises, notamment sur son pere.\n\n   Son correspondant explique mener (43)__________recherches en filiation depuis quarante ans. «Quand il im\'a dit que mon pere etait aussi le sien, c\'etait un coup de massue», se souvient Colette, des etoiles plein les yeux. Un rendez-vous est finalement cale a Suresnes. Aujourd\'hui, elle revit la scene avec autant d\'intensite: «Je (44)__________ai entendu monter l\'escalier. A chaque pas, mon coeur battait un peu plus vite. J\'ai ouvert la porte, on s\'est regarde sans rien dire. El a souri et, la, j\'ai vu tout le portrait de mon pere. l\'ai eclate (45)_________sanglots. C\'est le moment le plus fort de ma vie.»[...]n\n     www.leparisien.fr';
		gradeArray=new Array("100.0","100.5","101.0","101.0","101.0","103.5","106.0","108.0","111.5","116.5","121.0","124.5","130.5","134.0","138.0","141.0","143.5","146.5","149.0","151.0","153.5","155.0","155.5","156.5","157.0","158.5","159.0","159.5","160.0","161.5","162.5","164.0","164.5","165.0","166.0","167.0","167.5","168.5","169.0","169.5","170.5","171.5","172.5","174.0","175.0","176.5","177.5","179.0","179.5","180.5","181.0","182.0","183.0","184.5","186.0","187.5","190.0","192.5","193.0","194.0","195.0","196.5","197.5","200.0","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("b","d","b","b","a","a","d","a","c","a","d","c","d","b","b","c","a","b","b","c","a","b","c","a","a","c","b","a","c","b","b","c","a","b","a","d","c","b","d","d","b","d","a","b","c"," ");
        taskTypeArray=new Array("textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","test","test","textanalysis","textanalysis","textanalysis","test","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","tvir");
		textAnalysisArray=new Array(inet_annonce,tv_prog,text3_2011,brest,en_france,"test","test",text8_2011,text9_2011,text10_2011,"test",text12_2011,text13_2011,text14_2011,text15_2011,text16_21_2011,text16_21_2011,text16_21_2011,text16_21_2011,text16_21_2011,text16_21_2011,text22_33_2011,text22_33_2011,text22_33_2011,text22_33_2011,text22_33_2011,text22_33_2011,text22_33_2011,text22_33_2011,text22_33_2011,text22_33_2011,text22_33_2011,text22_33_2011,text34_39_2011,text34_39_2011,text34_39_2011,text34_39_2011,text34_39_2011,text34_39_2011,text40_45_2011,text40_45_2011,text40_45_2011,text40_45_2011,text40_45_2011,text40_45_2011,"tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,24);
		variantNumberArray=new Array(4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0);
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