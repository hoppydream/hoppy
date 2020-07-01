
<?php
$mysql_host = "localhost";
$mysql_user="hoppydream";
$mysql_passwd="xTGRThJqGgFJ2fNh";
$mysql_db="hoppydream";
    
    $conn = mysqli_connect($mysql_host, $mysql_user,$mysql_passwd,$mysql_db);
    mysqli_set_charset($conn,"utf8");
    
    if(!$conn){
        die("연결 실패 : ".mysqli_connect_error());
    }
?><script> console.log('연결성공')</script>
<?php $sql = "SELECT * FROM review";
$result = mysqli_query($conn,$sql);?>
<!--db연결 ------------------------------------------------------------------------------------------->

<html>

<head>
    <meta charset="UTF-8">
    
    <script src="https://code.jquery.com/jquery-latest.min.js"></script>
    <!-- CSS only -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <!-- JS, Popper.js, and jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
        crossorigin="anonymous"></script>

<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/style.css">
</head>

<body style="text-align : center;">
    <div class="menu">
        <a href="index.php">
            <!-- <div class="title">H<span id="cc">O</span>P<span id="cc">P</span>Y<span id="cc"> D</span>R<span
                id="cc">E</span>A<span id="cc">M</span></div> -->
            <img src="img/logo.png"style = "width: 15%;
    margin: 1% auto;">
        </a>
        <a href="#map"><button class="now menubtn">현황</button></a>
        <a href="#kategory"><button class="kate menubtn">카테고리</button></a>
        <a href="#review1"><button class="review menubtn">후기</button></a>

    </div>
    <br />
    <div class="map" id="map1"><br><br><br><br>
        <div class="maintitle">현황</div>
        <div class="subtitle">주변에 있는 가맹점 위치를 지도에서 확인해보세요!</div>
        <!-- <iframe src="//cyranoch.cafe24.com/piree/p770033/map_ka.php?bo_table=map" width="80%" height="75%"
            class="mapframe" id="map-canvas"></iframe> -->
            <div class="mapp" id="mapp">
            <div id="map" style="width:100%;height:70%;"></div> <!-- 다른 이미지로 마커 생성하기 -->
            
            <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=e38c15b1993e4d2bd6c705b65a34c6fd"></script>
            <script>
            var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
                mapOption = { 
                    center: new kakao.maps.LatLng(37.471195, 126.937624), // 지도의 중심좌표
                    level: 5 // 지도의 확대 레벨
                };
                //-=============현재위치
                if (navigator.geolocation) {
                    
                    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
                    navigator.geolocation.getCurrentPosition(function(position) {
                        
                        var lat = position.coords.latitude, // 위도
                            lon = position.coords.longitude; // 경도
                        
                        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                            message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
                        
                        // 마커와 인포윈도우를 표시합니다
                        displayMarker(locPosition, message);
                            
                    });
                    
                } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
                    
                    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
                        message = '현재 위치를 알 수 없습니다..'
                        
                    displayMarker(locPosition, message);
                }
                function displayMarker(locPosition, message) {

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({  
                    map: map, 
                    position: locPosition
                }); 

                var iwContent = message, // 인포윈도우에 표시할 내용
                    iwRemoveable = true;

                // 인포윈도우를 생성합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content : iwContent,
                    removable : iwRemoveable
                });

                // 인포윈도우를 마커위에 표시합니다 
                infowindow.open(map, marker);

                // 지도 중심좌표를 접속위치로 변경합니다
                map.setCenter(locPosition);      
                }   
            //-=============현재위치
            var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

            // 마커를 표시할 위치와 title 객체 배열입니다 
            var positions = [
                {
                    title: '(주) 안동장', 
                    latlng: new kakao.maps.LatLng(37.5082653,126.960858 )
                },
                {
                    title: '153컵밥', 
                    latlng: new kakao.maps.LatLng(37.6425319,127.038241 )
                },
                {
                    title: '5빠 떡볶이', 
                    latlng: new kakao.maps.LatLng(37.5492922,126.977381 )
                },
                {
                    title: 'GS25 신월초교점', 
                    latlng: new kakao.maps.LatLng(37.5402891,126.838187 )
                },
                {
                    title: 'GS25신정행복점(행복)', 
                    latlng: new kakao.maps.LatLng(37.5261130,126.856250)
                },
                {
                    title: '감탄쌍문점', 
                    latlng: new kakao.maps.LatLng(37.6583271,127.034871)
                },
                {
                    title: '경보장', 
                    latlng: new kakao.maps.LatLng(37.5903489,127.098383 )
                },
                {
                    title: '고봉김밥 행당점', 
                    latlng: new kakao.maps.LatLng(37.5584355,127.032936 )
                },
                {
                    title: '고시칼국수', 
                    latlng: new kakao.maps.LatLng(37.4724294,126.934323 )
                },
                {
                    title: '고운미소', 
                    latlng: new kakao.maps.LatLng(37.5569884,127.082348 )
                },
                {
                    title: '곤지암한우소머리국밥 정릉점', 
                    latlng: new kakao.maps.LatLng(37.6104444,127.009718 )
                },
                {
                    title: '곰쉐프 진곰탕', 
                    latlng: new kakao.maps.LatLng(37.4566484,127.059782 )
                },
                {
                    title: '곰작', 
                    latlng: new kakao.maps.LatLng(37.5537505,126.929225 )
                },
                {
                    title: '공릉동멸치국수', 
                    latlng: new kakao.maps.LatLng(37.6696685,127.040793 )
                },
                {
                    title: '광천집', 
                    latlng: new kakao.maps.LatLng(37.6473173,127.034379 )
                },
                {
                    title: '구르메식탁(호랑이식탁)', 
                    latlng: new kakao.maps.LatLng(37.5817778,126.925213 )
                },
                {
                    title: '구이의정석', 
                    latlng: new kakao.maps.LatLng(37.4988126,127.146620 )
                },
                {
                    title: '국물명가24시전주콩나물국밥', 
                    latlng: new kakao.maps.LatLng(37.6582824,127.074072 )
                },
                {
                    title: '국민전통갈비', 
                    latlng: new kakao.maps.LatLng(37.5837315,126.923026 )
                },
                {
                    title: '궁', 
                    latlng: new kakao.maps.LatLng(37.4883778,126.992088 )
                },
                {
                    title: '기쁨주는 반찬가게', 
                    latlng: new kakao.maps.LatLng(37.5772624,126.923010 )
                },
                {
                    title: '김가네국수집', 
                    latlng: new kakao.maps.LatLng(37.6698218,127.040464 )
                },
                {
                    title: '김떡비', 
                    latlng: new kakao.maps.LatLng(37.5034167,127.040464 )
                },
                {
                    title: '김만우', 
                    latlng: new kakao.maps.LatLng(37.6024757,126.915317 )
                },
                {
                    title: '자금성', 
                    latlng: new kakao.maps.LatLng(37.471308, 126.919275)
                },
                {
                    title: '구풍원', 
                    latlng: new kakao.maps.LatLng(37.633906, 127.040783)
                },
                {
                    title: '김가네국수집', 
                    latlng: new kakao.maps.LatLng(37.472380, 126.935672)
                },
                {
                    title: '잘되는분식', 
                    latlng: new kakao.maps.LatLng(37.481595, 126.942493)
                },
                {
                    title: '봉이돈까스 & 불고기', 
                    latlng: new kakao.maps.LatLng(37.482610, 126.944953)
                },
                {
                    title: '한솥도시락', 
                    latlng: new kakao.maps.LatLng(37.479247, 126.957277)
                },
                {
                    title: '라티놀', 
                    latlng: new kakao.maps.LatLng(37.478939, 126.952814)
                },
                {
                    title: '만다린', 
                    latlng: new kakao.maps.LatLng(37.479410, 126.953582)
                },
                {
                    title: '푸드2900', 
                    latlng: new kakao.maps.LatLng(37.486441, 126.939552)
                },
                {
                    title: '동희반점', 
                    latlng: new kakao.maps.LatLng(37.472380, 126.935672)
                },
                {
                    title: '토마토김밥', 
                    latlng: new kakao.maps.LatLng(37.473802, 126.966600)
                },
                {
                    title: '옥이네', 
                    latlng: new kakao.maps.LatLng(37.463402, 126.917979)
                },
                {
                    title: '신왕짜장', 
                    latlng: new kakao.maps.LatLng(37.465043, 126.919097)
                },
                {
                    title: '황금짜장', 
                    latlng: new kakao.maps.LatLng(37.482020, 126.941204)
                }
            ];
            // 마커 이미지의 이미지 주소입니다
            var imageSrc = "https://cdn.pixabay.com/photo/2014/04/03/10/03/google-309741_960_720.png";
            for (var i = 0; i < positions.length; i ++) {
                // 마커 이미지의 이미지 크기 입니다
                var imageSize = new kakao.maps.Size(24, 35); 
                // 마커 이미지를 생성합니다    
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: positions[i].latlng, // 마커를 표시할 위치
                    title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    image : markerImage // 마커 이미지 
                });
            }
            </script>
            </div>
    </div>
    <div class="kategory" id="kategory">
        <div class="maintitle">카테고리</div>
        <div class="subtitle">지역과 업종을 선택하여 마음에 드는 가맹점을 찾아보세요!</div>
        
        <iframe src="categorytest.php"id="if_iframe" class = "cat_iframe"onload="calcHeight();" name="cateframe" title="카테고리" frameborder="0" scrolling="no" style="overflow-x:hidden; overflow:auto; width:100%; min-height:300px;"></iframe>
         
        
    </div><br>
    <div class="review1" id="review1">
        <div class="maintitle">후기</div>
        <div class="subtitle">주변에 있는 가맹점 위치를 지도에서 확인해보세요!</div>
        
        <iframe src="bootdiv.php"id="if_iframe1" class = "rev_iframe"onload="calcHeight1();" name="WrittenPublic" title="리뷰" frameborder="0" scrolling="no" style="overflow-x:hidden; overflow:auto; width:100%; min-height:300px;"></iframe>
          <!--onload="this.style.height=this.contentWindow.document.body.scrollHeight+30;"-->
    </div>

    <script src="https://code.jquery.com/jquery-latest.min.js"></script>
    <script data-require="jquery@2.0.3" data-semver="2.0.3" src="https://code.jquery.com/jquery-2.0.3.min.js"></script>
    <script> $(document).ready(function(){ $('#input_text').keyup(function(){ if ($(this).val().length > $(this).attr('maxlength')) { alert('제한길이 초과'); $(this).val($(this).val().substr(0, $(this).attr('maxlength'))); } }); }); </script>
    <script type="text/javascript"> 
//<![CDATA[
function calcHeight(){
 //find the height of the internal page

 var the_height=
 document.getElementById('if_iframe').contentWindow.
 document.body.scrollHeight;

 //change the height of the iframe
 document.getElementById('if_iframe').height=
 the_height;

 //document.getElementById('the_iframe').scrolling = "no";
 document.getElementById('if_iframe').style.overflow = "hidden";
}function calcHeight1(){
 var the_height1=
 document.getElementById('if_iframe1').contentWindow.
 document.body.scrollHeight;

 //change the height of the iframe
 document.getElementById('if_iframe1').height=
 the_height1;

 //document.getElementById('the_iframe').scrolling = "no";
 document.getElementById('if_iframe1').style.overflow = "hidden";
}
//
</script>
<script src="kategory.js"></script>
    <script src="scroll.js"></script>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

</body>

</html>