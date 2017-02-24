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
//Тесты по химим
/*************************************************************/	
/*основной тест ЗНО-2009 по химии 1 сессия */
/*	if(testName=="ЗНО-2009 химия. Основной тест.")
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/him\/img\/test2009main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.5","104.0","106.0","108.5","111.5","114.0","117.0","120.0","123.0","125.5","128.0","130.0","132.5","134.0","136.0","138.0","139.5","140.5","142.0","143.5","144.5","145.5","146.5","147.5","148.5","149.5","150.0","151.0","152.0","152.5","153.5","154.0","155.0","155.5","156.5","157.0","157.5","158.5","159.0","160.0","160.5","161.5","162.0","162.5","163.5","164.0","164.5","165.5","166.0","167.0","167.5","168.0","169.0","170.0","170.5","171.5","172.0","173.0","174.0","174.5","175.5","176.5","177.5","178.0","179.0","180.0","181.0","182.0","183.0","183.5","184.5","185.5","187.0","188.0","189.0","190.0","191.5","192.5","194.0","195.0","196.0","197.0","198.0","199.0","200.0","200.0","200.0");
		answerArray=new Array("a","d","c","a","b","a","c","d","b","a","a","b","c","b","d","d","a","b","c","c","a","c","b","a","b","b","a","d","d","b","a","c","d","b","c","cbda","ceab","bead","edca","beda","cbad","acbd","bacd","bdac","cbad","dcba","bdac","bcda","abdc","dbca",128,4,278,200,64,10,112,96,6,9);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","order","order","order","order","order","order","order","order","order","order","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}*/
/*основной тест ЗНО-2010 по химии 1 сессия */
/*	if(testName=="ЗНО-2010 химия. Основной тест.")
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/him\/img\/test2010main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.5","102.0","103.5","105.0","106.5","109.0","111.5","114.0","116.5","119.0","121.5","123.5","126.0","128.0","130.0","132.0","133.5","135.5","137.0","138.5","140.0","141.5","143.0","144.0","145.5","146.5","148.0","149.0","150.0","151.0","152.0","152.5","153.5","154.5","155.0","156.0","157.0","158.0","158.5","159.5","160.0","161.0","162.0","163.0","163.5","164.5","165.5","166.5","167.5","168.0","169.0","170.0","171.0","172.0","173.0","173.5","174.5","175.5","176.5","177.0","178.0","179.0","180.0","180.5","181.5","182.5","183.5","184.5","185.5","186.5","187.5","188.5","189.5","190.0","191.0","192.0","193.0","194.0","195.0","196.0","196.5","197.5","198.5","199.0","199.0","200.0","200.0","200.0");
		answerArray=new Array("b","a","c","a","d","d","b","b","c","a","b","d","d","c","c","b","b","c","c","d","a","c","b","b","a","a","c","b","c","b","c","b","d","b","a","eadc","cabd","ecab","badc","acbe","cbad","cadb","dbac","cbda","dabc","bcda","cabd","dbac","acdb","abdc",30,5,5,18,14,80,36,698,31,9);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","order","order","order","order","order","order","order","order","order","order","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}*/
	/*основной тест ЗНО-2011 по химии 1 сессия */
/*	if(testName=="ЗНО-2011 химия. Основной тест.")
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/him\/img\/test2011main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.5","102.5","105.0","107.0","110.0","113.0","116.5","120.0","123.5","126.5","129.5","132.5","135.0","137.0","139.5","141.5","143.0","144.5","146.0","147.5","148.5","149.5","150.5","151.5","152.5","153.0","154.0","154.5","155.5","156.0","157.0","157.5","158.5","159.0","160.0","160.5","161.0","162.0","162.5","163.5","164.0","165.0","165.5","166.5","167.0","167.5","168.5","169.0","170.0","170.5","171.5","172.5","173.0","174.0","174.5","175.5","176.0","177.0","178.0","178.5","179.5","180.5","181.0","182.0","183.0","184.0","185.0","186.0","187.0","188.0","189.0","190.0","190.5","191.5","192.5","193.0","194.0","194.5","195.5","196.5","197.0","198.0","198.5","199.0","199.5","200.0","200.0","200.0");
		answerArray=new Array("b","d","b","b","a","d","b","a","a","b","a","c","c","a","c","b","c","c","d","b","a","a","c","d","d","b","c","c","b","d","c","d","b","b","d","cbda","eabc","ecbd","daeb","cebd","cabd","bdca","dcab","bacd","dbca","abdc","cbad","dbac","acbd","cadb",25,5,3,20,143,20,80,18,20,80);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","order","order","order","order","order","order","order","order","order","order","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}*/
/*основной тест ЗНО-2012 по химии пробный тест */
/*	if(testName=="ЗНО-2012 химия. Пробный тест.")
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/him\/img\/test2012demo\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","102.0","103.0","105.0","107.0","110.0","113.0","115.5","118.5","121.0","124.0","126.5","128.5","130.5","133.0","135.0","137.0","138.5","140.0","141.5","143.0","144.5","146.0","147.0","148.0","149.0","150.0","151.0","152.0","153.0","154.0","154.5","155.5","156.0","157.0","157.5","158.5","159.0","160.0","161.0","161.5","162.0","163.0","163.5","164.5","165.0","165.5","166.5","167.0","167.5","168.5","169.0","170.0","170.5","171.0","172.0","172.5","173.5","174.0","175.0","175.5","176.5","177.5","178.0","179.0","179.5","180.5","181.5","182.5","183.5","184.5","185.5","186.5","187.5","188.5","189.5","190.5","191.5","192.5","194.0","195.0","196.5","197.5","198.5","199.5","200.0","200.0");
		answerArray=new Array("b","b","c","b","b","d","d","a","c","a","a","c","a","c","b","d","c","d","b","d","b","b","c","d","a","a","d","b","a","a","c","a","c","d","a","d","d","d","c","c","cbad","baec","dcea","cedb","acdb","bacd","dacb","dabc","badc","cabd",32,25,63,8,161,10,75,80,19,15);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","ordernew","ordernew","ordernew","ordernew","ordernew","ordernew","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}*/
/*основной тест ЗНО-2012 по химии основной тест */
/*	if(testName=="ЗНО-2012 химия. Основной тест.")
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/him\/img\/test2012main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","102.0","103.0","105.0","107.0","110.0","113.0","115.5","118.5","121.0","124.0","126.5","128.5","130.5","133.0","135.0","137.0","138.5","140.0","141.5","143.0","144.5","146.0","147.0","148.0","149.0","150.0","151.0","152.0","153.0","154.0","154.5","155.5","156.0","157.0","157.5","158.5","159.0","160.0","161.0","161.5","162.0","163.0","163.5","164.5","165.0","165.5","166.5","167.0","167.5","168.5","169.0","170.0","170.5","171.0","172.0","172.5","173.5","174.0","175.0","175.5","176.5","177.5","178.0","179.0","179.5","180.5","181.5","182.5","183.5","184.5","185.5","186.5","187.5","188.5","189.5","190.5","191.5","192.5","194.0","195.0","196.5","197.5","198.5","199.5","200.0","200.0");
		answerArray=new Array("d","a","a","a","b","c","c","d","c","c","a","a","d","d","d","b","c","a","c","d","a","b","c","a","b","b","d","b","b","d","b","d","c","c","a","d","a","a","c","c","cead","adcb","ceab","caed","dcba","cabd","dbca","bcda","dacb","dcab",10,353,234,112,25,18,42,150,42,6);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","ordernew","ordernew","ordernew","ordernew","ordernew","ordernew","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}*/
	
/*ЗНО-2013 химия. Основной тест. I сессия*/
	if(testName==znoHim2013Main)
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/him\/img\/test2013main1\/';
		fullTextWindowHorizontalOffset=-150;
		fullTextWindowVerticalOffset=-75;
		answerLanguage="rus";
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.5","104.0","105.5","108.0","110.5","113.0","115.5","118.5","121.0","123.5","126.5","128.5","131.0","133.0","135.0","137.0","139.0","140.5","142.5","144.0","145.5","147.0","148.0","149.0","150.0","151.5","152.0","153.0","154.0","155.0","155.5","156.5","157.0","158.0","158.5","159.5","160.0","161.0","161.5","162.0","163.0","163.5","164.0","165.0","165.5","166.0","167.0","167.5","168.0","168.5","169.5","170.0","170.5","171.5","172.0","172.5","173.0","174.0","174.5","175.0","175.5","176.5","177.0","178.0","178.5","179.0","180.0","180.5","181.5","182.5","183.5","184.5","185.5","186.0","187.5","188.5","190.0","191.0","192.5","194.0","195.5","197.0","198.5","199.5","200.0");
		answerArray=new Array();
		taskTypeArray=new Array();
		textAnalysisArray=new Array();
		taskMarkArray=new Array();
		variantNumberArray=new Array();
		directionArray=new Array();
		viewArray=new Array();
		taskTextsArray=new Array();
		var taskNumber=1;
		/*задание №1 ЗНО-2013 химия. Основной тест*/
			taskNumber=1;
			var zadanieArray=new Array();
			zadanieArray[0]="До складу якої з речовин входить найбільше хімічних елементів?";
			zadanieArray[1]="S<sub>8</sub>";
			zadanieArray[2]="HNO<sub>3</sub>";
			zadanieArray[3]="PCl<sub>5</sub>";
			zadanieArray[4]="Mn<sub>2</sub>O<sub>7</sub>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №2 ЗНО-2013 химия. Основной тест*/
			taskNumber=2;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть молярну масу&nbsp;(г/моль) ортофосфатної кислоти.";
			zadanieArray[1]="98";
			zadanieArray[2]="96";
			zadanieArray[3]="88";
			zadanieArray[4]="86";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №3 ЗНО-2013 химия. Основной тест*/
			taskNumber=3;
			var zadanieArray=new Array();
			zadanieArray[0]="Який рядок складається з протонних чисел металічних елементів?";
			zadanieArray[1]="2; 15; 30";
			zadanieArray[2]="4; 11; 26";
			zadanieArray[3]="9; 14; 19";
			zadanieArray[4]="12; 16; 18";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №4 ЗНО-2013 химия. Основной тест*/
			taskNumber=4;
			var zadanieArray=new Array();
			zadanieArray[0]="Скільки нейтронів і електронів у нукліді <sup>37</sup>Сl?";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №5 ЗНО-2013 химия. Основной тест*/
			taskNumber=5;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть речовину з йонним типом хімічного зв’язку."; 
			zadanieArray[1]="H<sub>2</sub>";
			zadanieArray[2]="NH<sub>3</sub>";
			zadanieArray[3]="CaCl<sub>2</sub>";
			zadanieArray[4]="Fe";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №6 ЗНО-2013 химия. Основной тест*/
			taskNumber=6;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть протонне число хімічного елемента, розташованого в&nbsp;4-му періоді, VII&nbsp;групі, головній підгрупі Періодичної системи Д.І.&nbsp;Менделєєва."; 
			zadanieArray[1]="17";
			zadanieArray[2]="25";
			zadanieArray[3]="26";
			zadanieArray[4]="35";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №7 ЗНО-2013 химия. Основной тест*/
			taskNumber=7;
			var zadanieArray=new Array();
			zadanieArray[0]="Проаналізуйте твердження й укажіть, чи є поміж них правильні.<br/><br/> І. Швидкість хімічної реакції збільшується за наявності каталізатора.<br/> ІІ. Швидкість хімічної реакції збільшується внаслідок подрібнення реагентів у твердому стані.";
			zadanieArray[1]="правильне лише І";
			zadanieArray[2]="правильне лише ІІ";
			zadanieArray[3]="обидва правильні";
			zadanieArray[4]="немає правильних";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №8 ЗНО-2013 химия. Основной тест*/
			taskNumber=8;
			var zadanieArray=new Array();
			zadanieArray[0]="На графіку зображено зміну енергії&nbsp;<i>E</i> системи під час проходження хімічної реакції. Довжина якого відрізка відповідає значенню теплового ефекту реакції?";
			zadanieArray[1]="1";
			zadanieArray[2]="2";
			zadanieArray[3]="3";
			zadanieArray[4]="4";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №9 ЗНО-2013 химия. Основной тест*/
			taskNumber=9;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть формулу оксиду, який реагує з водою з утворенням кислоти.";
			zadanieArray[1]="SO<sub>3</sub>";
			zadanieArray[2]="N<sub>2</sub>O";
			zadanieArray[3]="SiO<sub>2</sub>";
			zadanieArray[4]="CO";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №10 ЗНО-2013 химия. Основной тест*/
			taskNumber=10;
			var zadanieArray=new Array();
			zadanieArray[0]="Учні помістили в порожній хімічний стакан трохи порошку крейди, долили води і ретельно перемішали. Який тип суміші утворився?";
			zadanieArray[1]="розчин";
			zadanieArray[2]="суспензія";
			zadanieArray[3]="емульсія";
			zadanieArray[4]="піна";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №11 ЗНО-2013 химия. Основной тест*/
			taskNumber=11;
			var zadanieArray=new Array();
			zadanieArray[0]="Який неметал можна виділити із суміші з піском способом, зображеним на рисунку?";
			zadanieArray[1]="графіт";
			zadanieArray[2]="йод";
			zadanieArray[3]="бром";
			zadanieArray[4]="силіцій";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №12 ЗНО-2013 химия. Основной тест*/
			taskNumber=12;
			var zadanieArray=new Array();
			zadanieArray[0]="У якому варіанті відповіді правильно вказано властивості калій гідроксиду? <br/>1. малорозчинна речовина<br/>2. легко окиснюється<br/>3. реагує з сульфур(IV) оксидом<br/>4. сильний електроліт";
			zadanieArray[1]="1, 2"; 
			zadanieArray[2]="1, 3";
			zadanieArray[3]="2, 3";
			zadanieArray[4]="3, 4";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №13 ЗНО-2013 химия. Основной тест*/
			taskNumber=13;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть формулу речовини, унаслідок розчинення якої у воді утворюється сильна кислота.";
			zadanieArray[1]="SО<sub>2</sub>";
			zadanieArray[2]="H<sub>2</sub>S";
			zadanieArray[3]="HCl";
			zadanieArray[4]="NH<sub>3</sub>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №14 ЗНО-2013 химия. Основной тест*/
			taskNumber=14;
			var zadanieArray=new Array();
			zadanieArray[0]="Наявність яких йонів зумовлює утворення накипу внаслідок кип’ятіння твердої води?";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №15 ЗНО-2013 химия. Основной тест*/
			taskNumber=15;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть формулу гідроксиду, який реагує як з кислотами, так і з лугами.";
			zadanieArray[1]="NaОН";
			zadanieArray[2]="Ca(ОН)<sub>2</sub>";
			zadanieArray[3]="LiОН";
			zadanieArray[4]="Zn(ОН)<sub>2</sub>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №16 ЗНО-2013 химия. Основной тест*/
			taskNumber=16;
			var zadanieArray=new Array();
			zadanieArray[0]="Які речовини реагують між собою у водних розчинах?";
			zadanieArray[1]="NaOH i СuSO<sub>4</sub>";
			zadanieArray[2]="NaOH i Cа(OH)<sub>2</sub>";
			zadanieArray[3]="СаCl<sub>2</sub> i KNO<sub>3</sub>";
			zadanieArray[4]="Са(NO<sub>3</sub>)<sub>2</sub> i HCl";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №17 ЗНО-2013 химия. Основной тест*/
			taskNumber=17;
			var zadanieArray=new Array();
			zadanieArray[0]="Який метал реагує з водним розчином ферум(ІІ) сульфату?";
			zadanieArray[1]="Zn";
			zadanieArray[2]="Cu";
			zadanieArray[3]="Pb";
			zadanieArray[4]="Sn";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №18 ЗНО-2013 химия. Основной тест*/
			taskNumber=18;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть продукти термічного розкладання магній гідроксиду.";
			zadanieArray[1]="Mg і H<sub>2</sub>О";
			zadanieArray[2]="Mg і H<sub>2</sub>О<sub>2</sub>";
			zadanieArray[3]="MgО і H<sub>2</sub>";
			zadanieArray[4]="MgО і H<sub>2</sub>О";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №19 ЗНО-2013 химия. Основной тест*/
			taskNumber=19;
			var zadanieArray=new Array();
			zadanieArray[0]="Яка кількість речовини (моль) алюміній оксиду утвориться внаслідок окиснення алюмінію кількістю речовини 4 моль?";
			zadanieArray[1]="1";
			zadanieArray[2]="2";
			zadanieArray[3]="3";
			zadanieArray[4]="4";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №20 ЗНО-2013 химия. Основной тест*/
			taskNumber=20;
			var zadanieArray=new Array();
			zadanieArray[0]="Яка з кислот пасивує залізо?";
			zadanieArray[1]="HNO<sub>3</sub> (розб.)";
			zadanieArray[2]="HСl (конц.)";
			zadanieArray[3]="СН<sub>3</sub>СООН (розб.)";
			zadanieArray[4]="Н<sub>2</sub>SO<sub>4</sub> (конц.)";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №21 ЗНО-2013 химия. Основной тест*/
			taskNumber=21;
			var zadanieArray=new Array();
			zadanieArray[0]="Яка речовина витісняє Йод з натрій йодиду у водному розчині?";
			zadanieArray[1]="N<sub>2</sub>";
			zadanieArray[2]="H<sub>2</sub>";
			zadanieArray[3]="CO<sub>2</sub>";
			zadanieArray[4]="Cl<sub>2</sub>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №22 ЗНО-2013 химия. Основной тест*/
			taskNumber=22;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть рядок, що містить формули сполук з однаковим ступенем окиснення Сульфуру.";
			zadanieArray[1]="SO<sub>3</sub>, Н<sub>2</sub>SO<sub>3</sub>";
			zadanieArray[2]="SO<sub>2</sub>, SF<sub>4</sub>";
			zadanieArray[3]="S, H<sub>2</sub>S";
			zadanieArray[4]="SO<sub>2</sub>, Н<sub>2</sub>SO<sub>4</sub>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №23 ЗНО-2013 химия. Основной тест*/
			taskNumber=23;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть формулу речовини, водний розчин якої називають нашатирним спиртом.";
			zadanieArray[1]="NH<sub>4</sub>Cl";
			zadanieArray[2]="NaCl";
			zadanieArray[3]="NH<sub>3</sub>";
			zadanieArray[4]="C<sub>2</sub>H<sub>5</sub>OH";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №24 ЗНО-2013 химия. Основной тест*/
			taskNumber=24;
			var zadanieArray=new Array();
			zadanieArray[0]="Яка речовина не реагує з карбон(ІV) оксидом?";
			zadanieArray[1]="SiO<sub>2</sub>";
			zadanieArray[2]="Ва(OН)<sub>2</sub>";
			zadanieArray[3]="NaOН";
			zadanieArray[4]="K<sub>2</sub>O";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №25 ЗНО-2013 химия. Основной тест*/
			taskNumber=25;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть гомологічну різницю.";
			zadanieArray[1]="–СН=";
			zadanieArray[2]="–СН<sub>3</sub>";
			zadanieArray[3]="–СН<sub>2</sub>–";
			zadanieArray[4]="СН<sub>4</sub>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №26 ЗНО-2013 химия. Основной тест*/
			taskNumber=26;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть за номенклатурою ІUРАC назву речовини, формула якої";
			zadanieArray[1]="1,1,2-триметилпропан-1-ол";
			zadanieArray[2]="1,1-диметил-2-метилпропан-1-ол";
			zadanieArray[3]="2,2,3-триметилбутан-2-ол";
			zadanieArray[4]="2,3-диметилбутан-2-ол";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №27 ЗНО-2013 химия. Основной тест*/
			taskNumber=27;
			var zadanieArray=new Array();
			zadanieArray[0]="Яка загальна формула алканів?";
			zadanieArray[1]="C<sub>n</sub>H<sub>n</sub>";
			zadanieArray[2]="C<sub>n</sub>H<sub>2n</sub>";
			zadanieArray[3]="C<sub>n</sub>H<sub>2n+2</sub>";
			zadanieArray[4]="C<sub>n</sub>H<sub>2n-2</sub>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №28 ЗНО-2013 химия. Основной тест*/
			taskNumber=28;
			var zadanieArray=new Array();
			zadanieArray[0]="Гідратація алкенів є реакцією";
			zadanieArray[1]="приєднання.";
			zadanieArray[2]="розкладу.";
			zadanieArray[3]="заміщення.";
			zadanieArray[4]="обміну.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №29 ЗНО-2013 химия. Основной тест*/
			taskNumber=29;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть формулу бутину.";
			zadanieArray[1]="C<sub>4</sub>H<sub>4</sub>";
			zadanieArray[2]="C<sub>4</sub>H<sub>8</sub>";
			zadanieArray[3]="C<sub>4</sub>H<sub>6</sub>";
			zadanieArray[4]="C<sub>4</sub>H<sub>10</sub>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №30 ЗНО-2013 химия. Основной тест*/
			taskNumber=30;
			var zadanieArray=new Array();
			zadanieArray[0]="Суміш бензену з хлором опромінили ультрафіолетовим світлом. До якого типу належить реакція, що відбулася?";
			zadanieArray[1]="приєднання";
			zadanieArray[2]="відщеплення";
			zadanieArray[3]="заміщення";
			zadanieArray[4]="обміну";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №31 ЗНО-2013 химия. Основной тест*/
			taskNumber=31;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть перспективне екологічно чисте паливо.";
			zadanieArray[1]="нафта";
			zadanieArray[2]="мазут";
			zadanieArray[3]="водень";
			zadanieArray[4]="вугілля";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №32 ЗНО-2013 химия. Основной тест*/
			taskNumber=32;
			var zadanieArray=new Array();
			zadanieArray[0]="Яка природа речовини, якщо під час її взаємодії з натрієм виділяється водень, а внаслідок реакції з гідроген хлоридом утворюється хлороалкан?";
			zadanieArray[1]="арен";
			zadanieArray[2]="карбонова кислота";
			zadanieArray[3]="насичений спирт";
			zadanieArray[4]="алкан";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №33 ЗНО-2013 химия. Основной тест*/
			taskNumber=33;
			var zadanieArray=new Array();
			zadanieArray[0]="Реакція «срібного дзеркала» характерна для";
			zadanieArray[1]="альдегідів.";
			zadanieArray[2]="ненасичених вуглеводнів.";
			zadanieArray[3]="багатоатомних спиртів.";
			zadanieArray[4]="естерів.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №34 ЗНО-2013 химия. Основной тест*/
			taskNumber=34;
			var zadanieArray=new Array();
			zadanieArray[0]="Група –СООН є характеристичною для";
			zadanieArray[1]="фенолів.";
			zadanieArray[2]="спиртів.";
			zadanieArray[3]="альдегідів.";
			zadanieArray[4]="карбонових кислот.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №35 ЗНО-2013 химия. Основной тест*/
			taskNumber=35;
			var zadanieArray=new Array();
			zadanieArray[0]="За своєю природою жири є";
			zadanieArray[1]="спиртами.";
			zadanieArray[2]="карбоновими кислотами.";
			zadanieArray[3]="альдегідами.";
			zadanieArray[4]="естерами.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №36 ЗНО-2013 химия. Основной тест*/
			taskNumber=36;
			var zadanieArray=new Array();
			zadanieArray[0]="Яку речовину одержують гідролізом крохмалю?";
			zadanieArray[1]="сахарозу";
			zadanieArray[2]="глюкозу";
			zadanieArray[3]="фруктозу";
			zadanieArray[4]="етанол";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №37 ЗНО-2013 химия. Основной тест*/
			taskNumber=37;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть назву речовини <i>Х</i>, яка бере участь у перетворенні, що відбувається за схемою";
			zadanieArray[1]="нітробензен";
			zadanieArray[2]="1-нітрогексан";
			zadanieArray[3]="нітроциклогексан";
			zadanieArray[4]="1,3-динітробензен";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №38 ЗНО-2013 химия. Основной тест*/
			taskNumber=38;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть характеристичні групи, унаслідок взаємодії яких утворюється пептидний зв’язок.";
			zadanieArray[1]="–NН<sub>2</sub> і –СООН";
			zadanieArray[2]="–ОН і –СООН";
			zadanieArray[3]="–NН<sub>2</sub> і –ОН";
			zadanieArray[4]="–ОН і –CНО";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №39 ЗНО-2013 химия. Основной тест*/
			taskNumber=39;
			var zadanieArray=new Array();
			zadanieArray[0]="Молекула білка складається iз залишків";
			zadanieArray[1]="карбонових кислот.";
			zadanieArray[2]="спиртів.";
			zadanieArray[3]="амінів.";
			zadanieArray[4]="амінокислот.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №40 ЗНО-2013 химия. Основной тест*/
			taskNumber=40;
			var zadanieArray=new Array();
			zadanieArray[0]="Які реагенти потрібно використати для добування натрій гідроксиду?";
			zadanieArray[1]="Na<sub>2</sub>SO<sub>4</sub> i Ba(OH)<sub>2</sub>";
			zadanieArray[2]="NaNO<sub>3</sub> i Ba(OH)<sub>2</sub>";
			zadanieArray[3]="NaNO<sub>3</sub> i Cu(OH)<sub>2</sub>";
			zadanieArray[4]="Na<sub>2</sub>SO<sub>4</sub> i Cu(OH)<sub>2</sub>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №41 ЗНО-2013 химия. Основной тест*/
			taskNumber=41;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між cхемою та типом хімічної реакції.";
			zadanieArray[1]="СaO+CO<sub>2</sub>&rarr;СaCO<sub>3</sub>";
			zadanieArray[2]="(NH4)<sub>2</sub>CO<sub>3</sub>&rarr;<br/>NH<sub>3</sub>+CO<sub>2</sub>+H<sub>2</sub>O";
			zadanieArray[3]="NH<sub>4</sub>NO<sub>3</sub>&rarr;N<sub>2</sub>O+H<sub>2</sub>O";
			zadanieArray[4]="P+O<sub>2</sub>&rarr;P<sub>2</sub>O<sub>5</sub>";
			zadanieArray[5]="розкладу, без зміни ступенів окиснення елементів";
			zadanieArray[6]="заміщення, окисно-відновна";
			zadanieArray[7]="розкладу, окисно-відновна";
			zadanieArray[8]="сполучення, окисно-відновна";
			zadanieArray[9]="сполучення, без зміни ступенів окиснення елементів";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="eacd";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №42 ЗНО-2013 химия. Основной тест*/
			taskNumber=42;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між тривіальною назвою речовини і її формулою.";
			zadanieArray[1]="негашене вапно";
			zadanieArray[2]="поташ";
			zadanieArray[3]="гіпс";
			zadanieArray[4]="сухий лід";
			zadanieArray[5]="Na<sub>2</sub>CO<sub>3</sub>";
			zadanieArray[6]="CO<sub>2</sub>";
			zadanieArray[7]="СаO";
			zadanieArray[8]="СаSO<sub>4</sub> · 2H<sub>2</sub>O";
			zadanieArray[9]="K<sub>2</sub>CO<sub>3</sub>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="cedb";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;			
		/*задание №43 ЗНО-2013 химия. Основной тест*/
			taskNumber=43;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між хімічною реакцією і використанням її основного продукту.";
			zadanieArray[1]="гідроліз кальцій карбіду";
			zadanieArray[2]="гідратація етену";
			zadanieArray[3]="нітрування гліцеролу";
			zadanieArray[4]="полімеризація етену";
			zadanieArray[5]="автогенне зварювання металів";
			zadanieArray[6]="вибухівка";
			zadanieArray[7]="мийний засіб";
			zadanieArray[8]="пакувальний матеріал";
			zadanieArray[9]="розчинник у парфумерії";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="aebd";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №44 ЗНО-2013 химия. Основной тест*/
			taskNumber=44;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між природою та формулою спирту.";
			zadanieArray[1]="первинний";
			zadanieArray[2]="вторинний";
			zadanieArray[3]="третинний";
			zadanieArray[4]="двохатомний";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="numeric";
			viewArray[taskNumber-1]="multiselect_picture";
			answerArray[taskNumber-1]="daec";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №45 ЗНО-2013 химия. Основной тест*/
			taskNumber=45;
			var zadanieArray=new Array();
			zadanieArray[0]="Розташуйте хімічні елементи за збільшенням числа електронів на зовнішньому енергетичному рівні їхніх атомів.";
			zadanieArray[1]="Аl";
			zadanieArray[2]="Cа";
			zadanieArray[3]="Nа";
			zadanieArray[4]="Sі";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="cbad";
			taskTypeArray[taskNumber-1]="ordernew";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=3;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №46 ЗНО-2013 химия. Основной тест*/
			taskNumber=46;
			var zadanieArray=new Array();
			zadanieArray[0]="Розташуйте хімічні елементи за посиленням неметалічних властивостей.";
			zadanieArray[1]="N";
			zadanieArray[2]="С";
			zadanieArray[3]="В";
			zadanieArray[4]="О";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="cbad";
			taskTypeArray[taskNumber-1]="ordernew";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=3;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №47 ЗНО-2013 химия. Основной тест*/
			taskNumber=47;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть послідовність хімічних формул у ланцюжку перетворень металу на кислу сіль.";
			zadanieArray[1]="NaHSO<sub>3</sub>";
			zadanieArray[2]="SO<sub>2</sub>";
			zadanieArray[3]="CuS";
			zadanieArray[4]="Cu";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="dcba";
			taskTypeArray[taskNumber-1]="ordernew";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=3;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №48 ЗНО-2013 химия. Основной тест*/
			taskNumber=48;
			var zadanieArray=new Array();
			zadanieArray[0]="Розташуйте формули речовин за зростанням ступеня окиснення Нітрогену.";
			zadanieArray[1]="Ba(NO<sub>3</sub>)<sub>2</sub>";
			zadanieArray[2]="KNO<sub>2</sub>";
			zadanieArray[3]="NO<sub>2</sub>";
			zadanieArray[4]="(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>";			
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="dbca";
			taskTypeArray[taskNumber-1]="ordernew";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=3;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №49 ЗНО-2013 химия. Основной тест*/
			taskNumber=49;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть послідовність утворення сполук під час синтезу аміноетанової кислоти."; 
			zadanieArray[1]="ClCH<sub>2</sub>СООН";
			zadanieArray[2]="CH<sub>3</sub>CНО";
			zadanieArray[3]="CH<sub>3</sub>СООН";
			zadanieArray[4]="CH<sub>3</sub>СH<sub>2</sub>ОН";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="dbca";
			taskTypeArray[taskNumber-1]="ordernew";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=3;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №50 ЗНО-2013 химия. Основной тест*/
			taskNumber=50;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть послідовність утворення сполук під час синтезу фенолу.";
			zadanieArray[1]="С<sub>2</sub>H<sub>2</sub>";
			zadanieArray[2]="С<sub>6</sub>Н<sub>6</sub>";
			zadanieArray[3]="СН<sub>4</sub>";
			zadanieArray[4]="C<sub>6</sub>Н<sub>5</sub>Сl";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="cabd";
			taskTypeArray[taskNumber-1]="ordernew";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=3;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №51 ЗНО-2013 химия. Основной тест*/
			taskNumber=51;
			var zadanieArray=new Array();
			zadanieArray[0]="Перетворіть схему реакції <p style='text-align:center; color:black;'>FeCl<sub>3</sub> + Na<sub>2</sub>S &rarr; FeS + S + NaCl</p> на хімічне рівняння та вкажіть суму його коефіцієнтів.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="alphabetic";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]=14;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;
		/*задание №52 ЗНО-2013 химия. Основной тест*/
			taskNumber=52;
			var zadanieArray=new Array();
			zadanieArray[0]="Обчисліть масу&nbsp;(г) етанолу, який можна добути гідратацією етену об’ємом 448&nbsp;л&nbsp;(н.&nbsp;у.), якщо відносний вихід продукту реакції становить 90&nbsp;%.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]=828;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №53 ЗНО-2013 химия. Основной тест*/
			taskNumber=53;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть суму індексів у формулі вищого оксиду хімічного елемента, порядковий номер якого в Періодичній системі Д. І. Менделєєва&nbsp;–&nbsp;34.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]=4;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №54 ЗНО-2013 химия. Основной тест */
			taskNumber=54;
			var zadanieArray=new Array();
			zadanieArray[0]="На підприємстві утворилися кислі стоки масою 10&nbsp;т із середнім умістом сульфатної кислоти 0,98&nbsp;%. Обчисліть масу&nbsp;(кг) кальцій гідроксиду, який потрібно витратити на нейтралізацію кислоти.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]=74;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №55 ЗНО-2013 химия. Основной тест*/
			taskNumber=55;
			var zadanieArray=new Array();
			zadanieArray[0]="Обчисліть ступінь дисоціації&nbsp;(%) електроліту, якщо з кожних 50&nbsp;його молекул чотири розпалися на йони.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]=8;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;		
			
		/*задание №56 ЗНО-2013 химия. Основной тест*/
			taskNumber=56;
			var zadanieArray=new Array();
			zadanieArray[0]="Обчисліть масу&nbsp;(г) осаду, що утворюється внаслідок пропускання карбон(IV)оксиду об’ємом&nbsp;2,24&nbsp;л&nbsp;(н.&nbsp;у.) крізь водний розчин, що містить кальцій гідроксид масою &nbsp;7,4&nbsp; г.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]=10;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №57 ЗНО-2013 химия. Основной тест*/
			taskNumber=57;
			var zadanieArray=new Array();
			zadanieArray[0]="Унаслідок взаємодії розжареного заліза кількістю речовини&nbsp;7,5&nbsp;моль з водяною парою, узятою в надлишку, утворилася залізна ожарина Fe<sub>3</sub>O<sub>4</sub> і водень. Обчисліть об’єм&nbsp;(л) водню&nbsp;(н.&nbsp;у.).";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]=224;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;		
		
		/*задание №58 ЗНО-2013 химия. Основной тест*/
			taskNumber=58;
			var zadanieArray=new Array();
			zadanieArray[0]="Натрій гідроксид кількістю речовини&nbsp;0,5&nbsp;моль розчинили у воді об’ємом 180&nbsp;мл. Яка масова частка&nbsp;(%) розчиненої речовини?";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]=10;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №59 ЗНО-2013 химия. Основной тест*/
			taskNumber=59;
			var zadanieArray=new Array();
			zadanieArray[0]="Для проведення реакції було взято етанову кислоту масою&nbsp;3&nbsp;г і етанол у надлишку. Унаслідок реакції утворився естер масою&nbsp;4,18&nbsp;г. Обчисліть відносний вихід&nbsp;(%) естеру.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]=95;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №60 ЗНО-2013 химия. Основной тест*/
			taskNumber=60;
			var zadanieArray=new Array();
			zadanieArray[0]="На повне гідрування триолеїну витратили водень об’ємом&nbsp;672&nbsp;л&nbsp;(н.&nbsp;у.). Обчисліть кількість речовини (моль) жиру, що прореагував.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]=10;
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
	}	/* Окончание ЗНО-2013 химия. Основной тест. I сессия*/	
	
	

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
