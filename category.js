var state, stateop;
var where1 = new Array('all', 'gangnam', 'gangdong', 'gangbuk', 'gangseo', 'gwanak', 'dobong');
var where2 = new Array('gangnam1', 'gangdong1', 'gangbuk1', 'gangseo1', 'gwanak1', 'dobong1');
var where3 = new Array('all3', 'korea_food', 'china_food', 'japan_food', 'west_food', 'bunsic', 'dessert');
var where4 = new Array('han', 'jong', 'il', 'yang', 'bun', 'dess');
for (var j = 0; j < where2.length; j++) {
    jQuery('.' + where2[j]).show();
}
//----------------------------------------------------- 지역 선택
jQuery('#selectBox').change(function () {
    state = jQuery('#selectBox option:selected').val();

    for (var i = 0; i < where2.length; i++) {
        //jQuery('.' + where2[i]).hide();
        $('.' + where2[i]).css("display", "none");
    }
    for (var i = 0; i < where1.length; i++) {
        if (where1[0] == state) { //all
            $('#selectBoxSec').css("visibility", "hidden");
            for (var j = 0; j < where2.length; j++) {
                //jQuery('.' + where2[j]).show();
                $('.' + where2[j]).css("display", "table-row");
                //display: table-row;
            }
        }
        if (where1[i] == state) { //지역 선택
            $('#selectBoxSec').css("visibility", "visible");
            // jQuery('.' + where2[i - 1]).show();
            $('.' + where2[i - 1]).css("display", "table-row");
            //------------------------------------------------------업종 선택
            jQuery('#selectBoxSec').change(function () {
                for (var a = 0; a < where4.length; a++) {
                    //jQuery('.' + where4[i]).hide();
                    $('.' + where4[a]).css("display", "none");
                } //다 없애기
                stateop = jQuery('#selectBoxSec option:selected').val();

                for (var a = 0; a < where3.length; a++) {

                    if (where3[0] == stateop) { //all    
                        for (var b = 0; b < where4.length; b++) {
                            //jQuery('.' + where4[b]).show();
                            $('.' + where4[b]).css("display", "table-row");
                        }
                        for (var c = 0; c < where1.length; c++) { //지역이 아닌것 지우기
                            if (where1[c] != state) {
                                $('.' + where2[c - 1]).css("display", "none");
                            }
                        }
                    }

                    if (where3[a] == stateop) { //선택   where1[i] == state && 
                        for (var b = 0; b < where4.length; b++) {
                            //jQuery('.' + where4[b]).hide();
                            $('.' + where4[b]).css("display", "none"); // + where2[i] + ' .'
                        }
                        //jQuery('.' + where4[a - 1]).show();
                        $('.' + where4[a - 1]).css("display", "table-row"); // where2[i] + ' .' + 
                        for (var b = 0; b < where1.length; b++) { //지역이 아닌것 지우기
                            if (where1[b] != state) {
                                $('.' + where2[b - 1]).css("display", "none");
                            }
                        }
                    }

                }

            });

        }
    }
});