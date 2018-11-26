// Отображение индикатора загрузки карты
var overlay = document.getElementsByClassName('overlay')[0];
overlay.removeAttribute('hidden');

// Обработчик готовности API Яндекс.Карт к использованию
ymaps.ready(init);

// Глобальные переменные
var mapId = 'map',
	myMap,
	myPlacemark;
var targetCoords = [55.2840756069201,83.17942334357161];

// Построение карты
function init() {
	// Создание карты
	myMap = new ymaps.Map(mapId, {
		// Свойства
		bounds: getProperBounds(),
		controls: ['default', 'routeEditor']
	} , {
		// Опции
		suppressMapOpenBlock: true			// Отключить ссылку "Открыть в Яндекс.Картах"
	});
	// Отключение поведения "масштабирование карты колесом мыши"
	myMap.behaviors.disable('scrollZoom');
	
	// Создание метки
	myPlacemark = new ymaps.Placemark(
		// Геометрия
		[55.283686,83.179561], {
		// Свойства
		iconContent: 'Ферма "Сибирский кролик"'
	}, {
		// Опции
		cursor: 'grab',
		preset: 'islands#redStretchyIcon'
	});

	// Добавление схемы проезда через Локти
	var loktiPolyline = new ymaps.Polyline([
		// Геометрия
		[55.18928022590904,83.14354611340194],
		[55.1909804687759,83.14599765244193],
		[55.19540757338274,83.14953385008276],
		[55.19724834378637,83.15087376045697],
		[55.199138122115436,83.15242824755198],
		[55.202170882532194,83.15492023146834],
		[55.20566335665139,83.15793978662342],
		[55.21003186407872,83.16161681571289],
		[55.212378444745816,83.1634041378114],
		[55.21303179617173,83.16377525355006],
		[55.21340604001643,83.16372355115904],
		[55.21381705661591,83.1635268942438],
		[55.21839919453181,83.15965024656022],
		[55.21903711272948,83.15917110204143],
		[55.220506099543755,83.16185696416],
		[55.22267879247492,83.16514181454608],
		[55.2299955845121,83.17356486412888],
		[55.23183070294005,83.17552042281945],
		[55.234107189047904,83.17773347357551],
		[55.23660425609918,83.18097649259379],
		[55.24007197214489,83.18618143334636],
		[55.244159589823596,83.19307543814683],
		[55.24554126177258,83.19525643789183],
		[55.246379184408184,83.19647568379696],
		[55.247092343813385,83.19729988347102],
		[55.2479147341988,83.19766906796345],
		[55.24866914838431,83.19772491417734],
		[55.2504927534979,83.19745242987402],
		[55.251404524543005,83.19718744169026],
		[55.25296846307095,83.19620924357936],
		[55.2542406630481,83.19531244875353],
		[55.25546379858968,83.19463023064884],
		[55.2576403423445,83.19382369391458],
		[55.25990502040403,83.19183255781066],
		[55.26047116965724,83.19154935050588],
		[55.261821569657485,83.19109448182412],
		[55.26264501934561,83.19066107081447],
		[55.2638409565631,83.18967188911338],
		[55.264647213963386,83.18913438291858],
		[55.26539954325748,83.18891927400152],
		[55.265915383207144,83.18893255199755],
		[55.2671541070314,83.18924623740335],
		[55.268000729728605,83.18946336328459],
		[55.27061093394658,83.18935198508599],
		[55.27127892494352,83.18914609228183],
		[55.27291456555086,83.18735221932329],
		[55.27315659533804,83.18722775904025],
		[55.273957499586004,83.18538454211291],
		[55.27503781694584,83.18371191512503],
		[55.27663142137756,83.18287560163114],
		[55.27867758672471,83.18232869885144],
		[55.28450170454573,83.1828706390021],
		[55.285047485728235,83.182328286423],
		targetCoords
	] , {
		// Свойства
		hintContent: 'Проезд через Локти'			
	} , {
		// Опции
		strokeWidth: 10,
		strokeColor: '56db40',	// светло-зелёный цвет
		strokeOpacity: 0.9
	});
	
	// Добавление схемы проезда через Пашино
	var pashinoPolyline = new ymaps.Polyline([
		// Геометрия
		[55.1619551773591,82.9812325410919],
		[55.1659822629061,82.9855750433812],
		[55.16899977275502,82.98750489571451],
		[55.1707520490838,82.9878961636913],
		[55.17437100383233,82.98854492373356],
		[55.17457158731568,82.98862522273431],
		[55.17933425258579,82.99378026119133],
		[55.17964788646578,82.99404035183089],
		[55.18183073814028,82.99522182308453],
		[55.18226522163264,82.99535121876077],
		[55.182687421954526,82.99526603771592],
		[55.18300077494767,82.99506617132687],
		[55.18535225953239,82.99292438561105],
		[55.185670068357545,82.99272252847399],
		[55.185896497749866,82.99264305757758],
		[55.186273675121946,82.99263550863755],
		[55.18717433698029,82.99299651459351],
		[55.190779697357996,82.99482925832467],
		[55.19460567592756,82.99674783274435],
		[55.19528007711052,82.99703582448296],
		[55.19609597302595,82.99726565104079],
		[55.19657755951407,82.99733764897545],
		[55.20817780421905,82.99695903579558],
		[55.20860656728292,82.99688224710815],
		[55.20904181251035,82.9966507337154],
		[55.21151384270462,82.99480989491377],
		[55.21220111905187,82.99409755529429],
		[55.2124404170111,82.99364052065188],
		[55.212679713536524,82.99301182463255],
		[55.21586965702096,82.97984542456771],
		[55.216286772056996,82.97887982932235],
		[55.21650146190523,82.97857942191273],
		[55.21692777115978,82.97827901450304],
		[55.21757029334442,82.97810735312605],
		[55.228319876735206,82.977549453651],
		[55.22942364825097,82.97769965735583],
		[55.23036796168737,82.97798933592946],
		[55.231257067389315,82.97854187098653],
		[55.23446074826393,82.98081370202212],
		[55.242862664467104,82.98694791403919],
		[55.24426025645322,82.98819245902209],
		[55.244769016713434,82.98858942595623],
		[55.24540036072856,82.98902930823466],
		[55.246332034468345,82.9893833598246],
		[55.25420135076113,82.99511792269848],
		[55.25480190408404,82.99526946750782],
		[55.25552500722633,82.99529226628442],
		[55.25608877338008,82.99518631902833],
		[55.256652531512174,82.99499454108383],
		[55.25728368596484,82.99459757414962],
		[55.258025126392816,82.99383582678936],
		[55.261738247105576,82.98847140875961],
		[55.262105863855076,82.98824610320234],
		[55.262461223463966,82.98831584063674],
		[55.26279207265493,82.98860015479234],
		[55.26321676568209,82.98927106675116],
		[55.28853244408122,83.04277076746727],
		[55.28894879388134,83.04376854922074],
		[55.2892426852253,83.0445517542531],
		[55.289659027545305,83.04619326617015],
		[55.28978148035177,83.04697647120256],
		[55.28990393276311,83.0491222384145],
		[55.28978148034893,83.05073156382343],
		[55.27844074254535,83.13070430781148],
		[55.2762114027893,83.1366695406606],
		[55.27400643763455,83.1423343661001],
		[55.27367568225484,83.14385786082052],
		[55.273553179554554,83.14514532114767],
		[55.273528678975765,83.14707651163839],
		[55.27387494209589,83.14890300136986],
		[55.274306952666656,83.15049345670806],
		targetCoords
	] , {
		// Свойства
		hintContent: 'Проезд через Пашино'			
	} , {
		// Опции
		strokeWidth: 5,
		strokeColor: 'ed4543',	// светло-красный цвет
		strokeOpacity: 0.5
	});
	
	// Добавление геообъектов на карту
	myMap.geoObjects.add(myPlacemark);		// Добавление метки
	myMap.geoObjects.add(loktiPolyline);	// Добавление ломаной для схемы проезда через Локти
	myMap.geoObjects.add(pashinoPolyline);	// Добавление ломаной для схемы проезда через Пашино

	// Скрытие индикатора загрузки карты
	var mapContainer = document.getElementById(mapId);
	mapContainer.removeChild(overlay);
}

// Перерисовка карты при изменении размера экрана
window.addEventListener("resize", function() {
	myMap.setBounds(getProperBounds());
});

/**
 * Определение границ карты, подходящих под текущее разрешение экрана
 */
function getProperBounds() {
	var bounds = [[55.11615464010717,82.70153346558402],
				  [55.32498232786585,83.4321242858965]];
	if(window.matchMedia("(max-width: 543px)").matches) {
		bounds = [[55.10670787995571,82.69741359253716],
				  [55.42039256979511,83.32088771363091]];
	} else if(window.matchMedia("(max-width: 767px)").matches) {
		bounds = [[55.13166672952808,82.70702662964656],
				  [55.32788779586062,83.39367213745906]];
	} else if(window.matchMedia("(max-width: 991px)").matches) {
		bounds = [[55.09804637885533,82.61020961304499],
				  [55.35081281691831,83.49460902710746]];
	} else if(window.matchMedia("(max-width: 1199px)").matches) {
		bounds = [[55.14487474765011,82.78805079956841],
				  [55.314410433895766,83.38131251831841]];
	}
	return bounds;
}
