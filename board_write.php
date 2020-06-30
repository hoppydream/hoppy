
<?php
  $mysql_host = "localhost";
  $mysql_user="hoppydream";
  $mysql_passwd="xTGRThJqGgFJ2fNh";
  $mysql_db="hoppydream";
    
    $conn = mysqli_connect($mysql_host, $mysql_user,$mysql_passwd,$mysql_db);
    
    if(!$conn){
        die("연결 실패 : ".mysqli_connect_error());
    }
?><script> console.log('연결성공')</script>
<!--db연결 ------------------------------------------------------------------------------------------->
<?php
    $get_loc = $_POST['loc'];//지역

    $uploads_dir = './img_upload';
    $imgName = "img";
    
    $get_score = $_POST["score"];//별점
    $get_title = $_POST["title"];//가게이름
    $get_review= $_POST["review"];//리뷰    

    if(isset($_FILES[$imgName])){

        if(!is_dir($uploads_dir)){
            if(!mkdir($uploads_dir, 0777))
                die("업로드 디렉토리 생성에 실패 했습니다.");
        }
        $error = $_FILES[$imgName]['error'];
        $name = $_FILES[$imgName]['name'];
        // 오류 확인
        if( $error != UPLOAD_ERR_OK ) {
	        switch( $error ) {
		        case UPLOAD_ERR_INI_SIZE:
		        case UPLOAD_ERR_FORM_SIZE:
                    echo "<script> alert('파일 용량이 너무 큽니다.'); location.replace('bootdiv.php'); </script>";
			        break;
                case UPLOAD_ERR_PARTIAL:
                    echo "<script> alert('파일이 부분적으로 첨부되었습니다.'); location.replace('bootdiv.php'); </script>";
                    break;
                case UPLOAD_ERR_NO_FILE:
                    echo "<script> alert('파일이 첨부되지 않았습니다.'); location.replace('bootdiv.php'); </script>";
                    break;
                case UPLOAD_ERR_NO_TMP_DIR:
                    echo "<script> alert('임시파일을 저장할 디렉토리가 없습니다.'); location.replace('bootdiv.php'); </script>";
                    break;
                case UPLOAD_ERR_CANT_WRITE:
                    echo "<script> alert('임시파일을 생성할 수 없습니다.'); location.replace('bootdiv.php'); </script>";
                    break;
                case UPLOAD_ERR_EXTENSION:
                    echo "<script> alert('업로드 불가능한 파일입니다.'); location.replace('bootdiv.php'); </script>";
                    break;
		        default:
                    echo "<script> alert('파일이 제대로 업로드되지 않았습니다.'); location.replace('bootdiv.php'); </script>";
	        }
	        exit;
        }
        $uploadFile = $uploads_dir.'/'.$name; // 저장될 디렉토리 및 파일명
        $fileNameWithoutExt = substr($name, 0, strrpos($name, ".")); //확장자 뺀 파일이름
        $file_ext = strtolower(substr(strrchr($name, "."), 1)); //확장자
        $fileinfo = pathinfo($uploadFile); // 첨부파일의 정보를 가져옴
        $i = 1;
        
        // 왜 while문이 무조건 1번실행되지??? 몰겠다 오늘은 그냥 자야지....
        while(is_file($uploadFile)){
            $name = $fileNameWithoutExt."-{$i}.".$file_ext;
            $uploadFile = $uploads_dir.'/'.$name;
            $i++;
        }
        $DBFile = $uploadFile;
        $uploadFile = iconv("utf-8","EUC-KR", $uploadFile);

        if ( !move_uploaded_file($_FILES[$fileName]['tmp_name'], $uploadFile) ) { // 파일 이동
            echo "파일이 업로드 되지 않았습니다.";
            exit;
        }
    }

    echo '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';
?><script> console.log('값 받기/이미지 폴더 저장')</script><?php

    $sql = "insert into review(loc, starscore, img, title, review, date2, datetime3)values 
    (
        '$get_loc', '$get_score', '$DBFile', '$get_title', '$get_review', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    );";//정보 입력

?><script> console.log('값 넣기')</script><?php
        $result = mysqli_query($conn,$sql);
        //저장이 됬다면 (result = true) 가입 완료
        if($result) {
    
    
?>      
        <script> alert('작성 완료');
        //location.replace('bootdiv.php');
        </script>
<?php
   }
    else{
        echo "<script>alert('작성 실패......................');</script>";
        echo mysqli_error($conn);
        echo $sql."<br>";            
    
    }

    mysqli_close($conn);
?>