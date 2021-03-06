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
//Тесты по географии	
/*************************************************************/	
/*ЗНО-2009 География. Основной тест*/
/*	if(testName=="ЗНО-2009 География. Основной тест")
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/geo\/img\/test2009main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.5","103.5","105.0","106.5","108.0","110.0","112.0","114.0","116.0","118.0","120.0","122.0","124.0","126.0","128.0","130.0","131.5","133.0","135.0","136.5","138.0","139.5","141.0","142.5","144.5","145.5","147.0","148.5","150.0","151.5","153.0","154.0","155.5","157.0","158.0","159.5","160.5","162.0","163.5","164.5","165.5","167.0","168.0","169.0","170.5","171.5","172.5","173.5","174.5","176.0","177.0","178.0","179.0","180.0","181.0","182.0","183.0","184.0","185.0","185.5","186.5","187.5","188.0","189.0","190.0","191.0","191.5","192.5","193.0","194.0","195.0","195.5","196.0","196.5","197.0","197.5","198.0","198.5","198.5","199.0","199.5","199.5","199.5","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("d","a","b","b","c","a","c","d","b","d","a","b","a","d","c","a","c","d","a","c","a","d","b","c","d","b","c","c","a","d","b","c","c","a","b","a","b","d","d","c","adcb","eacd","bedc","abed","eadb","baed","ecba","ecba","becd","bcda","cabd","adcb","bcda","acdb","dcba","cdab","bdca","dcba","bdca","dabc");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","connect","connect","connect","connect","order","order","order","order","order","order","order","order","order","order");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,2,2,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}*/
/*ЗНО-2010 География. Основной тест*/
/*	if(testName=="ЗНО-2010 География. Основной тест")
	{
		testLength=58;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/geo\/img\/test2010main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.0","103.0","104.5","106.0","107.5","109.5","112.0","114.5","117.0","119.5","122.5","125.0","127.5","130.5","133.0","135.5","138.0","140.5","142.5","145.0","147.5","149.5","152.0","154.0","156.0","158.0","160.0","161.5","163.5","165.5","167.0","168.5","170.0","171.5","173.0","174.5","178.5","176.0","178.5","179.5","181.0","182.0","183.5","184.5","185.5","186.5","187.5","188.5","189.5","190.5","191.5","192.0","193.0","193.5","194.5","195.0","195.5","196.5","196.5","197.0","197.5","198.0","198.5","199.0","199.0","199.0","199.5","199.5","199.5","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("a","d","c","b","c","c","d","c","b","a","c","c","d","b","a","a","a","b","a","b","b","c","c","d","c","b","d","b","c","a","c","b","a","b","d","b","b","a","d","a","a","c","ebcd","badc","daeb","aceb","ecba","bcae","cdba","ebcd","cdba","bcae","cadb","dcba","cdba","cdab","cadb","dbca");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","connect","connect","connect","connect","order","order","order","order","order","order");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}*/
/*ЗНО-2011 География. Основной тест*/
/*	if(testName=="ЗНО-2011 География. Основной тест")
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/geo\/img\/test2011main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		olderNumericDigits=3;
		juniorNumericDigits=0;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.0","102.0","103.0","104.0","105.5","107.5","109.5","112.0","114.5","117.5","120.0","122.5","125.5","128.0","131.0","133.5","135.5","138.0","140.0","142.0","144.0","146.0","148.0","149.5","151.5","153.0","154.5","156.0","157.5","158.5","160.0","161.5","162.5","164.0","165.0","166.5","167.5","168.5","170.0","171.0","172.0","173.0","174.5","175.5","176.5","177.5","178.5","179.5","180.5","181.5","182.5","183.5","184.5","185.5","186.5","187.5","188.0","189.0","190.0","191.0","191.5","192.5","193.0","194.0","194.5","195.5","196.0","196.5","197.5","197.5","198.0","198.5","199.0","199.0","199.5","199.5","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("c","c","d","c","d","b","a","a","c","c","a","a","d","d","b","a","a","d","a","b","c","c","b","c","b","d","c","b","b","a","b","b","a","d","a","b","c","c","d","d","d","b","cdeb","bdac","acde","ebac","adbe","acdb","dabc","adcb","bcda","cdba","dbac","bcf","bcd","cef","adf","abe",18,101);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","order","order","order","order","order","multiselection","multiselection","multiselection","multiselection","multiselection","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,2,2,2,2,2,3,3,3,3,3,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}*/
/*ЗНО-2012 География. Основной тест*/
/*	if(testName=="ЗНО-2012 География. Основной тест")
	{
		testLength=56;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/geo\/img\/test2012main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		olderNumericDigits=3;
		juniorNumericDigits=0;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.0","103.0","104.0","105.5","107.5","109.5","112.0","114.5","117.0","119.5","122.0","124.0","126.5","128.5","130.5","132.5","134.5","136.5","138.5","140.0","142.0","143.5","145.0","146.5","148.5","150.0","151.5","153.0","154.0","155.5","157.0","158.5","159.5","161.0","162.5","164.0","165.0","166.5","167.5","169.0","170.5","171.5","173.0","174.5","175.5","177.0","178.5","179.5","181.0","182.0","183.5","185.0","186.5","187.5","188.5","190.0","191.0","192.5","193.5","194.5","195.5","196.5","197.5","198.0","199.0","199.0","199.5","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("a","c","b","c","d","a","b","a","a","b","c","a","c","d","c","b","d","c","d","a","b","d","d","c","b","a","a","d","c","b","c","d","c","d","a","b","a","d","a","b","a","b","bcad","deab","baed","edba","bdca","cabd","abcd","dacb","bcd","bde","cef","bce",140,230);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","ordernew","ordernew","ordernew","ordernew","multiselection","multiselection","multiselection","multiselection","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,3,3,3,3,3,3,3,3,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}	*/

/*ЗНО-2013 география. Основной тест. I сессия*/
	if(testName==znoGeo2013Main)
	{
		testLength=56;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/geo\/img\/test2013main1\/';
		fullTextWindowHorizontalOffset=-150;
		fullTextWindowVerticalOffset=-75;
		answerLanguage="rus";
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.0","101.5","102.0","103.0","104.0","105.5","107.0","108.5","110.5","113.0","115.0","117.5","120.5","123.0","126.0","128.5","131.0","134.0","136.5","139.0","141.5","144.0","146.5","148.5","150.5","153.0","155.0","156.5","158.5","160.5","162.0","163.5","165.0","166.5","168.0","169.5","171.0","172.5","173.5","175.0","176.0","177.5","178.5","179.5","181.0","182.0","183.0","184.5","185.5","186.5","187.5","188.5","189.5","190.5","191.5","192.5","193.0","194.0","194.5","195.5","196.0","196.5","197.5","198.0","198.5","199.0","199.0","199.5","199.5","200.0","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array();
		taskTypeArray=new Array();
		textAnalysisArray=new Array();
		taskMarkArray=new Array();
		variantNumberArray=new Array();
		directionArray=new Array();
		viewArray=new Array();
		taskTextsArray=new Array();
		var taskNumber=1;
		/*задание №1 ЗНО-2013 география. Основной тест*/
			taskNumber=1;
			var zadanieArray=new Array();
			zadanieArray[0]="Від якого півострова вирушили у плавання кораблі експедицій під командуванням Х. Колумба і Ф. Магеллана?";
			zadanieArray[1]="Скандинавського";
			zadanieArray[2]="Піренейського";
			zadanieArray[3]="Апеннінського";
			zadanieArray[4]="Балканського";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №2 ЗНО-2013 география. Основной тест*/
			taskNumber=2;
			var zadanieArray=new Array();
			zadanieArray[0]="Якою буквою позначено місце Землі на орбіті в той час, коли в Україні найменша тривалість світлового дня?";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №3 ЗНО-2013 география. Основной тест*/
			taskNumber=3;
			var zadanieArray=new Array();
			zadanieArray[0]="До узбережжя якого материка прибуде судно, що рухається, не змінюючи курсу, від берегів Японії за азимутом 90&deg;?";
			zadanieArray[1]="Австралії";
			zadanieArray[2]="Антарктиди";
			zadanieArray[3]="Південної Америки";
			zadanieArray[4]="Північної Америки";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №4 ЗНО-2013 география. Основной тест*/
			taskNumber=4;
			var zadanieArray=new Array();
			zadanieArray[0]="Визначте координати точки <i>Х</i>, що позначена на фрагменті карти.";
			zadanieArray[1]="10&deg; пд. ш., 45&deg; зх. д.";
			zadanieArray[2]="10&deg; пн. ш., 45&deg; сх. д.";
			zadanieArray[3]="45&deg; пд. ш., 10&deg; зх. д.";
			zadanieArray[4]="45&deg; пн. ш., 10&deg; сх. д.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №5 ЗНО-2013 география. Основной тест*/
			taskNumber=5;
			var zadanieArray=new Array();
			zadanieArray[0]="Що характерне для осередку землетрусу?"; 
			zadanieArray[1]="розрив і зміщення земної кори";
			zadanieArray[2]="перетворення магми на лаву";
			zadanieArray[3]="виникнення цунамі";
			zadanieArray[4]="еутворення зсувів";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №6 ЗНО-2013 география. Основной тест*/
			taskNumber=6;
			var zadanieArray=new Array();
			zadanieArray[0]="Якою буквою на карті позначено акваторію Індійського океану?"; 
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №7 ЗНО-2013 география. Основной тест*/
			taskNumber=7;
			var zadanieArray=new Array();
			zadanieArray[0]="Для якої області помірного кліматичного поясу характерна найнижча температура повітря взимку?";
			zadanieArray[1]="морського помірного";
			zadanieArray[2]="помірно континентального";
			zadanieArray[3]="континентального";
			zadanieArray[4]="мусонного";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №8 ЗНО-2013 география. Основной тест*/
			taskNumber=8;
			var zadanieArray=new Array();
			zadanieArray[0]="Полярний дослідник В.&nbsp;Ю.&nbsp;Візе звернув увагу на те, що в періоди похолодань в Арктиці підвищується рівень води в африканських озерах Ньяса, Вікторія, Танганьїка. Натомість у періоди потеплінь в Арктиці рівень води в цих озерах знижується. На думку вчених, ці явища є проявом";
			zadanieArray[1]="широтної зональності.";
			zadanieArray[2]="висотної поясності.";
			zadanieArray[3]="кругообігу речовин у природі.";
			zadanieArray[4]="цілісності географічної оболонки.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №9 ЗНО-2013 география. Основной тест*/
			taskNumber=9;
			var zadanieArray=new Array();
			zadanieArray[0]="Яка тектонічна структура лежить в основі Антарктиди?";
			zadanieArray[1]="давня докембрійська платформа";
			zadanieArray[2]="молода палеозойська платформа";
			zadanieArray[3]="система розломів (рифтів)";
			zadanieArray[4]="область мезозойської складчастості";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №10 ЗНО-2013 география. Основной тест*/
			taskNumber=10;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть гори Євразії, на південних схилах яких можна спостерігати найбільшу кількість висотних поясів.";
			zadanieArray[1]="Карпати";
			zadanieArray[2]="Альпи";
			zadanieArray[3]="Кавказ";
			zadanieArray[4]="Гімалаї";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №11 ЗНО-2013 география. Основной тест*/
			taskNumber=11;
			var zadanieArray=new Array();
			zadanieArray[0]="Яка низовина є осередком виникнення зрошувального землеробства?";
			zadanieArray[1]="Центральна";
			zadanieArray[2]="Амазонська";
			zadanieArray[3]="Месопотамська";
			zadanieArray[4]="Придніпровська";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №12 ЗНО-2013 география. Основной тест*/
			taskNumber=12;
			var zadanieArray=new Array();
			zadanieArray[0]="Що є однією з основних причин формування в тропічних широтах на тихоокеанському узбережжі Північної Америки пустельного типу клімату?";
			zadanieArray[1]="місцевість піднята над рівнем океану більш як на 1000&nbsp;м"; 
			zadanieArray[2]="на узбережжя по схилах Кордильєр спускається холодне, сухе повітря";
			zadanieArray[3]="уздовж узбережжя проходить холодна Каліфорнійська течія";
			zadanieArray[4]="на узбережжя поширюється вплив циклонів";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №13 ЗНО-2013 география. Основной тест*/
			taskNumber=13;
			var zadanieArray=new Array();
			zadanieArray[0]="У якому географічному поясі поширені коричневі ґрунти?";
			zadanieArray[1]="субтропічному";
			zadanieArray[2]="тропічному";
			zadanieArray[3]="субекваторіальному";
			zadanieArray[4]="екваторіальному";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №14 ЗНО-2013 география. Основной тест*/
			taskNumber=14;
			var zadanieArray=new Array();
			zadanieArray[0]="Якщо на рівнинних просторах серед моря злакових трав з’являється гуанако, проноситься кілька білохвостих оленів, сторожко пригинає голову нанду, і лише вітер здаля доносить голоси гаучо, то це&nbsp;–&nbsp;заповідна територія, де охороняється вцілілий острівець";
			zadanieArray[1]="саван на Заході Африки.";
			zadanieArray[2]="степів у Середній Азії.";
			zadanieArray[3]="прерій у Північній Америці.";
			zadanieArray[4]="пампи в Південній Америці.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №15 ЗНО-2013 география. Основной тест*/
			taskNumber=15;
			var zadanieArray=new Array();
			zadanieArray[0]="Розгляньте карту уявної ділянки земної поверхні. Укажіть правильне твердження щодо природи цієї місцевості.";
			zadanieArray[1]="гори низькі, з асиметричними схилами";
			zadanieArray[2]="річки короткі, маловодні, можуть пересихати влітку";
			zadanieArray[3]="клімат формують морські помірні повітряні маси";
			zadanieArray[4]="ландшафти гілей з підняттям угору переходять у савани і рідколісся";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №16 ЗНО-2013 география. Основной тест*/
			taskNumber=16;
			var zadanieArray=new Array();
			zadanieArray[0]="Україна розташована";
			zadanieArray[1]="на захід від Гринвіцького меридіана.";
			zadanieArray[2]="на стику двох великих тектонічних структур.";
			zadanieArray[3]="у межах першого годинного поясу.";
			zadanieArray[4]="у трьох природних зонах: хвойних, мішаних лісів і степу.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №17 ЗНО-2013 география. Основной тест*/
			taskNumber=17;
			var zadanieArray=new Array();
			zadanieArray[0]="На рисунку відображено профіль рельєфу території України вздовж лінії, що з’єднує дві протилежні крайні точки країни. У якому напрямку зорієнтований профіль, якщо рухатися від точки&nbsp;1 до точки&nbsp;2?"; 
			zadanieArray[1]="з півночі на південь";
			zadanieArray[2]="з півдня на північ";
			zadanieArray[3]="із заходу на схід";
			zadanieArray[4]="зі сходу на захід";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №18 ЗНО-2013 география. Основной тест*/
			taskNumber=18;
			var zadanieArray=new Array();
			zadanieArray[0]="За розвіданими запасами яких руд Україна посідає перше місце серед країн Європи?";
			zadanieArray[1]="ртутних, мідних";
			zadanieArray[2]="марганцевих, титанових";
			zadanieArray[3]="поліметалевих, алюмінієвих";
			zadanieArray[4]="нікелевих, цинкових";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №19 ЗНО-2013 география. Основной тест*/
			taskNumber=19;
			var zadanieArray=new Array();
			zadanieArray[0]="Порівняно із середньосвітовим показником в Україні менша";
			zadanieArray[1]="лісистість території.";
			zadanieArray[2]="забезпеченість ресурсами кам’яного вугілля.";
			zadanieArray[3]="природна родючість ґрунтів.";
			zadanieArray[4]="частка ріллі в структурі земельних угідь.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №20 ЗНО-2013 география. Основной тест*/
			taskNumber=20;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте уривок із літературного твору: <i>«...&nbsp;Ліс стояв навкруги такий старий, високий і густий, що навіть повітря здавалося спертим. Місцями просіка була залита водою, ...&nbsp;по обидва боки стелилося лісове болото, зелене і темне, покрите очеретами і дрібним вільшняком…»</i>. Укажіть заповідник, у якому описаний ландшафт охороняється як типовий."; 
			zadanieArray[1]="«Асканія-Нова»";
			zadanieArray[2]="«Михайлівська цілина»";
			zadanieArray[3]="Рівненський";
			zadanieArray[4]="Карадазький";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №21 ЗНО-2013 география. Основной тест*/
			taskNumber=21;
			var zadanieArray=new Array();
			zadanieArray[0]="У січні на більшій частині території України ненадовго встановилася відносно тепла погода (від 0&nbsp;&deg;С до +4&nbsp;&deg;С) із мокрим снігом, що швидко танув. Якою буквою на картосхемі позначено напрямок переміщення повітряної маси, що зумовила таку погоду?";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №22 ЗНО-2013 география. Основной тест*/
			taskNumber=22;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть ознаку, за якою можна зробити припущення про опускання узбережжя Чорного моря.";
			zadanieArray[1]="зміна напрямку морських течій";
			zadanieArray[2]="утворення заток-лиманів";
			zadanieArray[3]="утворення піщаних морських пляжів";
			zadanieArray[4]="зменшення об’єму річкового стоку";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №23 ЗНО-2013 география. Основной тест*/
			taskNumber=23;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть вид міграції населення, прикладом якого є залучення гравців-іноземців до складу команд футбольних клубів України.";
			zadanieArray[1]="примусова";
			zadanieArray[2]="політична";
			zadanieArray[3]="культурна";
			zadanieArray[4]="трудова";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №24 ЗНО-2013 география. Основной тест*/
			taskNumber=24;
			var zadanieArray=new Array();
			zadanieArray[0]="Де в Україні видобувають найбільший обсяг природного газу?";
			zadanieArray[1]="у Дніпровсько-Донецькій нафтогазоносній області";
			zadanieArray[2]="у Карпатській нафтогазоносній області";
			zadanieArray[3]="у Причорноморсько-Кримській нафтогазоносній області";
			zadanieArray[4]="на шельфі Чорного й Азовського морів";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №25 ЗНО-2013 география. Основной тест*/
			taskNumber=25;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть основний чинник розміщення найпотужніших в Україні нафтопереробних заводів у Кременчуку та Лисичанську.";
			zadanieArray[1]="транспортний: через ці міста проходять траси нафтопроводів";
			zadanieArray[2]="сировинний: поблизу цих міст розробляються великі родовища нафти";
			zadanieArray[3]="споживчий: у цих промислових центрах розташовані хімічні комбінати";
			zadanieArray[4]="трудовий: у середніх за кількістю жителів містах високий рівень безробіття";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №26 ЗНО-2013 география. Основной тест*/
			taskNumber=26;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть галузь промисловості, підприємства якої розташовані в Запоріжжі, Миколаєві та Артемівську.";
			zadanieArray[1]="гідроелектроенергетика";
			zadanieArray[2]="чорна металургія";
			zadanieArray[3]="кольорова металургія";
			zadanieArray[4]="вагонобудування";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №27 ЗНО-2013 география. Основной тест*/
			taskNumber=27;
			var zadanieArray=new Array();
			zadanieArray[0]="Чим темніший колір на картограмі України, тим більший валовий збір (тис.&nbsp;т)";
			zadanieArray[1]="картоплі.";
			zadanieArray[2]="озимої пшениці.";
			zadanieArray[3]="соняшнику.";
			zadanieArray[4]="цукрового буряку.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №28 ЗНО-2013 география. Основной тест*/
			taskNumber=28;
			var zadanieArray=new Array();
			zadanieArray[0]="Де в Україні найбільша концентрація цукрових заводів?";
			zadanieArray[1]="на заході та на півдні країни";
			zadanieArray[2]="у Придніпровському економічному районі";
			zadanieArray[3]="у лісостеповій зоні";
			zadanieArray[4]="навколо великих міст та агломерацій";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №29 ЗНО-2013 география. Основной тест*/
			taskNumber=29;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть одну з основних галузей спеціалізації промисловості Карпатського економічного району.";
			zadanieArray[1]="олійно-жирова";
			zadanieArray[2]="текстильна";
			zadanieArray[3]="цементна";
			zadanieArray[4]="лісохімічна";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №30 ЗНО-2013 география. Основной тест*/
			taskNumber=30;
			var zadanieArray=new Array();
			zadanieArray[0]="Яким видом транспорту доцільно перевозити на великі відстані в межах України значні обсяги коксу, нафти і нафтопродуктів?";
			zadanieArray[1]="автомобільним";
			zadanieArray[2]="трубопровідним";
			zadanieArray[3]="водним";
			zadanieArray[4]="залізничним";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №31 ЗНО-2013 география. Основной тест*/
			taskNumber=31;
			var zadanieArray=new Array();
			zadanieArray[0]="Прикладом раціонального природокористування є";
			zadanieArray[1]="розвиток землеробства екстенсивним шляхом.";
			zadanieArray[2]="упровадження зворотного водопостачання на підприємствах.";
			zadanieArray[3]="захоронення ядерних відходів у рідконаселених районах.";
			zadanieArray[4]="переобладнання ТЕС на використання мазуту замість природного газу.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №32 ЗНО-2013 география. Основной тест*/
			taskNumber=32;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть особливість політичної карти Латинської Америки.";
			zadanieArray[1]="за формою правління більшість країн є республіками";
			zadanieArray[2]="за адміністративно-територіальним устроєм усі країни унітарні";
			zadanieArray[3]="майже всі країни належать до групи найменш розвинених";
			zadanieArray[4]="немає залежних територій, підпорядкованих іншим державам";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №33 ЗНО-2013 география. Основной тест*/
			taskNumber=33;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте демографічний прогноз для країни&nbspN: <i>«…низька народжуваність і висока тривалість життя можуть перетворити її на країну людей похилого віку. До 2025&nbsp;року очікується зменшення населення на 7&nbsp;млн осіб. Щоб забезпечити мінімальний приріст ВВП, уряду потрібно буде залучати щорічно до 100&nbsp;тис. мігрантів»</i>. Визначте статево-вікову піраміду, що характеризує сучасну демографічну ситуацію в цій країні та є підґрунтям для такого прогнозу.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №34 ЗНО-2013 география. Основной тест*/
			taskNumber=34;
			var zadanieArray=new Array();
			zadanieArray[0]="Однією з тенденцій розвитку чорної металургії є зростання частки країн, що розвиваються, у світовому виробництві чавуну та сталі. Які особливості цих країн спричинили зміни в розташуванні металургійного виробництва?";
			zadanieArray[1]="забезпеченість сировиною та ліберальне природоохоронне законодавство";
			zadanieArray[2]="поглиблення спеціалізації та створення моногалузевих господарських комплексів";
			zadanieArray[3]="розвиток точного машинобудування та збільшення попиту на кольорові метали";
			zadanieArray[4]="транзитне географічне положення цих країн та розвиток транспорту";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №35 ЗНО-2013 география. Основной тест*/
			taskNumber=35;
			var zadanieArray=new Array();
			zadanieArray[0]="Панамериканське шосе – це найдовша у світі мережа автодоріг, що сполучає";
			zadanieArray[1]="східне і західне узбережжя Південної Америки.";
			zadanieArray[2]="Приатлантичний мегаполіс з Каліфорнійським.";
			zadanieArray[3]="Аляску з південними районами Аргентини.";
			zadanieArray[4]="внутрішні райони сельви з узбережжям материка.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №36 ЗНО-2013 география. Основной тест*/
			taskNumber=36;
			var zadanieArray=new Array();
			zadanieArray[0]="У другій половині ХХ&nbsp;ст. найбільші райони нафтопереробки й нафтохімічної промисловості в Західній Європі сформувалися в гирлах великих річок – Рейну, Темзи, Сени, Рони, Ельби. Що стало основним чинником такого вибору місця розташування підприємств цих галузей?";
			zadanieArray[1]="відкриття родовищ нафти на шельфі прилеглих морів і прокладання від них підводних нафтопроводів до узбережжя";
			zadanieArray[2]="судноплавність зазначених річок, якими нафта транспортувалася від місць її видобутку на суходолі";
			zadanieArray[3]="наявність великих портів, спроможних приймати привізну нафту з інших регіонів світу";
			zadanieArray[4]="достатня кількість водних ресурсів, необхідних у технологічних процесах галузей";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №37 ЗНО-2013 география. Основной тест*/
			taskNumber=37;
			var zadanieArray=new Array();
			zadanieArray[0]="Уряд Росії повідомив, що збільшить витрати на фінансування державної програми, <i>«основна мета якої – створення висококонкурентної галузі та повернення її на світовий ринок як третього за обсягом продукції виробника після постійних лідерів цього ринку – США і Західної Європи»</i>.<br/>Про яку галузь господарства йдеться?";
			zadanieArray[1]="газовидобувну промисловість";
			zadanieArray[2]="електротехнічну промисловість";
			zadanieArray[3]="чорну металургію";
			zadanieArray[4]="літакобудування";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №38 ЗНО-2013 география. Основной тест*/
			taskNumber=38;
			var zadanieArray=new Array();
			zadanieArray[0]="Найбільшими виробниками сільськогосподарської продукції є США, Китай, Бразилія, Індія. Що є характерним для всіх цих країн?";
			zadanieArray[1]="аграрна та аграрно-індустріальна структура економіки";
			zadanieArray[2]="великі розміри території та велика кількість населення";
			zadanieArray[3]="незначна місткість внутрішнього споживчого ринку";
			zadanieArray[4]="екстенсивний шлях розвитку аграрного виробництва";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №39 ЗНО-2013 география. Основной тест*/
			taskNumber=39;
			var zadanieArray=new Array();
			zadanieArray[0]="Який основний чинник зумовив розвиток алюмінієвої промисловості в Катарі, Бахрейні, Кувейті, Об’єднаних Арабських Еміратах?";
			zadanieArray[1]="великі запаси бокситів у надрах країн";
			zadanieArray[2]="водні ресурси Перської затоки";
			zadanieArray[3]="забезпеченість енергоресурсами";
			zadanieArray[4]="дешева робоча сила";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №40 ЗНО-2013 география. Основной тест*/
			taskNumber=40;
			var zadanieArray=new Array();
			zadanieArray[0]="На картосхемі темним кольором виділено території країн, що утворюють групу світових лідерів за обсягом";
			zadanieArray[1]="видобування кам’яного вугілля.";
			zadanieArray[2]="виплавки чорнової міді.";
			zadanieArray[3]="експорту мінеральних добрив.";
			zadanieArray[4]="виробництва автомобілів.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №41 ЗНО-2013 география. Основной тест*/
			taskNumber=41;
			var zadanieArray=new Array();
			zadanieArray[0]="Сім’я з України планує пляжно-купальний відпочинок на одному з нових курортів Південно-Східної Азії. Проаналізуйте відображені на кліматограмі характеристики клімату цього регіону та порадьте пересічному українцю найбільш комфортні для такого відпочинку місяці року.";
			zadanieArray[1]="грудень, січень, лютий";
			zadanieArray[2]="березень, квітень, травень";
			zadanieArray[3]="червень, липень, серпень";
			zadanieArray[4]="вересень, жовтень, листопад";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №42 ЗНО-2013 география. Основной тест*/
			taskNumber=42;
			var zadanieArray=new Array();
			zadanieArray[0]="Що є проявом міжнародної економічної інтеграції?";
			zadanieArray[1]="зростання ролі сфери послуг і зменшення ролі сфери матеріального виробництва";
			zadanieArray[2]="становлення євро як регіональної та світової валюти";
			zadanieArray[3]="збільшення частки наукомістких виробництв у розвинених країнах";
			zadanieArray[4]="збільшення розриву між рівнями економічного розвитку окремих країн";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №43 ЗНО-2013 география. Основной тест*/
			taskNumber=43;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між островом та державою, якій належить цей острів."; 
			zadanieArray[1]="Сицилія";
			zadanieArray[2]="Суматра";
			zadanieArray[3]="Тасманія";
			zadanieArray[4]="Хоккайдо";
			zadanieArray[5]="Індонезія";
			zadanieArray[6]="Австралія";
			zadanieArray[7]="Італія";
			zadanieArray[8]="Японія";
			zadanieArray[9]="Індія";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="cabd";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №44 ЗНО-2013 география. Основной тест*/
			taskNumber=44;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між видом діяльності та найбільш придатною для нього ділянкою, що позначена буквою на фрагменті топографічної карти."; 
			zadanieArray[1]="насадження лісу на місці вирубаного";
			zadanieArray[2]="розведення риби";
			zadanieArray[3]="видобування будівельного каменю";
			zadanieArray[4]="окультурення пасовища";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="numeric";
			viewArray[taskNumber-1]="multiselect_picture";
			answerArray[taskNumber-1]="aedb";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №45 ЗНО-2013 география. Основной тест*/
			taskNumber=45;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між галуззю господарства та елементами її територіальної структури в Україні."; 
			zadanieArray[1]="лісозаготівля";
			zadanieArray[2]="літакобудування";
			zadanieArray[3]="чорна металургія";
			zadanieArray[4]="цинкова промисловість";
			zadanieArray[5]="один промисловий центр&nbsp;– Костянтинівка";
			zadanieArray[6]="два промислові центри&nbsp;– Київ, Харків";
			zadanieArray[7]="один промисловий район&nbsp;– Прикарпатський";
			zadanieArray[8]="два райони&nbsp;– Поліський, Карпатський";
			zadanieArray[9]="три райони&nbsp;– Донецький, Придніпровський, Приазовський";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="dbea";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №46 ЗНО-2013 география. Основной тест*/
			taskNumber=46;
			var zadanieArray=new Array();
			zadanieArray[0]="Доберіть кожній області України (1–4) відповідні показники щільності населення, частки міського населення та природного приросту населення, що відображені на діаграмах та позначені певною буквою (А–Д). Зважте на те, що три різні характеристики населення однієї області позначено на діаграмах однаковою буквою.";
			zadanieArray[1]="Волинська область";
			zadanieArray[2]="Дніпропетровська область";
			zadanieArray[3]="Одеська область";
			zadanieArray[4]="Чернігівська область";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="numeric";
			viewArray[taskNumber-1]="multiselect_picture";
			answerArray[taskNumber-1]="bace";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;
		/*задание №47 ЗНО-2013 география. Основной тест*/
			taskNumber=47;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між групою галузей господарства та їхнім місцем в економіці Сполучених Штатів Америки."; 
			zadanieArray[1]="торгівля, банківська справа";
			zadanieArray[2]="маркетинг, високі технології (хай-тек)";
			zadanieArray[3]="чорна металургія, легка промисловість";
			zadanieArray[4]="електронне та авіакосмічне машинобудування";
			zadanieArray[5]="старі галузі економіки, що традиційно відіграють важливу роль";
			zadanieArray[6]="галузі, що забезпечують країну продовольством і сировиною";
			zadanieArray[7]="новітні галузі промисловості, що зосереджені в технополісах";
			zadanieArray[8]="традиційні галузі сфери послуг";
			zadanieArray[9]="нові галузі сфери послуг, що активно розвиваються з кінця ХХ&nbsp;ст.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="deac";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №48 ЗНО-2013 география. Основной тест*/
			taskNumber=48;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть відповідність між найбільш загальним географічним напрямом сучасної регіональної інвестиційної політики та країною, для якої він характерний."; 
			zadanieArray[1]="захід &rarr; схід";
			zadanieArray[2]="схід &rarr; захід";
			zadanieArray[3]="північ &rarr; південь";
			zadanieArray[4]="південь &rarr; північ";
			zadanieArray[5]="Канада";
			zadanieArray[6]="Італія";
			zadanieArray[7]="Китай";
			zadanieArray[8]="Німеччина";
			zadanieArray[9]="Україна";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="dcba";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №49 ЗНО-2013 география. Основной тест*/
			taskNumber=49;
			var zadanieArray=new Array();
			zadanieArray[0]="Визначте чинники, що зумовлюють найбільшу порівняно з іншими материками середньорічну кількість опадів у Південній Америці.";
			zadanieArray[1]="материк оточений з усіх боків водами Світового океану";
			zadanieArray[2]="в екваторіальних широтах розташована найширша частина материка";
			zadanieArray[3]="біля східного узбережжя материка проходять теплі течії";
			zadanieArray[4]="на сході материка простягається гірський хребет";
			zadanieArray[5]="над материком сформувалась область високого атмосферного тиску";
			zadanieArray[6]="пасати з океану проникають далеко вглиб материка";
			zadanieArray[7]="вічнозелена рослинність на материку має низький показник альбедо";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="numeric";
			viewArray[taskNumber-1]="multiselect";
			answerArray[taskNumber-1]="bcf";
			taskTypeArray[taskNumber-1]="multiselection";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=3;
			variantNumberArray[taskNumber-1]=3;	
		/*задание №50 ЗНО-2013 география. Основной тест*/
			taskNumber=50;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть характеристики, спільні для двох природних зон України&nbsp;– лісостепової та степової.";
			zadanieArray[1]="територія виходить до морського узбережжя країни";
			zadanieArray[2]="абсолютні висоти поверхні не перевищують 20&nbsp;м";
			zadanieArray[3]="для річок характерна весняна повінь";
			zadanieArray[4]="у ґрунтовому покриві переважають різні типи чорноземів";
			zadanieArray[5]="поширені ділянки буково-грабових і дубових лісів";
			zadanieArray[6]="у межах кожної зони виокремлюють кілька підзон";
			zadanieArray[7]="збереглася незначна частка природних ландшафтів";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="numeric";
			viewArray[taskNumber-1]="multiselect";
			answerArray[taskNumber-1]="cdg";
			taskTypeArray[taskNumber-1]="multiselection";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=3;
			variantNumberArray[taskNumber-1]=3;			
		/*задание №51 ЗНО-2013 география. Основной тест*/
			taskNumber=51;
			var zadanieArray=new Array();
			zadanieArray[0]="Розташована в Полтаві фірма-посередник закуповує для постачання фермерам добрива, паливно-мастильні матеріали, техніку та комплектуючі у виробників за гуртовими цінами. Яку продукцію ця фірма може закупити в підприємств, що розташовані в позначених на картосхемі містах?";
			zadanieArray[1]="нафтопродукти";
			zadanieArray[2]="фосфатні добрива";
			zadanieArray[3]="калійні добрива";
			zadanieArray[4]="азотні добрива";
			zadanieArray[5]="трактори та комплектуючі до них";
			zadanieArray[6]="кукурудзозбиральні комбайни";
			zadanieArray[7]="бурякозбиральні комбайни";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="numeric";
			viewArray[taskNumber-1]="multiselect";
			answerArray[taskNumber-1]="bde";
			taskTypeArray[taskNumber-1]="multiselection";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=3;
			variantNumberArray[taskNumber-1]=3;	
		/*задание №52 ЗНО-2013 география. Основной тест*/
			taskNumber=52;
			var zadanieArray=new Array();
			zadanieArray[0]="В одному з районів умовної країни є місто М&nbsp;– багатогалузевий промисловий вузол, а поряд з ним&nbsp;– значно менше за кількістю населення місто&nbsp;N, у якому функціонує підприємство важкого машинобудування. Основна продукція цього підприємства&nbsp;– нескладне, великогабаритне гірничошахтне устаткування. Проаналізуйте зображену на рисунку схему територіальної структури промисловості цього району.<br/>Спеціалізацію машинобудівного підприємства зумовлено тим, що місто&nbsp;N розташоване";
			zadanieArray[1]="у районі з високою концентрацією підприємств вугільної та залізорудної промисловості.";
			zadanieArray[2]="біля річки – основного джерела водних ресурсів.";
			zadanieArray[3]="близько до центру чорної металургії, де виробляється чавун, сталь, прокат.";
			zadanieArray[4]="з можливістю кооперування з металообробним і тракторобудівним підприємствами сусіднього міста.";
			zadanieArray[5]="на значній відстані від потужних джерел електроенергії.";
			zadanieArray[6]="на трасі магістрального нафтопроводу.";
			zadanieArray[7]="неподалік від транзитного газопроводу.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="numeric";
			viewArray[taskNumber-1]="multiselect_picture";
			answerArray[taskNumber-1]="acd";
			taskTypeArray[taskNumber-1]="multiselection";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=3;
			variantNumberArray[taskNumber-1]=3;			
		/*задание №53 ЗНО-2013 география. Основной тест*/
			taskNumber=53;
			var zadanieArray=new Array();
			zadanieArray[0]="Виберіть рекордні об’єкти світу, інформацію про які потрібно включити до розділу «Австралія» у географічному довіднику.";
			zadanieArray[1]="найбільше за обсягом видобування родовище бокситів Уейпа";
			zadanieArray[2]="найпівденніше місто-мільйонер Мельбурн";
			zadanieArray[3]="найбільший за вантажообігом морський порт Шанхай";
			zadanieArray[4]="найвисокогірніша залізнична станція Тангла (5068&nbsp;м над рівнем моря)";
			zadanieArray[5]="найпотужніша гідроелектростанція «Три ущелини»";
			zadanieArray[6]="найдовша огорожа (5614&nbsp;км) для захисту від диких тварин";
			zadanieArray[7]="найбільший християнський храм&nbsp;– собор святого Петра";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="numeric";
			viewArray[taskNumber-1]="multiselect";
			answerArray[taskNumber-1]="abf";
			taskTypeArray[taskNumber-1]="multiselection";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=3;
			variantNumberArray[taskNumber-1]=3;	
		/*задание №54 ЗНО-2013 география. Основной тест*/
			taskNumber=54;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть спільні риси господарства трьох країн&nbsp;– України, Польщі та Білорусі.";
			zadanieArray[1]="за структурою ВВП це індустріально-аграрні країни";
			zadanieArray[2]="місце у міжнародному поділі праці визначають галузі добувної промисловості";
			zadanieArray[3]="у структурі електроенергетики основну роль відіграють ТЕС";
			zadanieArray[4]="машинобудування зорієнтоване лише на внутрішній ринок";
			zadanieArray[5]="сформувалось три сільськогосподарські зони: лісова, лісостепова і степова";
			zadanieArray[6]="немає відмінностей у рівнях концентрації виробництва між окремими районами в країнах";
			zadanieArray[7]="територією проходять транзитні транспортні магістралі";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="numeric";
			viewArray[taskNumber-1]="multiselect";
			answerArray[taskNumber-1]="acg";
			taskTypeArray[taskNumber-1]="multiselection";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=3;
			variantNumberArray[taskNumber-1]=3;
		/*задание №55 ЗНО-2013 география. Основной тест*/
			taskNumber=55;
			var zadanieArray=new Array();
			zadanieArray[0]="Визначте відстань між двома об’єктами на місцевості (у кілометрах), якщо ця відстань на карті, масштаб якої 1:&nbsp;500 000, становить 12&nbsp;см.";  
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 60;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №56 ЗНО-2013 география. Основной тест*/
			taskNumber=56;
			var zadanieArray=new Array();
			zadanieArray[0]="У таблиці подано інформацію про середньомісячну температуру повітря на одній з метеорологічних станцій. Визначте річну амплітуду коливань температури повітря.";  
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]= 31;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;		
		
		/*Завершение инициализации теста*/	
		for (var i=0; i<testLength; i++)
		{
			curView=new view(testName,i+1,testDirectory,viewArray[i],variantNumberArray[i], directionArray[i], answerLanguage, taskTextsArray[i]);
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}
	}	/* Окончание ЗНО-2013 география. Основной тест. I сессия*/	
	
/*Завершение инициализации тестов*/
/*Заполнение поля дано ответов*/

		buildTestTable(testName,testDirectory);
		document.getElementById("ZnoGivenAnswers").innerHTML=textTasksLeft+': <!-- Счетчик ответов --><span class="GivenAnswersView" name="GivenAnswers" id="GivenAnswers"></span>';
		taskLoader(taskArray[currentTaskCounter]);
		isTestingFlag=1;
		document.getElementById("ResumeTest").innerHTML='<input type="button" value="'+textAcceptAnswer+'" name="ResumeTestButton" id="ResumeTestButton" onClick="nextTask()" />';
		/*установка счетчика времени*/
		isTestingFlag=1;
		timing();
	
	
}
