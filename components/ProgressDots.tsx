export function ProgressDots({ total, viewed }: { total: number; viewed: number }) {
  return (
    <div className="flex flex-col gap-2 w-full px-4">
      <div className="flex justify-between text-xs text-gray-500">
        <span>{viewed}/{total} 학습</span>
        <span>{Math.round((viewed / total) * 100)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(viewed / total) * 100}%` }}
        />
      </div>
      <div className="flex flex-wrap gap-1 mt-1">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i < viewed ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  )
}
