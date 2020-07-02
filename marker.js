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
    },
    {
        title: '라온김밥',
        latlng: new kakao.maps.LatLng(37.6282330, 127.039502)
    },
    {
        title: '락궁',
        latlng: new kakao.maps.LatLng(37.6750537, 127.048175)
    },
    {
        title: '락궁',
        latlng: new kakao.maps.LatLng(37.6477520, 127.025110)
    },
    {
        title: '래리성',
        latlng: new kakao.maps.LatLng(37.4892376, 126.891985)
    },
    {
        title: '레드차이나',
        latlng: new kakao.maps.LatLng(37.6657245, 127.033333)
    },
    {
        title: '레스쁘아과자점',
        latlng: new kakao.maps.LatLng(37.5886168, 127.076732)
    },
    {
        title: '로티드뺑',
        latlng: new kakao.maps.LatLng(37.5281554, 126.906680)
    },
    {
        title: '롤리김밥',
        latlng: new kakao.maps.LatLng(37.5491986, 126.850796)
    },
    {
        title: '마실중(ing)',
        latlng: new kakao.maps.LatLng(37.5817120, 126.935652)
    } {
        title: '만다린',
        latlng: new kakao.maps.LatLng(37.4860371, 126.938867)
    },
    {
        title: '만리장성',
        latlng: new kakao.maps.LatLng(37.5044524, 126.936794)
    },
    {
        title: '만리장성',
        latlng: new kakao.maps.LatLng(37.5847729, 126.948725)
    },
    {
        title: '만리장성',
        latlng: new kakao.maps.LatLng(37.5988827, 126.949395)
    },
    {
        title: '만수장',
        latlng: new kakao.maps.LatLng(37.6674365, 127.033039)
    },
    {
        title: '만진루',
        latlng: new kakao.maps.LatLng(37.5991099, 126.920836)
    },
    {
        title: '맘식빵',
        latlng: new kakao.maps.LatLng(37.5582998, 127.087997)
    },
    {
        title: '맛나김밥',
        latlng: new kakao.maps.LatLng(37.4971645, 126.856691)
    },
    {
        title: '맛있는 김밥천국',
        latlng: new kakao.maps.LatLng(37.5000053, 127.151124)
    },
    {
        title: '맛있는집소풍',
        latlng: new kakao.maps.LatLng(37.6843984, 127.043771)
    },
    {
        title: '맷돌로만',
        latlng: new kakao.maps.LatLng(37.5009462, 126.986681)
    },
    {
        title: '멘야산다이메',
        latlng: new kakao.maps.LatLng(37.5817844, 126.999707)
    },
    {
        title: '멜로즈',
        latlng: new kakao.maps.LatLng(37.5306259, 126.996461)
    },
    {
        title: '멸치국수',
        latlng: new kakao.maps.LatLng(37.6557755, 127.040842)
    },
    {
        title: '명동분식',
        latlng: new kakao.maps.LatLng(37.6654535, 127.035827)
    },
    {
        title: '명동찌개마을',
        latlng: new kakao.maps.LatLng(37.6472005, 127.032929)
    },
    {
        title: '명륜진사갈비',
        latlng: new kakao.maps.LatLng(37.4855218, 127.132099)
    },
    {
        title: '명성분식',
        latlng: new kakao.maps.LatLng(37.5489654, 127.171093)
    },
    {
        title: '모닝피자',
        latlng: new kakao.maps.LatLng(37.4519501, 126.908506)
    },
    {
        title: '모두랑 분식',
        latlng: new kakao.maps.LatLng(37.6699923, 127.042573)
    },
    {
        title: '목화할인마트',
        latlng: new kakao.maps.LatLng(37.6435811, 127.069616)
    },
    {
        title: '몽스김밥',
        latlng: new kakao.maps.LatLng(37.4631331, 127.103339)
    },
    {
        title: '미가',
        latlng: new kakao.maps.LatLng(37.5882302, 126.943300)
    },
    {
        title: '미사리밀빛초계국수도봉산점',
        latlng: new kakao.maps.LatLng(37.6869133, 127.040541)
    },
    {
        title: '미소김밥',
        latlng: new kakao.maps.LatLng(37.5539333, 127.020135)
    },
    {
        title: '미스사이공 북가좌점',
        latlng: new kakao.maps.LatLng(37.5791370, 126.911054)
    },
    {
        title: '미스타 홍',
        latlng: new kakao.maps.LatLng(37.5900665, 127.078240)
    },
    {
        title: '미화반점',
        latlng: new kakao.maps.LatLng(37.6551178, 127.040842)
    },
    {
        title: '미옥이네',
        latlng: new kakao.maps.LatLng(37.6650373, 127.041482)
    },
    {
        title: '민들레 김밥과 분식',
        latlng: new kakao.maps.LatLng(37.6460191, 127.037143)
    },
    {
        title: '민들레분식',
        latlng: new kakao.maps.LatLng(37.6713602, 127.046688)
    },
    {
        title: '민카페',
        latlng: new kakao.maps.LatLng(37.6722869, 127.082711)
    },
    {
        title: '밀알셍돈까스',
        latlng: new kakao.maps.LatLng(37.6500452, 127.062199)
    },
    {
        title: '밥은',
        latlng: new kakao.maps.LatLng(37.5808230, 126.925531)
    },
    {
        title: '밥이야기',
        latlng: new kakao.maps.LatLng(37.4666316, 126.902508)
    },
    {
        title: '백가찬',
        latlng: new kakao.maps.LatLng(37.4518618, 126.910879)
    },
    {
        title: '백리향',
        latlng: new kakao.maps.LatLng(37.5781035, 127.058575)
    },
    {
        title: '벧엘제과',
        latlng: new kakao.maps.LatLng(37.6466588, 127.036917)
    },
    {
        title: '보배반점',
        latlng: new kakao.maps.LatLng(37.6183620, 127.025090)
    },
    {
        title: '복만루',
        latlng: new kakao.maps.LatLng(37.5463292, 126.984805)
    },
    {
        title: '복성루',
        latlng: new kakao.maps.LatLng(37.6685261, 127.034819)
    },
    {
        title: '본 설렁탕(송파오금점)',
        latlng: new kakao.maps.LatLng(37.5047016, 127.134293)
    },
    {
        title: '본도시락 (광화문점)',
        latlng: new kakao.maps.LatLng(37.5737712, 126.972969)
    },
    {
        title: '본도시락 (대학로점)',
        latlng: new kakao.maps.LatLng(37.5803518, 127.003986)
    },
    {
        title: '본도시락 (신당점)',
        latlng: new kakao.maps.LatLng(37.5668449, 127.017093)
    },
    {
        title: '본도시락 동대문점',
        latlng: new kakao.maps.LatLng(37.5661161, 127.005752)
    },
    {
        title: '본도시락 동작구청점',
        latlng: new kakao.maps.LatLng(37.5103736, 126.939910)
    },
    {
        title: '본도시락 서울역점',
        latlng: new kakao.maps.LatLng(37.5495882, 126.971507)
    },
    {
        title: '본도시락 신용산점',
        latlng: new kakao.maps.LatLng(37.5255207, 126.964684)
    },
    {
        title: '본도시락 종로3가점',
        latlng: new kakao.maps.LatLng(37.5669624, 126.988513)
    },
    {
        title: '본도시락 회현역점',
        latlng: new kakao.maps.LatLng(37.5582399, 126.981905)
    },
    {
        title: '본도시락(서대문점)',
        latlng: new kakao.maps.LatLng(37.5674980, 126.964607)
    },
    {
        title: '본도시락(서소문점)',
        latlng: new kakao.maps.LatLng(37.5602721, 126.964826)
    },
    {
        title: '본도시락(신촌점)',
        latlng: new kakao.maps.LatLng(7.5586216, 126.939271)
    },
    {
        title: '본도시락(이대점)',
        latlng: new kakao.maps.LatLng(37.5582551, 126.944941)
    },
    {
        title: '본도시락(한남점)',
        latlng: new kakao.maps.LatLng(37.5302835, 127.007718)
    },
    {
        title: '본죽',
        latlng: new kakao.maps.LatLng(37.6055803, 126.910297)
    },
    {
        title: '본죽(인왕산점)',
        latlng: new kakao.maps.LatLng(37.5857816, 126.947740)
    },
    {
        title: '본죽(중곡점)',
        latlng: new kakao.maps.LatLng(37.5653416, 127.080795)
    },
    {
        title: '본죽(홍제점)',
        latlng: new kakao.maps.LatLng(37.5870600, 126.945701)
    },
    {
        title: '봄꽃김밥',
        latlng: new kakao.maps.LatLng(37.5785502, 126.936741)
    },
    {
        title: '봉구스 밥버거',
        latlng: new kakao.maps.LatLng(37.5030297, 127.113062)
    },
    {
        title: '봉구스 밥버거',
        latlng: new kakao.maps.LatLng(37.6017417, 127.080494)
    },
    {
        title: '봉구스 밥버거',
        latlng: new kakao.maps.LatLng(37.5349307, 127.070286)
    },
    {
        title: '봉구스 밥버거',
        latlng: new kakao.maps.LatLng(37.5805344, 126.925135)
    },
    {
        title: '봉구스 밥버거',
        latlng: new kakao.maps.LatLng(37.6562476, 127.028025)
    },
    {
        title: '봉구스밥버거 도봉점',
        latlng: new kakao.maps.LatLng(37.6834247, 127.045607)
    },
    {
        title: '부자네김밥',
        latlng: new kakao.maps.LatLng(37.6105750, 127.035224)
    },
    {
        title: '부흥누릉지오리백숙',
        latlng: new kakao.maps.LatLng(37.4797283, 127.048268)
    },
    {
        title: '북경',
        latlng: new kakao.maps.LatLng(37.6055283, 126.912992)
    },
    {
        title: '분식마루',
        latlng: new kakao.maps.LatLng(37.5840012, 126.922018)
    },
    {
        title: '불란서제과',
        latlng: new kakao.maps.LatLng(37.6340348, 127.041103)
    },
    {
        title: '브레드칸',
        latlng: new kakao.maps.LatLng(37.6388869, 127.022128)
    },
    {
        title: '비커즈 헝그리 (Becuz hungry)',
        latlng: new kakao.maps.LatLng(37.4986318, 126.828891)
    },
    {
        title: '빨간오뎅',
        latlng: new kakao.maps.LatLng(37.6028421, 127.063543)
    },
    {
        title: '빵굼터',
        latlng: new kakao.maps.LatLng(37.4791658, 126.945690)
    },
    {
        title: '빵굽는 쉐프의 꿈',
        latlng: new kakao.maps.LatLng(37.5454012, 126.985178)
    },
    {
        title: '빵내음 솔솔',
        latlng: new kakao.maps.LatLng(37.4488644, 126.903220)
    },
    {
        title: '빵이야기',
        latlng: new kakao.maps.LatLng(37.6791455, 127.044437)
    },
    {
        title: '빵파라다이스',
        latlng: new kakao.maps.LatLng(37.5188791, 126.836503)
    },
    {
        title: '뽀뽀떡볶이',
        latlng: new kakao.maps.LatLng(37.6261029, 127.049776)
    },
    {
        title: '뽕뜨락피자',
        latlng: new kakao.maps.LatLng(37.4865347, 126.902414)
    },
    {
        title: '사보르',
        latlng: new kakao.maps.LatLng(37.5732479, 127.057032)
    },
    {
        title: '사보르김밥용답점',
        latlng: new kakao.maps.LatLng(37.5647890, 127.053901)
    },
    {
        title: '사보르김밥전문점',
        latlng: new kakao.maps.LatLng(37.6037071, 127.042808)
    },
    {
        title: '산동성',
        latlng: new kakao.maps.LatLng(37.6518441, 127.014324)
    },
    {
        title: '삼형제떡볶이',
        latlng: new kakao.maps.LatLng(37.6545378, 127.015865)
    },
    {
        title: '상암점 피자스쿨',
        latlng: new kakao.maps.LatLng(37.5753762, 126.895776)
    },
    {
        title: '상하이',
        latlng: new kakao.maps.LatLng(37.6370086, 127.039439)
    },
    {
        title: '샌드리아 명지대점',
        latlng: new kakao.maps.LatLng(37.5791079, 126.920620)
    },
    {
        title: '생생돈가스',
        latlng: new kakao.maps.LatLng(37.6625532, 127.032799)
    },
    {
        title: '샹도르제과',
        latlng: new kakao.maps.LatLng(37.6512580, 127.050313)
    },
    {
        title: '서울뉴욕제과',
        latlng: new kakao.maps.LatLng(37.6698305, 127.041315)
    },
    {
        title: '서울송파장지역점 고봉민김밥인',
        latlng: new kakao.maps.LatLng(37.4772287, 127.127382)
    },
    {
        title: '서촌명가',
        latlng: new kakao.maps.LatLng(37.5859879, 126.970191)
    },
    {
        title: '석우분식',
        latlng: new kakao.maps.LatLng(37.4804299, 126.983022)
    },
    {
        title: '설궁',
        latlng: new kakao.maps.LatLng(37.6437484, 127.037720)
    },
    {
        title: '',
        latlng: new kakao.maps.LatLng(, )
    },
    {
        title: '성호각',
        latlng: new kakao.maps.LatLng(37.5755760, 126.935046)
    },
    {
        title: '소녀방앗간',
        latlng: new kakao.maps.LatLng(37.5444292, 127.047743)
    },
    {
        title: '소담한',
        latlng: new kakao.maps.LatLng(37.4704022, 126.934483)
    },
    {
        title: '소림성',
        latlng: new kakao.maps.LatLng(37.6630396, 127.033253)
    },
    {
        title: '소풍',
        latlng: new kakao.maps.LatLng(37.6251101, 127.026259)
    },
    {
        title: '송림각',
        latlng: new kakao.maps.LatLng(37.6614194, 127.027132)
    },
    {
        title: '수유리우동 장위점',
        latlng: new kakao.maps.LatLng(37.6137981, 127.042949)
    },
    {
        title: '수타 손짜장',
        latlng: new kakao.maps.LatLng(37.4927426, 127.075799)
    },
    {
        title: '쉐프밥버거(한양여대점)',
        latlng: new kakao.maps.LatLng(37.5611785, 127.047991)
    },
    {
        title: '스떼이끄300g',
        latlng: new kakao.maps.LatLng(37.5585666, 126.937483)
    },
    {
        title: '스파게티스토리',
        latlng: new kakao.maps.LatLng(37.5037836, 127.021186)
    },
    {
        title: '승리원',
        latlng: new kakao.maps.LatLng(37.5444572, 127.045117)
    },
    {
        title: '시스터키친고메',
        latlng: new kakao.maps.LatLng(37.5423240, 126.941853)
    },
    {
        title: '시하네분식',
        latlng: new kakao.maps.LatLng(37.6050147, 127.076806)
    },
    {
        title: '신당분식',
        latlng: new kakao.maps.LatLng(37.6163036, 127.062036)
    },
    {
        title: '신동보성',
        latlng: new kakao.maps.LatLng(37.4834965, 127.121762)
    },
    {
        title: '신세계로 (구.호화반점)',
        latlng: new kakao.maps.LatLng(37.5831434, 126.919302)
    },
    {
        title: '신송분식',
        latlng: new kakao.maps.LatLng(37.6393786, 127.037865)
    },
    {
        title: '신월진미떡볶이',
        latlng: new kakao.maps.LatLng(37.5334513, 126.832352)
    },
    {
        title: '신자금성',
        latlng: new kakao.maps.LatLng(37.5369020, 126.832243)
    },
    {
        title: '신전떡볶이',
        latlng: new kakao.maps.LatLng(37.6840291, 127.043669)
    },
    {
        title: '신참떡볶이 홍제역점',
        latlng: new kakao.maps.LatLng(37.5889781, 126.943491)
    },
    {
        title: '신현무관',
        latlng: new kakao.maps.LatLng(37.5619920, 126.961633)
    },
    {
        title: '심봉사도로케명지대점',
        latlng: new kakao.maps.LatLng(37.5817778, 126.925213)
    },
    {
        title: '아빵',
        latlng: new kakao.maps.LatLng(37.6316946, 127.057381)
    },
    {
        title: '알촌 동국대점',
        latlng: new kakao.maps.LatLng(37.5613229, 126.998576)
    },
    {
        title: '얌샘 홍제점',
        latlng: new kakao.maps.LatLng(37.5847729, 126.948725)
    },
    {
        title: '양가네짬뽕',
        latlng: new kakao.maps.LatLng(37.5364199, 126.855834)
    },
    {
        title: '여수동치즈갈매기 천호점',
        latlng: new kakao.maps.LatLng(37.4930084, 126.986151)
    },
    {
        title: '연화산',
        latlng: new kakao.maps.LatLng(37.5395484, 127.129557)
    },
    {
        title: '열린밥상',
        latlng: new kakao.maps.LatLng(37.5486406, 127.088823)
    },
    {
        title: '영동식당',
        latlng: new kakao.maps.LatLng(37.6741438, 127.047869)
    },
    {
        title: '영월',
        latlng: new kakao.maps.LatLng(37.5658146, 126.928908)
    },
    {
        title: '영화반점',
        latlng: new kakao.maps.LatLng(37.5588098, 126.957006)
    },
    {
        title: '옛고향',
        latlng: new kakao.maps.LatLng(37.5809820, 126.935313)
    },
    {
        title: '옛날짜장',
        latlng: new kakao.maps.LatLng(37.5042454, 126.922363)
    },
    {
        title: '오 킴밥',
        latlng: new kakao.maps.LatLng(37.5908609, 126.942901)
    },
    {
        title: '오!해피데이',
        latlng: new kakao.maps.LatLng(37.5319731, 126.831948)
    },
    {
        title: '오달매즉석떡볶이',
        latlng: new kakao.maps.LatLng(37.5969536, 126.947279)
    },
    {
        title: '오레시피',
        latlng: new kakao.maps.LatLng(37.5743487, 126.917840)
    },
    {
        title: '오렌지김밥(홍제동)',
        latlng: new kakao.maps.LatLng(37.5861868, 126.947309)
    },
    {
        title: '오봉도시락',
        latlng: new kakao.maps.LatLng(37.5828095, 126.950368)
    },
    {
        title: '오즐김밥 돈암점',
        latlng: new kakao.maps.LatLng(37.5947943, 127.010294)
    },
    {
        title: '옥이네',
        latlng: new kakao.maps.LatLng(37.4633463, 126.918518)
    },
    {
        title: '옥이네 돈가스',
        latlng: new kakao.maps.LatLng(37.5775894, 126.882878)
    },
    {
        title: '왕돈가스 왕냉면',
        latlng: new kakao.maps.LatLng(37.5810747, 126.911900)
    },
    {
        title: '왕돈까스',
        latlng: new kakao.maps.LatLng(37.6677314, 127.041041)
    },
    {
        title: '왕십리텐즈힐 파리바게뜨',
        latlng: new kakao.maps.LatLng(37.5693120, 127.026580)
    },
    {
        title: '왕짜장',
        latlng: new kakao.maps.LatLng(37.5781177, 126.909515)
    },
    {
        title: '왕짜장',
        latlng: new kakao.maps.LatLng(37.6469124, 127.032362)
    },
    {
        title: '외대철판마을',
        latlng: new kakao.maps.LatLng(37.5956809, 127.060287)
    },
    {
        title: '요기가 김밥이가',
        latlng: new kakao.maps.LatLng(37.6728114, 127.045113)
    },
    {
        title: '요네바로매점',
        latlng: new kakao.maps.LatLng(37.6640265, 127.046151)
    },
    {
        title: '요리왕',
        latlng: new kakao.maps.LatLng(37.5652859, 127.083251)
    },
    {
        title: '우리김밥',
        latlng: new kakao.maps.LatLng(37.6379995, 127.039700)
    },
    {
        title: '우리분식',
        latlng: new kakao.maps.LatLng(37.5250526, 126.851252)
    },
    {
        title: '원조옛날짜장왕돈까스',
        latlng: new kakao.maps.LatLng(37.5023997, 126.900481)
    },
    {
        title: '원테이블',
        latlng: new kakao.maps.LatLng(37.4493084, 126.906271)
    },
    {
        title: '웰빙김밥',
        latlng: new kakao.maps.LatLng(37.6425319, 127.038241)
    },
    {
        title: '유가네 닭갈비',
        latlng: new kakao.maps.LatLng(37.5631959, 126.985526)
    },
    {
        title: '유가네 닭갈비',
        latlng: new kakao.maps.LatLng(37.5694309, 126.986701)
    },
    {
        title: '유가네닭갈비명동역점',
        latlng: new kakao.maps.LatLng(37.5619166, 126.986137)
    },
    {
        title: '이레',
        latlng: new kakao.maps.LatLng(37.6056673, 126.918326)
    },
    {
        title: '이모네분식',
        latlng: new kakao.maps.LatLng(37.5991257, 126.948761)
    },
    {
        title: '이모랑고모랑',
        latlng: new kakao.maps.LatLng(37.6553490, 127.013667)
    },
    {
        title: '이문238',
        latlng: new kakao.maps.LatLng(37.6018875, 127.062726)
    },
    {
        title: '이바돔감자탕',
        latlng: new kakao.maps.LatLng(37.6631364, 127.041096)
    },
    {
        title: '이삭토스트 광흥창역점',
        latlng: new kakao.maps.LatLng(37.5472211, 126.933962)
    },
    {
        title: '이엔바이(이n바이)',
        latlng: new kakao.maps.LatLng(37.6257321, 127.024662)
    },
    {
        title: '이화원',
        latlng: new kakao.maps.LatLng(37.5874017, 126.944251)
    },
    {
        title: '일락',
        latlng: new kakao.maps.LatLng(37.6510333, 127.013338)
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