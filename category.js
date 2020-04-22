var state;
var where1 = new Array('all', 'gwanak', 'dobong');
var where2 = new Array('gwanak1', 'dobong1');
var where3 = new Array('all3', 'korea_food', 'china_food', 'japan_food', 'bunsic', 'dessert');
var where4 = new Array('han', 'jong', 'il', 'bun', 'dess');
for (var j = 0; j < where2.length; j++) {
    jQuery('.' + where2[j]).show();
}
//----------------------------------------------------- 지역 선택
jQuery('#selectBox').change(function () {
    state = jQuery('#selectBox option:selected').val();

    for (var i = 0; i < where2.length; i++) {
        jQuery('.' + where2[i]).hide();
    }
    for (var i = 0; i < where1.length; i++) {
        if (where1[0] == state) { //all
            $('#selectBoxSec').css("visibility", "hidden");
            for (var j = 0; j < where2.length; j++) {
                jQuery('.' + where2[j]).show();
            }
        }
        if (where1[i] == state) { //지역 선택
            $('#selectBoxSec').css("visibility", "visible");
            jQuery('.' + where2[i - 1]).show();
            //------------------------------------------------------업종 선택
            jQuery('#selectBoxSec').change(function () {
                var stateop = jQuery('#selectBoxSec option:selected').val();
                for (var a = 0; a < where4.length; a++) {
                    jQuery('.' + where4[i]).hide();
                } //다 없애기
                for (var a = 0; a < where3.length; a++) {
                    if (where3[0] == stateop) { //all
                        $('#selectBoxSec').css("visibility", "hidden");
                        for (var b = 0; b < where4.length; b++) {
                            jQuery('.' + where4[b]).show();
                        }
                    }
                    if (where1[i] == state && where3[a] == stateop) { //선택
                        for (var b = 0; b < where4.length; a++) {
                            jQuery('.' + where4[b]).hide();
                        }
                        jQuery('.' + where4[a - 1]).show();
                    }
                }

            });

        }
    }
});