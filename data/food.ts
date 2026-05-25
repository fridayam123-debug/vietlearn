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
    usage: 'Ví dụ: Tôi ăn phở mỗi sáng. (저는 매일 아침 쌀국수를 먹습니다.)'
  },
  {
    id: 'fd-w-02',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'bún bò',
    ko: '소고기 국수',
    usage: 'Ví dụ: Tôi yêu thích bún bò Huế. (나는 후에 소고기 국수를 좋아합니다.)'
  },
  {
    id: 'fd-w-03',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'cơm',
    ko: '쌀, 밥',
    usage: 'Ví dụ: Tôi ăn cơm buổi trưa. (나는 점심에 밥을 먹습니다.)'
  },
  {
    id: 'fd-w-04',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'bánh mì',
    ko: '베트남 바게트 샌드위치',
    usage: 'Ví dụ: Tôi mua bánh mì ở quán cổ. (나는 구석의 가게에서 바게트를 사요.)'
  },
  {
    id: 'fd-w-05',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'chả giò',
    ko: '춘권',
    usage: 'Ví dụ: Chả giò nóng giòn rất ngon. (따뜻한 바삭한 춘권은 매우 맛있습니다.)'
  },
  {
    id: 'fd-w-06',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'gỏi cuốn',
    ko: '여름 국수',
    usage: 'Ví dụ: Mua gỏi cuốn tại quán ăn. (음식점에서 여름 국수를 삽니다.)'
  },
  {
    id: 'fd-w-07',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'canh',
    ko: '수프',
    usage: 'Ví dụ: Mẹ nấu canh chua mỗi tuần. (엄마는 매주 신맛 수프를 요리합니다.)'
  },
  {
    id: 'fd-w-08',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'mì',
    ko: '면',
    usage: 'Ví dụ: Ăn mì lần đầu tiên ở Hà Nội. (나는 하노이에서 면을 처음 먹었습니다.)'
  },
  {
    id: 'fd-w-09',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'tô',
    ko: '사발, 그릇',
    usage: 'Ví dụ: Đổ nước vào tô to. (냄비에 물을 붓습니다.)'
  },
  {
    id: 'fd-w-10',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'đũa',
    ko: '젓가락',
    usage: 'Ví dụ: Cách dùng đũa ở Việt Nam. (베트남에서 젓가락을 사용하는 방법입니다.)'
  },
  {
    id: 'fd-w-11',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'thìa',
    ko: '숟가락',
    usage: 'Ví dụ: Lấy thìa để múc cơm. (숟가락으로 밥을 떠 먹습니다.)'
  },
  {
    id: 'fd-w-12',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'dĩa',
    ko: '접시',
    usage: 'Ví dụ: Đặt rau lên dĩa. (접시 위에 채소를 놓습니다.)'
  },
  {
    id: 'fd-w-13',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'cốc',
    ko: '잔, 컵',
    usage: 'Ví dụ: Cốc nước lạnh vào hè. (여름에는 차가운 물 잔을 마십니다.)'
  },
  {
    id: 'fd-w-14',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'bát',
    ko: '그릇, 사발',
    usage: 'Ví dụ: Bát cơm nóng trên bàn. (테이블 위에 따뜻한 밥 그릇이 있습니다.)'
  },
  {
    id: 'fd-w-15',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'nước',
    ko: '물',
    usage: 'Ví dụ: Nước sạch mỗi ngày. (매일 깨끗한 물을 마십니다.)'
  },
  {
    id: 'fd-w-16',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'trà',
    ko: '차',
    usage: 'Ví dụ: Uống trà xanh vào buổi sáng. (아침에 녹차를 마십니다.)'
  },
  {
    id: 'fd-w-17',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'cà phê',
    ko: '커피',
    usage: 'Ví dụ: Cà phê đen có mùi thơm. (검은색 커피는 향기로운 냄새입니다.)'
  },
  {
    id: 'fd-w-18',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'bia',
    ko: '맥주',
    usage: 'Ví dụ: Uống bia lạnh hôm nay. (오늘 차가운 맥주를 마십니다.)'
  },
  {
    id: 'fd-w-19',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'rượu',
    ko: '술',
    usage: 'Ví dụ: Rượu vang đỏ ngon lắm. (적포도주는 정말 맛있습니다.)'
  },
  {
    id: 'fd-w-20',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'nước cam',
    ko: '오렌지 주스',
    usage: 'Ví dụ: Nước cam tươi vào buổi sáng. (아침에 신선한 오렌지 주스를 마십니다.)'
  },
  {
    id: 'fd-w-21',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'sữa',
    ko: '우유',
    usage: 'Ví dụ: Uống sữa ấm trước ngủ. (잠들기 전에 따뜻한 우유를 마십니다.)'
  },
  {
    id: 'fd-w-22',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'cơm tấm',
    ko: '쌀 조각밥',
    usage: 'Ví dụ: Cơm tấm Sài Gòn nổi tiếng. (호치민 시의 쌀 조각밥은 유명합니다.)'
  },
  {
    id: 'fd-w-23',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'bánh bao',
    ko: '찐 만두',
    usage: 'Ví dụ: Bánh bao tươi hàng sáng. (매일 아침 신선한 찐 만두가 있습니다.)'
  },
  {
    id: 'fd-w-24',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'cơm chiên',
    ko: '볶음밥',
    usage: 'Ví dụ: Cơm chiên tôm được yêu thích. (새우 볶음밥은 매우 인기가 있습니다.)'
  },
  {
    id: 'fd-w-25',
    topic: 'food',
    session: 1,
    type: 'word',
    vi: 'mì xào',
    ko: '스타일 국수 볶음',
    usage: 'Ví dụ: Mì xào cua thơm ngon. (게 볶은 국수는 향기롭고 맛있습니다.)'
  },

  // Session 2: Ingredients (25 items)
  {
    id: 'fd-w-26',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'thịt',
    ko: '고기',
    usage: 'Ví dụ: Thịt nướng mềm ngon. (구운 고기는 부드럽고 맛있습니다.)'
  },
  {
    id: 'fd-w-27',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'thịt gà',
    ko: '닭고기',
    usage: 'Ví dụ: Thịt gà chiên vàng. (황금색 튀긴 닭고기입니다.)'
  },
  {
    id: 'fd-w-28',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'thịt bò',
    ko: '소고기',
    usage: 'Ví dụ: Thịt bò nướng nên mềm. (구운 소고기는 부드러워야 합니다.)'
  },
  {
    id: 'fd-w-29',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'cá',
    ko: '물고기',
    usage: 'Ví dụ: Cá tươi sáng hôm nay. (오늘 아침 신선한 생선입니다.)'
  },
  {
    id: 'fd-w-30',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'tôm',
    ko: '새우',
    usage: 'Ví dụ: Tôm tươi vừa đánh bắt. (방금 잡아낸 신선한 새우입니다.)'
  },
  {
    id: 'fd-w-31',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'cua',
    ko: '게',
    usage: 'Ví dụ: Cua rang me rất ngon. (매우 맛있는 게 맛동료입니다.)'
  },
  {
    id: 'fd-w-32',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'trứng',
    ko: '계란',
    usage: 'Ví dụ: Trứng luộc chín tốt. (계란을 완전히 익혀서 삶습니다.)'
  },
  {
    id: 'fd-w-33',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'rau',
    ko: '채소',
    usage: 'Ví dụ: Rau xanh từ nông trại. (농장에서 신선한 채소가 옵니다.)'
  },
  {
    id: 'fd-w-34',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'cà chua',
    ko: '토마토',
    usage: 'Ví dụ: Cà chua chín sẵn để ăn. (토마토는 먹을 준비가 되어 있습니다.)'
  },
  {
    id: 'fd-w-35',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'dưa chuột',
    ko: '오이',
    usage: 'Ví dụ: Dưa chuột giòn sạch. (오이는 아삭하고 깨끗합니다.)'
  },
  {
    id: 'fd-w-36',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'hành tây',
    ko: '양파',
    usage: 'Ví dụ: Hành tây cắt nhỏ. (양파를 잘게 자릅니다.)'
  },
  {
    id: 'fd-w-37',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'tỏi',
    ko: '마늘',
    usage: 'Ví dụ: Tỏi giã nhuyễn thơm. (으깬 마늘은 향기롭습니다.)'
  },
  {
    id: 'fd-w-38',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'gừng',
    ko: '생강',
    usage: 'Ví dụ: Gừng tươi thái mỏng. (신선한 생강을 얇게 자릅니다.)'
  },
  {
    id: 'fd-w-39',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'ớt',
    ko: '고추',
    usage: 'Ví dụ: Ớt đỏ cay nồn. (빨간 고추는 매우 맵습니다.)'
  },
  {
    id: 'fd-w-40',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'quả cam',
    ko: '오렌지',
    usage: 'Ví dụ: Quả cam chín đã ăn. (익은 오렌지를 먹을 수 있습니다.)'
  },
  {
    id: 'fd-w-41',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'quả chuối',
    ko: '바나나',
    usage: 'Ví dụ: Quả chuối ngọt tự nhiên. (바나나는 자연스럽게 달콤합니다.)'
  },
  {
    id: 'fd-w-42',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'quả táo',
    ko: '사과',
    usage: 'Ví dụ: Quả táo xanh tươi. (신선한 녹색 사과입니다.)'
  },
  {
    id: 'fd-w-43',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'dứa',
    ko: '파인애플',
    usage: 'Ví dụ: Dứa vàng ngọt. (노란 파인애플은 달콤합니다.)'
  },
  {
    id: 'fd-w-44',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'dưỡng',
    ko: '배',
    usage: 'Ví dụ: Dưỡng tươi sáng. (신선한 배를 아침에 먹습니다.)'
  },
  {
    id: 'fd-w-45',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'xà phòng',
    ko: '비누 (여기서는 콩)',
    usage: 'Ví dụ: Xà phòng sống lâu năm. (이 종류의 콩은 오래 살 수 있습니다.)'
  },
  {
    id: 'fd-w-46',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'nước mắm',
    ko: '생선 소스',
    usage: 'Ví dụ: Nước mắm cân bằng vị. (생선 소스는 맛의 균형을 이룹니다.)'
  },
  {
    id: 'fd-w-47',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'muối',
    ko: '소금',
    usage: 'Ví dụ: Muối vừa đủ lượng. (소금을 적절한 양으로 사용합니다.)'
  },
  {
    id: 'fd-w-48',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'đường',
    ko: '설탕',
    usage: 'Ví dụ: Đường trắng tinh khiết. (설탕은 순백색입니다.)'
  },
  {
    id: 'fd-w-49',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'dầu ăn',
    ko: '식용유',
    usage: 'Ví dụ: Dầu ăn nóng sẵn. (식용유가 이미 데워져 있습니다.)'
  },
  {
    id: 'fd-w-50',
    topic: 'food',
    session: 2,
    type: 'word',
    vi: 'bột',
    ko: '가루, 밀가루',
    usage: 'Ví dụ: Bột mì mịn nhẵn. (밀가루는 부드럽고 곱습니다.)'
  },

  // Session 3: Restaurant vocabulary (25 items)
  {
    id: 'fd-w-51',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'nhà hàng',
    ko: '레스토랑',
    usage: 'Ví dụ: Nhà hàng sang trọng. (고급 레스토랑입니다.)'
  },
  {
    id: 'fd-w-52',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'quán ăn',
    ko: '식당, 음식점',
    usage: 'Ví dụ: Quán ăn hàng xóm sạch. (이웃 식당은 깨끗합니다.)'
  },
  {
    id: 'fd-w-53',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'bàn',
    ko: '테이블',
    usage: 'Ví dụ: Bàn ăn tròn gắn. (둥근 식탁이 있습니다.)'
  },
  {
    id: 'fd-w-54',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'ghế',
    ko: '의자',
    usage: 'Ví dụ: Ghế bành thoải mái. (안락한 의자가 있습니다.)'
  },
  {
    id: 'fd-w-55',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'thực đơn',
    ko: '메뉴',
    usage: 'Ví dụ: Thực đơn có hình ảnh. (메뉴에는 사진이 있습니다.)'
  },
  {
    id: 'fd-w-56',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'gọi món',
    ko: '주문하다',
    usage: 'Ví dụ: Gọi món phở nóng. (뜨거운 쌀국수를 주문합니다.)'
  },
  {
    id: 'fd-w-57',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'đặt hàng',
    ko: '주문하다',
    usage: 'Ví dụ: Đặt hàng ba bát phở. (쌀국수 3그릇을 주문합니다.)'
  },
  {
    id: 'fd-w-58',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'chỉnh sửa',
    ko: '요청하다, 수정하다',
    usage: 'Ví dụ: Chỉnh sửa ít cay. (덜 맵게 해달라고 요청합니다.)'
  },
  {
    id: 'fd-w-59',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'hóa đơn',
    ko: '계산서, 청구서',
    usage: 'Ví dụ: Hóa đơn rõ ràng. (계산서가 명확합니다.)'
  },
  {
    id: 'fd-w-60',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'tính tiền',
    ko: '돈을 계산하다',
    usage: 'Ví dụ: Tính tiền chính xác. (정확하게 계산합니다.)'
  },
  {
    id: 'fd-w-61',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'giá cả',
    ko: '가격',
    usage: 'Ví dụ: Giá cả công bằng. (가격은 공정합니다.)'
  },
  {
    id: 'fd-w-62',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'tiền tip',
    ko: '팁, 팁돈',
    usage: 'Ví dụ: Tiền tip tươi tươi. (팁은 기꺼이 줍니다.)'
  },
  {
    id: 'fd-w-63',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'khách hàng',
    ko: '고객',
    usage: 'Ví dụ: Khách hàng hài lòng. (고객이 만족합니다.)'
  },
  {
    id: 'fd-w-64',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'người phục vụ',
    ko: '웨이터, 종업원',
    usage: 'Ví dụ: Người phục vụ lịch sự. (웨이터가 정중합니다.)'
  },
  {
    id: 'fd-w-65',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'đầu bếp',
    ko: '요리사',
    usage: 'Ví dụ: Đầu bếp nổi tiếng. (요리사가 유명합니다.)'
  },
  {
    id: 'fd-w-66',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'công thức',
    ko: '레시피, 요리법',
    usage: 'Ví dụ: Công thức truyền thống. (전통적인 레시피입니다.)'
  },
  {
    id: 'fd-w-67',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'khoảng trời',
    ko: '분위기',
    usage: 'Ví dụ: Khoảng trời ấm cúng. (분위기가 따뜻하고 포근합니다.)'
  },
  {
    id: 'fd-w-68',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'tiệc',
    ko: '파티, 연회',
    usage: 'Ví dụ: Tiệc sinh nhật vui. (생일 파티가 즐겁습니다.)'
  },
  {
    id: 'fd-w-69',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'chỗ ngồi',
    ko: '좌석',
    usage: 'Ví dụ: Chỗ ngồi rộng rãi. (좌석이 넓고 편합니다.)'
  },
  {
    id: 'fd-w-70',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'làm đặt bàn',
    ko: '예약하다',
    usage: 'Ví dụ: Làm đặt bàn trước. (미리 예약을 합니다.)'
  },
  {
    id: 'fd-w-71',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'khai vị',
    ko: '에피타이저, 전채',
    usage: 'Ví dụ: Khai vị tươi ngon. (전채가 신선하고 맛있습니다.)'
  },
  {
    id: 'fd-w-72',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'món chính',
    ko: '메인 요리, 주요 음식',
    usage: 'Ví dụ: Món chính thơm ngon. (메인 요리가 향기롭고 맛있습니다.)'
  },
  {
    id: 'fd-w-73',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'tráng miệng',
    ko: '디저트',
    usage: 'Ví dụ: Tráng miệng ngọt mát. (디저트는 달콤하고 시원합니다.)'
  },
  {
    id: 'fd-w-74',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'thời gian phục vụ',
    ko: '서빙 시간, 식사 시간',
    usage: 'Ví dụ: Thời gian phục vụ dài. (서빙 시간이 깁니다.)'
  },
  {
    id: 'fd-w-75',
    topic: 'food',
    session: 3,
    type: 'word',
    vi: 'đóng cửa',
    ko: '문을 닫다',
    usage: 'Ví dụ: Đóng cửa sớm hôm nay. (오늘 일찍 문을 닫습니다.)'
  },

  // Session 4: Tastes, cooking methods, food adjectives (25 items)
  {
    id: 'fd-w-76',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'ngon',
    ko: '맛있는',
    usage: 'Ví dụ: Ăn ngon lành. (맛있게 먹습니다.)'
  },
  {
    id: 'fd-w-77',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'cay',
    ko: '매운',
    usage: 'Ví dụ: Cay nồn làm da toát mồ hôi. (매운맛이 심해서 땀이 납니다.)'
  },
  {
    id: 'fd-w-78',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'mặn',
    ko: '짠',
    usage: 'Ví dụ: Mặn quá khó ăn. (너무 짜면 먹기 어렵습니다.)'
  },
  {
    id: 'fd-w-79',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'chua',
    ko: '신',
    usage: 'Ví dụ: Chua quá cãi chuốc. (너무 신맛이 나서 질려 버립니다.)'
  },
  {
    id: 'fd-w-80',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'ngọt',
    ko: '달콤한',
    usage: 'Ví dụ: Ngọt dịu ngon miệng. (달콤한 맛이 입에 맞습니다.)'
  },
  {
    id: 'fd-w-81',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'đắng',
    ko: '쓴',
    usage: 'Ví dụ: Đắng chút mà sảng khoái. (약간 쓰지만 상큼합니다.)'
  },
  {
    id: 'fd-w-82',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'tươi',
    ko: '신선한',
    usage: 'Ví dụ: Tươi mát ngon. (신선하고 상큼합니다.)'
  },
  {
    id: 'fd-w-83',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'cũ',
    ko: '낡은, 오래된',
    usage: 'Ví dụ: Cũ không nên mua. (오래된 것은 사면 안 됩니다.)'
  },
  {
    id: 'fd-w-84',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'nóng',
    ko: '뜨거운',
    usage: 'Ví dụ: Nóng ngay từ lửa. (불에서 바로 나온 뜨거운 음식입니다.)'
  },
  {
    id: 'fd-w-85',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'lạnh',
    ko: '차가운',
    usage: 'Ví dụ: Lạnh sảng khoái. (차갑고 상큼합니다.)'
  },
  {
    id: 'fd-w-86',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'mềm',
    ko: '부드러운',
    usage: 'Ví dụ: Mềm dễ nuốt. (부드러워서 쉽게 삼킬 수 있습니다.)'
  },
  {
    id: 'fd-w-87',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'cứng',
    ko: '딱딱한, 단단한',
    usage: 'Ví dụ: Cứng nhích cơm. (딱딱해서 밥을 먹기 어렵습니다.)'
  },
  {
    id: 'fd-w-88',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'giòn',
    ko: '아삭아삭한',
    usage: 'Ví dụ: Giòn tép tép ngon. (아삭아삭하고 맛있습니다.)'
  },
  {
    id: 'fd-w-89',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'dẻo',
    ko: '쫀득한',
    usage: 'Ví dụ: Dẻo ngon ngọt ngào. (쫀득하고 맛있습니다.)'
  },
  {
    id: 'fd-w-90',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'béo',
    ko: '기름진',
    usage: 'Ví dụ: Béo quá khó tiêu. (너무 기름져서 소화하기 어렵습니다.)'
  },
  {
    id: 'fd-w-91',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'gầy',
    ko: '기름기 없는',
    usage: 'Ví dụ: Gầy lành mạnh. (기름기 없어서 건강합니다.)'
  },
  {
    id: 'fd-w-92',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'chiên',
    ko: '튀기다',
    usage: 'Ví dụ: Chiên nóng mồ hôi. (튀기면 뜨거워집니다.)'
  },
  {
    id: 'fd-w-93',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'luộc',
    ko: '끓이다, 삶다',
    usage: 'Ví dụ: Luộc chín tới. (완전히 익도록 삶습니다.)'
  },
  {
    id: 'fd-w-94',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'nướng',
    ko: '구우다, 굽다',
    usage: 'Ví dụ: Nướng vàng ươm. (노릇하게 구워집니다.)'
  },
  {
    id: 'fd-w-95',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'hấp',
    ko: '찌다, 쪄내다',
    usage: 'Ví dụ: Hấp mềm ngon. (찌면 부드럽고 맛있습니다.)'
  },
  {
    id: 'fd-w-96',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'xào',
    ko: '볶다',
    usage: 'Ví dụ: Xào nhanh lửa lớn. (큰 불에서 빠르게 볶습니다.)'
  },
  {
    id: 'fd-w-97',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'nấu',
    ko: '요리하다, 끓이다',
    usage: 'Ví dụ: Nấu lâu mềm. (오래 요리하면 부드러워집니다.)'
  },
  {
    id: 'fd-w-98',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'thái',
    ko: '자르다, 썬다',
    usage: 'Ví dụ: Thái mỏng nhẹ. (얇게 자릅니다.)'
  },
  {
    id: 'fd-w-99',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'giã',
    ko: '으깨다, 짓이기다',
    usage: 'Ví dụ: Giã nhuyễn thơm. (으께서 향기롭게 합니다.)'
  },
  {
    id: 'fd-w-100',
    topic: 'food',
    session: 4,
    type: 'word',
    vi: 'ướp',
    ko: '절이다, 절임하다',
    usage: 'Ví dụ: Ướp qua đêm ngon. (하루 밤 절이면 맛있습니다.)'
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
    usage: 'Ví dụ: Ăn cơm nóng ngon. (뜨거운 밥을 맛있게 먹습니다.)'
  },
  {
    id: 'fd-v-02',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'uống',
    ko: '마시다',
    usage: 'Ví dụ: Uống nước mỗi ngày. (매일 물을 마십니다.)'
  },
  {
    id: 'fd-v-03',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'nấu',
    ko: '요리하다, 끓이다',
    usage: 'Ví dụ: Nấu ăn tốn thời gian. (요리하려면 시간이 걸립니다.)'
  },
  {
    id: 'fd-v-04',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'gọi',
    ko: '주문하다, 부르다',
    usage: 'Ví dụ: Gọi phục vụ cho thêm nước. (더 많은 물을 가져다 달라고 부릅니다.)'
  },
  {
    id: 'fd-v-05',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'đặt',
    ko: '주문하다, 예약하다',
    usage: 'Ví dụ: Đặt sớm hôm trước. (전날 미리 예약합니다.)'
  },
  {
    id: 'fd-v-06',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'chuẩn bị',
    ko: '준비하다',
    usage: 'Ví dụ: Chuẩn bị bữa ăn tối. (저녁 식사를 준비합니다.)'
  },
  {
    id: 'fd-v-07',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'rửa',
    ko: '씻다',
    usage: 'Ví dụ: Rửa tay trước ăn. (먹기 전에 손을 씻습니다.)'
  },
  {
    id: 'fd-v-08',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'thái',
    ko: '자르다, 썬다',
    usage: 'Ví dụ: Thái cẩn thận không bị thương. (신중하게 잘라서 다치지 않습니다.)'
  },
  {
    id: 'fd-v-09',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'cho',
    ko: '넣다, 주다',
    usage: 'Ví dụ: Cho đầy bát cơm. (밥 그릇을 가득 채웁니다.)'
  },
  {
    id: 'fd-v-10',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'nêm',
    ko: '양념하다, 간을 맞추다',
    usage: 'Ví dụ: Nêm vừa miệng. (입맛대로 양념을 조절합니다.)'
  },
  {
    id: 'fd-v-11',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'trộn',
    ko: '섞다',
    usage: 'Ví dụ: Trộn đều tất cả. (모두 골고루 섞습니다.)'
  },
  {
    id: 'fd-v-12',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'nướng',
    ko: '구우다, 굽다',
    usage: 'Ví dụ: Nướng đủ chín ăn. (충분히 구워서 먹습니다.)'
  },
  {
    id: 'fd-v-13',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'chiên',
    ko: '튀기다',
    usage: 'Ví dụ: Chiên lâu quá nóng. (너무 오래 튀우면 뜨거워집니다.)'
  },
  {
    id: 'fd-v-14',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'luộc',
    ko: '끓이다, 삶다',
    usage: 'Ví dụ: Luộc kỹ cho chín. (완전히 익을 때까지 끓입니다.)'
  },
  {
    id: 'fd-v-15',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'hấp',
    ko: '찌다, 쪄내다',
    usage: 'Ví dụ: Hấp nước sôi. (끓는 물에 찙니다.)'
  },
  {
    id: 'fd-v-16',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'xào',
    ko: '볶다',
    usage: 'Ví dụ: Xào nhanh để tươi. (신선하게 하려면 빨리 볶습니다.)'
  },
  {
    id: 'fd-v-17',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'nước',
    ko: '국물에 끓이다',
    usage: 'Ví dụ: Nước lã cơm. (밥 국물이 맛있습니다.)'
  },
  {
    id: 'fd-v-18',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'múc',
    ko: '떠 담다',
    usage: 'Ví dụ: Múc canh đầy. (수프를 가득 담습니다.)'
  },
  {
    id: 'fd-v-19',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'chia',
    ko: '나누다, 나눠 먹다',
    usage: 'Ví dụ: Chia sẻ thức ăn. (음식을 나눠 먹습니다.)'
  },
  {
    id: 'fd-v-20',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'nếm',
    ko: '맛보다, 시식하다',
    usage: 'Ví dụ: Nếm thử cà phê. (커피를 맛봅니다.)'
  },
  {
    id: 'fd-v-21',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'nhai',
    ko: '씹다',
    usage: 'Ví dụ: Nhai kỹ từng miếng. (한 입 한 입 잘 씹습니다.)'
  },
  {
    id: 'fd-v-22',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'nuốt',
    ko: '삼키다',
    usage: 'Ví dụ: Nuốt ngấm. (천천히 삼킵니다.)'
  },
  {
    id: 'fd-v-23',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'dùng',
    ko: '사용하다, 먹다, 마시다',
    usage: 'Ví dụ: Dùng từ từ. (천천히 사용합니다.)'
  },
  {
    id: 'fd-v-24',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'tính',
    ko: '계산하다',
    usage: 'Ví dụ: Tính lại giúp. (다시 계산해주세요.)'
  },
  {
    id: 'fd-v-25',
    topic: 'food',
    session: 1,
    type: 'verb',
    vi: 'trả',
    ko: '지불하다, 갚다',
    usage: 'Ví dụ: Trả bằng thẻ. (카드로 지불합니다.)'
  },

  // Session 2: Cooking methods and actions (25 items)
  {
    id: 'fd-v-26',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'nấu lâu',
    ko: '오래 요리하다',
    usage: 'Ví dụ: Nấu lâu sâu. (오래 깊이 있게 요리합니다.)'
  },
  {
    id: 'fd-v-27',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'nấu chín',
    ko: '완전히 익히다',
    usage: 'Ví dụ: Nấu chín tới lửa nhỏ. (작은 불에서 완전히 익힙니다.)'
  },
  {
    id: 'fd-v-28',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'nấu tái',
    ko: '덜 익히다 (고기 등)',
    usage: 'Ví dụ: Nấu tái vừa miệng. (입맛에 맞게 덜 익힙니다.)'
  },
  {
    id: 'fd-v-29',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'sôi',
    ko: '끓다',
    usage: 'Ví dụ: Sôi sùng sục. (보글보글 끓습니다.)'
  },
  {
    id: 'fd-v-30',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'giảm lửa',
    ko: '불을 줄이다',
    usage: 'Ví dụ: Giảm lửa nhỏ. (불을 작게 줄입니다.)'
  },
  {
    id: 'fd-v-31',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'tăng lửa',
    ko: '불을 높이다',
    usage: 'Ví dụ: Tăng lửa lớn. (불을 크게 높입니다.)'
  },
  {
    id: 'fd-v-32',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'khuấy',
    ko: '저으머, 젓다',
    usage: 'Ví dụ: Khuấy đều đặn. (골고루 젓습니다.)'
  },
  {
    id: 'fd-v-33',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'rút',
    ko: '꺼내다',
    usage: 'Ví dụ: Rút nhanh cẩn thận. (조심해서 빨리 꺼냅니다.)'
  },
  {
    id: 'fd-v-34',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'lắc',
    ko: '흔들다, 떨어서 섞다',
    usage: 'Ví dụ: Lắc liên tục. (계속 흔듭니다.)'
  },
  {
    id: 'fd-v-35',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'rây',
    ko: '체 치다, 체로 거르다',
    usage: 'Ví dụ: Rây mịn bột. (밀가루를 곱게 체칩니다.)'
  },
  {
    id: 'fd-v-36',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'ép',
    ko: '짜내다, 압착하다',
    usage: 'Ví dụ: Ép hết nước. (모든 즙을 짜냅니다.)'
  },
  {
    id: 'fd-v-37',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'giã',
    ko: '으깨다, 짓이기다',
    usage: 'Ví dụ: Giã thành bột. (가루처럼 으깹니다.)'
  },
  {
    id: 'fd-v-38',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'xát',
    ko: '비비다, 비틀다',
    usage: 'Ví dụ: Xát khô dừa. (코코넛을 마를 때까지 비빕니다.)'
  },
  {
    id: 'fd-v-39',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'ướp',
    ko: '절이다, 절임하다',
    usage: 'Ví dụ: Ướp thơm ngon. (향기롭게 절입니다.)'
  },
  {
    id: 'fd-v-40',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'nêm nước mắm',
    ko: '생선 소스로 간을 맞추다',
    usage: 'Ví dụ: Nêm nước mắm từ từ. (천천히 생선 소스로 간을 맞춥니다.)'
  },
  {
    id: 'fd-v-41',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'kết nối',
    ko: '연결하다, 합치다',
    usage: 'Ví dụ: Kết nối mọi vị. (모든 맛을 조화시킵니다.)'
  },
  {
    id: 'fd-v-42',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'chạm',
    ko: '접촉하다, 건드리다',
    usage: 'Ví dụ: Chạm nhẹ thôi. (살짝 건드립니다.)'
  },
  {
    id: 'fd-v-43',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'cắn',
    ko: '물어뜯다',
    usage: 'Ví dụ: Cắn một miếng nhỏ. (작은 한 입을 깨물습니다.)'
  },
  {
    id: 'fd-v-44',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'cuốn',
    ko: '말다, 감싸다',
    usage: 'Ví dụ: Cuốn chặt an toàn. (단단히 감싸서 안전합니다.)'
  },
  {
    id: 'fd-v-45',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'chọc',
    ko: '찌르다, 관통시키다',
    usage: 'Ví dụ: Chọc vào giữa. (중앙에 찌릅니다.)'
  },
  {
    id: 'fd-v-46',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'nấn',
    ko: '묻힐려고 하다, 지체하다',
    usage: 'Ví dụ: Nấn ăn thêm. (더 먹기를 망설입니다.)'
  },
  {
    id: 'fd-v-47',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'đặt xuống',
    ko: '내려놓다',
    usage: 'Ví dụ: Đặt xuống nhẹ nhàng. (조심스럽게 내려놓습니다.)'
  },
  {
    id: 'fd-v-48',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'lau',
    ko: '닦다',
    usage: 'Ví dụ: Lau sạch khô. (깨끗하고 건조하게 닦습니다.)'
  },
  {
    id: 'fd-v-49',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'rửa chén',
    ko: '그릇을 씻다',
    usage: 'Ví dụ: Rửa chén sạch. (그릇을 깨끗이 씻습니다.)'
  },
  {
    id: 'fd-v-50',
    topic: 'food',
    session: 2,
    type: 'verb',
    vi: 'dọn dẹp',
    ko: '정리하다, 치우다',
    usage: 'Ví dụ: Dọn dẹp sạch sẽ. (깨끗하고 정결하게 정리합니다.)'
  }
]
