'use client'
const SPECIAL_CHARS = [
  'à','á','â','ã','ă','ắ','ặ','ằ','ẳ','ẵ',
  'è','é','ê','ề','ế','ệ','ể','ễ',
  'ì','í','ị','ỉ','ĩ',
  'ò','ó','ô','õ','ơ','ớ','ợ','ờ','ở','ỡ',
  'ù','ú','ư','ứ','ự','ừ','ử','ữ',
  'ỳ','ý','ỵ','ỷ','ỹ','đ',
]

export function VietKeyboard({ onChar, onBackspace }: {
  onChar: (c: string) => void
  onBackspace: () => void
}) {
  return (
    <div className="bg-gray-100 rounded-xl p-3 mt-2">
      <p className="text-xs text-gray-500 mb-2 text-center">베트남어 특수문자</p>
      <div className="flex flex-wrap gap-1 justify-center">
        {SPECIAL_CHARS.map(c => (
          <button
            key={c}
            onClick={() => onChar(c)}
            className="w-9 h-9 bg-white rounded-lg text-sm font-medium shadow-sm hover:bg-red-50 active:scale-95 transition-all border border-gray-200"
          >
            {c}
          </button>
        ))}
        <button
          onClick={onBackspace}
          className="w-14 h-9 bg-red-100 rounded-lg text-sm font-medium shadow-sm hover:bg-red-200 active:scale-95 transition-all border border-red-200"
        >
          ⌫
        </button>
      </div>
    </div>
  )
}
