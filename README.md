# Hoppy Dream

Hope + Happy

<p> 꿈나무 카드 가맹점 위치, 정보 제공 및 후기 작성 가능 웹

![지도에 나올 마커](https://github.com/hoppydream/hoppy/blob/master/img/markergreen.png?raw=true "Marker")<br>
지도에 나오게 될 마커 이미지로<br>
![마커가 표시될 지도](https://ifh.cc/g/2o6DlA.jpg?raw=true "Marker")
지도에 이렇게 표시가 됩니다.
<Br><br>
지도에 마커는 놓을 위치의 위도, 경도를 불러와
  ```
  var positions = [{
        title: '식당이름',
        latlng: new kakao.maps.LatLng(경도, 위도)
    },
    {
        title: '식당이름',
        latlng: new kakao.maps.LatLng(경도, 위도)
    }
  ];
```
  >>>사실 주소를 넣으면 위도 경도를 구하는 코드도 찾아서 짜보고 싶었지만 시간 부족...하나하나 컴퓨터 킬때마다 찾았다...
```
  for (var i = 0; i < positions.length; i++) {//위의 포지션의 갯수만큼
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(40, 40);
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage // 마커 이미지 
    });
 ```
