# Hoppy Dream

Hope + Happy
<BR><BR>
꿈나무 카드 가맹점 위치, 정보 제공 및 후기 작성 가능 웹<BR/><br>
__기획 의도__ <BR>
    꿈나무 카드는 서울시 기준 하루 한끼 지원 금액은 5000원으로 책정되어 있으며 그 가격에 맞춰 한 끼를 해결해야 합니다. 심지어 사용 횟수의 제한은 방학에는 2회, 그 외에는 한 번으로 제한되어 있습니다. 커피도 기본 5,000원씩 하는 요즘, 그 가격으로는 한 끼를 해결하기 어렵습니다. 그렇기에 가격이 다소 저렴한 편의점에서 한 끼를 때우는 아이들도 많이 있습니다. 그러나 편의점은 우유, 즉석 식품, 과일, 유제품, 반찬류, 난각류 등으로 구매 가능 품목이 제한되어 있습니다. 즉, 과자나 탄산 음료 등의 구매가 불가능하기 때문에 편의점에서도 마음에 드는 음식을 마음대로 먹을 수 없습니다. 또한 먹고 싶은 메뉴를 길을 가다 발견하더라도 그 식당이 꿈나무 카드 가맹점이 아닐 수도 있기 때문에 사용이 제한됩니다. 꿈나무 카드를 사용하는 아이들은 만 18세 미만의 청소년들로 성장기이며, 활동하며 에너지를 많이 쓰는 시기이기 때문에 영양소가 잡힌 식단과 배를 든든하게 채울 수 있는 음식이 필요합니다. 그래서 이 웹서비스를 통해 결식 아동들이 조금 더 균형 잡힌 식사를 할 수 있도록 조금이나마 도와줄 수 있을 것 같아 이 서비스를 기획하게 되었습니다.

<br>

<br>

__Why we plan to develop this project__

Kkumnamu card is set at 5,000 won per day based on the Seoul's standard, and have to pay for one meal at that price. Even the limit on the number of uses is limited to two during vacation and one other time. Coffee costs 5,000 won each these days, so that price is not enough for a meal. Therefore, there are many children who eat a meal at a convenience store that is rather cheap. Convenience stores, however, have limited availability for milk, instant foods, fruits, dairy products, side dishes, and oaks. In other words, They can't buy snacks or soft drinks, so they can't eat whatever you want at convenience stores. Also, even if you find a menu you want to eat on the street, the restaurant may not be a member of Kkumnamu card so use is restricted. Children who use Kkumnamu cards are teenagers under the age of 18 years old, who are growing up and using a lot of energy, so they need a nutritious diet and food to fill their stomachs. So, We came up with this web service because I thought I could help a little bit more balanced meals for under-fed children.

<IMG SRC = "https://github.com/hoppydream/hoppy/blob/master/img/markergreen.png"><br>
지도에 나오게 될 마커 이미지로<br>
<IMG SRC = "https://ifh.cc/g/2o6DlA.jpg"><BR>
지도에 이렇게 표시가 됩니다.
<Br><br>
지도에 마커는 놓을 위치의 위도, 경도를 불러와 positions라는 배열에 넣고,

<pre>
<code>
  var positions = [{
        title: '식당이름',
        latlng: new kakao.maps.LatLng(경도, 위도)
    },
    {
        title: '식당이름',
        latlng: new kakao.maps.LatLng(경도, 위도)
    }
  ];
</code>
</pre>
~~사실 주소를 넣으면 위도 경도를 구하는 코드도 찾아서 짜보고 싶었지만 시간 부족...하나하나 컴퓨터 킬때마다 찾았다...~~

<br>for문을 통해 지도 위에 생성해주었습니다

<pre>
<code>
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
</code>
</pre>
