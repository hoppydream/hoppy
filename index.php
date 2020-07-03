
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
<title>HOPPY DREAM</title>

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

<link rel="shortcut icon" href="img/favicon.ico">
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/intro.css">
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

    <div class="intro" id="intro">
    <img src="img/introbg.png" class="introbg" alt="introbg">

    <img src="img/hoppydream1.png" class="hoppydream1" alt="hoppydream1">
    <img src="img/card1.png" class="card1" alt="card1">
    <img src="img/howto1.png" class="howto1" alt="howto1">
    <!--<button class = "col-lg-3 introbtn1"></button>
        <button class = "col-lg-3 introbtn2"></button>
        <button class = "col-lg-3 introbtn3"></button> -->
    </div>

    <div class="map" id="map1"><br><br><br><br>
        <div class="maintitle">현황</div>
        <div class="subtitle">주변에 있는 가맹점 위치를 지도에서 확인해보세요!</div>
        <!-- <iframe src="//cyranoch.cafe24.com/piree/p770033/map_ka.php?bo_table=map" width="80%" height="75%"
            class="mapframe" id="map-canvas"></iframe> -->
            <div class="mapp" id="mapp">
            <div id="map" style="width:100%; height:70%;"></div> <!-- 다른 이미지로 마커 생성하기 -->
            
            <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=e38c15b1993e4d2bd6c705b65a34c6fd"></script>
            <script type="text/javascript" src="marker.js"></script>
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
    <script src="scroll.js"></script>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

</body>

</html>