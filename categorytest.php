
<?php
ini_set('display_errors', '0');
$mysql_host = "localhost";
  $mysql_user="hoppydream";
  $mysql_passwd="xTGRThJqGgFJ2fNh";
  $mysql_db="hoppydream";

$conn = mysqli_connect($mysql_host, $mysql_user,$mysql_passwd,$mysql_db);
mysqli_set_charset($conn,"utf8");

if(!$conn){
	die("연결 실패 : ".mysqli_connect_error());
}
?>
<script> console.log('연결성공')</script>
<!--db연결 ------------------------------------------------------------------------------------------->
<?php
$get_location = $_POST['location'];
if($get_location==NULL){
    $get_location="";
}
$get_kind = $_POST['kind'];
if($get_kind==NULL){
    $get_kind="";
}
$sql = "SELECT * FROM info WHERE address like('$get_location%%') and kind like('$get_kind%%')";
$result = $conn->query($sql);
$resultloc = $conn->query("SELECT distinct kind from info where address like('$get_location%%') order by 1;");?>
<head>
<meta charset="UTF-8">

<link rel="stylesheet" href="css/category.css">
<!-- CSS only -->
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
	integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
	crossorigin="anonymous">

<!-- JS, Popper.js, and jQuery -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
	integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
	crossorigin="anonymous"></script>
<script
	src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
	integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
	crossorigin="anonymous"></script>
<script
	src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
	integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
	crossorigin="anonymous"></script>
    
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/style.css">
<style>

    .fade:not(.show) {
    opacity: inherit;
    }
    .prev,
    .next {
        cursor: pointer;
    /* position: absolute; */
    /* top: 40%; */
    width: auto;
    /* padding: 16px; */
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    /* border-radius: 3px 3px 3px 3px; */
    user-select: none;
    margin: 0 10%;
    display: inline-block;
    }
    .prev:hover,
.next:hover {
    background-color: rgba(0, 0, 0, 0.0);
    color: white;
}
.bootdiv .mySlides {
    padding-left: 5%;
    padding-right: 5%;
}
a:not([href]) {
    color: #6e9758;
    text-decoration: none;
}
</style>
<link rel="stylesheet" href="css/test.css">
</head>

<div class = "prevnext"style = "width : 100%;text-align : left; margin-bottom: 15px;">
<form action = "categorytest.php"method = "post">
    <select name="location" class="country">
            <option value="">전체</option>
            <option value="강남구">강남구</option>
            <option value="강동구">강동구</option>
            <option value="강북구">강북구</option>
            <option value="강서구">강서구</option>
            <option value="관악구">관악구</option>
            <option value="광진구">광진구</option>
            <option value="구로구">구로구</option>
            <option value="금천구">금천구</option>
            <option value="노원구">노원구</option>
            <option value="도봉구">도봉구</option>
            <option value="동대문구">동대문구</option>
            <option value="동작구">동작구</option>
            <option value="마포구">마포구</option>
            <option value="서대문구">서대문구</option>
            <option value="서초구">서초구</option>
            <option value="성동구">성동구</option>
            <option value="성북구">성북구</option>
            <option value="송파구">송파구</option>
            <option value="양천구">양천구</option>
            <option value="영등포구">영등포구</option>
            <option value="용산구">용산구</option>
            <option value="은평구">은평구</option>
            <option value="종로구">종로구</option>
            <option value="중구">중구</option>
            <option value="중랑구">중랑구</option>
            <option value=""disabled selected>지역</option>
    </select>
    <select name="kind" class="sector" style = "margin-left : 4px;">
        <option value="">전체</option>
        <option value="한식">한식</option>
        <option value="중식">중식</option>
        <option value="일식">일식</option>
        <option value="양식">양식</option>
        <option value="분식">분식</option>
        <option value="제과점">제과점</option>
        <option value="도시락">도시락</option>
        <option value="기타">기타</option>
        <option value=""disabled selected>업종</option>
    </select>
    <input type = "submit" value = "검색"class = "catebtn">
</form>
    <a class="prev" style ="margin-top: 7px;"onclick="plusSlides(-1)">&#10094;</a> <a class="next"
        onclick="plusSlides(1)" style ="margin-top: 7px;">&#10095;</a>
        </div>
<div class="cardcontainer">
    
	<div class="slideshow-container">
        
		<div class="mySlides fade">
			<?php
			$cntcnt=0;

			if (mysqli_num_rows($result)  > 0) {
                $cnt = 1;
                while($row = $result->fetch_assoc()) {
                    if($cnt%2==1){
                        echo "<div class = 'col-lg-5 col-md-6 catecard'>";
                        echo "<span class = 'catetitle'>" . $row["name"]. "</span><br><span class = 'cateaddress'>" . $row["address"]. "</span><br><span class = 'catekind'>" . $row["kind"]."</span><br><span class = 'catecall'>" . $row["calll"]. "</span>";
                        echo"</div>";
                    }
                    if($cnt%2==0){
                        echo "<div class = 'col-md-6 col-lg-5 catecard'style = 'float:right;'>";#col-lg-offset-1
                        echo "<span class = 'catetitle'>" . $row["name"]. "</span><br><span class = 'cateaddress'>" . $row["address"]. "</span><br><span class = 'catekind'>" . $row["kind"]."</span><br><span class = 'catecall'>" . $row["calll"]. "</span>";
                        echo"</div>";
                    }
                    $cnt++; $cntcnt+=1;
                    if($cntcnt==6){
                        $cntcnt=0;?>

                        </div><!--mysledes fade-->
                        <div class="mySlides fade">
                        <?php
                    }
                }
            }
            else {

                echo "아직 조사중입니다! 조금만 기다려주세요!<br>";
                echo $get_location."에서 검색 가능한 업종 : ";
                while($row = $resultloc->fetch_assoc()) {
                echo $row['kind'], " ";
                }
            }
            ?>
		</div><!--mysledes fade-->
	
        
	</div><!--slidshow-container-->

	
<script>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i <slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";
}
</script>

</div><!--cardcontainer-->
