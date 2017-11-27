$(document).ready(function() {

	

	$(".menu_item").mouseover(function() {
		if (!shouldShowSubMenu()) {
			return;
		}
		var item = $(this).find(".nav-drop-down");
		if ($(item).length ==0) {
			$(this).addClass("nav_item_hover");
		} else {
			$(item).show();
		}
	});
	$(".menu_item").mouseout(function() {
		if (!shouldShowSubMenu()) {
			return;
		}
		var item = $(this).find(".nav-drop-down");
		if ($(item).length ==0) {
			$(this).removeClass("nav_item_hover");
		} else {
			$(item).hide();
		}
	});
});

// function loadProperties(language) {
// 	jQuery.i18n.properties({
// 	    name:'Messages', 
// 	    path:'./i18n/', 
// 	    mode:'both',
// 	    language:language,
// 	    async: true,
// 	    callback: function() {
// 	        $("[content-flag]").each(function() {
// 	        	$(this).html($.i18n.prop($(this).attr("content-flag")));
// 	        });
// 	    }
// 	});
// }

function shouldShowSubMenu() {
	var width = $(document.body).width();
	if (width > 736) {
		return true;
	} else {
		return false;
	}
}