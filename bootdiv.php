
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
    
mysqli_query ($conn, 'SET NAMES utf8'); 
?><script> console.log('연결성공')</script>
<?php

 $sql = "SELECT * FROM review order by datetime3 desc";
$result = mysqli_query($conn,$sql);

?>
<!--db연결 ------------------------------------------------------------------------------------------->
<head>

    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    <!-- CSS only -->
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
    <link rel="stylesheet" href="css/bootchange.css">

        
        <style>
.fade:not(.show) {
    opacity: inherit;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}
.prev:hover,
.next:hover {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
}
</style>
</head>
<?php $pagecnt = 1;?>
<div class="bootdiv">
<div class="slideshow-container">

<div class="mySlides fade" style="text-align: center;">
    <div class="col-lg-3 col-md-4 boardform"style = "vertical-align : bottom;">

        <span class="revtit">여러분의 솔직한 후기를 들려주세요!</span><br>
        <form action="board_write.php" method="post"enctype='multipart/form-data'>
            <div class = "rccon"><select name="loc" class="reviewcountry">
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
            </select></div><br>
            
            <input type="text" placeholder="가게 이름"name = "title"required><br>
            <input type="file" placeholder="이미지" accept="image/*"name = "img"><br>

            <textarea placeholder="150자 이내로 작성해주세요" required name = "review"rows = "3"width ="80%"maxlength="150"STYLE = "resize: none;font-size : 12px;"></textarea><br>
            <p id="star_grade">
                <a href="#">★</a>
                <a href="#">★</a>
                <a href="#">★</a>
                <a href="#">★</a>
                <a href="#">★</a>
            </p>
            
            <input type = "text"value = "0"name = "score" class = "inputhidden"id = "score"style = "visibility: hidden;">

            <input type="submit">
        </form>
    </div>

    <?php
    $cntcnt=0;
        if(mysqli_num_rows($result)>0){
            while($row=mysqli_fetch_array($result)){ ?>
                <div class="board col-lg-3 col-md-4"style = "vertical-align : bottom;">
                    <table>
                        <tr>
                            <td rowspan="3" class="reviewimg"><img
                            src="<?=$row['img']?>"
                            class="img-fluid imageFluid" ></td>
                            <td class="reviewloc"><?=$row['loc']?></td>
                         </tr><tr>
                            <td class="reviewtitle"><?=$row['title']?></td>
                        </tr>
                        <tr>
                            <td class="reviewscore"style = "display: flex;padding-left: 5%;"><?=$row['starscore']?>&nbsp;
                                <p id="star_grade1">
                                    <?php 
                                    $one = 1;
                                    
                                    $cnt = $row['starscore'];
                                    for($i = 0;$i<5;$i++){
                                        if($cnt>0){
                                            echo "<a href='#' class = 'on1'>★</a>";
                                            
                                        }
                                        else{
                                            echo "<a href='#'>★</a>";
                                        }
                                        $cnt--;
                                    }?>
                                </p>
                            </td>
                        </tr>
                        <tr class = "revtr">
                            <td class="reviewreview" colspan = "2"><?=$row['review']?></td>
                        </tr>
                    </table>
                <span class="date"><?= $row['date2']?></span>

                </div>
                
                
                <?php
                $cntcnt+=1;
                if($cntcnt==5){?>
                    </div>
                    <div class="mySlides fade"style="text-align: center;">
                        <div class="col-lg-3 col-md-4 boardform"style = "vertical-align : bottom;">

                            <span class="revtit">여러분의 솔직한 후기를 들려주세요!</span><br>
                            <form action="board_write.php" method="post"enctype="multipart/form-data" >
                                <div class = "rccon"><select name="loc" class="reviewcountry">
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
                                </select></div><br>
                                
                                <input type="text" placeholder="가게 이름"name = "title"><br>
                                <input type="file" placeholder="이미지" accept="image/*"name = "img"><br>

                                <textarea placeholder="150자 이내로 작성해주세요"name = "review"rows = "3"width ="80%"maxlength="150"STYLE = "resize: none;font-size : 12px;"></textarea><br>
                                <p id="star_grade">
                                    <a href="#">★</a>
                                    <a href="#">★</a>
                                    <a href="#">★</a>
                                    <a href="#">★</a>
                                    <a href="#">★</a>
                                </p>
                                
                                <input type = "text"value = "0"name = "score" class = "inputhidden"id = "score"style = "visibility: hidden;">

                                <input type="submit">
                            </form>
                        </div>
                    <?php
                    $cntcnt=0;
                    $pagecnt++;
                }

            }//while문
        }//if문
        else{
            echo "저장되있는 후기가 없습니다.";
        }//else 문 끝
    ?>

</div>

<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>

</div><!--slidshow-container-->
<br>

<!--<div style="text-align:center"><?php
for($i = 1;$i<=$pagecnt;$i++){
    echo "<span class='dot' onclick='currentSlide($i)'></span> ";
}?>
</div>-->

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
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";
}


</script>
    
    
    
</div><!--bootdiv-->
    <script src="https://code.jquery.com/jquery-latest.min.js"></script>
    <script>


        $('#star_grade a').click(function(){
            $(this).parent().children("a").removeClass("on");  /* 별점의 on 클래스 전부 제거 */ 
            $(this).addClass("on").prevAll("a").addClass("on"); /* 클릭한 별과, 그 앞 까지 별점에 on 클래스 추가 */
            var length = $(".on").length;
            console.log(length);
            if(length==0){
                length=1;
            }
            console.log(length);
            document.getElementById("score").value = length;
            return false;
        });
    </script>
    <script>
        $(document).ready(function(){
            var height = $(".boardform").css("height");
            $(".board").css("height", height);
            $(".boardform").css("height", height);
            
        });
        
    </script>

