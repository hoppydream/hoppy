
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
$resultloc = $conn->query("SELECT distinct left(address, 4) from info;");?>
<head>
<meta charset="UTF-8">

<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/category.css">
<link rel="stylesheet" href="css/style.css">
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
        padding: 16px;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 3px 3px 3px 3px;
        user-select: none;
        margin: auto 10% ;
    }
    .prev:hover,
.next:hover {
    background-color: rgba(0, 0, 0, 0.0);
    color: white;
}
</style>
</head>

<div class = "prevnext"style = "width : 100%;text-align : center;    margin-bottom: 15px;">
    <a class="prev" style ="left:40%;"onclick="plusSlides(-1)">&#10094;</a> <a class="next"
        onclick="plusSlides(1)" style ="right:40%;">&#10095;</a>
        </div>
<div class="cardcontainer">
    
	<div class="slideshow-container">
        
		<div class="mySlides fade">
			<?php
			$cntcnt=0;
			echo "<script>console.log('$cntcnt');</script>";

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
                    echo "<script>console.log('$cntcnt');</script>";
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
                echo "현재 검색 가능한 지역 : ";
                while($row = $resultloc->fetch_assoc()) {
                echo $row['left(address, 4)'];
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
