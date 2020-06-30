<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
    <h1>MySQL 접속해서 데이터 가져오기</h1>
    <?php 
    //mysql 접속 계정 정보 설정
    $mysql_host = "localhost";
  $mysql_user="hoppydream";
  $mysql_passwd="xTGRThJqGgFJ2fNh";
  $mysql_db="hoppydream";
    //connetc 설정(host,user,password)
    $conn = mysql_connect($mysql_host,$mysql_user,$mysql_password);
    //db 연결
    $dbconn = mysql_select_db($mysql_db,$conn);
    //charset UTF8
    mysql_query("set names utf8");
    //쿼리문 작성
    $query = "select * from hoppycategory";
    //쿼리보내고 결과를 변수에 저장
    $result = mysql_query($query);
    echo "MySQL에서 가져온 데이터는 아래와 같습니다.<br/>";
    while($row = mysql_fetch_array($result)){
        echo "가게 이름: ".$row[가게 이름]."/ 주소: ".$row[주소]."/ 업종: ".$row[업종]."/ 전화번호: ".$row[전화번호]."<br/>";
    }
    ?>
</body>
</html>