var element_list = [
	"H", "Hydrogen",
	"He", "Helium",
	"Li", "Lithium",
	"Be", "Beryllium",
	"B", "Boron",
	"C", "Carbon",
	"N", "Nitrogen",
	"O", "Oxygen",
	"F", "Fluorine",
	"Ne", "Neon",
	"Na", "Sodium",
	"Mg", "Magnesium",
	"Al", "Aluminium",
	"Si", "Silicon",
	"P", "Phosphorus",
	"S", "Sulfur",
	"Cl", "Chlorine",
	"Ar", "Argon",
	"K", "Potassium",
	"Ca", "Calcium",
	"Sc", "Scandium",
	"Ti", "Titanium",
	"V", "Vanadium",
	"Cr", "Chromium",
	"Mn", "Manganese",
	"Fe", "Iron",
	"Co", "Cobalt",
	"Ni", "Nickel",
	"Cu", "Copper",
	"Zn", "Zinc",
	"Ga", "Gallium",
	"Ge", "Germanium",
	"As", "Arsenic",
	"Se", "Selenium",
	"Br", "Bromine",
	"Kr", "Krypton",
	"Rb", "Rubidium",
	"Sr", "Strontium",
	"Y", "Yttrium",
	"Zr", "Zirconium",
	"Nb", "Niobium",
	"Mo", "Molybdenum",
	"Tc", "Technetium",
	"Ru", "Ruthenium",
	"Rh", "Rhodium",
	"Pd", "Palladium",
	"Ag", "Silver",
	"Cd", "Cadmium",
	"In", "Indium",
	"Sn", "Tin",
	"Sb", "Antimony",
	"Te", "Tellurium",
	"I", "Iodine",
	"Xe", "Xenon",
	"Cs", "Caesium",
	"Ba", "Barium",
	"La", "Lanthanum",
	"Ce", "Cerium",
	"Pr", "Praseodymium",
	"Nd", "Neodymium",
	"Pm", "Promethium",
	"Sm", "Samarium",
	"Eu", "Europium",
	"Gd", "Gadolinium",
	"Tb", "Terbium",
	"Dy", "Dysprosium",
	"Ho", "Holmium",
	"Er", "Erbium",
	"Tm", "Thulium",
	"Yb", "Ytterbium",
	"Lu", "Lutetium",
	"Hf", "Hafnium",
	"Ta", "Tantalum",
	"W", "Tungsten",
	"Re", "Rhenium",
	"Os", "Osmium",
	"Ir", "Iridium",
	"Pt", "Platinum",
	"Au", "Gold",
	"Hg", "Mercury",
	"Tl", "Thallium",
	"Pb", "Lead",
	"Bi", "Bismuth",
	"Po", "Polonium",
	"At", "Astatine",
	"Rn", "Radon",
	"Fr", "Francium",
	"Ra", "Radium",
	"Ac", "Actinium",
	"Th", "Thorium",
	"Pa", "Protactinium",
	"U", "Uranium",
	"Np", "Neptunium",
	"Pu", "Plutonium",
	"Am", "Americium",
	"Cm", "Curium",
	"Bk", "Berkelium",
	"Cf", "Californium",
	"Es", "Einstenium",
	"Fm", "Fermium",
	"Md", "Mendelevium",
	"No", "Nobelium",
	"Lr", "Lawrencium",
	"Rf", "Rutherfordium",
	"Db", "Dubnium",
	"Sg", "Seaborgium",
	"Bh", "Bohrium",
	"Hs", "Hassium",
	"Mt", "Meitnerium",
	"Ds", "Darmstadium",
	"Rg", "Roentgenium",
	"Cn", "Copernicium",
	"Uut", "Unutrium",
	"Fl", "Flerovium",
	"Uup", "Ununpentium",
	"Lv", "Livermorium",
	"Uus", "Ununseptium",
	"Uuo", "Ununoctium",
];

function cross_field() {
	setTimeout(function () {
		$('.element', $('#iframe_id').contents()[0]).on('click', function (e) {
			create_window();

			function get_target_id() {
				var c_id = $(e.target).parent().attr('id');
				var p_id = $(e.target).attr('id');
				var a_id;
				if (typeof(c_id) === 'undefined'){
					a_id = p_id;
				}else if (typeof(p_id) === 'undefined'){
					a_id = c_id;
				}
				return a_id;
			}
		
			var position = element_list.indexOf(get_target_id());
		
			function create_information() {
				element_information_list = [];
				element_information_list.push(element_list[position-1]);
				element_information_list.push(element_list[position]);
			}
		
			create_information();
			element_information_list.forEach(function(i){
				$('.element_information').append('<div>'+i+'</div>')
			})
			$('.element_information').append('<button id="skip">learn more</button>');
		
			$('#skip').on('click', function(){
				window.open("https://en.wikipedia.org/wiki/"+element_list[position]);
			});
		});
	}, 2000);
}

function create_window(){
	$('#element_search').append('<div id="mask" class="mask"></div><div class="dialog" id="dialog">');
	$('#dialog').append('<div class="dialog_head" id="move_part"></div><div class="dialog_content"></div><div class="button close_button" id="close"></div>');
	$('.dialog_content').append('<div class="element_information"></div>');
	$('#close').append('<a href="#">关闭对话框</a>');
	var $dialog = $("#dialog");
	var $mask = $("#mask");
	//点击弹出对话框
	$dialog.css("display", "block");
	$mask.css("display", "block");
	autoCenter($dialog);

	//自动居中对话框
	function autoCenter(el) {
		var bodyW = $(window).width();
		var bodyH = $(window).height();
		var elW = el.width();
		var elH = el.height();
		$dialog.css({
			"left": (bodyW - elW) / 2 + 'px',
			"top": (bodyH - elH) / 2 + 'px'
		});
	};

	// //禁止选中对话框内容
	// if(document.attachEvent) { //ie的事件监听，拖拽div时禁止选中内容，firefox与chrome已在css中设置过-moz-user-select: none; -webkit-user-select: none;
	// 	$('dialog').attachEvent('onselectstart', function() {
	// 		return false;
	// 	});
	// }

	//声明需要用到的变量
	var mx = 0,
		my = 0; //鼠标x、y轴坐标（相对于left，top）
	var dx = 0,
		dy = 0; //对话框坐标（同上）
	var isDraging = false; //不可拖动

	//鼠标按下
	$("#move_part").mousedown(function(e) {
		e = e || window.event;
		mx = e.pageX; //点击时鼠标X坐标
		my = e.pageY; //点击时鼠标Y坐标
		dx = $dialog.offset().left;
		dy = $dialog.offset().top;
		isDraging = true; //标记对话框可拖动                
	});

	//鼠标移动更新窗口位置
	$(document).mousemove(function(e) {
		var e = e || window.event;
		var x = e.pageX; //移动时鼠标X坐标
		var y = e.pageY; //移动时鼠标Y坐标
		if(isDraging) { //判断对话框能否拖动
			var moveX = dx + x - mx; //移动后对话框新的left值
			var moveY = dy + y - my; //移动后对话框新的top值
			//设置拖动范围
			var pageW = $(window).width();
			var pageH = $(window).height();
			var dialogW = $dialog.width();
			var dialogH = $dialog.height();
			var maxX = pageW - dialogW; //X轴可拖动最大值
			var maxY = pageH - dialogH; //Y轴可拖动最大值
			moveX = Math.min(Math.max(0, moveX), maxX); //X轴可拖动范围
			moveY = Math.min(Math.max(0, moveY), maxY); //Y轴可拖动范围
			//重新设置对话框的left、top
			$dialog.css({
				"left": moveX + 'px',
				"top": moveY + 'px'
			});
		};
	});

	//鼠标离开
	$("#move_part").mouseup(function() {
		isDraging = false;
	});

	//点击关闭对话框
	$("#close").click(function() {
		$dialog.remove();
		$mask.remove();
	});

	//窗口大小改变时，对话框始终居中
	window.onresize = function() {
		autoCenter($dialog);
	};
}

$(function(){
	cross_field();

	$('document').ready(function(){
		$('.container').toggleClass('display_toggle');
	});
	
	$('#serch_button').on('click', function(){
		$('.container').toggleClass('display_toggle');
	});
		
	$('#keybord_event').on('keydown', function(){
		if(event.keyCode==13){
			var a = $('#keybord_event').val();
			element_list.forEach(function(i){
				if (a === i){
					create_window();
				}
			});
		}
	});
});

function get_atom(){
    $.ajax({
        url:'/get_atom/h',
        type:'GET',
        success:function(data){
            alert(data);
        }
    });
}

get_atom();

