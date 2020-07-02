var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.471195, 126.937624), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
    };
//-=============현재위치
if (navigator.geolocation) {

    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function (position) {

        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도

        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '<div style="padding:5px;">현재 나의 위치!?</div>'; // 인포윈도우에 표시될 내용입니다

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
        content: iwContent,
        removable: iwRemoveable
    });

    // 인포윈도우를 마커위에 표시합니다 
    infowindow.open(map, marker);

    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);
}
//-=============현재위치
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [{
        title: '(주) 안동장',
        latlng: new kakao.maps.LatLng(37.5082653, 126.960858)
    },
    {
        title: '153컵밥',
        latlng: new kakao.maps.LatLng(37.6425319, 127.038241)
    },
    {
        title: '5빠 떡볶이',
        latlng: new kakao.maps.LatLng(37.5492922, 126.977381)
    },
    {
        title: 'GS25 신월초교점',
        latlng: new kakao.maps.LatLng(37.5402891, 126.838187)
    },
    {
        title: 'GS25신정행복점(행복)',
        latlng: new kakao.maps.LatLng(37.5261130, 126.856250)
    },
    {
        title: '감탄쌍문점',
        latlng: new kakao.maps.LatLng(37.6583271, 127.034871)
    },
    {
        title: '경보장',
        latlng: new kakao.maps.LatLng(37.5903489, 127.098383)
    },
    {
        title: '고봉김밥 행당점',
        latlng: new kakao.maps.LatLng(37.5584355, 127.032936)
    },
    {
        title: '고시칼국수',
        latlng: new kakao.maps.LatLng(37.4724294, 126.934323)
    },
    {
        title: '고운미소',
        latlng: new kakao.maps.LatLng(37.5569884, 127.082348)
    },
    {
        title: '곤지암한우소머리국밥 정릉점',
        latlng: new kakao.maps.LatLng(37.6104444, 127.009718)
    },
    {
        title: '곰쉐프 진곰탕',
        latlng: new kakao.maps.LatLng(37.4566484, 127.059782)
    },
    {
        title: '곰작',
        latlng: new kakao.maps.LatLng(37.5537505, 126.929225)
    },
    {
        title: '공릉동멸치국수',
        latlng: new kakao.maps.LatLng(37.6696685, 127.040793)
    },
    {
        title: '광천집',
        latlng: new kakao.maps.LatLng(37.6473173, 127.034379)
    },
    {
        title: '구르메식탁(호랑이식탁)',
        latlng: new kakao.maps.LatLng(37.5817778, 126.925213)
    },
    {
        title: '구이의정석',
        latlng: new kakao.maps.LatLng(37.4988126, 127.146620)
    },
    {
        title: '국물명가24시전주콩나물국밥',
        latlng: new kakao.maps.LatLng(37.6582824, 127.074072)
    },
    {
        title: '국민전통갈비',
        latlng: new kakao.maps.LatLng(37.5837315, 126.923026)
    },
    {
        title: '궁',
        latlng: new kakao.maps.LatLng(37.4883778, 126.992088)
    },
    {
        title: '기쁨주는 반찬가게',
        latlng: new kakao.maps.LatLng(37.5772624, 126.923010)
    },
    {
        title: '김가네국수집',
        latlng: new kakao.maps.LatLng(37.6698218, 127.040464)
    },
    {
        title: '김떡비',
        latlng: new kakao.maps.LatLng(37.5034167, 127.040464)
    },
    {
        title: '김만우',
        latlng: new kakao.maps.LatLng(37.6024757, 126.915317)
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
    },
    {
        title: '김밥&라면',
        latlng: new kakao.maps.LatLng(37.5341048, 126.957778)
    },
    {
        title: '김밥사랑',
        latlng: new kakao.maps.LatLng(37.5876451, 126.944387)
    },
    {
        title: '김밥세상',
        latlng: new kakao.maps.LatLng(37.5782167, 126.909391)
    },
    {
        title: '김밥옆구리',
        latlng: new kakao.maps.LatLng(37.4971326, 126.930320)
    },
    {
        title: '김밥이랑',
        latlng: new kakao.maps.LatLng(37.6548487, 127.036932)
    },
    {
        title: '김밥천국', //=============================== 
        latlng: new kakao.maps.LatLng(37.5681859, 126.931736)
    },
    {
        title: '김밥천국',
        latlng: new kakao.maps.LatLng(37.4652649, 126.931650)
    },
    {
        title: '김밥천국',
        latlng: new kakao.maps.LatLng(37.5796690, 126.924389)
    },
    {
        title: '김밥천국',
        latlng: new kakao.maps.LatLng(37.6651024, 127.034931)
    },
    {
        title: '김밥천국',
        latlng: new kakao.maps.LatLng(37.5890871, 126.945280)
    },
    {
        title: '김밥천국',
        latlng: new kakao.maps.LatLng(37.4988870, 126.901866)
    },
    {
        title: '김밥천국',
        latlng: new kakao.maps.LatLng(37.4697987, 126.920285)
    },
    {
        title: '김밥천국',
        latlng: new kakao.maps.LatLng(37.5965217, 126.948547)
    },
    {
        title: '김밥천국',
        latlng: new kakao.maps.LatLng(37.5937814, 126.945684)
    },
    {
        title: '김밥천국',
        latlng: new kakao.maps.LatLng(37.4936945, 126.898661)
    },
    {
        title: '김밥천국',
        latlng: new kakao.maps.LatLng(37.6647307, 127.042094)
    },
    {
        title: '김밥천국',
        latlng: new kakao.maps.LatLng(37.5162183, 127.014719)
    },
    {
        title: '김밥천국',
        latlng: new kakao.maps.LatLng(37.4628328, 126.918722)
    },
    {
        title: '김밥천국 명지전문대점',
        latlng: new kakao.maps.LatLng(37.5845432, 126.924169)
    },
    {
        title: '김밥천국 이대역점',
        latlng: new kakao.maps.LatLng(37.5571839, 126.947081)
    },
    {
        title: '김밥하우스',
        latlng: new kakao.maps.LatLng(37.6335757, 127.039936)
    },
    {
        title: '김밥하우스',
        latlng: new kakao.maps.LatLng(37.5963868, 126.948966)
    },
    {
        title: '김용현베이커리',
        latlng: new kakao.maps.LatLng(37.5779694, 126.971530)
    },
    {
        title: '김재성 교동짬뽕',
        latlng: new kakao.maps.LatLng(37.5407825, 127.129763)
    },
    {
        title: '꼬꼬스토리',
        latlng: new kakao.maps.LatLng(37.6233975, 127.029656)
    },
    {
        title: '꼬망 도시락카페',
        latlng: new kakao.maps.LatLng(37.5067483, 127.083142)
    },
    {
        title: '꼬모도 도시락카페',
        latlng: new kakao.maps.LatLng(37.5017186, 127.097963)
    },
    {
        title: '꽃돼지 수제 돈까스',
        latlng: new kakao.maps.LatLng(37.6178947, 127.082969)
    },
    {
        title: '꾸스꾸스',
        latlng: new kakao.maps.LatLng(37.5778432, 126.971134)
    },
    {
        title: '꿀맛분식',
        latlng: new kakao.maps.LatLng(37.6210985, 126.914548)
    },
    {
        title: '꿀벌식당',
        latlng: new kakao.maps.LatLng(37.4794795, 126.942287)
    },
    {
        title: '난랑',
        latlng: new kakao.maps.LatLng(37.4893777, 127.082162)
    },
    {
        title: '난짜장넌짬뽕',
        latlng: new kakao.maps.LatLng(37.6700015, 127.041949)
    },
    {
        title: '남경',
        latlng: new kakao.maps.LatLng(37.6506850, 127.040726)
    },
    {
        title: '남매떡볶이',
        latlng: new kakao.maps.LatLng(37.6383959, 127.040063)
    },
    {
        title: '낭낭김밥',
        latlng: new kakao.maps.LatLng(37.5027206, 127.095589)
    },
    {
        title: '노리터',
        latlng: new kakao.maps.LatLng(37.5427349, 127.012755)
    },
    {
        title: '노블베이커리',
        latlng: new kakao.maps.LatLng(37.5427349, 127.012755)
    },
    {
        title: '뉴욕핫도그',
        latlng: new kakao.maps.LatLng(37.6469024, 127.035716)
    },
    {
        title: '다림정',
        latlng: new kakao.maps.LatLng(37.5901180, 126.935214)
    },
    {
        title: '다복분식',
        latlng: new kakao.maps.LatLng(37.6457518, 127.053142)
    },
    {
        title: '다올 감자탕,곰탕',
        latlng: new kakao.maps.LatLng(37.5994769, 126.948341)
    },
    {
        title: '달떡볶이',
        latlng: new kakao.maps.LatLng(37.5810472, 126.911244)
    },
    {
        title: '달콤샌드위치커피',
        latlng: new kakao.maps.LatLng(37.6374315, 127.040901)
    },
    {
        title: '닷컴분식',
        latlng: new kakao.maps.LatLng(37.4940133, 126.858631)
    },
    {
        title: '대려도',
        latlng: new kakao.maps.LatLng(37.6579476, 127.038532)
    },
    {
        title: '대복분식',
        latlng: new kakao.maps.LatLng(37.6347939, 127.033365)
    },
    {
        title: '대중관',
        latlng: new kakao.maps.LatLng(37.5638596, 127.087087)
    },
    {
        title: '더착한김밥',
        latlng: new kakao.maps.LatLng(37.5403182, 126.868647)
    },
    {
        title: '던킨도너츠',
        latlng: new kakao.maps.LatLng(37.6680266, 127.046697)
    },
    {
        title: '델리랩햄버거',
        latlng: new kakao.maps.LatLng(37.5850475, 126.923795)
    },
    {
        title: '델리시오소 브리또',
        latlng: new kakao.maps.LatLng(37.5933559, 126.941575)
    },
    {
        title: '도나르스 브레드',
        latlng: new kakao.maps.LatLng(37.5669769, 126.928907)
    },
    {
        title: '도원',
        latlng: new kakao.maps.LatLng(37.5769922, 126.923090)
    },
    {
        title: '돈가스',
        latlng: new kakao.maps.LatLng(37.5955904, 127.061102)
    },
    {
        title: '돈오리',
        latlng: new kakao.maps.LatLng(37.5499398, 126.972288)
    },
    {
        title: '동네빵네 박복만베이커리',
        latlng: new kakao.maps.LatLng(37.5755760, 126.935046)
    },
    {
        title: '동보성',
        latlng: new kakao.maps.LatLng(37.5856655, 126.950083)
    },
    {
        title: '동평원',
        latlng: new kakao.maps.LatLng(37.5751894, 126.921813)
    },
    {
        title: '동화루',
        latlng: new kakao.maps.LatLng(37.6680266, 127.046697)
    },
    {
        title: '동희반점',
        latlng: new kakao.maps.LatLng(37.4723311, 126.935668)
    },
    {
        title: '뚜레주르 애오개역점',
        latlng: new kakao.maps.LatLng(37.5501867, 126.955404)
    },
    {
        title: '뚜레쥬르',
        latlng: new kakao.maps.LatLng(37.6645154, 127.039396)
    },
    {
        title: '뚜레쥬르',
        latlng: new kakao.maps.LatLng(37.6392344, 127.038103)
    },
    {
        title: '뚜레쥬르 가재울점',
        latlng: new kakao.maps.LatLng(37.5743487, 126.917840)
    },
    {
        title: '뚜레쥬르 남가좌점',
        latlng: new kakao.maps.LatLng(37.5750902, 126.921801)
    },
    {
        title: '뚜레쥬르 증산역점',
        latlng: new kakao.maps.LatLng(37.5836059, 126.911093)
    },
    {
        title: '뚜레쥬르 창동SM마트점',
        latlng: new kakao.maps.LatLng(37.6430278, 127.037153)
    },
    {
        title: '뚜레쥬르(선유도역점)',
        latlng: new kakao.maps.LatLng(37.5380919, 126.894369)
    },
    {
        title: '뚜레쥬르(홍제역점)',
        latlng: new kakao.maps.LatLng(37.5857724, 126.947343)
    }
];
// 마커 이미지의 이미지 주소입니다
var imageSrc = "https://cdn.pixabay.com/photo/2014/04/03/10/03/google-309741_960_720.png";
for (var i = 0; i < positions.length; i++) {
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35);
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage // 마커 이미지 
    });
}