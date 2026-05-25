import { Conversation } from '@/lib/types'

export const conversations: Conversation[] = [
  // School (학교) - 5 conversations
  {
    id: 'school-conv-0',
    topic: 'school',
    index: 0,
    title: '선생님께 질문하기',
    lines: [
      { speaker: 'A', vi: 'Thưa cô, em không hiểu bài này.', ko: '선생님, 저는 이 수업을 이해하지 못합니다.' },
      { speaker: 'B', vi: 'Không sao, em có thể hỏi cô bất kỳ lúc nào.', ko: '괜찮습니다. 언제든지 저에게 물어볼 수 있습니다.' },
      { speaker: 'A', vi: 'Cảm ơn cô. Cô có thể giải thích lại được không?', ko: '감사합니다. 다시 설명해주실 수 있나요?' },
      { speaker: 'B', vi: 'Tất nhiên. Hãy ngồi xuống và tôi sẽ giúp em.', ko: '물론이죠. 앉아서 제가 도와드리겠습니다.' },
      { speaker: 'A', vi: 'Em hiểu rồi. Cảm ơn cô nhiều.', ko: '알겠습니다. 감사합니다.' }
    ]
  },
  {
    id: 'school-conv-1',
    topic: 'school',
    index: 1,
    title: '교실에서의 일상',
    lines: [
      { speaker: 'A', vi: 'Hôm nay chúng ta có bài kiểm tra không?', ko: '오늘 시험이 있나요?' },
      { speaker: 'B', vi: 'Có, bài kiểm tra bắt đầu lúc 9 giờ.', ko: '네, 시험은 9시에 시작합니다.' },
      { speaker: 'A', vi: 'Em chưa chuẩn bị kỹ lắm. Có khó không?', ko: '저는 많이 준비하지 못했습니다. 어렵나요?' },
      { speaker: 'B', vi: 'Nếu em học bài thì không khó đâu.', ko: '공부했다면 어렵지 않을 겁니다.' },
      { speaker: 'A', vi: 'Được, em sẽ cố gắng hết sức.', ko: '알겠습니다. 최선을 다하겠습니다.' }
    ]
  },
  {
    id: 'school-conv-2',
    topic: 'school',
    index: 2,
    title: '도서관에서의 대화',
    lines: [
      { speaker: 'A', vi: 'Xin lỗi, cuốn sách này còn không?', ko: '죄송하지만, 이 책이 남아있나요?' },
      { speaker: 'B', vi: 'Để tôi kiểm tra một chút. Tên sách là gì?', ko: '확인해드리겠습니다. 책의 제목이 뭐죠?' },
      { speaker: 'A', vi: 'Là "Lịch sử Việt Nam" của Lê Văn Hưu.', ko: '베트남 역사 책입니다.' },
      { speaker: 'B', vi: 'Vâng, cuốn sách này còn. Cần tôi giúp em tìm không?', ko: '네, 남아있습니다. 찾아드릴까요?' },
      { speaker: 'A', vi: 'Cảm ơn, ở kệ số 3 á?', ko: '감사합니다. 3번 선반에 있나요?' }
    ]
  },
  {
    id: 'school-conv-3',
    topic: 'school',
    index: 3,
    title: '방과 후 복습',
    lines: [
      { speaker: 'A', vi: 'Hôm nay có nhiều bài tập về nhà quá.', ko: '오늘 숙제가 너무 많네요.' },
      { speaker: 'B', vi: 'Phải, cô giao rất nhiều. Mấy tiếng em mới xong?', ko: '네, 많네요. 몇 시간 걸릴 것 같아요?' },
      { speaker: 'A', vi: 'Chắc 2-3 tiếng sẽ xong.', ko: '아마 2-3시간 걸릴 것 같습니다.' },
      { speaker: 'B', vi: 'Sau khi làm xong thì em chơi cùng em nha?', ko: '다 하고 나서 놀까요?' },
      { speaker: 'A', vi: 'Được, nhưng trước tiên em phải làm bài tập.', ko: '알겠습니다. 하지만 먼저 숙제를 해야 해요.' }
    ]
  },
  {
    id: 'school-conv-4',
    topic: 'school',
    index: 4,
    title: '시험 성적 받기',
    lines: [
      { speaker: 'A', vi: 'Em được bao nhiêu điểm ở bài kiểm tra?', ko: '시험 점수 몇 점이었어요?' },
      { speaker: 'B', vi: 'Em được 8.5 điểm. Còn em?', ko: '저는 8.5점을 받았어요. 당신은요?' },
      { speaker: 'A', vi: 'Em cũng được 8.5 điểm, khá tốt lắm.', ko: '저도 8.5점이었습니다. 꽤 좋네요.' },
      { speaker: 'B', vi: 'Phải, học tập chăm chỉ thì được kết quả tốt.', ko: '네, 열심히 공부하면 좋은 결과가 나와요.' },
      { speaker: 'A', vi: 'Thật vậy, em sẽ tiếp tục cố gắng.', ko: '맞아요. 저도 계속 노력하겠습니다.' }
    ]
  },

  // Food (음식) - 5 conversations
  {
    id: 'food-conv-0',
    topic: 'food',
    index: 0,
    title: '식당에서 주문하기',
    lines: [
      { speaker: 'A', vi: 'Em muốn ăn gì hôm nay?', ko: '오늘 뭐 먹고 싶어요?' },
      { speaker: 'B', vi: 'Em muốn ăn phở. Còn em thì sao?', ko: '저는 쌀국수 먹고 싶어요. 당신은요?' },
      { speaker: 'A', vi: 'Em cũng ăn phở. Chúng mình đi quán phở trên đường Tây.', ko: '저도 쌀국수 먹을 거예요. 서쪽 길에 있는 집 가죠.' },
      { speaker: 'B', vi: 'Tốt, quán đó có phở ngon lắm.', ko: '좋아요. 그 가게 쌀국수가 정말 맛있어요.' },
      { speaker: 'A', vi: 'Đi thôi, em đang rất đói.', ko: '어서 가요. 저 정말 배고파요.' }
    ]
  },
  {
    id: 'food-conv-1',
    topic: 'food',
    index: 1,
    title: '음식 주문',
    lines: [
      { speaker: 'A', vi: 'Chào, cho tôi một bát phở gà và một ly nước chanh.', ko: '안녕하세요. 닭 쌀국수 한 그릇과 레몬 물 한 잔 주세요.' },
      { speaker: 'B', vi: 'Vâng. Còn bà muốn ăn kèm gì nữa không?', ko: '네. 그 외에 뭐 더 드실래요?' },
      { speaker: 'A', vi: 'Cho thêm một dĩa gỏi cuốn nữa.', ko: '베트남식 라이스 페이퍼 롤 한 접시 더 주세요.' },
      { speaker: 'B', vi: 'Được. Bà ơi, tổng cộng là 120 nghìn đồng.', ko: '알겠습니다. 총 120,000동입니다.' },
      { speaker: 'A', vi: 'Vâng, đây là tiền. Cảm ơn.', ko: '네, 여기 돈입니다. 감사합니다.' }
    ]
  },
  {
    id: 'food-conv-2',
    topic: 'food',
    index: 2,
    title: '음식 선호도 묻기',
    lines: [
      { speaker: 'A', vi: 'Em thích ăn cay không?', ko: '맵고 자극적인 음식 좋아하세요?' },
      { speaker: 'B', vi: 'Ừ, em rất thích ăn cay.', ko: '네, 저 매운 음식 정말 좋아해요.' },
      { speaker: 'A', vi: 'Thế thì hôm nay chúng ta ăn mỳ cay?', ko: '그럼 오늘 매운 국수 먹을까요?' },
      { speaker: 'B', vi: 'Ý kiến hay. Nhưng không quá cay nhé.', ko: '좋은 생각이에요. 하지만 너무 맵지 않게 해주세요.' },
      { speaker: 'A', vi: 'Được rồi, chúng mình sẽ nói với cô quán.', ko: '알겠습니다. 가게 주인에게 말씀드리겠습니다.' }
    ]
  },
  {
    id: 'food-conv-3',
    topic: 'food',
    index: 3,
    title: '길거리 음식 사기',
    lines: [
      { speaker: 'A', vi: 'Chú ơi, cho em một cái bánh mì.', ko: '아저씨, 베트남식 샌드위치 하나 주세요.' },
      { speaker: 'B', vi: 'Em muốn thêm những gì? Thịt, pâté, rau?', ko: '뭘 더 넣어드릴까요? 고기, 간 소시지, 채소?' },
      { speaker: 'A', vi: 'Cho em thêm thịt, pâté và rau cải.', ko: '고기, 간 소시지, 배추 넣어주세요.' },
      { speaker: 'B', vi: 'Được, em muốn cay không?', ko: '알겠습니다. 매운맛으로 할까요?' },
      { speaker: 'A', vi: 'Ừ, cho cay một chút thôi. Bao nhiêu tiền?', ko: '네, 조금만 맵게 해주세요. 얼마예요?' }
    ]
  },
  {
    id: 'food-conv-4',
    topic: 'food',
    index: 4,
    title: '음식에 대한 의견 나누기',
    lines: [
      { speaker: 'A', vi: 'Cơm này ngon thực sự. Thứ gì làm cho nó ngon thế?', ko: '이 밥 정말 맛있네요. 뭐 때문에 이렇게 맛있어요?' },
      { speaker: 'B', vi: 'Tôi nấu với dầu vừng và gia vị truyền thống.', ko: '저는 참기름과 전통 향신료로 요리합니다.' },
      { speaker: 'A', vi: 'Em có thể dạy cho tôi cách nấu không?', ko: '저에게 요리 방법을 알려주실 수 있나요?' },
      { speaker: 'B', vi: 'Tất nhiên, tôi sẽ sướng lắm.', ko: '물론이죠. 저 기꺼이 해드리겠습니다.' },
      { speaker: 'A', vi: 'Cảm ơn, hôm nào chúng mình làm bài học nấu ăn nha.', ko: '감사합니다. 언제 요리를 배워봐요.' }
    ]
  },

  // Animals (동물) - 5 conversations
  {
    id: 'animals-conv-0',
    topic: 'animals',
    index: 0,
    title: '동물원 방문',
    lines: [
      { speaker: 'A', vi: 'Chào, chúng ta đã xem hết các loài vật ở đây rồi không?', ko: '안녕하세요. 여기 모든 동물을 다 봤어요?' },
      { speaker: 'B', vi: 'Chưa, chúng ta vừa mới tới khu gấu.', ko: '아뇨, 우리 곰 구역에만 갔어요.' },
      { speaker: 'A', vi: 'Cách đây được con voi to nhất. Nó rất ấn tượng.', ko: '여기 가장 큰 코끼리가 있어요. 정말 인상적이네요.' },
      { speaker: 'B', vi: 'Phải, tôi cũng rất thích xem nó.', ko: '네, 저도 보는 게 좋더라고요.' },
      { speaker: 'A', vi: 'Chúng ta đi xem những con hổ được không?', ko: '호랑이를 보러 갈까요?' }
    ]
  },
  {
    id: 'animals-conv-1',
    topic: 'animals',
    index: 1,
    title: '반려동물에 대해 말하기',
    lines: [
      { speaker: 'A', vi: 'Em có thú cưng không?', ko: '반려동물 있으세요?' },
      { speaker: 'B', vi: 'Có, em có một con chó tên là Milo.', ko: '네, 저 밀로라는 개를 키워요.' },
      { speaker: 'A', vi: 'Nó dễ thương. Nó bao nhiêu tuổi rồi?', ko: '귀엽네요. 몇 살이에요?' },
      { speaker: 'B', vi: 'Nó 3 tuổi rồi. Em rất yêu nó.', ko: '3살입니다. 정말 사랑해요.' },
      { speaker: 'A', vi: 'Tôi cũng muốn có một con chó như vậy.', ko: '저도 이런 개를 가지고 싶네요.' }
    ]
  },
  {
    id: 'animals-conv-2',
    topic: 'animals',
    index: 2,
    title: '동물 설명하기',
    lines: [
      { speaker: 'A', vi: 'Con vật này là gì?', ko: '이 동물 뭐예요?' },
      { speaker: 'B', vi: 'Đó là một con sư tử. Nó đến từ châu Phi.', ko: '그건 사자입니다. 아프리카에서 와요.' },
      { speaker: 'A', vi: 'Nó có vẻ rất hung dữ. Nó ăn gì?', ko: '보기에 매우 사나운데요. 뭘 먹어요?' },
      { speaker: 'B', vi: 'Nó ăn thịt. Nó là động vật ăn thịt.', ko: '고기를 먹어요. 육식동물이에요.' },
      { speaker: 'A', vi: 'Tôi không muốn đến gần nó quá.', ko: '너무 가까이 가고 싶지 않네요.' }
    ]
  },
  {
    id: 'animals-conv-3',
    topic: 'animals',
    index: 3,
    title: '야생동물에 대하여',
    lines: [
      { speaker: 'A', vi: 'Em từng nhìn thấy con cá sấu sống không?', ko: '살아있는 악어 본 적 있어요?' },
      { speaker: 'B', vi: 'Chưa bao giờ. Chúng sống ở đâu?', ko: '없어요. 어디에 살아요?' },
      { speaker: 'A', vi: 'Chúng sống ở các con sông lớn và ao.', ko: '큰 강과 호수에 살아요.' },
      { speaker: 'B', vi: 'Chúng nguy hiểm lắm, phải không?', ko: '정말 위험한데요, 그렇죠?' },
      { speaker: 'A', vi: 'Phải, tôi không muốn gặp chúng trong đại dương.', ko: '네, 저 바다에서 만나고 싶지 않아요.' }
    ]
  },
  {
    id: 'animals-conv-4',
    topic: 'animals',
    index: 4,
    title: '수의사 방문',
    lines: [
      { speaker: 'A', vi: 'Bác sĩ ơi, con mèo của em bị ốm rồi.', ko: '의사 선생님, 저 고양이가 아파요.' },
      { speaker: 'B', vi: 'Cho tôi xem một chút. Nó bị gì?', ko: '어디 보여주세요. 어디가 아파요?' },
      { speaker: 'A', vi: 'Nó không ăn gì từ hôm qua.', ko: '어제부터 밥을 안 먹어요.' },
      { speaker: 'B', vi: 'Tôi sẽ kiểm tra kỹ. Tôi cho nó một số loại thuốc.', ko: '자세히 확인해드리겠습니다. 약을 드리겠어요.' },
      { speaker: 'A', vi: 'Cảm ơn bác sĩ. Tôi hy vọng nó sẽ khỏe hơn.', ko: '감사합니다. 빨리 나을 거 같아요.' }
    ]
  },

  // Family (가족) - 5 conversations
  {
    id: 'family-conv-0',
    topic: 'family',
    index: 0,
    title: '가족 소개하기',
    lines: [
      { speaker: 'A', vi: 'Gia đình em có mấy người?', ko: '가족이 몇 명이에요?' },
      { speaker: 'B', vi: 'Gia đình tôi có 5 người: ba, mẹ, tôi, em trai và em gái.', ko: '우리 가족은 5명입니다: 아버지, 어머니, 저, 남동생, 여동생이에요.' },
      { speaker: 'A', vi: 'Gia đình em khá đông đủ đó. Ba mẹ em làm gì?', ko: '가족이 꽤 크네요. 부모님은 뭐 하세요?' },
      { speaker: 'B', vi: 'Ba tôi là kỹ sư, mẹ tôi là giáo viên.', ko: '아버지는 엔지니어이고 어머니는 선생님이에요.' },
      { speaker: 'A', vi: 'Thế thì gia đình em có ngành hàng khác nhau rồi.', ko: '그럼 가족이 여러 분야에서 일하네요.' }
    ]
  },
  {
    id: 'family-conv-1',
    topic: 'family',
    index: 1,
    title: '가족 행사',
    lines: [
      { speaker: 'A', vi: 'Hôm nay là sinh nhật bà em phải không?', ko: '오늘 할머니 생일이네요?' },
      { speaker: 'B', vi: 'Phải, chúng ta sẽ có bữa tiệc tối nay.', ko: '네, 오늘 밤에 파티가 있어요.' },
      { speaker: 'A', vi: 'Gia đình em sẽ làm gì?', ko: '가족이 뭐 할 거예요?' },
      { speaker: 'B', vi: 'Chúng tôi sẽ nấu những món ăn đặc biệt và ngoài.', ko: '우리 특별한 음식을 요리하고 생일 케이크를 먹을 거예요.' },
      { speaker: 'A', vi: 'Tuyệt vời! Tôi hy vọng bà em có những phút vui vẻ.', ko: '좋겠네요! 할머니가 행복하길 바랍니다.' }
    ]
  },
  {
    id: 'family-conv-2',
    topic: 'family',
    index: 2,
    title: '친척 방문',
    lines: [
      { speaker: 'A', vi: 'Tuần trước em đi chơi nhà bà ngoại rồi?', ko: '지난주에 할머니 집에 놀러 갔어요?' },
      { speaker: 'B', vi: 'Có, em đã đi. Bà ngoại em rất vui khi gặp tôi.', ko: '네, 갔어요. 할머니가 정말 기뻐하셨어요.' },
      { speaker: 'A', vi: 'Em ở đó bao lâu?', ko: '거기 얼마나 있었어요?' },
      { speaker: 'B', vi: 'Em ở đó 3 ngày. Chúng tôi cùng nấu ăn và chơi.', ko: '3일을 있었어요. 함께 요리하고 놀았어요.' },
      { speaker: 'A', vi: 'Thật vui vẻ nhỉ. Bà ngoại em khỏe không?', ko: '좋겠네요. 할머니는 건강해요?' }
    ]
  },
  {
    id: 'family-conv-3',
    topic: 'family',
    index: 3,
    title: '결혼에 대해 이야기하기',
    lines: [
      { speaker: 'A', vi: 'Anh em của em có lập gia đình chưa?', ko: '당신 형이 결혼했어요?' },
      { speaker: 'B', vi: 'Có, anh tôi lập gia đình rồi. Anh ấy có một con gái.', ko: '네, 결혼했어요. 딸이 하나 있어요.' },
      { speaker: 'A', vi: 'Khi nào anh em lấy vợ?', ko: '언제 결혼했어요?' },
      { speaker: 'B', vi: 'Anh tôi lấy vợ cách đây 2 năm.', ko: '2년 전에 결혼했어요.' },
      { speaker: 'A', vi: 'Chúc mừng anh em em. Gia đình anh em em hạnh phúc chứ?', ko: '축하합니다. 형은 행복해요?' }
    ]
  },
  {
    id: 'family-conv-4',
    topic: 'family',
    index: 4,
    title: '가족 문제에 대해 말하기',
    lines: [
      { speaker: 'A', vi: 'Em có rối nhiều không?', ko: '요즘 많이 바쁘세요?' },
      { speaker: 'B', vi: 'Có, em rất bận. Công việc ở nhà và công việc rất nhiều.', ko: '네, 정말 바빠요. 집일과 일이 많아요.' },
      { speaker: 'A', vi: 'Gia đình em có giúp em không?', ko: '가족이 도와줘요?' },
      { speaker: 'B', vi: 'Có, nhưng tôi vẫn cảm thấy mệt mỏi.', ko: '네, 하지만 여전히 피곤해요.' },
      { speaker: 'A', vi: 'Em nên nghỉ ngơi nhiều hơn.', ko: '더 많이 쉬세요.' }
    ]
  },

  // Daily (일상) - 5 conversations
  {
    id: 'daily-conv-0',
    topic: 'daily',
    index: 0,
    title: '아침 루틴',
    lines: [
      { speaker: 'A', vi: 'Em thức dậy lúc mấy giờ?', ko: '몇 시에 일어나요?' },
      { speaker: 'B', vi: 'Tôi thức dậy lúc 6 giờ sáng mỗi ngày.', ko: '저 매일 아침 6시에 일어나요.' },
      { speaker: 'A', vi: 'Sau đó em làm gì?', ko: '그 다음에 뭐 해요?' },
      { speaker: 'B', vi: 'Tôi gội mặt, đánh răng, ăn sáng, rồi đi làm.', ko: '씻고, 이를 닦고, 아침을 먹고 일을 가요.' },
      { speaker: 'A', vi: 'Thói quen rất tốt. Tôi cũng nên dậy sớm hơn.', ko: '좋은 습관이네요. 저도 더 일찍 일어나야겠어요.' }
    ]
  },
  {
    id: 'daily-conv-1',
    topic: 'daily',
    index: 1,
    title: '직장에서',
    lines: [
      { speaker: 'A', vi: 'Hôm nay công việc của em thế nào?', ko: '오늘 일은 어땠어요?' },
      { speaker: 'B', vi: 'Hôm nay là một ngày bận rộn. Tôi phải hoàn thành 3 dự án.', ko: '오늘은 바쁜 하루였어요. 3개 프로젝트를 마쳐야 했어요.' },
      { speaker: 'A', vi: 'Em có hoàn thành hết không?', ko: '다 마쳤어요?' },
      { speaker: 'B', vi: 'Tôi mới làm xong 2 cái. Cái thứ 3 tôi sẽ kết thúc ngày mai.', ko: '2개만 했어요. 3번째는 내일 마칠 거예요.' },
      { speaker: 'A', vi: 'Cố gắng nhé. Chắc em cũng mệt.', ko: '화이팅! 피곤하겠네요.' }
    ]
  },
  {
    id: 'daily-conv-2',
    topic: 'daily',
    index: 2,
    title: '저녁 계획',
    lines: [
      { speaker: 'A', vi: 'Tối nay em có kế hoạch gì?', ko: '오늘 저녁 뭐 할 거예요?' },
      { speaker: 'B', vi: 'Tôi sẽ nấu ăn, ăn cơm, rồi xem phim.', ko: '저 요리하고, 밥 먹고, 영화 볼 거예요.' },
      { speaker: 'A', vi: 'Phim gì thế?', ko: '무슨 영화예요?' },
      { speaker: 'B', vi: 'Một bộ phim tình cảm hay. Em có muốn xem cùng tôi không?', ko: '좋은 로맨스 영화예요. 함께 볼래요?' },
      { speaker: 'A', vi: 'Tất nhiên, rất sẵn lòng.', ko: '물론이죠. 기꺼이 갈게요.' }
    ]
  },
  {
    id: 'daily-conv-3',
    topic: 'daily',
    index: 3,
    title: '주말 계획',
    lines: [
      { speaker: 'A', vi: 'Tuần tới là cuối tuần rồi. Em có kế hoạch gì?', ko: '다음주는 주말이네요. 뭐할 거예요?' },
      { speaker: 'B', vi: 'Tôi muốn đi du lịch đến núi.', ko: '저는 산에 가고 싶어요.' },
      { speaker: 'A', vi: 'Tuyệt vời. Em sẽ mất bao lâu?', ko: '좋겠네요. 얼마나 갈 거예요?' },
      { speaker: 'B', vi: 'Khoảng 2 ngày. Em có muốn đi cùng tôi không?', ko: '2일 정도요. 함께 갈래요?' },
      { speaker: 'A', vi: 'Có, tôi thích. Khi nào chúng ta sẽ đi?', ko: '좋아요. 언제 떠나요?' }
    ]
  },
  {
    id: 'daily-conv-4',
    topic: 'daily',
    index: 4,
    title: '전화 통화',
    lines: [
      { speaker: 'A', vi: 'Xin chào, em khỏe không?', ko: '안녕하세요. 어떻게 지내세요?' },
      { speaker: 'B', vi: 'Tôi khỏe. Còn em?', ko: '저는 잘 있어요. 당신은?' },
      { speaker: 'A', vi: 'Tôi cũng khỏe. Em có bận không?', ko: '저도 괜찮아요. 바빠요?' },
      { speaker: 'B', vi: 'Không, tôi sắp có rảnh. Sao em gọi điện?', ko: '아뇨, 곧 시간이 날 거예요. 뭐 있어요?' },
      { speaker: 'A', vi: 'Tôi chỉ muốn nói chuyện với em.', ko: '그냥 당신과 얘기하고 싶었어요.' }
    ]
  },

  // Numbers/Time (숫자·시간) - 5 conversations
  {
    id: 'numbers-time-conv-0',
    topic: 'numbers-time',
    index: 0,
    title: '시간 알려주기',
    lines: [
      { speaker: 'A', vi: 'Xin lỗi, bây giờ mấy giờ?', ko: '죄송하지만 지금 몇 시예요?' },
      { speaker: 'B', vi: 'Bây giờ là 10 giờ 30 phút.', ko: '지금 10시 30분입니다.' },
      { speaker: 'A', vi: 'Cảm ơn. Bộ phim bắt đầu lúc mấy giờ?', ko: '감사합니다. 영화는 몇 시에 시작하나요?' },
      { speaker: 'B', vi: 'Bộ phim bắt đầu lúc 11 giờ.', ko: '영화는 11시에 시작합니다.' },
      { speaker: 'A', vi: 'Tốt, chúng ta sẽ kịp thời.', ko: '좋아요. 시간에 맞춰 갈 것 같아요.' }
    ]
  },
  {
    id: 'numbers-time-conv-1',
    topic: 'numbers-time',
    index: 1,
    title: '약속 잡기',
    lines: [
      { speaker: 'A', vi: 'Em muốn gặp tôi ngày nào?', ko: '언제 만날까요?' },
      { speaker: 'B', vi: 'Em muốn gặp tôi vào ngày thứ 5 tuần tới.', ko: '다음주 목요일 만날래요.' },
      { speaker: 'A', vi: 'Ngày thứ 5 có được. Lúc mấy giờ?', ko: '목요일 좋아요. 몇 시에요?' },
      { speaker: 'B', vi: 'Lúc 2 giờ chiều được không?', ko: '오후 2시는 어때요?' },
      { speaker: 'A', vi: 'Được, hẹn gặp em lúc 2 giờ chiều ngày thứ 5.', ko: '좋아요. 목요일 오후 2시에 만나요.' }
    ]
  },
  {
    id: 'numbers-time-conv-2',
    topic: 'numbers-time',
    index: 2,
    title: '돈을 세기',
    lines: [
      { speaker: 'A', vi: 'Cái áo này bao nhiêu tiền?', ko: '이 셔츠 얼마예요?' },
      { speaker: 'B', vi: 'Cái áo này 200 nghìn đồng.', ko: '이 셔츠는 200,000동입니다.' },
      { speaker: 'A', vi: 'Khá đắt. Em có bao nhiêu tiền?', ko: '꽤 비싸네요. 얼마나 할인해주실 수 있나요?' },
      { speaker: 'B', vi: 'Nếu em mua 2 cái, tôi giảm giá còn 350 nghìn.', ko: '2개 사시면 350,000동으로 해드려요.' },
      { speaker: 'A', vi: 'Tốt, tôi sẽ mua 2 cái.', ko: '좋아요. 2개 살게요.' }
    ]
  },
  {
    id: 'numbers-time-conv-3',
    topic: 'numbers-time',
    index: 3,
    title: '날짜 물어보기',
    lines: [
      { speaker: 'A', vi: 'Hôm nay là ngày bao nhiêu?', ko: '오늘이 며칠이죠?' },
      { speaker: 'B', vi: 'Hôm nay là ngày 25 tháng 5 năm 2026.', ko: '오늘은 2026년 5월 25일입니다.' },
      { speaker: 'A', vi: 'Cảm ơn. Em sinh nhật khi nào?', ko: '감사합니다. 당신 생일은 언제예요?' },
      { speaker: 'B', vi: 'Sinh nhật tôi là ngày 10 tháng 7.', ko: '저 생일은 7월 10일입니다.' },
      { speaker: 'A', vi: 'Sắp tới rồi. Tôi sẽ chuẩn bị quà cho em.', ko: '금방 오네요. 선물 준비할게요.' }
    ]
  },
  {
    id: 'numbers-time-conv-4',
    topic: 'numbers-time',
    index: 4,
    title: '일정 이야기하기',
    lines: [
      { speaker: 'A', vi: 'Em có bao nhiêu buổi họp hôm nay?', ko: '오늘 회의가 몇 개예요?' },
      { speaker: 'B', vi: 'Tôi có 3 buổi họp. Buổi đầu lúc 9 giờ, buổi thứ 2 lúc 11 giờ, buổi thứ 3 lúc 3 giờ chiều.', ko: '3개의 회의가 있어요. 첫 번째 9시, 두 번째 11시, 세 번째 오후 3시예요.' },
      { speaker: 'A', vi: 'Khá bận rộn nhỉ.', ko: '정말 바쁘네요.' },
      { speaker: 'B', vi: 'Phải. Nhưng sau buổi họp thứ 3 tôi sẽ rảnh.', ko: '네. 하지만 3번째 회의 후에는 시간이 날 거예요.' },
      { speaker: 'A', vi: 'Vậy thì chúng ta có thể gặp sau 4 giờ chiều.', ko: '그럼 오후 4시 이후에 만나요.' }
    ]
  },

  // Travel (여행) - 5 conversations
  {
    id: 'travel-conv-0',
    topic: 'travel',
    index: 0,
    title: '공항에서',
    lines: [
      { speaker: 'A', vi: 'Chào, em muốn kiểm tra hành lý không?', ko: '안녕하세요. 짐을 확인하시나요?' },
      { speaker: 'B', vi: 'Chào, vâng. Đây là hộ chiếu và vé của tôi.', ko: '네. 여권과 탑승권입니다.' },
      { speaker: 'A', vi: 'Cảm ơn. Em có kiểm tra an ninh chưa?', ko: '감사합니다. 보안 검사는 했나요?' },
      { speaker: 'B', vi: 'Rồi, tôi đã kiểm tra an ninh rồi.', ko: '네, 이미 했습니다.' },
      { speaker: 'A', vi: 'Tốt, cửa lên máy bay là cửa 5. Tạm biệt.', ko: '좋아요. 탑승구는 5번입니다. 안녕히 가세요.' }
    ]
  },
  {
    id: 'travel-conv-1',
    topic: 'travel',
    index: 1,
    title: '호텔 예약하기',
    lines: [
      { speaker: 'A', vi: 'Chào, em muốn giúp tôi đặt một phòng khách sạn không?', ko: '안녕하세요. 호텔방 예약 도와주실 수 있나요?' },
      { speaker: 'B', vi: 'Tất nhiên. Em muốn ở bao lâu?', ko: '물론이죠. 며칠 머물 거예요?' },
      { speaker: 'A', vi: 'Tôi muốn ở 3 đêm, từ ngày 28 đến 31 tháng 5.', ko: '3박을 원해요. 5월 28일부터 31일까지요.' },
      { speaker: 'B', vi: 'Được. Em muốn phòng đơn hay phòng đôi?', ko: '알겠습니다. 싱글룸을 원하세요 아니면 더블룸?' },
      { speaker: 'A', vi: 'Phòng đôi được. Bao nhiêu tiền một đêm?', ko: '더블룸으로 주세요. 하루에 얼마예요?' }
    ]
  },
  {
    id: 'travel-conv-2',
    topic: 'travel',
    index: 2,
    title: '길을 묻기',
    lines: [
      { speaker: 'A', vi: 'Xin lỗi, tôi đang tìm nhà thờ Đức Bà.', ko: '죄송하지만, 노트르담 성당을 찾고 있어요.' },
      { speaker: 'B', vi: 'Nhà thờ Đức Bà không xa đâu. Đi thẳng đó, rồi rẽ trái.', ko: '성당은 멀지 않아요. 쭉 가다가 왼쪽으로 꺾으세요.' },
      { speaker: 'A', vi: 'Khoảng bao xa?', ko: '얼마나 떨어져 있어요?' },
      { speaker: 'B', vi: 'Chừng 500 mét. Em sẽ nhìn thấy nó.', ko: '약 500미터 정도예요. 보일 거예요.' },
      { speaker: 'A', vi: 'Cảm ơn em rất nhiều.', ko: '감사합니다.' }
    ]
  },
  {
    id: 'travel-conv-3',
    topic: 'travel',
    index: 3,
    title: '관광 명소 방문',
    lines: [
      { speaker: 'A', vi: 'Em đã từng tới Hạ Long bay chưa?', ko: '할롱베이 가본 적 있어요?' },
      { speaker: 'B', vi: 'Có, tôi đã tới Hạ Long bay hôm trước.', ko: '네, 이전에 갔었어요.' },
      { speaker: 'A', vi: 'Đó là một vị trí tuyệt đẹp phải không?', ko: '정말 아름다운 곳이죠?' },
      { speaker: 'B', vi: 'Phải, tôi rất thích nó. Tôi đã đi du thuyền xung quanh.', ko: '네, 정말 좋아요. 배 투어를 했어요.' },
      { speaker: 'A', vi: 'Tôi cũng muốn đi lần sau.', ko: '저도 다음에 가고 싶어요.' }
    ]
  },
  {
    id: 'travel-conv-4',
    topic: 'travel',
    index: 4,
    title: '교통 수단',
    lines: [
      { speaker: 'A', vi: 'Em muốn đi máy bay hay tàu hỏa?', ko: '비행기로 갈래요 아니면 기차로?' },
      { speaker: 'B', vi: 'Tôi thích đi máy bay hơn. Nhanh hơn.', ko: '저는 비행기가 더 좋아요. 빠르거든요.' },
      { speaker: 'A', vi: 'Tôi cũng như vậy. Nhưng vé máy bay rất đắt.', ko: '저도 그래요. 하지만 비행기표가 비싸요.' },
      { speaker: 'B', vi: 'Phải, nhưng chúng ta sẽ tiết kiệm được thời gian.', ko: '네, 하지만 시간을 절약할 수 있어요.' },
      { speaker: 'A', vi: 'Được, chúng ta sẽ đi máy bay.', ko: '좋아요. 비행기로 가요.' }
    ]
  },

  // Cooking (요리) - 5 conversations
  {
    id: 'cooking-conv-0',
    topic: 'cooking',
    index: 0,
    title: '레시피 따라하기',
    lines: [
      { speaker: 'A', vi: 'Em có công thức nấu canh chua không?', ko: '신 탕 레시피 있어요?' },
      { speaker: 'B', vi: 'Có, em muốn nấu gì để thêm vào canh?', ko: '네, 뭘 넣고 싶어요?' },
      { speaker: 'A', vi: 'Em muốn nấu với cá, tôm, và rau.', ko: '생선, 새우, 야채를 넣고 싶어요.' },
      { speaker: 'B', vi: 'Tốt. Trước tiên, em nấu nước dùng. Khi nước nóng, em thêm cá và tôm.', ko: '좋아요. 먼저 국물을 끓이세요. 물이 끓으면 생선과 새우를 넣으세요.' },
      { speaker: 'A', vi: 'Khoảng bao lâu thì nấu xong?', ko: '얼마나 오래 해야 돼요?' }
    ]
  },
  {
    id: 'cooking-conv-1',
    topic: 'cooking',
    index: 1,
    title: '재료 사기',
    lines: [
      { speaker: 'A', vi: 'Tôi muốn nấu ăn hôm nay. Em biết ở đâu mua nguyên liệu không?', ko: '오늘 요리하고 싶은데. 재료 어디서 살 수 있어요?' },
      { speaker: 'B', vi: 'Em nên đi chợ. Có nhiều nguyên liệu ở đó.', ko: '시장에 가세요. 재료가 많아요.' },
      { speaker: 'A', vi: 'Cơm chiều này em sẽ nấu gì?', ko: '오늘 저녁은 뭘 요리할 거예요?' },
      { speaker: 'B', vi: 'Em muốn nấu thịt lợn với rau. Cần mua thịt lợn, rau bina, nước tương.', ko: '돼지고기와 채소를 요리할 거예요. 돼지고기, 시금치, 간장이 필요해요.' },
      { speaker: 'A', vi: 'Thế thì chúng ta đi chợ bây giờ.', ko: '그럼 지금 시장에 가요.' }
    ]
  },
  {
    id: 'cooking-conv-2',
    topic: 'cooking',
    index: 2,
    title: '요리 기법',
    lines: [
      { speaker: 'A', vi: 'Em nấu mì thế nào cho ngon?', ko: '국수를 어떻게 맛있게 요리해요?' },
      { speaker: 'B', vi: 'Trước tiên, em nấu nước. Khi nước sôi, em thêm mì.', ko: '먼저 물을 끓이세요. 물이 끓으면 국수를 넣으세요.' },
      { speaker: 'A', vi: 'Nấu bao lâu?', ko: '얼마나 오래 해요?' },
      { speaker: 'B', vi: 'Khoảng 3-5 phút. Khi mì mềm thì vớt ra.', ko: '3-5분 정도요. 국수가 부드러워지면 건져내세요.' },
      { speaker: 'A', vi: 'Cảm ơn. Em sẽ thử làm.', ko: '감사합니다. 해볼게요.' }
    ]
  },
  {
    id: 'cooking-conv-3',
    topic: 'cooking',
    index: 3,
    title: '식당 주방',
    lines: [
      { speaker: 'A', vi: 'Chào, em là nấu ăn chính phòng bếp phải không?', ko: '안녕하세요. 당신이 주방장이세요?' },
      { speaker: 'B', vi: 'Vâng, tôi là nấu ăn chính. Có gì em cần?', ko: '네, 저 주방장입니다. 뭐 필요해요?' },
      { speaker: 'A', vi: 'Tôi muốn biết công thức làm món cơm chiên đặc biệt của em.', ko: '당신 특별한 볶음밥 레시피를 알고 싶어요.' },
      { speaker: 'B', vi: 'Đó là bí mật của tôi. Nhưng tôi có thể cho em một vài gợi ý.', ko: '그건 제 비밀입니다. 하지만 몇 가지 팁을 드릴 수 있어요.' },
      { speaker: 'A', vi: 'Cảm ơn. Em sẽ có ơn lắm.', ko: '감사합니다. 정말 감사해요.' }
    ]
  },
  {
    id: 'cooking-conv-4',
    topic: 'cooking',
    index: 4,
    title: '음식 축제',
    lines: [
      { speaker: 'A', vi: 'Em có biết lễ hội ẩm thực nào gần đây không?', ko: '요즘 음식 축제 있어요?' },
      { speaker: 'B', vi: 'Có, tuần sau sẽ có lễ hội ẩm thực lớn.', ko: '네, 다음주에 큰 음식 축제가 있어요.' },
      { speaker: 'A', vi: 'Thực sự? Chúng ta có nên đi không?', ko: '정말요? 가볼까요?' },
      { speaker: 'B', vi: 'Chắc chắn. Sẽ có nhiều đồ ăn ngon.', ko: '물론이죠. 맛있는 음식이 많을 거예요.' },
      { speaker: 'A', vi: 'Tuyệt vời, chúng ta sẽ đi vào thứ 7.', ko: '좋아요. 토요일에 가요.' }
    ]
  },

  // Mart (마트) - 5 conversations
  {
    id: 'mart-conv-0',
    topic: 'mart',
    index: 0,
    title: '장바구니 리스트',
    lines: [
      { speaker: 'A', vi: 'Em có danh sách mua hàng không?', ko: '장바구니 리스트 있어요?' },
      { speaker: 'B', vi: 'Có. Em cần mua bánh, sữa, trứng, rau, và cá.', ko: '네. 빵, 우유, 계란, 야채, 생선이 필요해요.' },
      { speaker: 'A', vi: 'Rất đầy đủ. Chúng ta sẽ mua những thứ nào trước?', ko: '충분하네요. 뭐부터 살까요?' },
      { speaker: 'B', vi: 'Trước tiên hãy mua rau và cá, rồi đến bánh và sữa.', ko: '먼저 야채와 생선 사고, 그 다음 빵과 우유 사세요.' },
      { speaker: 'A', vi: 'Được, chúng ta bắt đầu nào.', ko: '알겠습니다. 시작해요.' }
    ]
  },
  {
    id: 'mart-conv-1',
    topic: 'mart',
    index: 1,
    title: '상품 찾아달라고 하기',
    lines: [
      { speaker: 'A', vi: 'Xin lỗi, em có biết ở đâu tôi có thể tìm mắm cá không?', ko: '죄송하지만, 생선 소스가 어디 있어요?' },
      { speaker: 'B', vi: 'Mắm cá ở khu anh gia vị, ở hàng 5.', ko: '생선 소스는 향신료 코너, 5번 열에 있어요.' },
      { speaker: 'A', vi: 'Cảm ơn. Em có biết ở đâu tôi có thể tìm nước mắm không?', ko: '감사합니다. 액젓이 어디 있어요?' },
      { speaker: 'B', vi: 'Nước mắm cũng ở hàng 5, gần với mắm cá.', ko: '액젓도 5번 열에 있어요. 생선 소스 근처예요.' },
      { speaker: 'A', vi: 'Tốt, cảm ơn em.', ko: '좋아요. 감사합니다.' }
    ]
  },
  {
    id: 'mart-conv-2',
    topic: 'mart',
    index: 2,
    title: '계산하기',
    lines: [
      { speaker: 'A', vi: 'Bao nhiêu tiền tất cả?', ko: '총 얼마예요?' },
      { speaker: 'B', vi: 'Tất cả là 500 nghìn đồng.', ko: '총 500,000동입니다.' },
      { speaker: 'A', vi: 'Bao nhiêu? Em có thể giảm giá không?', ko: '얼마요? 할인 가능해요?' },
      { speaker: 'B', vi: 'Nếu em mua quá 400 nghìn, tôi có thể giảm 10%.', ko: '400,000동 이상이면 10% 할인해드려요.' },
      { speaker: 'A', vi: 'Tốt. Tôi sẽ mua thêm một chút.', ko: '좋아요. 조금 더 살게요.' }
    ]
  },
  {
    id: 'mart-conv-3',
    topic: 'mart',
    index: 3,
    title: '가격 비교',
    lines: [
      { speaker: 'A', vi: 'Cái bánh này có khác nhau không?', ko: '이 빵들이 다른가요?' },
      { speaker: 'B', vi: 'Có. Cái bánh này 50 nghìn, cái bánh kia 60 nghìn.', ko: '네. 이건 50,000동, 저건 60,000동이에요.' },
      { speaker: 'A', vi: 'Sao có khác nhau vậy? Chúng giống nhau mà.', ko: '왜 달라요? 같아 보이는데요.' },
      { speaker: 'B', vi: 'Cái bánh kia có thêm hạt dẻ cười. Nên nó đắt hơn.', ko: '저 빵에는 견과류가 더 들어가 있어요. 그래서 비싸요.' },
      { speaker: 'A', vi: 'Tôi sẽ mua cái rẻ hơn.', ko: '저는 싼 것 살게요.' }
    ]
  },
  {
    id: 'mart-conv-4',
    topic: 'mart',
    index: 4,
    title: '고객 서비스',
    lines: [
      { speaker: 'A', vi: 'Xin lỗi, sản phẩm này hỏng rồi.', ko: '죄송하지만, 이 제품이 고장났어요.' },
      { speaker: 'B', vi: 'Tôi xin lỗi. Em có phiếu tính tiền không?', ko: '죄송합니다. 영수증 있으세요?' },
      { speaker: 'A', vi: 'Có, đây là phiếu tính tiền của em.', ko: '네, 여기 있어요.' },
      { speaker: 'B', vi: 'Được, chúng tôi sẽ thay sản phẩm mới cho em.', ko: '알겠습니다. 새 제품으로 바꿔드리겠습니다.' },
      { speaker: 'A', vi: 'Cảm ơn. Dịch vụ của em rất tốt.', ko: '감사합니다. 서비스가 정말 좋네요.' }
    ]
  },

  // Electronics (전자·철물) - 5 conversations
  {
    id: 'electronics-conv-0',
    topic: 'electronics',
    index: 0,
    title: '휴대폰 구매',
    lines: [
      { speaker: 'A', vi: 'Em muốn mua điện thoại di động. Em có thể giúp tôi không?', ko: '휴대폰을 사고 싶어요. 도와주실 수 있나요?' },
      { speaker: 'B', vi: 'Tất nhiên. Em tìm loại điện thoại nào?', ko: '물론이죠. 어떤 휴대폰을 찾으세요?' },
      { speaker: 'A', vi: 'Em muốn tìm một chiếc điện thoại thông minh với màn hình lớn.', ko: '큰 화면의 스마트폰을 원해요.' },
      { speaker: 'B', vi: 'Tôi có những mẫu tốt. Bộ bộ cấu hình mạnh, pin lâu.', ko: '좋은 모델들이 있어요. 성능이 좋고 배터리도 오래가요.' },
      { speaker: 'A', vi: 'Giá bao nhiêu?', ko: '가격은 얼마요?' }
    ]
  },
  {
    id: 'electronics-conv-1',
    topic: 'electronics',
    index: 1,
    title: '가전제품 고치기',
    lines: [
      { speaker: 'A', vi: 'Em ơi, cái máy rửa bát của tôi bị hỏng rồi.', ko: '제 식기 세척기가 고장났어요.' },
      { speaker: 'B', vi: 'Thực sự? Nó bị gì?', ko: '정말요? 뭐가 고장났어요?' },
      { speaker: 'A', vi: 'Nó không chạy. Em có biết ai sửa chữa máy rửa bát không?', ko: '작동하지 않아요. 고쳐주는 사람을 알아요?' },
      { speaker: 'B', vi: 'Có, em biết một kỹ thuật viên tốt. Em có thể gọi cho anh ta.', ko: '네, 좋은 기술자를 알아요. 전화할 수 있어요.' },
      { speaker: 'A', vi: 'Tốt, cảm ơn em.', ko: '좋아요. 감사합니다.' }
    ]
  },
  {
    id: 'electronics-conv-2',
    topic: 'electronics',
    index: 2,
    title: '철물점에서',
    lines: [
      { speaker: 'A', vi: 'Em muốn tìm một chiếc đinh lớn.', ko: '큰 못을 찾고 있어요.' },
      { speaker: 'B', vi: 'Chúng tôi có nhiều loại đinh. Em muốn loại nào?', ko: '여러 종류의 못이 있어요. 어떤 걸 원하세요?' },
      { speaker: 'A', vi: 'Em muốn những cái dài khoảng 10 cm.', ko: '약 10cm 길이의 못을 원해요.' },
      { speaker: 'B', vi: 'Được. Bao nhiêu cái?', ko: '알겠습니다. 몇 개 필요해요?' },
      { speaker: 'A', vi: 'Cho em 20 cái.', ko: '20개 주세요.' }
    ]
  },
  {
    id: 'electronics-conv-3',
    topic: 'electronics',
    index: 3,
    title: '기술 지원',
    lines: [
      { speaker: 'A', vi: 'Xin chào, tôi cần giúp đỡ kỹ thuật.', ko: '안녕하세요. 기술 지원이 필요해요.' },
      { speaker: 'B', vi: 'Vâng, tôi có thể giúp. Vấn đề là gì?', ko: '네, 도와드릴 수 있어요. 뭐가 문제예요?' },
      { speaker: 'A', vi: 'Tôi không thể kết nối wifi. Máy tính của tôi không tìm thấy mạng.', ko: '와이파이에 연결이 안 돼요. 컴퓨터가 네트워크를 찾지 못해요.' },
      { speaker: 'B', vi: 'Thử khởi động lại máy tính của em.', ko: '컴퓨터를 다시 시작해보세요.' },
      { speaker: 'A', vi: 'Được. Tôi sẽ thử.', ko: '알겠습니다. 해볼게요.' }
    ]
  },
  {
    id: 'electronics-conv-4',
    topic: 'electronics',
    index: 4,
    title: '설치하기',
    lines: [
      { speaker: 'A', vi: 'Em muốn cài đặt máy lạnh. Em có thể giúp?', ko: '에어컨 설치를 도와주실 수 있어요?' },
      { speaker: 'B', vi: 'Tất nhiên. Đây là một công việc phức tạp, nhưng tôi có kinh nghiệm.', ko: '물론이죠. 복잡한 일이지만 경험이 있어요.' },
      { speaker: 'A', vi: 'Bao lâu thì cài đặt xong?', ko: '얼마나 걸려요?' },
      { speaker: 'B', vi: 'Khoảng 2-3 tiếng sẽ xong.', ko: '2-3시간 정도 걸릴 거예요.' },
      { speaker: 'A', vi: 'Bao nhiêu tiền?', ko: '얼마요?' }
    ]
  },

  // Hotel (호텔) - 5 conversations
  {
    id: 'hotel-conv-0',
    topic: 'hotel',
    index: 0,
    title: '호텔 객실 예약',
    lines: [
      { speaker: 'A', vi: 'Chào, tôi muốn đặt một phòng.', ko: '안녕하세요. 객실을 예약하고 싶어요.' },
      { speaker: 'B', vi: 'Vâng, chào mừng. Em muốn ở bao lâu?', ko: '환영합니다. 며칠 머물 거예요?' },
      { speaker: 'A', vi: 'Tôi muốn ở 2 đêm.', ko: '2박을 원해요.' },
      { speaker: 'B', vi: 'Được. Em muốn phòng loại nào? Phòng đơn hay phòng đôi?', ko: '알겠습니다. 어떤 객실을 원하세요? 싱글룸이나 더블룸?' },
      { speaker: 'A', vi: 'Phòng đôi, vui lòng. Phòng nào tốt nhất?', ko: '더블룸으로 주세요. 어느 방이 가장 좋은가요?' }
    ]
  },
  {
    id: 'hotel-conv-1',
    topic: 'hotel',
    index: 1,
    title: '체크인',
    lines: [
      { speaker: 'A', vi: 'Chào, tôi đã đặt một phòng.', ko: '안녕하세요. 객실 예약을 했어요.' },
      { speaker: 'B', vi: 'Vâng, tên của em là gì?', ko: '네, 성함이 뭐예요?' },
      { speaker: 'A', vi: 'Tôi là John Smith.', ko: '저는 존 스미스입니다.' },
      { speaker: 'B', vi: 'Vâng, em đặt phòng 101. Em muốn phòng với view biển không?', ko: '네, 101호실입니다. 바다 전망이 있는 방을 원하세요?' },
      { speaker: 'A', vi: 'Vâng, nếu có thể. Khóa phòng ở đâu?', ko: '네, 가능하면요. 열쇠는요?' }
    ]
  },
  {
    id: 'hotel-conv-2',
    topic: 'hotel',
    index: 2,
    title: '룸 서비스',
    lines: [
      { speaker: 'A', vi: 'Xin chào, tôi muốn gọi dịch vụ phòng.', ko: '안녕하세요. 룸 서비스를 원해요.' },
      { speaker: 'B', vi: 'Chào, em muốn gì?', ko: '네, 뭐 필요하세요?' },
      { speaker: 'A', vi: 'Tôi muốn đặt hàng một cái bánh mì và một cốc cà phê.', ko: '빵과 커피 한 잔을 주문하고 싶어요.' },
      { speaker: 'B', vi: 'Được. Bao lâu em muốn nhận?', ko: '알겠습니다. 몇 시에 받고 싶으세요?' },
      { speaker: 'A', vi: 'Bây giờ, xin vui lòng. Tôi ở phòng 101.', ko: '지금 부탁합니다. 저 101호실에 있어요.' }
    ]
  },
  {
    id: 'hotel-conv-3',
    topic: 'hotel',
    index: 3,
    title: '불만 제기',
    lines: [
      { speaker: 'A', vi: 'Xin lỗi, tôi có một vấn đề với phòng.', ko: '죄송하지만, 객실에 문제가 있어요.' },
      { speaker: 'B', vi: 'Tôi xin lỗi. Vấn đề là gì?', ko: '죄송합니다. 뭐가 문제예요?' },
      { speaker: 'A', vi: 'Điều hòa không hoạt động. Nó rất nóng.', ko: '에어컨이 안 작동해요. 너무 더워요.' },
      { speaker: 'B', vi: 'Chúng tôi sẽ sửa chữa ngay. Tôi sẽ gửi một kỹ thuật viên.', ko: '바로 고쳐드리겠습니다. 기술자를 보내드릴게요.' },
      { speaker: 'A', vi: 'Cảm ơn. Bao lâu anh ta sẽ tới?', ko: '감사합니다. 몇 시에 올까요?' }
    ]
  },
  {
    id: 'hotel-conv-4',
    topic: 'hotel',
    index: 4,
    title: '체크아웃',
    lines: [
      { speaker: 'A', vi: 'Chào, tôi sắp rời khách sạn.', ko: '안녕하세요. 곧 체크아웃할 거예요.' },
      { speaker: 'B', vi: 'Vâng. Em phải rời vào lúc mấy giờ?', ko: '네. 몇 시에 떠나세요?' },
      { speaker: 'A', vi: 'Tôi sẽ rời vào 11 giờ sáng.', ko: '아침 11시에 떠나요.' },
      { speaker: 'B', vi: 'Được. Em muốn tôi gọi xe cho em không?', ko: '알겠습니다. 차를 불러드릴까요?' },
      { speaker: 'A', vi: 'Vâng, xin vui lòng. Và cảm ơn vì lưu trú tuyệt vời.', ko: '네, 부탁합니다. 좋은 숙박 감사합니다.' }
    ]
  },

  // Real Estate (부동산) - 5 conversations
  {
    id: 'real-estate-conv-0',
    topic: 'real-estate',
    index: 0,
    title: '부동산 중개소에서',
    lines: [
      { speaker: 'A', vi: 'Xin chào, tôi muốn thuê một căn hộ gần đây.', ko: '안녕하세요, 근처에 아파트를 임대하고 싶습니다.' },
      { speaker: 'B', vi: 'Vâng, anh/chị muốn bao nhiêu phòng ngủ?', ko: '네, 방이 몇 개 필요하세요?' },
      { speaker: 'A', vi: 'Tôi cần hai phòng ngủ, có ban công thì càng tốt.', ko: '침실 두 개가 필요하고, 발코니가 있으면 더 좋겠어요.' },
      { speaker: 'B', vi: 'Chúng tôi có một căn hộ phù hợp, tiền thuê 8 triệu một tháng.', ko: '마침 맞는 아파트가 있어요, 월세가 800만 동입니다.' },
      { speaker: 'A', vi: 'Được, tôi muốn xem căn hộ đó.', ko: '좋아요, 그 아파트를 보고 싶습니다.' }
    ]
  },
  {
    id: 'real-estate-conv-1',
    topic: 'real-estate',
    index: 1,
    title: '아파트 내부 둘러보기',
    lines: [
      { speaker: 'A', vi: 'Phòng khách rộng thế này, tôi rất thích.', ko: '거실이 이렇게 넓네요, 정말 마음에 들어요.' },
      { speaker: 'B', vi: 'Vâng, căn hộ này có diện tích 70 mét vuông.', ko: '네, 이 아파트는 면적이 70제곱미터예요.' },
      { speaker: 'A', vi: 'Hướng nhà là hướng nào? Có nhiều ánh sáng không?', ko: '집 방향이 어떻게 되나요? 채광이 좋나요?' },
      { speaker: 'B', vi: 'Hướng nam, nên ánh sáng rất tốt suốt cả ngày.', ko: '남향이라서 하루 종일 채광이 아주 좋습니다.' },
      { speaker: 'A', vi: 'Tuyệt vời! Tiền đặt cọc là bao nhiêu?', ko: '훌륭하네요! 보증금이 얼마인가요?' }
    ]
  },
  {
    id: 'real-estate-conv-2',
    topic: 'real-estate',
    index: 2,
    title: '계약 조건 협상',
    lines: [
      { speaker: 'A', vi: 'Hợp đồng thuê là bao nhiêu tháng?', ko: '임대 계약 기간이 몇 개월인가요?' },
      { speaker: 'B', vi: 'Thông thường là 12 tháng, nhưng có thể thương lượng.', ko: '보통 12개월이지만, 협상할 수 있습니다.' },
      { speaker: 'A', vi: 'Phí quản lý có bao gồm điện nước không?', ko: '관리비에 전기세와 수도세가 포함되나요?' },
      { speaker: 'B', vi: 'Không, điện và nước tính riêng theo chỉ số.', ko: '아니요, 전기와 수도는 사용량에 따라 별도로 계산됩니다.' },
      { speaker: 'A', vi: 'Vậy tôi có thể ký hợp đồng vào ngày mai không?', ko: '그럼 내일 계약서에 서명할 수 있을까요?' }
    ]
  },
  {
    id: 'real-estate-conv-3',
    topic: 'real-estate',
    index: 3,
    title: '이웃과의 첫 인사',
    lines: [
      { speaker: 'A', vi: 'Xin chào, tôi vừa chuyển đến ở căn hộ 502.', ko: '안녕하세요, 저 502호로 막 이사왔어요.' },
      { speaker: 'B', vi: 'Chào mừng đến khu chung cư! Tôi ở căn 501.', ko: '아파트에 오신 것을 환영해요! 저는 501호에 살아요.' },
      { speaker: 'A', vi: 'Khu này có yên tĩnh không? Tôi lo về tiếng ồn.', ko: '이 동네 조용한가요? 소음이 걱정돼서요.' },
      { speaker: 'B', vi: 'Khá yên tĩnh. Hàng xóm ở đây đều rất thân thiện.', ko: '꽤 조용해요. 이웃들이 모두 친절합니다.' },
      { speaker: 'A', vi: 'Thật tuyệt! Tôi rất vui khi được làm hàng xóm của bạn.', ko: '정말 좋네요! 이웃이 되어서 반가워요.' }
    ]
  },
  {
    id: 'real-estate-conv-4',
    topic: 'real-estate',
    index: 4,
    title: '이사 준비하기',
    lines: [
      { speaker: 'A', vi: 'Tôi cần thuê xe tải để chuyển đồ đạc.', ko: '짐을 옮기려면 트럭을 빌려야 해요.' },
      { speaker: 'B', vi: 'Bạn có nhiều đồ không? Tôi có thể giúp bạn.', ko: '짐이 많아요? 제가 도와드릴 수 있어요.' },
      { speaker: 'A', vi: 'Chủ yếu là đồ nội thất và đồ dùng gia đình.', ko: '주로 가구와 생활용품이에요.' },
      { speaker: 'B', vi: 'Trước khi chuyển, bạn nên vệ sinh căn hộ mới.', ko: '이사하기 전에 새 아파트를 청소하는 게 좋아요.' },
      { speaker: 'A', vi: 'Đúng rồi! Tôi sẽ dọn dẹp trước khi mang đồ vào.', ko: '맞아요! 짐을 들이기 전에 먼저 청소할게요.' }
    ]
  }
]
