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
  "KFC": "https://www.kfckorea.com"
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
    image: `https://placehold.co/400x300/E31837/FFFFFF?text=${encodeURIComponent(item.menu_name)}`,
    fallbackImage: '',
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
    options: {}
  },
  crispiness: {
    title: { en: "How crispy?", ko: "바삭함 정도는?", zh: "有多脆？", ja: "サクサク感は？" },
    options: {}
  },
  composition: {
    title: { en: "Preferred Cut?", ko: "선호하는 부위는?", zh: "喜欢的部位？", ja: "好みの部位は？" },
    options: {}
  },
  flavor: {
    title: { en: "Preferred Flavor?", ko: "원하는 맛 특징은?", zh: "喜欢的口味？", ja: "好みの味は？" },
    options: {}
  }
};
