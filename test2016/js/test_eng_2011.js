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
//Тесты по английскому языку	
/*************************************************************/	
/*ЗНО-2011 Английский язык. Основной тест.*/
	if(testName==znoEng2011Main)
	{
		testLength=46;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/eng\/img\/test2011main1\/';
		testTitle = znoName+"2011"+znoEngName;
		testDetails=mainName;
		var ceu='Central European University\n\n1. ________\nCentral European University (CEU) is looking to attract students with a sense of social responsibility who are dedicated to contributing to the public good, who are transnationallyinclined,and who have the potential to work for open and democratic societies. They must in addition possess the highest academic achievements and have the potential for intellectual development. Another of the main characteristics of CEU’s student body is the lack of a dominant national culture. Students are admitted on the basis of merit, without any specific country quotas or preferences.\n\n2. _______\nCEU encourages and supports a lively university atmosphere and a sense of community that extends beyond the classroom. As the majority of students come to CEU as international students, the university seeks to build upon the multicultural diversity of its constituents and to enrich the overall student experience. Student activities at CEU are organized directly by the students, by their academic departments or by the Student Life Office of Student Services. Some activities support specific interests, talents and academic pursuits, while others are open to the entire university community and bring together students, faculty and staff.\n\n3. ________\nThe CEU Residence and Conference Center is a modern residence complex located in District 10 of Budapest. It provides air-conditioned single rooms for up to 180 students; each room is equippedwith a personal computer and a private bathroom. The dormitory is run as a hotel-type service and students can find many other services such as a small shop for various personal articles, a cafeteria, a restaurant and a pub. There is a sports center with a swimming pool and a fitness room, basketball and tennis courts, etc. On every floor there is a quiet lounge with a coffee machine, a microwave oven and a refrigerator; as well as a TV room, and a laundry room. Bed linen is provided, but not towels and toiletries. Cooking or keeping food in rooms is not permitted.\n\n4. __________\nWith over 250,000 documents in various formats, the CEU Library holds the largest collection of English-language materials in the social sciences and the humanities in Central and Eastern Europe. New materials are constantly acquired, particularly within the disciplines of CEU’s academic departments and programs. Recently published English-language monographs and serials in economics, environmental policy and sciences, history, international relations and European studies, law, and political science can be found in the collection: many are unique to the region. The basic literature of specialized fields such as gender studies or nationalism is also richly represented.\n\n5. ___________\nCEU maintains an internal academic data network. Course registration and grading are computerized, and students are responsible for conducting all necessary procedures in connection with registration. This continually developing service integrates most of the administrative functions students have to deal with during their stay at CEU. ';
		var studyHabits='Forget What You Know About Good Study Habits(BY BENEDICT CAREY)\n\nEvery September, millions of parents try a kind of psychological witchcraft, to transform their summer-glazed campers into fall students, their video-bugs into bookworms. Advice is cheap and all too familiar: Clear a quiet work space. Stick to a homework schedule. Set goals. Set boundaries. Do not bribe (except in emergencies).\n\nAnd check out the classroom. Does Junior’s learning style match the new teacher’s approach? Or the school’s philosophy? Maybe the child isn’t “a good fit” for the school.\n\nSuch theories have developed in part because of sketchy education research that doesn’t offer clear guidance. Student traits and teaching styles surely interact; so do personalities and at-home rules. The trouble is, no one can predict how.\n\nYet there are effective approaches to learning, at least for those who are motivated. In recent years, cognitive scientists have shown that a few simple techniques can reliably improve what matters most: how much a student learns from studying.\n\nThe findings can help anyone, from a fourth grader doing long division to a retiree taking on a new language. But they directly contradict much of the common wisdom about good study habits, and they have not caught on.\n\nFor instance, instead of sticking to one study location, simply alternating the room where a person studies improves retention. So does studying distinct but related skills or concepts in one sitting, rather than focusing intensely on a single thing.\n\n“We have known these principles for some time, and it’s intriguing that schools don’t pick them up, or that people don’t learn them by trial and error,” said Robert A. Bjork, a psychologist at the University of California, Los Angeles. “Instead, we walk around with all sorts of unexamined beliefs about what works that are mistaken.”';		
		var natGeo='National Geographic invites you to join a variety of thrilling expeditions. Accompanying each expedition is a diverse team of experts – from naturalists to regional specialists – who will share their knowledge and insights on the wildlife, landscapes, and local culture. See some of the members of our extraordinary team below.\n\n11. Jay Dickman\nPulitzer Prize-winning photographer Jay Dickman has worked in photojournalism for more than 30 years, covering topics as diverse as the war in El Salvador, the Olympics, national political conventions, the Super Bowl, and the 40th anniversary of the bombing of Hiroshima. He lived for three months in a village in Papua New Guinea and spent a week under the Arctic ice in a nuclear attack sub on assignments for National Geographic magazine. His work has also appeared in publications around the world, including LIFE, Time, and Sports Illustrated.\n\n12. Kitty Coley\nKitty Coley is a geologist, naturalist, and avid birder who serves as a consultant to National Geographic magazine and has led expeditions for National Geographic for more than eight years. She worked as a geologist for 15 years before becoming involved full-time in expedition travel. Through her work, she has spent extensive time in remote rain forests and rugged geologic settings around the world. Her love of nature has led to exploration through scuba diving, backpacking, white-water and sea kayaking, and mountain biking. Kitty shares her in-depth knowledge about the fascinating aspects of the geology, flora, and fauna in a very interactive, enthusiastic approach.\n\n13. Michael Melford\nNational Geographic photographer Michael Melford has produced over 30 stories for National Geographic Traveler magazine, including eight covers. Some of Michael’s recent assignments have focused on America’s national parks, and the need to preserve them. Michael has produced photography for eight books for National Geographic, including three on Alaska, his favorite being Treasures of Alaska, for which he spent four months traveling to every corner of the state. When not shooting for National Geographic, Michael enjoys giving seminars and workshops on photography, and sharing both his love of nature and his extensive knowledge.\n\n14. Tierney Thys\nNational Geographic Emerging Explorer, Tierney Thys, is a marine biologist and documentary filmmaker whose work explores the breadth of animal diversity from pole to pole and chronicles global environmental change. Tierney is a world authority on the giant ocean sunfish, Mola mola, and has led numerous expeditions worldwide from Africa to Baja, Japan, Indonesia and the Galapagos Islands to study these bizarre jelly-eating behemoths. Tierney has also developed and guided National Geographic student marine biology expeditions in Monterey Bay.\n\n15. Kurt Westenbarger\nWriter and wilderness guide Kurt Westenbarger has led camping and backpacking trips in the Rocky Mountains for more than thirty years. His articles on natural history have appeared in Bicycling, Outdoor Life, Montana Magazine, West Yellowstone News and Big Sky’s Lone Peak Lookout. An instructor at Western Montana College, Kurt is well-versed in the region’s diverse geology, flora, and fauna, as well as the history of the Lewis & Clark expedition and the 1877 Nez Perce flight.';
		var introSleep='Introduction to sleep.\n\nWhen you\'re in a rush to meet work, school, family, or household responsibilities, do you cut back on your sleep? Like many people, you might think that sleep is merely a "down time" when (16) __________. Think again.\n\nWhat is sleep?\nSleep was long considered just a uniform block of time when you are not awake. Thanks to sleep studies done over the past several decades, it is now known that sleep has distinctive stages that cycle throughout the night. Your brain stays active throughout sleep, but (17) __________. For  instance, certain stages of sleep are indeed for us to feel well rested and energetic the next day, and other stages help us learn or make memories.\n\nIn brief, a number of vital tasks carried out during sleep help maintain good health and enable people to function at their best. On the other hand, not getting enough sleep can be dangerous - for example, (18) __________ if you drive when you are tired.\n\nHow much sleep is enough?\nSleep needs vary from person to person, and (19) __________ . Most adults need 7-8 hours of sleep each night. Newborns, on the other hand, sleep between 16 and 18 hours a day, and children in preschool sleep between 10 and 12 hours a day. School-aged children and teens need at least 9 hours of sleep a night.\n\nSome people believe (20) __________ . But there is no evidence to show that older people can get by with less sleep than younger people. As people age, however, they often get less sleep or  they tend to spend less time in the deep, restful stages of sleep. \n\nWhy sleep is good for you and skimping on it isn\'t.\nDoes it really matter if (21) __________? Absolutely! Not only does the quantity of your sleep matter, but the quality of your sleep is important as well.';
		var movPictures='From the History of Moving Pictures\n\nMany believe that the story first began in America in 1877, when two friends were (22) ________ over whether a horse ever had all four feet or hooves off the ground when it galloped. To settle the bet, a photographer was asked to photograph a horse galloping and the bet was settled because you could see that all the hooves were (23) __________ the ground in some of the photos. What was even more interesting was that if the photos were shown in quick succession the horse looked (24) __________ it was running – in other words ‘moving pictures’.\n\nThe person who became interested in (25) __________ the moving pictures to its next step was the famous American inventor Thomas Edison. Actually, he didn’t do the work (26) __________ but rather asked a young Scotsman in his employ to design a system, which he did. Now this young fellow was clever because the first thing he did was study other systemsprimitive as they were – of moving pictures and then put all the existing technologies together to make the first entire motion picture system. He (27) __________ a camera, a projection device and the film. The system was first shown in New York in 1894 and was really very popular. Apparently people (28) __________ around the block to see the wonderful new invention. There were, however, a couple of problems with the system. The camera weighed over 200 kilograms and only one person at a time could see the film.\n\nWell now, news of the new system in America (29) __________ fast and a number of rival European systems started to appear once people had heard about it. The single problem with all the systems was that they couldn’t really (30) __________ the film onto a screen – you know, so more than one person could see it. Then in 1895, three systems were developed, more or less at the same time and independently of each other. I guess the most famous of these was (31) __________ the Lumiere Brothers from France, and they called their system the cinematograph which of course is where the word cinema comes from.\n\nWell now, once the problem of projection had been solved, the next (32) __________ for the inventors was to make the films longer and more interesting. A continuing problem at the time was that the films had a (33) __________ to break when they were being played – a problem which was caused by the tension between the two wheels, or ‘reels’ as they are called, which hold the film.';
		var maleBirds='Male Birds Belt out Their Song by Putting a Little Muscle into It. \n\nSome male songbirds can sing (34) __________ notes than females because they have stronger muscles to make the sounds. Some scientists used to think it was all about how well the birds could force air out of their lungs, but new research says it has more to do with muscles in the (35) __________ throats. \n\nThere’s a reason the boy birds are better singers. They have (36) __________ a mate. The more varied their songs, (37) __________ it will stand out from other boy birds who are also singing in hopes of finding a mate. Varied songs also are easier to hear over noises, like a rushing stream or the noisy calls of other birds. \n\nAlthough all birds (38) __________ knowing certain calls, songbirds learn how to sing from their parents. That ability is only found in songbirds, humans and a few other mammals like dolphins, whales and bats. So think about muscles the next time you hear a bird singing. Muscles (39) __________ just in your arms and legs, or in a bird’s wings. They also help us make a variety of sounds. ';
		var songsStuck='Why do songs get stuck in our heads?\n\nHaving a song, tune, or commercial jingle stuck in one\'s head is a phenomenon (40) ________ as having an earworm. Most people have had an earworm at one time. The experience is harmless and unrelated to both obsessive-compulsive disorder and endomusia, the (41) ________ of music that is not really there. Certain songs – simple, repetitive, or oddly incongruous – have properties that act as mental mosquito bites in that they produce a cognitive "itch." The condition also arises when people struggle (42) ________ forgotten lyrics or how a song ends. To scratch a cognitive itch, the brain repeats the song, which then traps the hapless victim in a repeated cycle of itching and scratching. Everyone has his or her own list of demon tunes that haunt. Earworms occur more often among women, musicians, and individuals who (43) ________ to worry. Earworms also vary across situations, striking when people (44) ________ or under stress. How can you make an earworm go away? Thinking of something else or actually listening to the song in question are thought to help, but there is presently no research evidence showing what works best. Fortunately, (45) ________ episodes eventually dissipate on their own.';
		var theWholeWorlsInOneBuilding='The Whole World in One Building\n\nA journey (47) ________ the world, all along the 8-th degree of longitude, starting and ending in Bremerhaven. Through countries and climate zones, (48) ________ the glaciers of Switzerland to the swamps of Cameroon to the desert heat of the Sahel. This unique experience can be had at the Klimahaus Bremerhaven, which opened in summer 2009. For a few hours the visitors become globetrotters in deceptively real-(49) ________ landscapes in an exhibition covering 11.500 square metres. You can hike through the tropics and across the Antarctica ice cap. Interactive exhibits show how the climate determines the daily lives of people around the globe – and demonstrate how climate change (50) ________ transform life on the continents.';
		gradeArray=new Array("100.0","100.5","100.5","100.5","101.0","102.5","105.5","109.5","114.0","118.5","122.5","126.5","130.0","133.0","135.5","137.5","139.5","141.0","142.0","143.0","144.0","145.0","146.0","147.0","147.5","148.5","149.5","150.5","151.5","152.5","153.5","154.5","155.5","156.5","157.5","158.5","160.0","161.0","162.0","163.0","164.5","166.5","166.5","168.0","169.0","170.0","171.5","172.5","173.5","175.0","176.0","177.5","178.5","180.0","181.5","183.0","184.5","186.5","188.0","189.5","191.5","193.0","194.5","196.5","197.5","198.5","199.5","200.0","200.0","200.0");
		answerArray=new Array("c","g","f","e","a","b","d","d","c","a","f","c","h","a","d","e","c","h","a","f","g","c","b","d","a","c","a","b","b","d","c","a","b","c","b","d","b","a","d","b","c","d","a","c","b"," ");
		taskTypeArray=new Array("textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","tvir");
		textAnalysisArray=new Array(ceu,ceu,ceu,ceu,ceu,studyHabits,studyHabits,studyHabits,studyHabits,studyHabits,natGeo,natGeo,natGeo,natGeo,natGeo,introSleep,introSleep,introSleep,introSleep,introSleep,introSleep,movPictures,movPictures,movPictures,movPictures,movPictures,movPictures,movPictures,movPictures,movPictures,movPictures,movPictures,movPictures,maleBirds,maleBirds,maleBirds,maleBirds,maleBirds,maleBirds,songsStuck,songsStuck,songsStuck,songsStuck,songsStuck,songsStuck,"tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,24);
		variantNumberArray=new Array(8,8,8,8,8,4,4,4,4,4,8,8,8,8,8,8,8,8,8,8,8,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0);
		for (var i=0; i<testLength; i++)
		{
			curView=new view(testName,i+1,testDirectory,"picture",variantNumberArray[i], "vertical", answerLanguage, "", "");
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}	
	}
	
/*Завершение инициализации тестов*/
/*Заполнение поля дано ответов*/

		startInitialization();	
	 					
	
}