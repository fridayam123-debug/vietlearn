import { AlphabetLetter, Tone } from '@/lib/types'

export const ALPHABET_CHARS = [
  'a','ă','â','b','c','d','đ','e','ê','g','h','i','k','l','m',
  'n','o','ô','ơ','p','q','r','s','t','u','ư','v','x','y'
]

export const TONE_NAMES = ['ngang','huyền','sắc','hỏi','ngã','nặng']

export const alphabet: AlphabetLetter[] = [
  { char: 'a',  pronunciationKo: '아 (짧고 밝게)',        mouthShape: '입을 크게 벌리고 혀를 평평하게',        example: 'ba',    exampleMeaning: '아빠' },
  { char: 'ă',  pronunciationKo: '아 (매우 짧게)',         mouthShape: '입을 반만 벌리고 짧게',               example: 'ăn',   exampleMeaning: '먹다' },
  { char: 'â',  pronunciationKo: '어 (짧게, 목 안쪽)',     mouthShape: '입을 살짝 벌리고 혀를 뒤로',          example: 'âm',   exampleMeaning: '소리' },
  { char: 'b',  pronunciationKo: '브 (영어 b와 동일)',      mouthShape: '입술을 붙였다가 떼기',               example: 'bạn',  exampleMeaning: '친구' },
  { char: 'c',  pronunciationKo: '끄 (단어 끝에서)',        mouthShape: '혀 뒤를 입천장에 붙이기',            example: 'con',  exampleMeaning: '아이/~마리' },
  { char: 'd',  pronunciationKo: '즈 (북부) / 이 (남부)',  mouthShape: '혀끝을 윗니 뒤에 대기',              example: 'dạy',  exampleMeaning: '가르치다' },
  { char: 'đ',  pronunciationKo: '드 (된소리)',            mouthShape: '혀끝을 윗니 뒤에 강하게 대기',        example: 'đi',   exampleMeaning: '가다' },
  { char: 'e',  pronunciationKo: '에 (입을 넓게)',          mouthShape: '입술을 양옆으로 벌리기',             example: 'em',   exampleMeaning: '동생/저' },
  { char: 'ê',  pronunciationKo: '에이 (입을 좁게)',        mouthShape: '입술을 약간만 벌리기',               example: 'kêu',  exampleMeaning: '부르다' },
  { char: 'g',  pronunciationKo: '그 (목구멍에서)',         mouthShape: '혀 뒤를 목구멍 쪽으로',             example: 'gà',   exampleMeaning: '닭' },
  { char: 'h',  pronunciationKo: '흐 (영어 h)',            mouthShape: '입을 살짝 벌리고 숨 내쉬기',         example: 'hoa',  exampleMeaning: '꽃' },
  { char: 'i',  pronunciationKo: '이 (짧게)',               mouthShape: '입술을 양옆으로 당기기',             example: 'im',   exampleMeaning: '조용하다' },
  { char: 'k',  pronunciationKo: '끄 (단어 앞)',            mouthShape: '혀 뒤를 입천장에 붙였다 떼기',       example: 'không', exampleMeaning: '아니다/없다' },
  { char: 'l',  pronunciationKo: '르 (혀를 굴려서)',        mouthShape: '혀끝을 윗니 뒤에 대고 옆으로 공기', example: 'làm',  exampleMeaning: '하다' },
  { char: 'm',  pronunciationKo: '므 (영어 m)',             mouthShape: '입술을 붙이고 코로 소리',            example: 'mẹ',   exampleMeaning: '엄마' },
  { char: 'n',  pronunciationKo: '느 (영어 n)',             mouthShape: '혀끝을 윗니 뒤에 대고 코로 소리',   example: 'nhà',  exampleMeaning: '집' },
  { char: 'o',  pronunciationKo: '오 (입을 둥글게)',         mouthShape: '입술을 둥글게 모으기',               example: 'ông',  exampleMeaning: '할아버지' },
  { char: 'ô',  pronunciationKo: '오 (더 둥글고 길게)',      mouthShape: '입술을 더 둥글고 앞으로 내밀기',     example: 'tôi',  exampleMeaning: '나/저' },
  { char: 'ơ',  pronunciationKo: '어 (입술 펴고)',           mouthShape: '입술 펴고 혀를 중간에',              example: 'ớt',   exampleMeaning: '고추' },
  { char: 'p',  pronunciationKo: '프 (단어 끝)',             mouthShape: '입술을 붙였다 세게 떼기',            example: 'phở',  exampleMeaning: '쌀국수' },
  { char: 'q',  pronunciationKo: '꿔 (qu-로 사용)',          mouthShape: '입술을 둥글게 하고 끄 발음',         example: 'quả',  exampleMeaning: '과일' },
  { char: 'r',  pronunciationKo: '르 (혀를 떨어서)',         mouthShape: '혀끝을 살짝 말아 올리기',            example: 'rau',  exampleMeaning: '채소' },
  { char: 's',  pronunciationKo: '스 (영어 s)',             mouthShape: '혀끝을 윗니 뒤에 가깝게',            example: 'sách', exampleMeaning: '책' },
  { char: 't',  pronunciationKo: '뜨 (된소리)',             mouthShape: '혀끝을 윗니에 강하게 대기',          example: 'tên',  exampleMeaning: '이름' },
  { char: 'u',  pronunciationKo: '우 (입술 둥글게)',         mouthShape: '입술을 앞으로 내밀기',               example: 'ủng',  exampleMeaning: '장화' },
  { char: 'ư',  pronunciationKo: '으 (입술 펴고)',           mouthShape: '입술 펴고 혀를 뒤로',               example: 'nước', exampleMeaning: '물' },
  { char: 'v',  pronunciationKo: '브 (윗니로 아랫입술)',     mouthShape: '윗니를 아랫입술에 살짝 대기',        example: 'vui',  exampleMeaning: '즐겁다' },
  { char: 'x',  pronunciationKo: '스 (s와 유사)',            mouthShape: '혀를 윗니 근처에',                  example: 'xe',   exampleMeaning: '차/자전거' },
  { char: 'y',  pronunciationKo: '이 (반모음)',              mouthShape: '입술 양옆으로 당기고 빠르게',        example: 'yêu',  exampleMeaning: '사랑하다' },
]

export const tones: Tone[] = [
  { name: 'ngang', mark: '(없음)', descriptionKo: '평탄조 — 높고 평탄하게',         example: 'bana',  exampleMeaning: '바나나' },
  { name: 'huyền', mark: '`',      descriptionKo: '하강조 — 낮고 길게 내려가며',    example: 'bà',    exampleMeaning: '할머니' },
  { name: 'sắc',   mark: '´',      descriptionKo: '상승조 — 높게 올라가며',         example: 'bá',    exampleMeaning: '아저씨' },
  { name: 'hỏi',   mark: '?̉',      descriptionKo: '강하강상조 — 내렸다가 올라가며', example: 'bả',    exampleMeaning: '독약' },
  { name: 'ngã',   mark: '~',      descriptionKo: '상승파열조 — 올라가다 끊어지며', example: 'bã',    exampleMeaning: '찌꺼기' },
  { name: 'nặng',  mark: '.',      descriptionKo: '하강파열조 — 낮고 짧게 끊어지며', example: 'bạn',   exampleMeaning: '친구' },
]
