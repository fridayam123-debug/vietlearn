import { VocabItem } from '@/lib/types'

// Words: 100 items (fd-w-01 to fd-w-100)
// Session 1: Vietnamese dishes, utensils, beverages (25 items)
// Session 2: Ingredients (25 items)
// Session 3: Restaurant vocabulary (25 items)
// Session 4: Tastes, cooking methods, food adjectives (25 items)

// Verbs: 50 items (fd-v-01 to fd-v-50)
// Session 1: Common eating/cooking verbs (25 items)
// Session 2: Cooking methods and actions (25 items)

export const words: VocabItem[] = [
  // Session 1: Vietnamese dishes, utensils, beverages (25 items)
  {
    id: 'fd-w-01',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'phở',
    ko: '쌀국수',
    usage: 'Phở là món ăn truyền thống của Việt Nam. (쌀국수는 베트남의 전통 음식입니다.)'
  },
  {
    id: 'fd-w-02',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'bún bò',
    ko: '소고기 국수',
    usage: 'Bún bò Huế rất ngon. (후에 소고기 국수는 매우 맛있습니다.)'
  },
  {
    id: 'fd-w-03',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'cơm',
    ko: '쌀, 밥',
    usage: 'Ăn cơm buổi trưa. (점심에 밥을 먹습니다.)'
  },
  {
    id: 'fd-w-04',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'bánh mì',
    ko: '베트남 바게트 샌드위치',
    usage: 'Bánh mì là sự kết hợp của nền văn hóa Pháp và Việt. (바게트는 프랑스와 베트남 문화의 결합입니다.)'
  },
  {
    id: 'fd-w-05',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'chả giò',
    ko: '춘권',
    usage: 'Chả giò chiên bên ngoài, mềm bên trong. (춘권은 바깥쪽은 바삭하고 안쪽은 부드럽습니다.)'
  },
  {
    id: 'fd-w-06',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'gỏi cuốn',
    ko: '여름 국수',
    usage: 'Gỏi cuốn là món ăn nhẹ. (여름 국수는 가벼운 음식입니다.)'
  },
  {
    id: 'fd-w-07',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'canh',
    ko: '수프',
    usage: 'Canh chua có vị chua. (신맛 수프는 신맛이 있습니다.)'
  },
  {
    id: 'fd-w-08',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'mì',
    ko: '면',
    usage: 'Ăn mì chiều nay. (오늘 오후에 면을 먹습니다.)'
  },
  {
    id: 'fd-w-09',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'tô',
    ko: '사발, 그릇',
    usage: 'Bát phở lớn trong tô. (그릇에 큰 쌀국수 한 그릇이 있습니다.)'
  },
  {
    id: 'fd-w-10',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'đũa',
    ko: '젓가락',
    usage: 'Dùng đũa để ăn. (젓가락을 사용하여 먹습니다.)'
  },
  {
    id: 'fd-w-11',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'thìa',
    ko: '숟가락',
    usage: 'Thìa dùng để múc cơm. (숟가락은 밥을 떠 먹는 데 사용됩니다.)'
  },
  {
    id: 'fd-w-12',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'dĩa',
    ko: '접시',
    usage: 'Thức ăn nằm trên dĩa. (음식은 접시 위에 있습니다.)'
  },
  {
    id: 'fd-w-13',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'cốc',
    ko: '잔, 컵',
    usage: 'Uống nước trong cốc. (컵에서 물을 마십니다.)'
  },
  {
    id: 'fd-w-14',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'bát',
    ko: '그릇, 사발',
    usage: 'Bát cơm trên bàn. (그릇에 밥이 테이블 위에 있습니다.)'
  },
  {
    id: 'fd-w-15',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'nước',
    ko: '물',
    usage: 'Uống nước lạnh. (차가운 물을 마십니다.)'
  },
  {
    id: 'fd-w-16',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'trà',
    ko: '차',
    usage: 'Trà xanh rất tốt cho sức khỏe. (녹차는 건강에 매우 좋습니다.)'
  },
  {
    id: 'fd-w-17',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'cà phê',
    ko: '커피',
    usage: 'Uống cà phê vào sáng. (아침에 커피를 마십니다.)'
  },
  {
    id: 'fd-w-18',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'bia',
    ko: '맥주',
    usage: 'Uống bia lạnh ở nhà hàng. (레스토랑에서 차가운 맥주를 마십니다.)'
  },
  {
    id: 'fd-w-19',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'rượu',
    ko: '술',
    usage: 'Rượu vang đỏ rất thơm. (적포도주는 매우 향기로웠습니다.)'
  },
  {
    id: 'fd-w-20',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'nước cam',
    ko: '오렌지 주스',
    usage: 'Nước cam tươi mỗi sáng. (매일 아침 신선한 오렌지 주스를 마십니다.)'
  },
  {
    id: 'fd-w-21',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'sữa',
    ko: '우유',
    usage: 'Uống sữa đậu nành. (두유를 마십니다.)'
  },
  {
    id: 'fd-w-22',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'cơm tấm',
    ko: '쌀 조각밥',
    usage: 'Cơm tấm với sườn nướng. (쌀 조각밥에 구운 갈비를 얹습니다.)'
  },
  {
    id: 'fd-w-23',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'bánh bao',
    ko: '찐 만두',
    usage: 'Bánh bao nhân thịt ngon. (고기가 든 찐 만두는 맛있습니다.)'
  },
  {
    id: 'fd-w-24',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'cơm chiên',
    ko: '볶음밥',
    usage: 'Cơm chiên tôm rất ngon. (새우 볶음밥은 매우 맛있습니다.)'
  },
  {
    id: 'fd-w-25',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'mì xào',
    ko: '스타일 국수 볶음',
    usage: 'Mì xào dân dã ở Sài Gòn. (호치민시에서 스타일 국수 볶음을 먹었습니다.)'
  },

  // Session 2: Ingredients (25 items)
  {
    id: 'fd-w-26',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'thịt',
    ko: '고기',
    usage: 'Thịt lợn rất ngon. (돼지고기는 매우 맛있습니다.)'
  },
  {
    id: 'fd-w-27',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'thịt gà',
    ko: '닭고기',
    usage: 'Thịt gà nướng để tối. (저녁 때 구운 닭고기를 먹습니다.)'
  },
  {
    id: 'fd-w-28',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'thịt bò',
    ko: '소고기',
    usage: 'Thịt bò để làm phở. (쌀국수를 만들 때 소고기를 사용합니다.)'
  },
  {
    id: 'fd-w-29',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'cá',
    ko: '물고기',
    usage: 'Cá nướng với muối. (소금을 곁들인 구운 생선입니다.)'
  },
  {
    id: 'fd-w-30',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'tôm',
    ko: '새우',
    usage: 'Tôm tươi từ biển. (바다에서 신선한 새우를 얻습니다.)'
  },
  {
    id: 'fd-w-31',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'cua',
    ko: '게',
    usage: 'Cua tươi xào với tỏi. (신선한 게를 마늘과 함께 볶습니다.)'
  },
  {
    id: 'fd-w-32',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'trứng',
    ko: '계란',
    usage: 'Trứng chiên để sáng. (아침에 계란을 계란 프라이로 만듭니다.)'
  },
  {
    id: 'fd-w-33',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'rau',
    ko: '채소',
    usage: 'Rau sạch tốt cho sức khỏe. (신선한 채소는 건강에 좋습니다.)'
  },
  {
    id: 'fd-w-34',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'cà chua',
    ko: '토마토',
    usage: 'Cà chua đỏ chín. (빨간 익은 토마토입니다.)'
  },
  {
    id: 'fd-w-35',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'dưa chuột',
    ko: '오이',
    usage: 'Dưa chuột mát lạnh. (오이는 시원합니다.)'
  },
  {
    id: 'fd-w-36',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'hành tây',
    ko: '양파',
    usage: 'Hành tây làm cay mắt. (양파는 눈을 자극합니다.)'
  },
  {
    id: 'fd-w-37',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'tỏi',
    ko: '마늘',
    usage: 'Tỏi thơm và bổ dưỡng. (마늘은 향기롭고 영양가 있습니다.)'
  },
  {
    id: 'fd-w-38',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'gừng',
    ko: '생강',
    usage: 'Gừng ấm và tốt cho dạ dày. (생강은 따뜻하고 위에 좋습니다.)'
  },
  {
    id: 'fd-w-39',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'ớt',
    ko: '고추',
    usage: 'Ớt cay làm nước lã. (매운 고추는 입을 화끈거리게 합니다.)'
  },
  {
    id: 'fd-w-40',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'quả cam',
    ko: '오렌지',
    usage: 'Quả cam tươi ngon. (신선한 오렌지는 맛있습니다.)'
  },
  {
    id: 'fd-w-41',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'quả chuối',
    ko: '바나나',
    usage: 'Quả chuối vàng chín. (노란 익은 바나나입니다.)'
  },
  {
    id: 'fd-w-42',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'quả táo',
    ko: '사과',
    usage: 'Quả táo đỏ giòn. (빨간 아삭아삭한 사과입니다.)'
  },
  {
    id: 'fd-w-43',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'dứa',
    ko: '파인애플',
    usage: 'Dứa ngọt ở Đông Nam Á. (동남아시아의 파인애플은 달콤합니다.)'
  },
  {
    id: 'fd-w-44',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'dưỡng',
    ko: '배',
    usage: 'Dưỡng mọng nước tươi. (배는 맛있고 신선합니다.)'
  },
  {
    id: 'fd-w-45',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'xà phòng',
    ko: '비누 (여기서는 콩)',
    usage: 'Xà phòng là loại đậu. (큰 콩의 일종입니다.)'
  },
  {
    id: 'fd-w-46',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'nước mắm',
    ko: '생선 소스',
    usage: 'Nước mắm là linh hồn ẩm thực Việt. (생선 소스는 베트남 요리의 영혼입니다.)'
  },
  {
    id: 'fd-w-47',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'muối',
    ko: '소금',
    usage: 'Muối để nêm nước canh. (수프를 간하는 데 소금을 사용합니다.)'
  },
  {
    id: 'fd-w-48',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'đường',
    ko: '설탕',
    usage: 'Đường để nấu nước mứt. (설탕으로 시럽을 만듭니다.)'
  },
  {
    id: 'fd-w-49',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'dầu ăn',
    ko: '식용유',
    usage: 'Dầu ăn để chiên. (식용유로 튀깁니다.)'
  },
  {
    id: 'fd-w-50',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'bột',
    ko: '가루, 밀가루',
    usage: 'Bột để làm bánh. (밀가루로 빵을 만듭니다.)'
  },

  // Session 3: Restaurant vocabulary (25 items)
  {
    id: 'fd-w-51',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'nhà hàng',
    ko: '레스토랑',
    usage: 'Nhà hàng này nổi tiếng. (이 레스토랑은 유명합니다.)'
  },
  {
    id: 'fd-w-52',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'quán ăn',
    ko: '식당, 음식점',
    usage: 'Quán ăn bên đường tốt lắm. (길가의 식당이 정말 좋습니다.)'
  },
  {
    id: 'fd-w-53',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'bàn',
    ko: '테이블',
    usage: 'Bàn ở góc nhà hàng. (레스토랑 구석의 테이블입니다.)'
  },
  {
    id: 'fd-w-54',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'ghế',
    ko: '의자',
    usage: 'Ghế thoải mái tại nhà hàng. (레스토랑의 의자는 편합니다.)'
  },
  {
    id: 'fd-w-55',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'thực đơn',
    ko: '메뉴',
    usage: 'Xem thực đơn để đặt hàng. (주문하기 위해 메뉴를 봅니다.)'
  },
  {
    id: 'fd-w-56',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'gọi món',
    ko: '주문하다',
    usage: 'Gọi món gì? (무엇을 주문하시겠습니까?)'
  },
  {
    id: 'fd-w-57',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'đặt hàng',
    ko: '주문하다',
    usage: 'Đặt hàng một phần phở. (쌀국수 한 그릇을 주문합니다.)'
  },
  {
    id: 'fd-w-58',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'chỉnh sửa',
    ko: '요청하다, 수정하다',
    usage: 'Chỉnh sửa thêm gia vị. (양념을 더 추가해 달라고 요청합니다.)'
  },
  {
    id: 'fd-w-59',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'hóa đơn',
    ko: '계산서, 청구서',
    usage: 'Hóa đơn vui lòng. (계산서 부탁합니다.)'
  },
  {
    id: 'fd-w-60',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'tính tiền',
    ko: '돈을 계산하다',
    usage: 'Tính tiền bao nhiêu? (총 가격은 얼마입니까?)'
  },
  {
    id: 'fd-w-61',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'giá cả',
    ko: '가격',
    usage: 'Giá cả ở đây rẻ. (여기 가격은 저렴합니다.)'
  },
  {
    id: 'fd-w-62',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'tiền tip',
    ko: '팁, 팁돈',
    usage: 'Tiền tip 10% là bình thường. (10% 팁은 일반적입니다.)'
  },
  {
    id: 'fd-w-63',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'khách hàng',
    ko: '고객',
    usage: 'Khách hàng nằm dưới áp lực. (고객은 서비스 부족을 느낍니다.)'
  },
  {
    id: 'fd-w-64',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'người phục vụ',
    ko: '웨이터, 종업원',
    usage: 'Người phục vụ giúp đỡ khách hàng. (종업원이 손님을 도와줍니다.)'
  },
  {
    id: 'fd-w-65',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'đầu bếp',
    ko: '요리사',
    usage: 'Đầu bếp nấu rất ngon. (요리사는 매우 맛있게 요리합니다.)'
  },
  {
    id: 'fd-w-66',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'công thức',
    ko: '레시피, 요리법',
    usage: 'Công thức phở bí mật. (쌀국수의 비결 있는 레시피입니다.)'
  },
  {
    id: 'fd-w-67',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'khoảng trời',
    ko: '분위기',
    usage: 'Khoảng trời nhà hàng lãng mạn. (레스토랑의 분위기는 낭만적입니다.)'
  },
  {
    id: 'fd-w-68',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'tiệc',
    ko: '파티, 연회',
    usage: 'Tiệc ở nhà hàng sang trọng. (고급 레스토랑에서 파티를 열었습니다.)'
  },
  {
    id: 'fd-w-69',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'chỗ ngồi',
    ko: '좌석',
    usage: 'Chỗ ngồi gần cửa sổ. (창가 좌석입니다.)'
  },
  {
    id: 'fd-w-70',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'làm đặt bàn',
    ko: '예약하다',
    usage: 'Làm đặt bàn cho bốn người. (4명 예약을 하겠습니다.)'
  },
  {
    id: 'fd-w-71',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'khai vị',
    ko: '에피타이저, 전채',
    usage: 'Khai vị là gỏi cuốn. (에피타이저는 여름 국수입니다.)'
  },
  {
    id: 'fd-w-72',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'món chính',
    ko: '메인 요리, 주요 음식',
    usage: 'Món chính là phở bò. (메인 요리는 소고기 쌀국수입니다.)'
  },
  {
    id: 'fd-w-73',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'tráng miệng',
    ko: '디저트',
    usage: 'Tráng miệng là kem. (디저트는 아이스크림입니다.)'
  },
  {
    id: 'fd-w-74',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'thời gian phục vụ',
    ko: '서빙 시간, 식사 시간',
    usage: 'Thời gian phục vụ từ 11 giờ. (식사 시간은 11시부터입니다.)'
  },
  {
    id: 'fd-w-75',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'đóng cửa',
    ko: '문을 닫다',
    usage: 'Nhà hàng đóng cửa vào lúc 10 tối. (레스토랑은 밤 10시에 문을 닫습니다.)'
  },

  // Session 4: Tastes, cooking methods, food adjectives (25 items)
  {
    id: 'fd-w-76',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'ngon',
    ko: '맛있는',
    usage: 'Thực phẩm này rất ngon. (이 음식은 매우 맛있습니다.)'
  },
  {
    id: 'fd-w-77',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'cay',
    ko: '매운',
    usage: 'Ớt cay làm lưỡi nóng. (매운 고추는 혀를 화끈거리게 합니다.)'
  },
  {
    id: 'fd-w-78',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'mặn',
    ko: '짠',
    usage: 'Nước mắm hơi mặn. (생선 소스는 조금 짤 수 있습니다.)'
  },
  {
    id: 'fd-w-79',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'chua',
    ko: '신',
    usage: 'Quả chanh chua và tươi. (레몬은 신맛이 나고 신선합니다.)'
  },
  {
    id: 'fd-w-80',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'ngọt',
    ko: '달콤한',
    usage: 'Bánh ngọt với chocolate. (초콜릿 달콤한 케이크입니다.)'
  },
  {
    id: 'fd-w-81',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'đắng',
    ko: '쓴',
    usage: 'Cà phê đắng nhưng thơm. (커피는 쓰지만 향기롭습니다.)'
  },
  {
    id: 'fd-w-82',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'tươi',
    ko: '신선한',
    usage: 'Rau tươi từ chợ sáng. (신선한 채소를 아침 시장에서 구매합니다.)'
  },
  {
    id: 'fd-w-83',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'cũ',
    ko: '낡은, 오래된',
    usage: 'Rau cũ không tốt. (낡은 채소는 좋지 않습니다.)'
  },
  {
    id: 'fd-w-84',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'nóng',
    ko: '뜨거운',
    usage: 'Cơm nóng vừa nấu. (방금 지은 뜨거운 밥입니다.)'
  },
  {
    id: 'fd-w-85',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'lạnh',
    ko: '차가운',
    usage: 'Nước lạnh trong lúc hè. (여름에는 차가운 물을 마십니다.)'
  },
  {
    id: 'fd-w-86',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'mềm',
    ko: '부드러운',
    usage: 'Thịt mềm trong cơm bao. (밥에 싸인 부드러운 고기입니다.)'
  },
  {
    id: 'fd-w-87',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'cứng',
    ko: '딱딱한, 단단한',
    usage: 'Bánh mì cứng không tốt. (딱딱한 빵은 좋지 않습니다.)'
  },
  {
    id: 'fd-w-88',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'giòn',
    ko: '아삭아삭한',
    usage: 'Cà chua giòn tươi. (아삭아삭한 신선한 토마토입니다.)'
  },
  {
    id: 'fd-w-89',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'dẻo',
    ko: '쫀득한',
    usage: 'Bánh dẻo như bánh dâu. (딸기 떡 같이 쫀득합니다.)'
  },
  {
    id: 'fd-w-90',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'béo',
    ko: '기름진',
    usage: 'Thịt mỡ béo. (기름진 돼지고기입니다.)'
  },
  {
    id: 'fd-w-91',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'gầy',
    ko: '기름기 없는',
    usage: 'Thịt gầy tốt cho sức khỏe. (기름기 없는 고기는 건강에 좋습니다.)'
  },
  {
    id: 'fd-w-92',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'chiên',
    ko: '튀기다',
    usage: 'Chiên cà chua vàng. (토마토를 튀겨 노랗게 합니다.)'
  },
  {
    id: 'fd-w-93',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'luộc',
    ko: '끓이다, 삶다',
    usage: 'Luộc trứng để sáng. (아침에 계란을 끓입니다.)'
  },
  {
    id: 'fd-w-94',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'nướng',
    ko: '구우다, 굽다',
    usage: 'Nướng cá với vị mặn. (소금 맛으로 생선을 굽습니다.)'
  },
  {
    id: 'fd-w-95',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'hấp',
    ko: '찌다, 쪄내다',
    usage: 'Hấp bánh bao trong 15 phút. (찐 만두를 15분 동안 찉니다.)'
  },
  {
    id: 'fd-w-96',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'xào',
    ko: '볶다',
    usage: 'Xào cà chua với tỏi. (토마토를 마늘과 함께 볶습니다.)'
  },
  {
    id: 'fd-w-97',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'nấu',
    ko: '요리하다, 끓이다',
    usage: 'Nấu canh rau trong 20 phút. (야채 수프를 20분 동안 요리합니다.)'
  },
  {
    id: 'fd-w-98',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'thái',
    ko: '자르다, 썬다',
    usage: 'Thái bánh mì thành miếng. (빵을 조각으로 자릅니다.)'
  },
  {
    id: 'fd-w-99',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'giã',
    ko: '으깨다, 짓이기다',
    usage: 'Giã tỏi để làm nước mắm. (생선 소스를 만들기 위해 마늘을 으깬다.)'
  },
  {
    id: 'fd-w-100',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'ướp',
    ko: '절이다, 절임하다',
    usage: 'Ướp thịt trong nước mắm. (고기를 생선 소스에 절입니다.)'
  }
]

export const verbs: VocabItem[] = [
  // Session 1: Common eating/cooking verbs (25 items)
  {
    id: 'fd-v-01',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'ăn',
    ko: '먹다',
    usage: 'Ăn cơm buổi trưa. (점심에 밥을 먹습니다.)'
  },
  {
    id: 'fd-v-02',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'uống',
    ko: '마시다',
    usage: 'Uống nước lạnh sau ăn. (먹은 후 찬물을 마십니다.)'
  },
  {
    id: 'fd-v-03',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'nấu',
    ko: '요리하다, 끓이다',
    usage: 'Nấu phở vào sáng. (아침에 쌀국수를 요리합니다.)'
  },
  {
    id: 'fd-v-04',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'gọi',
    ko: '주문하다, 부르다',
    usage: 'Gọi món tại nhà hàng. (레스토랑에서 음식을 주문합니다.)'
  },
  {
    id: 'fd-v-05',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'đặt',
    ko: '주문하다, 예약하다',
    usage: 'Đặt bàn cho bốn người. (4명 테이블을 예약합니다.)'
  },
  {
    id: 'fd-v-06',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'chuẩn bị',
    ko: '준비하다',
    usage: 'Chuẩn bị nguyên liệu để nấu. (요리할 재료를 준비합니다.)'
  },
  {
    id: 'fd-v-07',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'rửa',
    ko: '씻다',
    usage: 'Rửa rau sạch trước nấu. (요리 전에 채소를 깨끗이 씻습니다.)'
  },
  {
    id: 'fd-v-08',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'thái',
    ko: '자르다, 썬다',
    usage: 'Thái cà chua thành miếng mỏng. (토마토를 얇은 조각으로 자릅니다.)'
  },
  {
    id: 'fd-v-09',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'cho',
    ko: '넣다, 주다',
    usage: 'Cho gia vị vào nồi. (냄비에 양념을 넣습니다.)'
  },
  {
    id: 'fd-v-10',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'nêm',
    ko: '양념하다, 간을 맞추다',
    usage: 'Nêm nước canh với muối. (수프를 소금으로 간을 맞춥니다.)'
  },
  {
    id: 'fd-v-11',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'trộn',
    ko: '섞다',
    usage: 'Trộn salad với nước sốt. (샐러드를 드레싱과 섞습니다.)'
  },
  {
    id: 'fd-v-12',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'nướng',
    ko: '구우다, 굽다',
    usage: 'Nướng cá trên lửa. (불에서 생선을 굽습니다.)'
  },
  {
    id: 'fd-v-13',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'chiên',
    ko: '튀기다',
    usage: 'Chiên cá vàng giòn. (생선을 노랗고 바삭하게 튀깁니다.)'
  },
  {
    id: 'fd-v-14',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'luộc',
    ko: '끓이다, 삶다',
    usage: 'Luộc trứng trong nước sôi. (물이 끓을 때 계란을 삶습니다.)'
  },
  {
    id: 'fd-v-15',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'hấp',
    ko: '찌다, 쪄내다',
    usage: 'Hấp bánh bao trong 20 phút. (20분 동안 찐 만두를 찉니다.)'
  },
  {
    id: 'fd-v-16',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'xào',
    ko: '볶다',
    usage: 'Xào rau với tỏi. (채소를 마늘과 함께 볶습니다.)'
  },
  {
    id: 'fd-v-17',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'nước',
    ko: '국물에 끓이다',
    usage: 'Nước cà phê trong cốc. (컵에 커피 물을 붓습니다.)'
  },
  {
    id: 'fd-v-18',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'múc',
    ko: '떠 담다',
    usage: 'Múc cơm vào tô. (그릇에 밥을 담습니다.)'
  },
  {
    id: 'fd-v-19',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'chia',
    ko: '나누다, 나눠 먹다',
    usage: 'Chia bánh cho mọi người. (모두에게 빵을 나눠줍니다.)'
  },
  {
    id: 'fd-v-20',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'nếm',
    ko: '맛보다, 시식하다',
    usage: 'Nếm thử canh trước phục vụ. (제공하기 전에 수프를 맛봅니다.)'
  },
  {
    id: 'fd-v-21',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'nhai',
    ko: '씹다',
    usage: 'Nhai cơm chậm để tiêu hóa tốt. (소화를 잘하기 위해 밥을 천천히 씹습니다.)'
  },
  {
    id: 'fd-v-22',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'nuốt',
    ko: '삼키다',
    usage: 'Nuốt cơm dễ dàng. (밥을 쉽게 삼킵니다.)'
  },
  {
    id: 'fd-v-23',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'dùng',
    ko: '사용하다, 먹다, 마시다',
    usage: 'Dùng đũa để ăn. (젓가락으로 먹습니다.)'
  },
  {
    id: 'fd-v-24',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'tính',
    ko: '계산하다',
    usage: 'Tính tiền bao nhiêu? (총 가격은 얼마입니까?)'
  },
  {
    id: 'fd-v-25',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'trả',
    ko: '지불하다, 갚다',
    usage: 'Trả tiền cho nhân viên. (종업원에게 돈을 지불합니다.)'
  },

  // Session 2: Cooking methods and actions (25 items)
  {
    id: 'fd-v-26',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'nấu lâu',
    ko: '오래 요리하다',
    usage: 'Nấu lâu để thịt mềm. (고기가 부드러워지려면 오래 요리해야 합니다.)'
  },
  {
    id: 'fd-v-27',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'nấu chín',
    ko: '완전히 익히다',
    usage: 'Nấu chín cơm 15 phút. (밥을 15분 동안 완전히 익힙니다.)'
  },
  {
    id: 'fd-v-28',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'nấu tái',
    ko: '덜 익히다 (고기 등)',
    usage: 'Nấu tái thịt bò. (소고기를 덜 익힙니다.)'
  },
  {
    id: 'fd-v-29',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'sôi',
    ko: '끓다',
    usage: 'Nước sôi để nấu mì. (면을 요리할 때 물이 끓습니다.)'
  },
  {
    id: 'fd-v-30',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'giảm lửa',
    ko: '불을 줄이다',
    usage: 'Giảm lửa để nước yên tĩnh. (물이 잔잔하게 하려면 불을 줄입니다.)'
  },
  {
    id: 'fd-v-31',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'tăng lửa',
    ko: '불을 높이다',
    usage: 'Tăng lửa để chiên vàng. (황금색으로 튀기려면 불을 높입니다.)'
  },
  {
    id: 'fd-v-32',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'khuấy',
    ko: '저으머, 젓다',
    usage: 'Khuấy nước sốt để thơm đều. (드레싱을 고르게 섞으려면 젓습니다.)'
  },
  {
    id: 'fd-v-33',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'rút',
    ko: '꺼내다',
    usage: 'Rút nồi khỏi lửa. (불에서 냄비를 꺼냅니다.)'
  },
  {
    id: 'fd-v-34',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'lắc',
    ko: '흔들다, 떨어서 섞다',
    usage: 'Lắc chảo để thức ăn không cắn. (음식이 타지 않도록 팬을 흔듭니다.)'
  },
  {
    id: 'fd-v-35',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'rây',
    ko: '체 치다, 체로 거르다',
    usage: 'Rây bột trước làm bánh. (케이크를 만들기 전에 밀가루를 체칩니다.)'
  },
  {
    id: 'fd-v-36',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'ép',
    ko: '짜내다, 압착하다',
    usage: 'Ép chanh vào nước mắm. (생선 소스에 레몬을 짜냅니다.)'
  },
  {
    id: 'fd-v-37',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'giã',
    ko: '으깨다, 짓이기다',
    usage: 'Giã tỏi làm dấu. (마늘을 으께 마늘 페이스트로 만듭니다.)'
  },
  {
    id: 'fd-v-38',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'xát',
    ko: '비비다, 비틀다',
    usage: 'Xát dừa để lấy nước. (코코넛 우유를 얻기 위해 코코넛을 비빕니다.)'
  },
  {
    id: 'fd-v-39',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'ướp',
    ko: '절이다, 절임하다',
    usage: 'Ướp thịt với gia vị một đêm. (고기를 양념과 함께 하루 밤 절입니다.)'
  },
  {
    id: 'fd-v-40',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'nêm nước mắm',
    ko: '생선 소스로 간을 맞추다',
    usage: 'Nêm nước mắm vào canh. (수프에 생선 소스로 간을 맞춥니다.)'
  },
  {
    id: 'fd-v-41',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'kết nối',
    ko: '연결하다, 합치다',
    usage: 'Kết nối hương vị chua cay. (신맛과 매운맛의 맛을 연결합니다.)'
  },
  {
    id: 'fd-v-42',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'chạm',
    ko: '접촉하다, 건드리다',
    usage: 'Chạm thực phẩm nóng cẩn thận. (뜨거운 음식을 조심해서 접촉합니다.)'
  },
  {
    id: 'fd-v-43',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'cắn',
    ko: '물어뜯다',
    usage: 'Cắn bánh mì mềm. (부드러운 빵을 물어뜯습니다.)'
  },
  {
    id: 'fd-v-44',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'cuốn',
    ko: '말다, 감싸다',
    usage: 'Cuốn bánh tráng với thịt. (고기를 종이에 감싼다.)'
  },
  {
    id: 'fd-v-45',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'chọc',
    ko: '찌르다, 관통시키다',
    usage: 'Chọc đũa vào bánh. (젓가락으로 케이크를 찔러서 확인합니다.)'
  },
  {
    id: 'fd-v-46',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'nấn',
    ko: '묻힐려고 하다, 지체하다',
    usage: 'Nấn lại không ăn nữa. (더 이상 먹지 않으려고 물러선다.)'
  },
  {
    id: 'fd-v-47',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'đặt xuống',
    ko: '내려놓다',
    usage: 'Đặt xuống đũa sau ăn. (먹은 후 젓가락을 내려놓습니다.)'
  },
  {
    id: 'fd-v-48',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'lau',
    ko: '닦다',
    usage: 'Lau miệng sau ăn. (먹은 후 입을 닦습니다.)'
  },
  {
    id: 'fd-v-49',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'rửa chén',
    ko: '그릇을 씻다',
    usage: 'Rửa chén sau bữa ăn. (식사 후 그릇을 씻습니다.)'
  },
  {
    id: 'fd-v-50',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'dọn dẹp',
    ko: '정리하다, 치우다',
    usage: 'Dọn dẹp bàn ăn. (식탁을 정리합니다.)'
  }
]
