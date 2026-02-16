// K-Chicken Sommelier — Real Brand Dataset (Updated)
// Source: User provided JSON

const CHICKEN_RAW_DATA = [
  {
    "brand": "BHC",
    "menu_name": "뿌링클",
    "spiciness": 1,
    "crispiness": 4,
    "flavor_tags": ["단짠", "치즈", "요거트", "시즈닝"],
    "description": "블루치즈, 체다치즈, 양파, 마늘이 함유된 시즈닝을 뿌린 치킨, 뿌링뿌링 소스 필수",
    "composition": ["전체", "반반", "순살", "윙봉", "다리", "콤보"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "BHC",
    "menu_name": "맛초킹",
    "spiciness": 3,
    "crispiness": 3,
    "flavor_tags": ["짭조름", "매콤", "간장", "파향"],
    "description": "숙성 간장과 꿀을 넣어 만든 오리엔탈 블렌드 소스에 고추 토핑, 밥과 잘 어울림",
    "composition": ["전체", "반반", "순살", "윙봉", "다리", "콤보"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "BHC",
    "menu_name": "골드킹",
    "spiciness": 1,
    "crispiness": 4,
    "flavor_tags": ["단짠", "간장", "꿀", "마늘"],
    "description": "깊은 맛의 숙성 간장과 달콤한 꿀, 알싸한 마늘의 조화",
    "composition": ["전체", "반반", "순살", "윙봉", "다리", "콤보"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "BHC",
    "menu_name": "레드킹",
    "spiciness": 4,
    "crispiness": 3,
    "flavor_tags": ["알싸함", "매콤", "마늘"],
    "description": "입안 가득 느껴지는 알싸한 매운맛, 청양고추 토핑",
    "composition": ["전체", "반반", "순살", "윙봉", "다리", "콤보"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "BHC",
    "menu_name": "포테킹 후라이드",
    "spiciness": 1,
    "crispiness": 5,
    "flavor_tags": ["고소함", "감자", "바삭"],
    "description": "튀김옷에 얇게 채 썬 감자가 박혀있어 극강의 바삭함과 고소함을 자랑함",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "BBQ",
    "menu_name": "황금올리브치킨",
    "spiciness": 1,
    "crispiness": 5,
    "flavor_tags": ["고소", "담백", "육즙"],
    "description": "최상급 엑스트라 버진 올리브유를 사용하여 바삭하고 육즙이 풍부한 후라이드의 정석",
    "composition": ["전체", "반반", "순살", "윙봉", "다리", "콤보"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "BBQ",
    "menu_name": "자메이카 통다리구이",
    "spiciness": 2,
    "crispiness": 1,
    "flavor_tags": ["이국적", "훈연향", "감칠맛"],
    "description": "자메이카 저크 소스를 발라 두 번 구운 넓적다리 살, 독특한 향신료 향",
    "composition": ["통다리"],
    "cooking_method": "오븐구이"
  },
  {
    "brand": "BBQ",
    "menu_name": "황금올리브 핫크리스피",
    "spiciness": 3,
    "crispiness": 5,
    "flavor_tags": ["매콤", "바삭", "깔끔"],
    "description": "황금올리브의 바삭함에 매콤함을 더해 느끼함을 잡은 메뉴",
    "composition": ["전체", "반반", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "교촌치킨",
    "menu_name": "허니콤보",
    "spiciness": 1,
    "crispiness": 4,
    "flavor_tags": ["달콤", "짭짤", "꿀"],
    "description": "교촌 특유의 얇고 단단한 튀김옷에 허니 소스를 입힘, 눅눅해지지 않는 바삭함",
    "composition": ["콤보", "전체", "순살", "윙봉"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "교촌치킨",
    "menu_name": "교촌오리지날",
    "spiciness": 1,
    "crispiness": 3,
    "flavor_tags": ["짭조름", "마늘간장", "감칠맛"],
    "description": "교촌의 시그니처 마늘 간장 소스, 식으면 짠맛이 더 강하게 느껴짐",
    "composition": ["전체", "콤보", "윙봉", "다리"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "교촌치킨",
    "menu_name": "레드콤보",
    "spiciness": 4,
    "crispiness": 3,
    "flavor_tags": ["매콤", "칼칼함", "깔끔"],
    "description": "국내산 청양 홍고추를 착즙해 만든 소스, 인위적이지 않고 깔끔하게 매운맛",
    "composition": ["콤보", "전체", "순살", "윙봉", "다리"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "교촌치킨",
    "menu_name": "블랙시크릿",
    "spiciness": 2,
    "crispiness": 3,
    "flavor_tags": ["향신료", "간장", "오향"],
    "description": "다섯 가지 맛과 향을 내는 오향에 맛간장과 청양고추를 더한 중화풍 치킨",
    "composition": ["전체", "순살", "콤보"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "굽네치킨",
    "menu_name": "고추바사삭",
    "spiciness": 3,
    "crispiness": 3,
    "flavor_tags": ["알싸함", "깔끔", "청양고추"],
    "description": "청양고추 파우더를 입혀 오븐에 구움, 마블링/고블링 소스와 함께 먹는 것이 특징",
    "composition": ["전체", "순살", "윙봉", "콤보"],
    "cooking_method": "오븐구이"
  },
  {
    "brand": "굽네치킨",
    "menu_name": "볼케이노",
    "spiciness": 5,
    "crispiness": 1,
    "flavor_tags": ["화끈함", "불맛", "매움"],
    "description": "불맛이 활활 타오르는 매운맛, 마그마 소스로 치밥(치킨+밥)을 해먹는 것이 인기",
    "composition": ["전체", "순살", "윙봉", "콤보"],
    "cooking_method": "오븐구이"
  },
  {
    "brand": "굽네치킨",
    "menu_name": "오리지널",
    "spiciness": 1,
    "crispiness": 2,
    "flavor_tags": ["담백", "육즙", "건강"],
    "description": "기름기를 쏙 뺀 오븐구이 치킨의 원조, 다이어트 메뉴로 선호됨",
    "composition": ["전체", "순살", "윙봉", "콤보"],
    "cooking_method": "오븐구이"
  },
  {
    "brand": "처갓집양념치킨",
    "menu_name": "슈프림양념치킨",
    "spiciness": 1,
    "crispiness": 2,
    "flavor_tags": ["달콤", "느끼", "부드러움"],
    "description": "바삭한 후라이드 위에 허니올리고당 야채양념과 신비의 하얀 소스가 뿌려짐",
    "composition": ["전체", "순살", "두마리"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "처갓집양념치킨",
    "menu_name": "와락간장치킨",
    "spiciness": 2,
    "crispiness": 3,
    "flavor_tags": ["짭짤", "매콤", "불맛"],
    "description": "깊은 볼(Wok)에서 강한 불로 볶아내어 간장 소스가 튀김옷에 깊이 배어듦",
    "composition": ["전체", "순살", "윙봉"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "페리카나",
    "menu_name": "양념치킨",
    "spiciness": 1,
    "crispiness": 2,
    "flavor_tags": ["달콤", "마늘", "고추장"],
    "description": "대한민국 양념치킨의 원조, 마늘과 고추장 베이스의 옛날 양념 맛",
    "composition": ["전체", "반반", "순살", "두마리", "윙봉", "다리"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "멕시카나",
    "menu_name": "땡초치킨",
    "spiciness": 5,
    "crispiness": 2,
    "flavor_tags": ["얼얼함", "화끈", "고추"],
    "description": "인위적인 캡사이신이 아닌 실제 고추를 갈아 넣어 만든 깔끔하고 강렬한 매운맛",
    "composition": ["전체", "반반", "순살", "두마리", "윙봉"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "멕시카나",
    "menu_name": "치토스치킨",
    "spiciness": 2,
    "crispiness": 4,
    "flavor_tags": ["짭짤", "스낵맛", "시즈닝"],
    "description": "롯데제과 치토스와 콜라보, 과자 시즈닝 맛이 나며 엔젤코코 소스와 함께 제공",
    "composition": ["전체", "순살", "윙봉"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "네네치킨",
    "menu_name": "스노윙치즈",
    "spiciness": 1,
    "crispiness": 4,
    "flavor_tags": ["치즈", "짭짤", "고소"],
    "description": "입안에서 녹는 진한 치즈 가루가 듬뿍 뿌려진 치킨, 어린이 선호도 1위",
    "composition": ["전체", "반반", "순살", "윙봉", "다리"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "네네치킨",
    "menu_name": "오리엔탈 파닭",
    "spiciness": 2,
    "crispiness": 3,
    "flavor_tags": ["톡쏨", "상큼", "아삭"],
    "description": "싱싱한 파채와 새콤달콤 짭조름한 오리엔탈 겨자 소스의 조화",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "네네치킨",
    "menu_name": "청양마요치킨",
    "spiciness": 3,
    "crispiness": 3,
    "flavor_tags": ["매콤", "크리미", "양파"],
    "description": "아삭한 양파와 매콤한 청양고추, 고소한 마요 소스의 삼박자",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "호식이두마리치킨",
    "menu_name": "매운간장치킨",
    "spiciness": 2,
    "crispiness": 3,
    "flavor_tags": ["짭짤", "매콤", "가성비"],
    "description": "호식이두마리치킨의 베스트 메뉴, 짭조름한 간장에 끝맛이 살짝 매콤함",
    "composition": ["두마리", "순살", "전체"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "60계치킨",
    "menu_name": "간지치킨",
    "spiciness": 1,
    "crispiness": 3,
    "flavor_tags": ["단짠", "고소", "누룽지"],
    "description": "특제 간장 소스와 누룽지 가루가 어우러져 고소하고 담백한 맛",
    "composition": ["전체", "순살", "윙봉", "다리", "콤보"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "60계치킨",
    "menu_name": "고추치킨",
    "spiciness": 2,
    "crispiness": 3,
    "flavor_tags": ["깔끔", "매콤", "감칠맛"],
    "description": "감칠맛 나는 특제 간장 소스에 맵지 않은 고추로 버무려 깔끔한 맛",
    "composition": ["전체", "순살", "윙봉", "다리", "콤보"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "60계치킨",
    "menu_name": "크크크치킨",
    "spiciness": 1,
    "crispiness": 5,
    "flavor_tags": ["극강바삭", "고소", "크럼블"],
    "description": "크럼블, 크런치, 크리스피의 약자. 바삭함의 끝판왕이며 전용 소스에 찍어 먹음",
    "composition": ["전체", "순살", "윙봉", "다리", "콤보"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "노랑통닭",
    "menu_name": "엄청큰후라이드",
    "spiciness": 1,
    "crispiness": 5,
    "flavor_tags": ["카레향", "바삭", "옛날통닭"],
    "description": "가마솥에 튀겨 더욱 바삭하고 카레 향이 은은하게 나는 시장 통닭 스타일",
    "composition": ["전체", "반반", "순살"],
    "cooking_method": "가마솥튀김"
  },
  {
    "brand": "노랑통닭",
    "menu_name": "알싸한 마늘치킨",
    "spiciness": 2,
    "crispiness": 4,
    "flavor_tags": ["알싸", "새콤", "마늘"],
    "description": "바삭한 순살 치킨을 특제 마늘 소스에 찍어 먹거나 부어 먹는 메뉴",
    "composition": ["순살"],
    "cooking_method": "가마솥튀김"
  },
  {
    "brand": "자담치킨",
    "menu_name": "맵슐랭치킨",
    "spiciness": 3,
    "crispiness": 3,
    "flavor_tags": ["달콤", "매콤", "부드러움"],
    "description": "마요 소스와 청양고추의 조화, 첫맛은 부드럽고 끝맛은 강렬하게 매움",
    "composition": ["전체", "반반", "순살", "윙봉", "콤보"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "푸라닭",
    "menu_name": "블랙알리오",
    "spiciness": 1,
    "crispiness": 3,
    "flavor_tags": ["깊은간장", "마늘", "고소"],
    "description": "진한 간장 소스와 담백한 마늘 칩 토핑, 오븐에 굽고 다시 튀겨 겉바속촉",
    "composition": ["전체", "반반", "순살", "윙봉", "콤보"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "푸라닭",
    "menu_name": "고추마요",
    "spiciness": 3,
    "crispiness": 2,
    "flavor_tags": ["크리미", "매콤", "할라피뇨"],
    "description": "고소한 마요네즈와 매콤한 청양고추의 만남, 할라피뇨 토핑이 느낌함을 잡아줌",
    "composition": ["전체", "반반", "순살", "윙봉", "콤보"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "푸라닭",
    "menu_name": "콘소메이징",
    "spiciness": 1,
    "crispiness": 3,
    "flavor_tags": ["단짠", "옥수수", "고소"],
    "description": "옥수수 후레이크와 리얼 옥수수가 들어간 단짠단짠 메뉴",
    "composition": ["전체", "반반", "순살", "윙봉", "콤보"],
    "cooking_method": "오븐후라이드"
  },
  {
    "brand": "지코바치킨",
    "menu_name": "숯불양념구이",
    "spiciness": 3,
    "crispiness": 1,
    "flavor_tags": ["불맛", "매콤", "치밥"],
    "description": "튀김옷 없이 구워낸 치킨에 매콤한 양념, 남은 소스에 밥을 비벼 먹는 것이 국룰",
    "composition": ["순살", "전체"],
    "cooking_method": "숯불/오븐구이"
  },
  {
    "brand": "지코바치킨",
    "menu_name": "숯불소금구이",
    "spiciness": 1,
    "crispiness": 1,
    "flavor_tags": ["담백", "고소", "깔끔"],
    "description": "양념 없이 소금만으로 간을 하여 닭 본연의 담백한 맛을 살림",
    "composition": ["순살", "전체"],
    "cooking_method": "숯불/오븐구이"
  },
  {
    "brand": "가마치통닭",
    "menu_name": "한마리통닭",
    "spiciness": 2,
    "crispiness": 4,
    "flavor_tags": ["고소", "옛날맛", "매콤염지"],
    "description": "닭을 조각내지 않고 통째로 튀겨 육즙을 가둠, 껍질이 바삭하고 기본 염지가 매콤함",
    "composition": ["통마리"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "맘스터치",
    "menu_name": "싸이순살",
    "spiciness": 2,
    "crispiness": 4,
    "flavor_tags": ["매콤", "바삭", "가성비"],
    "description": "100% 닭다리살로 만들어 부드럽고 쫄깃함, 기본적으로 살짝 매콤한 염지",
    "composition": ["순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "맘스터치",
    "menu_name": "꿀간장누룽지치킨",
    "spiciness": 1,
    "crispiness": 5,
    "flavor_tags": ["달콤", "바삭", "크런치"],
    "description": "달콤 짭짤한 꿀간장 소스에 바삭한 라이스 크런치를 올림",
    "composition": ["순살", "전체"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "또래오래",
    "menu_name": "갈릭반핫양념반",
    "spiciness": 3,
    "crispiness": 3,
    "flavor_tags": ["마늘", "매콤", "진리"],
    "description": "또래오래의 베스트셀러 조합, 짭조름한 갈릭과 매콤한 핫양념의 밸런스",
    "composition": ["반반", "순살", "윙봉", "다리", "콤보"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "후라이드참잘하는집",
    "menu_name": "후라이드",
    "spiciness": 2,
    "crispiness": 5,
    "flavor_tags": ["매콤", "바삭", "기본기"],
    "description": "브랜드 이름처럼 기본 후라이드가 가장 인기, 기본 염지가 꽤 매콤한 편",
    "composition": ["전체", "반반", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "후라이드참잘하는집",
    "menu_name": "킹트리플 양념치킨",
    "spiciness": 2,
    "crispiness": 3,
    "flavor_tags": ["크리미", "치즈", "양념"],
    "description": "양념치킨 위에 치즈킹 소스와 크림킹 소스를 뿌려 풍부한 맛을 냄",
    "composition": ["전체", "반반", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "바른치킨",
    "menu_name": "대새레드",
    "spiciness": 4,
    "crispiness": 3,
    "flavor_tags": ["매콤", "감칠맛", "새우"],
    "description": "탱글탱글한 랍스터 새우가 토핑으로 올라간 매운 치킨",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "치킨마루",
    "menu_name": "크리스피",
    "spiciness": 2,
    "crispiness": 5,
    "flavor_tags": ["바삭", "가성비", "매콤"],
    "description": "저렴한 가격에 즐길 수 있는 바삭한 크리스피 치킨",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "땅땅치킨",
    "menu_name": "세트3번",
    "spiciness": 2,
    "crispiness": 2,
    "flavor_tags": ["단짠", "훈연", "진리"],
    "description": "땅땅치킨의 영원한 베스트셀러, 허브순살치킨과 땅땅불갈비의 조합",
    "composition": ["순살"],
    "cooking_method": "오븐+튀김"
  },
  {
    "brand": "티바두마리치킨",
    "menu_name": "알마간",
    "spiciness": 2,
    "crispiness": 3,
    "flavor_tags": ["알싸", "마늘", "간장"],
    "description": "알싸한 마늘과 간장의 조화, 생마늘 토핑이 특징",
    "composition": ["두마리", "한마리", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "순수치킨",
    "menu_name": "고마치킨",
    "spiciness": 3,
    "crispiness": 3,
    "flavor_tags": ["고추", "마늘", "매콤"],
    "description": "고추와 마늘이 듬뿍 들어간 양념 치킨",
    "composition": ["전체", "순살", "반반"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "아웃닭",
    "menu_name": "린드필드 후라이드 순살",
    "spiciness": 1,
    "crispiness": 5,
    "flavor_tags": ["고소", "바삭", "푸짐"],
    "description": "감자튀김과 떡튀김을 산더미처럼 쌓아주는 것이 특징",
    "composition": ["순살", "뼈"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "또봉이통닭",
    "menu_name": "또봉이통닭",
    "spiciness": 2,
    "crispiness": 4,
    "flavor_tags": ["옛날맛", "바삭", "담백"],
    "description": "얇은 튀김옷의 옛날 통닭 스타일, 저렴한 가격",
    "composition": ["통마리"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "가마로강정",
    "menu_name": "달콤강정",
    "spiciness": 1,
    "crispiness": 4,
    "flavor_tags": ["달콤", "쫀득", "데리야끼"],
    "description": "쌀가루 파우더를 사용해 식어도 바삭하고 쫀득한 닭강정",
    "composition": ["순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "가마로강정",
    "menu_name": "매콤강정",
    "spiciness": 3,
    "crispiness": 4,
    "flavor_tags": ["매콤", "쫀득", "땅콩"],
    "description": "청양고추 등을 사용한 매콤한 소스의 닭강정",
    "composition": ["순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "KFC",
    "menu_name": "핫크리스피치킨",
    "spiciness": 3,
    "crispiness": 5,
    "flavor_tags": ["매콤", "바삭", "물결무늬"],
    "description": "KFC의 대표 메뉴, 두꺼운 물결무늬 튀김옷과 매콤한 염지",
    "composition": ["조각"],
    "cooking_method": "압력튀김"
  },
  {
    "brand": "KFC",
    "menu_name": "오리지널치킨",
    "spiciness": 1,
    "crispiness": 2,
    "flavor_tags": ["짭짤", "후추향", "부드러움"],
    "description": "커넬 샌더스의 11가지 비밀 양념, 바삭하기보다 눅눅하고 짭조름한 맛이 특징",
    "composition": ["조각"],
    "cooking_method": "압력튀김"
  },
  {
    "brand": "BHC",
    "menu_name": "커리퀸",
    "spiciness": 2,
    "crispiness": 4,
    "flavor_tags": ["커리", "이국적", "단짠"],
    "description": "정통 커리 파우더와 바삭한 치킨의 만남, 레드커리 소스를 찍어 먹는 별미",
    "composition": ["전체", "순살", "윙봉", "다리", "콤보"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "BHC",
    "menu_name": "치퐁당 후라이드",
    "spiciness": 1,
    "crispiness": 5,
    "flavor_tags": ["새우", "마늘", "후레이크"],
    "description": "새우와 마늘 향이 가득한 후레이크가 치킨 위에 듬뿍 올라간 메뉴",
    "composition": ["전체", "순살", "윙봉", "다리", "콤보"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "BBQ",
    "menu_name": "소이갈릭스",
    "spiciness": 1,
    "crispiness": 3,
    "flavor_tags": ["간장", "마늘", "짭조름"],
    "description": "숙성 된 간장 소스에 다진 마늘을 넣어 깊고 짭조름한 풍미를 냄",
    "composition": ["전체", "반반", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "BBQ",
    "menu_name": "자메이카 소떡만나",
    "spiciness": 2,
    "crispiness": 2,
    "flavor_tags": ["소시지", "떡", "저크소스"],
    "description": "자메이카 저크 소스를 베이스로 소시지와 떡을 함께 즐기는 양념 치킨",
    "composition": ["순살", "전체", "콤보"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "교촌치킨",
    "menu_name": "살살치킨",
    "spiciness": 1,
    "crispiness": 5,
    "flavor_tags": ["담백", "쌀가루", "고소"],
    "description": "가슴살과 다리살에 쌀가루를 입혀 튀겨낸 고소하고 담백한 순살 치킨",
    "composition": ["순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "교촌치킨",
    "menu_name": "리얼후라이드",
    "spiciness": 1,
    "crispiness": 4,
    "flavor_tags": ["오트밀", "퀴노아", "건강"],
    "description": "오트밀, 퀴노아 등 슈퍼푸드를 튀김옷에 함유해 바삭함을 극대화한 후라이드",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "굽네치킨",
    "menu_name": "치즈바사삭",
    "spiciness": 1,
    "crispiness": 3,
    "flavor_tags": ["치즈", "고소", "오븐구이"],
    "description": "오븐에 구운 치킨에 콰트로 치즈 파우더를 뿌려 진한 치즈 풍미를 냄",
    "composition": ["전체", "순살", "윙봉", "콤보"],
    "cooking_method": "오븐구이"
  },
  {
    "brand": "굽네치킨",
    "menu_name": "오븐바사삭",
    "spiciness": 1,
    "crispiness": 4,
    "flavor_tags": ["담백", "현미", "바삭"],
    "description": "쌀가루와 현미가루를 입혀 오븐에 구워 기름기는 빼고 바삭함은 살림",
    "composition": ["전체", "순살", "윙봉", "콤보"],
    "cooking_method": "오븐구이"
  },
  {
    "brand": "푸라닭",
    "menu_name": "투움바치킨",
    "spiciness": 2,
    "crispiness": 2,
    "flavor_tags": ["로제", "크리미", "느끼함"],
    "description": "진한 투움바 크림 소스를 버무려 고소하고 매콤한 맛, 떡 사리와 잘 어울림",
    "composition": ["전체", "순살", "윙봉", "콤보"],
    "cooking_method": "오븐후라이드"
  },
  {
    "brand": "푸라닭",
    "menu_name": "바질페스타",
    "spiciness": 1,
    "crispiness": 2,
    "flavor_tags": ["바질", "향긋", "고급"],
    "description": "향긋한 바질 페스토 소스와 파마산 치즈가 어우러진 요리 같은 치킨",
    "composition": ["전체", "순살", "윙봉", "콤보"],
    "cooking_method": "오븐후라이드"
  },
  {
    "brand": "푸라닭",
    "menu_name": "매드갈릭",
    "spiciness": 1,
    "crispiness": 3,
    "flavor_tags": ["마늘", "알싸", "달콤"],
    "description": "마늘에 미친 맛, 갈릴 소스와 갈릭 크러쉬가 듬뿍 들어간 마늘 치킨",
    "composition": ["전체", "순살", "윙봉", "콤보"],
    "cooking_method": "오븐후라이드"
  },
  {
    "brand": "푸라닭",
    "menu_name": "파불로치킨",
    "spiciness": 2,
    "crispiness": 2,
    "flavor_tags": ["불고기", "파향", "단짠"],
    "description": "파와 불고기 맛의 조화, 한국인이 좋아하는 익숙한 불고기 양념 맛",
    "composition": ["전체", "순살", "윙봉", "콤보"],
    "cooking_method": "오븐후라이드"
  },
  {
    "brand": "효도치킨",
    "menu_name": "꽈리멸치킨",
    "spiciness": 2,
    "crispiness": 4,
    "flavor_tags": ["꽈리고추", "멸치", "단짠"],
    "description": "미슐랭 셰프가 만든 브랜드. 간장 베이스에 튀긴 꽈리고추와 멸치를 토핑한 요리 같은 치킨",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "효도치킨",
    "menu_name": "연근지치킨",
    "spiciness": 3,
    "crispiness": 4,
    "flavor_tags": ["연근", "매콤", "고소"],
    "description": "바삭하게 튀긴 연근 칩을 올리고 매콤한 소스로 맛을 낸 효도치킨의 양대 산맥",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "누구나홀딱반한닭",
    "menu_name": "후레쉬쌈닭",
    "spiciness": 1,
    "crispiness": 2,
    "flavor_tags": ["쌈", "야채", "다이어트"],
    "description": "오븐에 구운 순살 치킨을 신선한 야채와 함께 쌈무에 싸 먹는 웰빙 메뉴",
    "composition": ["순살"],
    "cooking_method": "오븐구이"
  },
  {
    "brand": "누구나홀딱반한닭",
    "menu_name": "바사칸닭",
    "spiciness": 1,
    "crispiness": 5,
    "flavor_tags": ["오븐", "감자튀김", "담백"],
    "description": "기름에 튀기지 않고 오븐에 구웠으나 튀김처럼 매우 바삭한 식감을 구현함",
    "composition": ["전체", "순살"],
    "cooking_method": "오븐베이크"
  },
  {
    "brand": "만석닭강정",
    "menu_name": "보통맛(뼈/순살)",
    "spiciness": 2,
    "crispiness": 4,
    "flavor_tags": ["속초명물", "식은후", "달콤"],
    "description": "전국 3대 닭강정. 식었을 때 더 바삭하고 맛있는 것으로 유명한 조청 소유 강정",
    "composition": ["순살", "전체"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "만석닭강정",
    "menu_name": "핫끈한맛",
    "spiciness": 4,
    "crispiness": 4,
    "flavor_tags": ["청양고추", "매콤", "속초"],
    "description": "기존 만석닭강정에 청양고추를 더해 알싸하고 매운맛을 강화한 버전",
    "composition": ["순살", "전체"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "생활맥주",
    "menu_name": "앵그리버드 블랙",
    "spiciness": 2,
    "crispiness": 4,
    "flavor_tags": ["간장", "마늘", "숙성"],
    "description": "숙성 간장과 마늘을 넣어 만든 깊은 맛의 간장 치킨",
    "composition": ["순살", "전체"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "순살만공격",
    "menu_name": "치파포 세트",
    "spiciness": 2,
    "crispiness": 4,
    "flavor_tags": ["다양함", "가성비", "파티"],
    "description": "5가지 맛(치폴레, 송송파닭 등)을 한 번에 즐길 수 있는 순살 종합 선물 세트",
    "composition": ["순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "후라이드참잘하는집",
    "menu_name": "눈꽃치즈치킨",
    "spiciness": 1,
    "crispiness": 4,
    "flavor_tags": ["치즈", "시즈닝", "단짠"],
    "description": "눈꽃처럼 하연 치즈 시즈닝을 듬뿍 뿌린 단짠단짠 메뉴",
    "composition": ["전체", "순살", "반반"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "멕시카나",
    "menu_name": "불닭치킨",
    "spiciness": 5,
    "crispiness": 2,
    "flavor_tags": ["극강매운맛", "삼양", "화끈"],
    "description": "삼양 불닭볶음면 소스를 그대로 사용한 콜라보 메뉴, 매우 매움",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "멕시카나",
    "menu_name": "마늘알마니치킨",
    "spiciness": 2,
    "crispiness": 4,
    "flavor_tags": ["마늘큐브", "아삭", "새콤"],
    "description": "갈지 않은 마늘 큐브가 듬뿍 들어가 아삭하게 씹히는 식감이 특징",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "네네치킨",
    "menu_name": "소이크런치윙봉",
    "spiciness": 1,
    "crispiness": 5,
    "flavor_tags": ["감자", "바삭", "단짠"],
    "description": "감자튀김과 함께 제공되며 간장 베이스에 바삭함을 강조한 윙봉 메뉴",
    "composition": ["윙봉", "콤보"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "네네치킨",
    "menu_name": "레드마요치킨",
    "spiciness": 4,
    "crispiness": 3,
    "flavor_tags": ["매콤", "고소", "자극적"],
    "description": "청양마요의 빨간 맛 버전, 매운 소스와 마요네즈의 조화",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "호식이두마리치킨",
    "menu_name": "땡초불꽃치킨",
    "spiciness": 4,
    "crispiness": 2,
    "flavor_tags": ["화끈", "고추", "스트레스해소"],
    "description": "땡초(청양고추)를 사용하여 입안이 얼얼해지는 매운 양념 치킨",
    "composition": ["두마리", "전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "호식이두마리치킨",
    "menu_name": "타코마요치킨",
    "spiciness": 2,
    "crispiness": 3,
    "flavor_tags": ["멕시칸", "이국적", "칩스"],
    "description": "치폴레 소스와 타코 칩 토핑을 얹어 멕시코 타코 맛을 재현함",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "60계치킨",
    "menu_name": "6초치킨",
    "spiciness": 5,
    "crispiness": 3,
    "flavor_tags": ["눈물", "뒤늦게옴", "강렬"],
    "description": "먹고 6초 뒤에 매운맛이 터진다는 의미, 60계에서 가장 매운 메뉴",
    "composition": ["전체", "순살", "윙봉"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "60계치킨",
    "menu_name": "짜장치킨",
    "spiciness": 1,
    "crispiness": 2,
    "flavor_tags": ["짜장", "달콤", "아이들"],
    "description": "진한 짜장 소스를 버무려 아이들이 밥과 함께 먹기 좋은 메뉴",
    "composition": ["전체", "순살", "윙봉"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "자담치킨",
    "menu_name": "핫후라이드",
    "spiciness": 2,
    "crispiness": 5,
    "flavor_tags": ["매콤", "깔끔", "동물복지"],
    "description": "기본 후라이드 염지를 매콤하게 하여 느끼하지 않고 깔끔한 맛",
    "composition": ["전체", "반반", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "자담치킨",
    "menu_name": "크리미양파치킨",
    "spiciness": 1,
    "crispiness": 3,
    "flavor_tags": ["양파", "상큼", "소스부먹"],
    "description": "얇게 슬라이스한 양파와 상큼한 화이트 소스를 곁들여 먹는 메뉴",
    "composition": ["순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "바른치킨",
    "menu_name": "대새블랙",
    "spiciness": 2,
    "crispiness": 3,
    "flavor_tags": ["간장", "새우", "고급"],
    "description": "통통한 랍스터 새우와 깊은 풍미의 간장 소스가 어우러진 프리미엄 치킨",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "바른치킨",
    "menu_name": "현미바삭",
    "spiciness": 1,
    "crispiness": 5,
    "flavor_tags": ["담백", "현미", "건강"],
    "description": "튀김옷에 볶은 현미 파우더를 넣어 더욱 고소하고 바삭한 기본 메뉴",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "또래오래",
    "menu_name": "핫양념치킨",
    "spiciness": 4,
    "crispiness": 2,
    "flavor_tags": ["케첩맛X", "화끈", "진리"],
    "description": "갈반핫반의 그 '핫' 양념. 달지 않고 직관적으로 매운맛이 특징",
    "composition": ["전체", "반반", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "또래오래",
    "menu_name": "콘듀치킨",
    "spiciness": 1,
    "crispiness": 4,
    "flavor_tags": ["옥수수", "시즈닝", "할라피뇨"],
    "description": "콘 시즈닝이 뿌려진 치킨을 할라피뇨가 들어간 콘듀 디핑소스에 찍어 먹음",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "처갓집양념치킨",
    "menu_name": "슈프림양념치킨 핫",
    "spiciness": 3,
    "crispiness": 2,
    "flavor_tags": ["매콤", "부드러움", "느끼함"],
    "description": "기존 슈프림 양념치킨의 느끼함을 잡기 위해 매운 소스를 더한 버전",
    "composition": ["전체", "순살", "두마리"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "처갓집양념치킨",
    "menu_name": "XO양념치킨",
    "spiciness": 2,
    "crispiness": 2,
    "flavor_tags": ["해산물", "감칠맛", "XO소스"],
    "description": "고급 요리에 쓰이는 XO 소스를 활용하여 감칠맛을 극대화한 양념 치킨",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "노랑통닭",
    "menu_name": "깐풍치킨",
    "spiciness": 2,
    "crispiness": 4,
    "flavor_tags": ["중화풍", "새콤달콤", "파향"],
    "description": "특제 깐풍 소스와 야채, 떡을 센 불에 볶아낸 중화요리 스타일",
    "composition": ["순살", "전체", "반반"],
    "cooking_method": "가마솥튀김"
  },
  {
    "brand": "노랑통닭",
    "menu_name": "고추장더한치킨",
    "spiciness": 3,
    "crispiness": 3,
    "flavor_tags": ["고추장", "진함", "한국적"],
    "description": "고추장의 텁텁함은 없애고 깔끔하게 매운맛을 살린 양념 치킨",
    "composition": ["순살", "전체"],
    "cooking_method": "가마솥튀김"
  },
  {
    "brand": "깐부치킨",
    "menu_name": "크리스피치킨",
    "spiciness": 2,
    "crispiness": 5,
    "flavor_tags": ["정석", "바삭", "매콤염지"],
    "description": "깐부치킨의 대표 메뉴, 튀김옷이 바삭하고 속살은 매콤하게 염지됨",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "깐부치킨",
    "menu_name": "마늘전기구이",
    "spiciness": 1,
    "crispiness": 1,
    "flavor_tags": ["기름쏙", "마늘", "담백"],
    "description": "전기구이 통닭 위에 알싸한 다진 마늘 토핑을 듬뿍 올린 메뉴",
    "composition": ["통마리"],
    "cooking_method": "전기구이"
  },
  {
    "brand": "맘스터치",
    "menu_name": "치파오치킨",
    "spiciness": 3,
    "crispiness": 3,
    "flavor_tags": ["사천식", "라유", "볶음"],
    "description": "라유에 볶아 은은한 파향과 흑임자, 사천식 소스의 매콤함이 특징",
    "composition": ["순살", "전체"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "맘스터치",
    "menu_name": "간장마늘치킨",
    "spiciness": 1,
    "crispiness": 3,
    "flavor_tags": ["단짠", "마늘", "무난"],
    "description": "알싸한 마늘 향과 달콤 짭짜름한 간장 소스의 호불호 없는 맛",
    "composition": ["순살", "전체"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "페리카나",
    "menu_name": "마늘치킨",
    "spiciness": 2,
    "crispiness": 2,
    "flavor_tags": ["마늘즙", "건강", "알싸"],
    "description": "치킨에 100% 국내산 마늘을 직접 갈아 넣어 알싸한 풍미를 살림",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "KFC",
    "menu_name": "블랙라벨치킨",
    "spiciness": 2,
    "crispiness": 5,
    "flavor_tags": ["프리미엄", "다리살", "촉촉"],
    "description": "뼈 없는 닭다리살만 사용하여 육즙이 가득하고 튀김옷은 크리스피함",
    "composition": ["조각"],
    "cooking_method": "압력튀김"
  },
  {
    "brand": "땅땅치킨",
    "menu_name": "허브순살치킨",
    "spiciness": 1,
    "crispiness": 4,
    "flavor_tags": ["달콤", "간장", "바삭"],
    "description": "바삭한 순살 치킨을 달콤한 허브 간장 소에 버무린 땅땅치킨의 스테디셀러",
    "composition": ["순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "땅땅치킨",
    "menu_name": "땅땅불갈비",
    "spiciness": 1,
    "crispiness": 1,
    "flavor_tags": ["훈연", "윤기", "오븐"],
    "description": "오븐에 구워 기름기를 빼고 달콤 짭짤한 갈비 소스를 바른 순살 치킨",
    "composition": ["순살"],
    "cooking_method": "오븐구이"
  },
  {
    "brand": "아웃닭",
    "menu_name": "스펜서 매운양념치킨",
    "spiciness": 3,
    "crispiness": 4,
    "flavor_tags": ["매콤", "푸짐", "바삭"],
    "description": "아웃닭 특유의 산더미 감자튀김과 함께 나오는 매콤한 양념 치킨",
    "composition": ["순살", "전체"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "치킨마루",
    "menu_name": "빠사칸현미",
    "spiciness": 1,
    "crispiness": 5,
    "flavor_tags": ["고소", "곡물", "가성비"],
    "description": "튀김옷에 볶은 현미를 넣어 식감이 매우 바삭하고 고소함",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "가마치통닭",
    "menu_name": "똥집튀김",
    "spiciness": 2,
    "crispiness": 5,
    "flavor_tags": ["쫄깃", "별미", "안주"],
    "description": "치킨 메뉴는 아니지만 가마치통닭에서 치킨만큼 많이 팔리는 인기 사이드",
    "composition": ["단품"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "신포닭강정",
    "menu_name": "원조닭강정",
    "spiciness": 3,
    "crispiness": 3,
    "flavor_tags": ["물엿", "꾸덕", "인천명물"],
    "description": "인천 신포시장의 명물. 물엿을 많이 넣어 윤기가 흐르고 꾸덕하며 꽤 매콤함",
    "composition": ["전체"],
    "cooking_method": "가마솥튀김"
  },
  {
    "brand": "다사랑치킨",
    "menu_name": "후라이드",
    "spiciness": 1,
    "crispiness": 4,
    "flavor_tags": ["숙성", "특유의향", "전라도"],
    "description": "전라도 지역 강자. 특유의 숙성 향과 맛이 있어 마니아층이 매우 두터움",
    "composition": ["전체", "순살"],
    "cooking_method": "일반튀김"
  },
  {
    "brand": "교촌치킨",
    "menu_name": "교촌반반시리즈",
    "spiciness": 2,
    "crispiness": 3,
    "flavor_tags": ["마늘간장", "매콤", "스테디"],
    "description": "마늘 간장 맛(오리지날)과 매콤한 맛(레드)을 동시에 즐기는 가장 인기 있는 구성",
    "composition": ["전체", "윙봉", "다리", "콤보", "순살"],
    "cooking_method": "일반튀김"
  }
];

// Quiz configuration matches the user's requested 4 categories:
// 1. Spiciness (매운정도) - 1 to 5
// 2. Crispiness (바삭함) - 1 to 5
// 3. Composition (구성) - Hard filter (Boneless, Whole, Wings/Legs, Combo, Any)
// 4. Flavor (맛특징) - Tags selection

const QUIZ_QUESTIONS = [
  {
    id: 'spiciness',
    title: '매운 정도는?',
    type: 'scale',
    options: [
      { label: '안 매운 (진라면 순한맛)', value: 1 },
      { label: '살짝 매콤 (신라면 수준)', value: 2 },
      { label: '매콤 (불닭볶음면 수준)', value: 3 },
      { label: '매운 (핵불닭 수준)', value: 4 },
      { label: '아주 매운 (신의 영역)', value: 5 }
    ]
  },
  {
    id: 'crispiness',
    title: '바삭함 정도는?',
    type: 'scale',
    options: [
      { label: '부드러운 (1단계)', value: 1 },
      { label: '약간 바삭 (2단계)', value: 2 },
      { label: '바삭 (3단계)', value: 3 },
      { label: '아주 바삭 (4단계)', value: 4 },
      { label: '크런치 (5단계)', value: 5 }
    ]
  },
  {
    id: 'composition',
    title: '선호하는 부위는?',
    type: 'filter',
    options: [
      { label: '상관없음', value: 'any' },
      { label: '순살', value: '순살' },
      { label: '콤보 (다리+날개)', value: '콤보' },
      { label: '윙봉', value: '윙봉' },
      { label: '다리만', value: '다리' },
      { label: '한마리 (뼈)', value: '전체' }
    ]
  },
  {
    id: 'flavor',
    title: '원하는 맛 특징은?',
    type: 'tags',
    options: [
      { label: '단짠', value: '단짠' },
      { label: '고소', value: '고소' },
      { label: '매콤', value: '매콤' },
      { label: '치즈', value: '치즈' },
      { label: '마늘', value: '마늘' },
      { label: '간장', value: '간장' },
      { label: '깔끔', value: '깔끔' },
      { label: '크리미', value: '크리미' },
      { label: '불맛', value: '불맛' }
    ]
  }
];

// Helper to reliably get domain for brand images (if websites were provided)
// Since raw data doesn't have websites, we'll map common ones or use placeholders if needed.
const BRAND_WEBSITES = {
  "BHC": "https://www.bhc.co.kr",
  "BBQ": "https://bbq.co.kr",
  "교촌치킨": "https://www.kyochon.com",
  "굽네치킨": "https://www.goobne.co.kr",
  "처갓집양념치킨": "https://www.cheogajip.co.kr",
  "페리카나": "https://www.pelicana.co.kr",
  "멕시카나": "https://www.mexicana.co.kr",
  "네네치킨": "https://nenechicken.com",
  "호식이두마리치킨": "https://www.9922.co.kr",
  "60계치킨": "https://www.60chicken.co.kr",
  "노랑통닭": "https://www.norangtongdak.co.kr",
  "자담치킨": "https://www.ejadam.co.kr",
  "푸라닭": "https://puradakchicken.com",
  "지코바치킨": "https://www.gcova.co.kr",
  "가마치통닭": "https://www.gamachi.co.kr",
  "맘스터치": "https://momstouch.co.kr",
  "또래오래": "https://www.toreore.com",
  "후라이드참잘하는집": "https://www.hoocham.com",
  "바른치킨": "https://barunchicken.com",
  "치킨마루": "http://chickenmaru.co.kr",
  "땅땅치킨": "https://www.codd.co.kr",
  "티바두마리치킨": "https://www.tiba.co.kr",
  "순수치킨": "http://www.soonsoochicken.com",
  "아웃닭": "http://outdark.co.kr",
  "또봉이통닭": "https://www.ttobongee.com",
  "가마로강정": "http://gamaro.co.kr",
  "KFC": "https://www.kfckorea.com",
  "효도치킨": "http://hyodochicken.com",
  "누구나홀딱반한닭": "http://www.nu-na.co.kr",
  "만석닭강정": "http://www.mansuk.kr",
  "다사랑치킨": "http://www.dasarangchicken.com",
  "생활맥주": "https://dailybeer.co.kr",
  "순살만공격": "https://sunsoman.com",
  "후라이드참잘하는집": "http://www.hoocham.com"
};

function getDomainFromUrl(url) {
  if (!url) return '';
  const match = String(url).match(/^https?:\/\/([^/?#]+)/i);
  if (!match) return '';
  return match[1].replace(/^www\./, '');
}

function buildBrandImageUrl(brandName) {
  const url = BRAND_WEBSITES[brandName];
  if (!url) return '';
  const domain = getDomainFromUrl(url);
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
}

// ========== WIKIMEDIA COMMONS IMAGE POOLS ==========
// Restored from previous version (commit 06483dd)
function buildCommonsImageUrl(filename) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}`;
}

function hashSeed(text) {
  return text.split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
}

function pickFromPool(pool, seedText) {
  return pool[hashSeed(seedText) % pool.length];
}

const REAL_MENU_IMAGE_POOL = {
  fried: [
    buildCommonsImageUrl('Korean Fried Chicken.jpg'),
    buildCommonsImageUrl('Korean Yangnyeom chicken.jpg'),
    buildCommonsImageUrl('Korean fried chicken bbq.jpg'),
    buildCommonsImageUrl('Korean_fried_chicken_4.jpg'),
    buildCommonsImageUrl('Korean fried chicken (409217776).jpg'),
    buildCommonsImageUrl('Korean fried chicken (banban).jpg'),
    buildCommonsImageUrl('Korean fried chicken (banban) (cropped).jpg')
  ],
  spicy: [
    buildCommonsImageUrl('Korean fried chicken 7 dari.jpg'),
    buildCommonsImageUrl('Korean fried chicken 5 padak.jpg'),
    buildCommonsImageUrl('Korean Yangnyeom chicken.jpg'),
    buildCommonsImageUrl('Korean_fried_chicken_4.jpg'),
    buildCommonsImageUrl('Buffalo_wings.jpg')
  ],
  saucy: [
    buildCommonsImageUrl('Korean Yangnyeom chicken.jpg'),
    buildCommonsImageUrl('Korean fried chicken bbq.jpg'),
    buildCommonsImageUrl('Korean fried chicken (banban).jpg'),
    buildCommonsImageUrl('Korean_fried_chicken_4.jpg'),
    buildCommonsImageUrl('Fried_Chicken_Wings,_Oct_2025.jpg')
  ],
  wing: [
    buildCommonsImageUrl('Fried_Chicken_Wings_(54282490120).jpg'),
    buildCommonsImageUrl('Fried_Chicken_Wings_(52769476180).jpg'),
    buildCommonsImageUrl('Fried_Chicken_Wings,_Oct_2025.jpg'),
    buildCommonsImageUrl('Buffalo_Wings.jpg')
  ],
  roast: [
    buildCommonsImageUrl('Roast_Chicken.jpg'),
    buildCommonsImageUrl('Roast_Chicken_(505826806).jpg'),
    buildCommonsImageUrl('Roast_Chicken_(6987686841).jpg'),
    buildCommonsImageUrl('Grilled_chicken.JPG'),
    buildCommonsImageUrl('GRILLED_CHICKEN.jpg'),
    buildCommonsImageUrl('Grilled_chickens.jpg')
  ],
  gangjeong: [
    buildCommonsImageUrl('Korean Yangnyeom chicken.jpg'),
    buildCommonsImageUrl('Korean_fried_chicken_4.jpg')
  ]
};

// Determine image category based on menu characteristics
function buildMenuImageUrl(item) {
  const name = item.menu_name || '';
  const method = item.cooking_method || '';
  const tags = item.flavor_tags || [];
  const comp = item.composition || [];

  // Roast / grilled / oven items
  if (/오븐|구이|숯불/.test(method) || /구이/.test(name)) {
    return pickFromPool(REAL_MENU_IMAGE_POOL.roast, name);
  }
  // Gangjeong (sweet-spicy glazed)
  if (/강정/.test(name)) {
    return pickFromPool(REAL_MENU_IMAGE_POOL.gangjeong, name);
  }
  // Wing-specific
  if (comp.length === 1 && comp[0] === '윙봉') {
    return pickFromPool(REAL_MENU_IMAGE_POOL.wing, name);
  }
  // Spicy items (spiciness >= 4)
  if (item.spiciness >= 4) {
    return pickFromPool(REAL_MENU_IMAGE_POOL.spicy, name);
  }
  // Saucy items (양념, 간장, 소스 based)
  if (tags.some(t => ['달콤', '단짠', '크리미', '고추장', '느끼'].includes(t)) ||
    /양념|간장|마요|소스/.test(name)) {
    return pickFromPool(REAL_MENU_IMAGE_POOL.saucy, name);
  }
  // Default: fried
  return pickFromPool(REAL_MENU_IMAGE_POOL.fried, name);
}

// Map raw data to the structure the app expects (flat list)
const MENU_ITEMS = CHICKEN_RAW_DATA.map((item, index) => {
  return {
    id: `menu_${index}`,
    name: item.menu_name,
    brand: item.brand,
    spiciness: item.spiciness,   // 1-5
    crispiness: item.crispiness, // 1-5
    composition: item.composition, // Array of strings
    flavor_tags: item.flavor_tags, // Array of strings
    description: item.description,
    cooking_method: item.cooking_method,
    // Add computed fields for UI compat
    brandImage: buildBrandImageUrl(item.brand),
    image: buildMenuImageUrl(item),
    fallbackImage: `https://placehold.co/400x300/E31837/FFFFFF?text=${encodeURIComponent(item.menu_name)}`,
    website: BRAND_WEBSITES[item.brand] || '#',
    menuPage: BRAND_WEBSITES[item.brand] ? `${BRAND_WEBSITES[item.brand]}/menu` : '#',
    badge: determineBadge(item)
  };
});

function determineBadge(item) {
  if (item.spiciness >= 4) return 'Spicy';
  if (item.crispiness >= 5) return 'Extra Crispy';
  if (item.flavor_tags.includes('가성비')) return 'Best Value';
  return 'Top Pick';
}

console.log(`Loaded ${MENU_ITEMS.length} menu items from new dataset.`);

// ========== RESULT CARD TRANSLATIONS ==========
// Menu name translations (ko is default from raw data)
const MENU_NAME_TRANSLATIONS = {
  "뿌링클": { en: "Ppuringkle", zh: "薯条克", ja: "プリンクル" },
  "맛초킹": { en: "Matcho King", zh: "味超王", ja: "マッチョキング" },
  "골드킹": { en: "Gold King", zh: "黄金王", ja: "ゴールドキング" },
  "레드킹": { en: "Red King", zh: "红辣王", ja: "レッドキング" },
  "포테킹 후라이드": { en: "Potato King Fried", zh: "薯仔王炸鸡", ja: "ポテキングフライド" },
  "황금올리브치킨": { en: "Golden Olive Chicken", zh: "黄金橄榄鸡", ja: "黄金オリーブチキン" },
  "자메이카 통다리구이": { en: "Jamaica Grilled Drumstick", zh: "牙买加烤鸡腿", ja: "ジャマイカ焼きもも" },
  "황금올리브 핫크리스피": { en: "Golden Olive Hot Crispy", zh: "黄金橄榄辣脆鸡", ja: "黄金オリーブホットクリスピー" },
  "허니콤보": { en: "Honey Combo", zh: "蜂蜜组合", ja: "ハニーコンボ" },
  "교촌오리지날": { en: "Kyochon Original", zh: "校村原味", ja: "キョチョンオリジナル" },
  "레드콤보": { en: "Red Combo", zh: "红辣组合", ja: "レッドコンボ" },
  "블랙시크릿": { en: "Black Secret", zh: "黑色秘密", ja: "ブラックシークレット" },
  "고추바사삭": { en: "Pepper Crunch", zh: "辣椒脆", ja: "唐辛子クランチ" },
  "볼케이노": { en: "Volcano", zh: "火山辣", ja: "ボルケーノ" },
  "오리지널": { en: "Original", zh: "原味", ja: "オリジナル" },
  "슈프림양념치킨": { en: "Supreme Seasoned", zh: "至尊调味鸡", ja: "シュプリーム味付けチキン" },
  "와락간장치킨": { en: "Warak Soy Sauce", zh: "酱油鸡", ja: "ワラク醤油チキン" },
  "양념치킨": { en: "Seasoned Chicken", zh: "调味炸鸡", ja: "ヤンニョムチキン" },
  "땡초치킨": { en: "Ddangcho Chicken", zh: "辣椒鸡", ja: "タンチョチキン" },
  "치토스치킨": { en: "Cheetos Chicken", zh: "芝多司鸡", ja: "チートスチキン" },
  "스노윙치즈": { en: "Snowing Cheese", zh: "飘雪芝士", ja: "スノーイングチーズ" },
  "오리엔탈 파닭": { en: "Oriental Green Onion", zh: "东方葱鸡", ja: "オリエンタルネギチキン" },
  "청양마요치킨": { en: "Cheongyang Mayo", zh: "青阳蛋黄酱鸡", ja: "チョンヤンマヨチキン" },
  "매운간장치킨": { en: "Spicy Soy Sauce", zh: "辣酱油鸡", ja: "辛い醤油チキン" },
  "간지치킨": { en: "Ganzi Chicken", zh: "感性鸡", ja: "カンジチキン" },
  "고추치킨": { en: "Pepper Chicken", zh: "辣椒鸡", ja: "唐辛子チキン" },
  "크크크치킨": { en: "KKK Chicken", zh: "咯咯咯鸡", ja: "クククチキン" },
  "엄청큰후라이드": { en: "Super Big Fried", zh: "超大炸鸡", ja: "超ビッグフライド" },
  "알싸한 마늘치킨": { en: "Spicy Garlic", zh: "蒜香鸡", ja: "ピリ辛ガーリックチキン" },
  "맵슐랭치킨": { en: "Mapshulang Chicken", zh: "辣味大师鸡", ja: "マプシュランチキン" },
  "블랙알리오": { en: "Black Aglio", zh: "黑蒜油", ja: "ブラックアーリオ" },
  "고추마요": { en: "Pepper Mayo", zh: "辣椒蛋黄酱", ja: "唐辛子マヨ" },
  "콘소메이징": { en: "Consomme-zing", zh: "清汤味炸鸡", ja: "コンソメージング" },
  "숯불양념구이": { en: "Charcoal Grilled Seasoned", zh: "炭烤调味鸡", ja: "炭火焼きヤンニョム" },
  "숯불소금구이": { en: "Charcoal Grilled Salt", zh: "炭烤盐味鸡", ja: "炭火焼き塩" },
  "한마리통닭": { en: "Whole Chicken", zh: "一整只鸡", ja: "まるごとチキン" },
  "싸이순살": { en: "Thigh Boneless", zh: "去骨鸡腿", ja: "サイ純サル" },
  "꿀간장누룽지치킨": { en: "Honey Soy Crispy Rice", zh: "蜜酱油锅巴鸡", ja: "ハニー醤油おこげチキン" },
  "갈릭반핫양념반": { en: "Half Garlic Half Hot", zh: "半蒜半辣", ja: "ハーフガーリックハーフホット" },
  "후라이드": { en: "Classic Fried", zh: "经典炸鸡", ja: "フライドチキン" },
  "킹트리플 양념치킨": { en: "King Triple Seasoned", zh: "王三倍调味鸡", ja: "キングトリプルヤンニョム" },
  "대새레드": { en: "Red Shrimp", zh: "大虾红", ja: "テセレッド" },
  "커리퀸": { en: "Curry Queen", zh: "咖喱女王", ja: "カレークイーン" },
  "치퐁당 후라이드": { en: "Chipongdang Fried", zh: "起泡唐炸鸡", ja: "チポンダンフライド" },
  "소이갈릭스": { en: "Soy Garlics", zh: "酱香大蒜", ja: "ソイガーリックス" },
  "자메이카 소떡만나": { en: "Jamaica Sotteok", zh: "牙买加香肠年糕", ja: "ジャマイカソトック" },
  "살살치킨": { en: "Salsal Chicken", zh: "酥脆米粉鸡", ja: "サルサルチキン" },
  "리얼후라이드": { en: "Real Fried", zh: "真实炸鸡", ja: "リアルフライド" },
  "치즈바사삭": { en: "Cheese Basasak", zh: "芝士脆脆", ja: "チーズバササク" },
  "오븐바사삭": { en: "Oven Basasak", zh: "烤箱脆脆", ja: "オーブンバササク" },
  "투움바치킨": { en: "Toowoomba Chicken", zh: "杜温巴炸鸡", ja: "トゥウムバチキン" },
  "바질페스타": { en: "Basil Festa", zh: "罗勒庆典", ja: "バジルフェスタ" },
  "매드갈릭": { en: "Mad Garlic", zh: "狂气大蒜", ja: "マッドガーリック" },
  "파불로치킨": { en: "Pabullo Chicken", zh: "葱牛炸鸡", ja: "パブロチキン" },
  "꽈리멸치킨": { en: "Ggwari Myeol", zh: "辣椒小鱼干鸡", ja: "クァリミョルチキン" },
  "연근지치킨": { en: "Yeongeunji Chicken", zh: "莲藕片炸鸡", ja: "ヨングンジチキン" },
  "후레쉬쌈닭": { en: "Fresh Wrap Chicken", zh: "鲜嫩蔬菜卷鸡", ja: "フレッシュ包み鶏" },
  "바사칸닭": { en: "Basakan Chicken", zh: "香脆烤鸡", ja: "バサカンチキン" },
  "보통맛(뼈/순살)": { en: "Original Dakgangjeong", zh: "原味糖醋鸡", ja: "元祖タッカンジョン" },
  "핫끈한맛": { en: "Hot Spicy Dakgangjeong", zh: "香辣糖醋鸡", ja: "激辛タッカンジョン" },
  "앵그리버드 블랙": { en: "Angry Bird Black", zh: "愤怒小鸟黑酱", ja: "アングリーバードブラック" },
  "치파포 세트": { en: "Chipapo Set", zh: "智利辣酱炸鸡组合", ja: "チパポセット" },
  "눈꽃치즈치킨": { en: "Snow Cheese Chicken", zh: "雪花芝士鸡", ja: "スノーチーズチキン" },
  "불닭치킨": { en: "Buldak Chicken", zh: "火辣鸡", ja: "ブルダックチキン" },
  "마늘알마니치킨": { en: "Garlic Armani", zh: "大蒜阿玛尼", ja: "ニンニクアルマーニ" },
  "소이크런치윙봉": { en: "Soy Crunch Wings", zh: "酱香酥脆翅尖", ja: "ソイクランチ手羽" },
  "레드마요치킨": { en: "Red Mayo Chicken", zh: "红辣蛋黄酱", ja: "レッドマヨチキン" },
  "땡초불꽃치킨": { en: "Ddangcho Fire", zh: "辣椒火爆鸡", ja: "タンチョ火炎チキン" },
  "타코마요치킨": { en: "Taco Mayo Chicken", zh: "塔可蛋黄酱", ja: "タコマヨチキン" },
  "6초치킨": { en: "6-Second Chicken", zh: "6秒炸鸡", ja: "6秒チキン" },
  "짜장치킨": { en: "Jajang Chicken", zh: "炸酱鸡", ja: "ジャジャンチキン" },
  "핫후라이드": { en: "Hot Fried", zh: "辣味炸鸡", ja: "ホットフライド" },
  "크리미양파치킨": { en: "Creamy Onion", zh: "奶油洋葱鸡", ja: "クリーミー玉ねぎチキン" },
  "대새블랙": { en: "Daese Black", zh: "大虾黑酱", ja: "テセブラック" },
  "현미바삭": { en: "Brown Rice Crispy", zh: "玄米酥脆", ja: "玄米パリパリ" },
  "핫양념치킨": { en: "Hot Seasoned", zh: "香辣调味鸡", ja: "ホットヤンニョム" },
  "콘듀치킨": { en: "Corn-due Chicken", zh: "玉米芝士鸡", ja: "コンデュチキン" },
  "슈프림양념치킨 핫": { en: "Supreme Hot", zh: "至尊辣味", ja: "シュプリームホット" },
  "XO양념치킨": { en: "XO Seasoned", zh: "XO酱调味", ja: "XOヤンニョム" },
  "깐풍치킨": { en: "Kkanpung Chicken", zh: "干烹鸡", ja: "カンプンチキン" },
  "고추장더한치킨": { en: "Gochujang Plus", zh: "苦椒酱鸡", ja: "コチュジャンチキン" },
  "크리스피치킨": { en: "Crispy Chicken", zh: "酥脆炸鸡", ja: "クリスピーチキン" },
  "마늘전기구이": { en: "Garlic Electric Roast", zh: "蒜香电烤鸡", ja: "ニンニク電気釜焼き" },
  "치파오치킨": { en: "Chipao Chicken", zh: "旗袍炸鸡", ja: "チパオチキン" },
  "간장마늘치킨": { en: "Soy Garlic Chicken", zh: "酱油大蒜鸡", ja: "醤油ニンニクチキン" },
  "마늘치킨": { en: "Garlic Chicken", zh: "大蒜炸鸡", ja: "ニンニクチキン" },
  "블랙라벨치킨": { en: "Black Label", zh: "黑标炸鸡", ja: "ブラックラベル" },
  "허브순살치킨": { en: "Herb Boneless", zh: "香草去骨鸡", ja: "ハーブ純サル" },
  "땅땅불갈비": { en: "Ttang Ttang Bulgabi", zh: "当当火烤排骨", ja: "タンタン火カルビ" },
  "스펜서 매운양념치킨": { en: "Spencer Spicy", zh: "斯宾塞香辣", ja: "スペンサーホット" },
  "빠사칸현미": { en: "Basakan Brown Rice", zh: "酥脆玄米", ja: "パサカン玄米" },
  "똥집튀김": { en: "Fried Chicken Gizzard", zh: "炸鸡胗", ja: "砂肝揚げ" },
  "원조닭강정": { en: "Original Dakgangjeong", zh: "元祖糖醋鸡", ja: "元祖タッカンジョン" },
  "교촌반반시리즈": { en: "Kyochon Half & Half", zh: "校村半半组合", ja: "キョチョン半々" },
  "크리스피": { en: "Crispy", zh: "脆皮鸡", ja: "クリスピー" },
  "세트3번": { en: "Set #3", zh: "套餐3号", ja: "セット3番" },
  "알마간": { en: "Almagan", zh: "阿尔玛甘", ja: "アルマガン" },
  "고마치킨": { en: "Goma Chicken", zh: "芝麻鸡", ja: "ゴマチキン" },
  "린드필드 후라이드 순살": { en: "Lindfield Fried Boneless", zh: "林德菲尔德去骨炸鸡", ja: "リンドフィールドフライド純サル" },
  "또봉이통닭": { en: "Ddobongi Whole Chicken", zh: "又蓬伊整鸡", ja: "トボンイ丸鶏" },
  "달콤강정": { en: "Sweet Gangjeong", zh: "甜味韩式炸鸡块", ja: "甘い江正" },
  "매콤강정": { en: "Spicy Gangjeong", zh: "辣味韩式炸鸡块", ja: "辛い江正" },
  "핫크리스피치킨": { en: "Hot Crispy Chicken", zh: "辣脆鸡", ja: "ホットクリスピーチキン" },
  "오리지널치킨": { en: "Original Chicken", zh: "原味炸鸡", ja: "オリジナルチキン" }
};

// Flavor tag translations
const FLAVOR_TAG_TRANSLATIONS = {
  "단짠": { en: "Sweet & Salty", zh: "甜咸", ja: "甘じょっぱい" },
  "치즈": { en: "Cheese", zh: "芝士", ja: "チーズ" },
  "요거트": { en: "Yogurt", zh: "酸奶", ja: "ヨーグルト" },
  "시즈닝": { en: "Seasoning", zh: "调味", ja: "シーズニング" },
  "짭조름": { en: "Savory", zh: "咸鲜", ja: "塩味" },
  "매콤": { en: "Spicy", zh: "微辣", ja: "ピリ辛" },
  "간장": { en: "Soy Sauce", zh: "酱油", ja: "醤油" },
  "파향": { en: "Green Onion", zh: "葱香", ja: "ネギ風味" },
  "꿀": { en: "Honey", zh: "蜂蜜", ja: "ハチミツ" },
  "마늘": { en: "Garlic", zh: "大蒜", ja: "ニンニク" },
  "알싸함": { en: "Tingling Spice", zh: "麻辣", ja: "ピリッと辛い" },
  "고소함": { en: "Nutty", zh: "香浓", ja: "香ばしい" },
  "감자": { en: "Potato", zh: "薯仔", ja: "ポテト" },
  "바삭": { en: "Crispy", zh: "酥脆", ja: "サクサク" },
  "고소": { en: "Savory", zh: "香浓", ja: "香ばしい" },
  "담백": { en: "Light", zh: "清淡", ja: "あっさり" },
  "육즙": { en: "Juicy", zh: "多汁", ja: "ジューシー" },
  "이국적": { en: "Exotic", zh: "异域", ja: "エキゾチック" },
  "훈연향": { en: "Smoky", zh: "烟熏", ja: "燻製風味" },
  "감칠맛": { en: "Umami", zh: "鲜味", ja: "旨味" },
  "달콤": { en: "Sweet", zh: "甜蜜", ja: "甘い" },
  "짭짤": { en: "Salty", zh: "咸", ja: "塩気" },
  "마늘간장": { en: "Garlic Soy", zh: "蒜酱油", ja: "ニンニク醤油" },
  "매운": { en: "Hot Spicy", zh: "辣", ja: "辛い" },
  "깔끔": { en: "Clean", zh: "清爽", ja: "さっぱり" },
  "불맛": { en: "Smoky Flame", zh: "炭火味", ja: "炭火焼き" },
  "견과류": { en: "Nutty", zh: "坚果", ja: "ナッツ" },
  "달콤한": { en: "Sweet", zh: "甜", ja: "甘い" },
  "매운맛": { en: "Spicy", zh: "辣味", ja: "辛味" },
  "크리미": { en: "Creamy", zh: "奶油", ja: "クリーミー" },
  "허브향": { en: "Herbal", zh: "草药", ja: "ハーブ" },
  "레몬": { en: "Lemon", zh: "柠檬", ja: "レモン" },
  "트러플": { en: "Truffle", zh: "松露", ja: "トリュフ" },
  "강정": { en: "Gangjeong", zh: "韩式酥鸡", ja: "カンジョン" },
  "가성비": { en: "Value", zh: "性价比", ja: "コスパ" },
  "양념": { en: "Seasoned", zh: "调味", ja: "味付け" },
  "고추": { en: "Pepper", zh: "辣椒", ja: "唐辛子" },
  "바베큐": { en: "BBQ", zh: "烧烤", ja: "バーベキュー" },
  "콘소메": { en: "Consomme", zh: "清汤", ja: "コンソメ" },
  "누룽지": { en: "Crispy Rice", zh: "锅巴", ja: "おこげ" },
  "부드러움": { en: "Tender", zh: "嫩滑", ja: "柔らか" },
  "숯불향": { en: "Charcoal", zh: "炭火", ja: "炭火" },
  "소금구이": { en: "Salt Grilled", zh: "盐烤", ja: "塩焼き" }
};

// Badge translations
const BADGE_TRANSLATIONS = {
  'Spicy': { ko: '매운맛', zh: '辣味', ja: '辛口', en: 'Spicy' },
  'Extra Crispy': { ko: '극강바삭', zh: '超脆', ja: '激サク', en: 'Extra Crispy' },
  'Best Value': { ko: '가성비', zh: '超值', ja: 'コスパ', en: 'Best Value' },
  'Top Pick': { ko: '추천', zh: '人气推荐', ja: 'おすすめ', en: 'Top Pick' }
};


const UI_STRINGS = {
  en: {
    startBtn: "Find My Chicken Match",
    heroHeadline: "Find your K-Chicken Soulmate 🍗",
    heroSub: "Take the 30-second quiz to discover which Korean chicken brand perfectly matches your taste profile.",
    resultTitle: "Your Perfect Match",
    matchScore: "Match",
    spiciness: "Spiciness",
    crispiness: "Crispiness",
    flavor: "Flavor",
    composition: "Cut",
    nextBtn: "Next",
    skipBtn: "Skip",
    backBtn: "Back",
    shareBtn: "Share",
    unlockPremium: "Unlock Premium",
    tryAgain: "Try another profile",
    seeTopPicks: "See Today's Top Picks",
    premiumUnlocks: "Premium Unlocks"
  },
  ko: {
    startBtn: "나의 치킨 찾기",
    heroHeadline: "나의 치킨 소울메이트 찾기 🍗",
    heroSub: "30초 퀴즈로 당신의 입맛에 딱 맞는 치킨 브랜드를 찾아보세요.",
    resultTitle: "당신의 완벽한 매치",
    matchScore: "일치도",
    spiciness: "매운맛",
    crispiness: "바삭함",
    flavor: "맛 특징",
    composition: "부위 구성",
    nextBtn: "다음",
    skipBtn: "건너뛰기",
    backBtn: "뒤로",
    shareBtn: "공유하기",
    unlockPremium: "프리미엄 잠금해제",
    tryAgain: "다른 취향으로 다시하기",
    seeTopPicks: "오늘의 추천 보기",
    premiumUnlocks: "프리미엄 혜택"
  },
  zh: {
    startBtn: "寻找我的炸鸡伴侣",
    heroHeadline: "寻找你的韩式炸鸡灵魂伴侣 🍗",
    heroSub: "参加30秒的测试，发现最适合你口味的韩式炸鸡品牌。",
    resultTitle: "你的完美匹配",
    matchScore: "匹配度",
    spiciness: "辣度",
    crispiness: "酥脆度",
    flavor: "风味",
    composition: "部位",
    nextBtn: "下一步",
    skipBtn: "跳过",
    backBtn: "返回",
    shareBtn: "分享",
    unlockPremium: "解锁高级版",
    tryAgain: "重试其他口味",
    seeTopPicks: "查看今日推荐",
    premiumUnlocks: "高级版福利"
  },
  ja: {
    startBtn: "私のチキンを探す",
    heroHeadline: "あなたのチキン・ソウルメイトを探そう 🍗",
    heroSub: "30秒のクイズで、あなたの好みにぴったりの韓国チキンブランドを見つけましょう。",
    resultTitle: "あなたにぴったりのチキン",
    matchScore: "マッチ度",
    spiciness: "辛さ",
    crispiness: "サクサク感",
    flavor: "風味",
    composition: "部位",
    nextBtn: "次へ",
    skipBtn: "スキップ",
    backBtn: "戻る",
    shareBtn: "共有",
    unlockPremium: "プレミアムを解除",
    tryAgain: "別の好みで試す",
    seeTopPicks: "今日のおすすめを見る",
    premiumUnlocks: "プレミアム特典"
  }
};

// Simplified translation object for the new quiz structure
const QUIZ_TRANSLATIONS = {
  spiciness: {
    title: { en: "How spicy?", ko: "매운 정도는?", zh: "有多辣？", ja: "辛さは？" },
    options: {
      1: { en: "Mild", ko: "안 매운 (진라면 순한맛)", zh: "不辣", ja: "辛くない" },
      2: { en: "Slightly Spicy", ko: "살짝 매콤 (신라면 수준)", zh: "微辣", ja: "少し辛い" },
      3: { en: "Spicy", ko: "매콤 (불닭볶음면 수준)", zh: "辣", ja: "辛い" },
      4: { en: "Very Spicy", ko: "매운 (핵불닭 수준)", zh: "很辣", ja: "とても辛い" },
      5: { en: "Extreme", ko: "아주 매운 (신의 영역)", zh: "变态辣", ja: "激辛" }
    }
  },
  crispiness: {
    title: { en: "How crispy?", ko: "바삭함 정도는?", zh: "有多脆？", ja: "サクサク感は？" },
    options: {
      1: { en: "Soft", ko: "부드러운", zh: "软嫩", ja: "柔らかい" },
      2: { en: "Slightly Crispy", ko: "약간 바삭", zh: "微脆", ja: "少しサクサク" },
      3: { en: "Crispy", ko: "바삭", zh: "酥脆", ja: "サクサク" },
      4: { en: "Very Crispy", ko: "아주 바삭", zh: "很脆", ja: "とてもサクサク" },
      5: { en: "Crunchy", ko: "크런치 (극강바삭)", zh: "咔滋脆", ja: "ザクザク" }
    }
  },
  composition: {
    title: { en: "Preferred Cut?", ko: "선호하는 부위는?", zh: "喜欢的部位？", ja: "好みの部位は？" },
    options: {
      'any': { en: "Any", ko: "상관없음", zh: "无所谓", ja: "なんでも" },
      '순살': { en: "Boneless", ko: "순살", zh: "无骨", ja: "骨なし" },
      '콤보': { en: "Combo (Legs+Wings)", ko: "콤보 (다리+날개)", zh: "组合 (腿+翅)", ja: "コンボ (足+手羽)" },
      '윙봉': { en: "Wings", ko: "윙봉", zh: "翅膀", ja: "手羽" },
      '다리': { en: "Legs", ko: "다리만", zh: "鸡腿", ja: "足のみ" },
      '전체': { en: "Whole Chicken", ko: "한마리 (뼈)", zh: "整鸡", ja: "丸ごと" }
    }
  },
  flavor: {
    title: { en: "Preferred Flavor?", ko: "원하는 맛 특징은?", zh: "喜欢的口味？", ja: "好みの味は？" },
    options: {
      '단짠': { en: "Sweet & Salty", ko: "단짠", zh: "甜咸", ja: "甘じょっぱい" },
      '고소': { en: "Nutty/Savory", ko: "고소", zh: "香浓", ja: "香ばしい" },
      '매콤': { en: "Spicy", ko: "매콤", zh: "香辣", ja: "ピリ辛" },
      '치즈': { en: "Cheese", ko: "치즈", zh: "芝士", ja: "チーズ" },
      '마늘': { en: "Garlic", ko: "마늘", zh: "大蒜", ja: "ニンニク" },
      '간장': { en: "Soy Sauce", ko: "간장", zh: "酱油", ja: "醤油" },
      '깔끔': { en: "Clean", ko: "깔끔", zh: "清爽", ja: "さっぱり" },
      '크리미': { en: "Creamy", ko: "크리미", zh: "奶油", ja: "クリーミー" },
      '불맛': { en: "Smoky", ko: "불맛", zh: "烟熏", ja: "炭火焼き" }
    }
  }
};

